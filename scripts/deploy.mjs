// Deploys the static export in `out/` to Strato via SFTP.
// Credentials/host are read from CLI env so they are not committed.
//
// Usage (PowerShell):
//   $env:SFTP_HOST="..."; $env:SFTP_USER="..."; $env:SFTP_PASS="..."; node scripts/deploy.mjs

import SftpClient from "ssh2-sftp-client";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const localDir = path.join(projectRoot, "out");

const HOST = process.env.SFTP_HOST;
const PORT = Number(process.env.SFTP_PORT || 22);
const USER = process.env.SFTP_USER;
const PASS = process.env.SFTP_PASS;
const REMOTE_DIR = process.env.SFTP_REMOTE_DIR || "/ag-solar.net";

if (!HOST || !USER || !PASS) {
  console.error("Missing SFTP_HOST / SFTP_USER / SFTP_PASS env variables.");
  process.exit(1);
}

// Items at the remote root we must NEVER delete (just in case).
const PROTECTED = new Set([".", "..", ".well-known", ".htpasswd"]);

const client = new SftpClient();

async function rmrf(remote) {
  const list = await client.list(remote);
  for (const item of list) {
    if (PROTECTED.has(item.name)) continue;
    const full = `${remote}/${item.name}`;
    if (item.type === "d") {
      await rmrf(full);
      try {
        await client.rmdir(full, false);
      } catch (e) {
        console.warn(`rmdir failed for ${full}:`, e.message);
      }
    } else {
      try {
        await client.delete(full);
      } catch (e) {
        console.warn(`delete failed for ${full}:`, e.message);
      }
    }
  }
}

async function main() {
  console.log(`Connecting to ${USER}@${HOST}:${PORT} ...`);
  await client.connect({
    host: HOST,
    port: PORT,
    username: USER,
    password: PASS,
    readyTimeout: 30000,
  });

  console.log(`Ensuring remote dir ${REMOTE_DIR} exists ...`);
  const exists = await client.exists(REMOTE_DIR);
  if (!exists) {
    await client.mkdir(REMOTE_DIR, true);
  }

  console.log(`Cleaning remote dir ${REMOTE_DIR} (keeping protected entries) ...`);
  await rmrf(REMOTE_DIR);

  console.log(`Uploading ${localDir} -> ${REMOTE_DIR} ...`);
  await client.uploadDir(localDir, REMOTE_DIR);

  console.log("Deployment complete.");
  await client.end();
}

main().catch(async (err) => {
  console.error("Deployment failed:", err);
  try {
    await client.end();
  } catch {}
  process.exit(1);
});
