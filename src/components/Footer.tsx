"use client";

import { useState } from "react";
import Image from "next/image";
import LegalModal from "./LegalModal";

export default function Footer() {
  const [openModal, setOpenModal] = useState<"impressum" | "datenschutz" | null>(null);

  const closeModal = () => setOpenModal(null);

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="relative w-48 h-16 overflow-hidden rounded-2xl">
              <Image
                src="/logo_transparent.png"
                alt="AG Solar GmbH Logo"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-white">
              AG Solar GmbH
            </h3>
          </div>
          <p className="text-slate-400 mb-4">
            Ihr zuverlässiger Partner für Photovoltaik, Batteriespeicher und Wallboxen in der Grafschaft, Ahr und Rhein.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-bold text-white mb-4">Kontakt</h4>
          <ul className="space-y-2 text-slate-400">
            <li>Johannes Häblerstraße 21a</li>
            <li>53501 Grafschaft</li>
            <li>
              Telefon:{" "}
              <a
                href="tel:+4926419029358"
                className="text-slate-300 hover:text-green-500 transition-colors"
              >
                02641 / 90 29 358
              </a>
            </li>
            <li>
              E-Mail:{" "}
              <a
                href="mailto:info@ag-solar.net"
                className="text-slate-300 hover:text-green-500 transition-colors break-all"
              >
                info@ag-solar.net
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold text-white mb-4">Rechtliches</h4>
          <ul className="space-y-2 text-slate-400">
            <li>
              <button
                type="button"
                onClick={() => setOpenModal("impressum")}
                className="underline-offset-4"
              >
                Impressum
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => setOpenModal("datenschutz")}
                className="underline-offset-4"
              >
                Datenschutz
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-12 pt-8 border-t border-slate-800 text-center text-slate-500">
        <p>&copy; {new Date().getFullYear()} AG Solar GmbH. Alle Rechte vorbehalten.</p>
      </div>

      {/* Impressum Modal */}
      <LegalModal
        title="Impressum"
        isOpen={openModal === "impressum"}
        onClose={closeModal}
      >
        <section>
          <h3 className="font-semibold text-slate-900 mb-1">Angaben gemäß § 5 TMG</h3>
          <p>AG Solar GmbH</p>
          <p>Johannes Häblerstraße 21a</p>
          <p>53501 Grafschaft</p>
        </section>

        <section>
          <h3 className="font-semibold text-slate-900 mb-1">Handelsregister</h3>
          <p>Registergericht: Amtsgericht Koblenz</p>
          <p>Handelsregister: HRB 28213</p>
        </section>

        <section>
          <h3 className="font-semibold text-slate-900 mb-1">Vertreten durch</h3>
          <p>Geschäftsführer: Andreas Radermacher, Guido Gehrmann</p>
        </section>

        <section>
          <h3 className="font-semibold text-slate-900 mb-1">Kontakt</h3>
          <p>Telefon: +49 (0) 2641 90 29 358</p>
          <p>E-Mail: info@ag-solar.net</p>
        </section>

        <section>
          <h3 className="font-semibold text-slate-900 mb-1">Bild- und Videonachweise</h3>
          <p className="text-slate-700 text-sm">
            Das Hintergrundvideo der Startseite basiert auf einem Video von Pixabay
            (https://pixabay.com/de/videos/sonnenenergie-sonnenlicht-sonne-156444/). Das Foto mit
            Ahrtal-Motiv stammt von Unsplash (https://unsplash.com/de/fotos/ackerland-gegenuber-dem-weissen-haus-NM1Etzzc6kk).
            Die Medien werden lokal auf unserem Webserver gespeichert und bereitgestellt.
          </p>
        </section>
      </LegalModal>

      {/* Datenschutz Modal (Kurzfassung) */}
      <LegalModal
        title="Datenschutzerklärung"
        isOpen={openModal === "datenschutz"}
        onClose={closeModal}
      >
        <section>
          <h3 className="font-semibold text-slate-900 mb-1">1. Verantwortlicher</h3>
          <p>AG Solar GmbH, Johannes Häblerstraße 21a, 53501 Grafschaft</p>
          <p>Telefon: +49 (0) 2641 90 29 358, E-Mail: info@ag-solar.net</p>
        </section>

        <section>
          <h3 className="font-semibold text-slate-900 mb-1">2. Allgemeine Hinweise</h3>
          <p>
            Wir nehmen den Schutz Ihrer personenbezogenen Daten sehr ernst. Personenbezogene Daten
            sind alle Daten, mit denen Sie persönlich identifiziert werden können. Die nachfolgenden
            Hinweise geben einen Überblick darüber, welche Daten wir auf dieser Website erheben und
            wofür wir sie nutzen.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-slate-900 mb-1">3. Datenerfassung auf dieser Website</h3>
          <p>
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen, z. B. im
            Kontaktformular. Weitere Daten (z. B. IP-Adresse, Browser, Uhrzeit des Seitenaufrufs)
            werden beim Besuch der Website automatisch durch unsere IT-Systeme erfasst. Diese
            Verarbeitung erfolgt zur sicheren und fehlerfreien Bereitstellung der Website.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-slate-900 mb-1">4. Hosting bei Strato</h3>
          <p>
            Unsere Website wird bei der Strato AG, Pascalstraße 10, 10587 Berlin, gehostet. Beim
            Aufruf der Seiten werden Logfiles (u. a. IP-Adresse, Datum und Uhrzeit des Abrufs)
            gespeichert. Die Nutzung von Strato erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
            (berechtigtes Interesse an einer sicheren und zuverlässigen Bereitstellung der Website).
            Weitere Informationen finden Sie in der Datenschutzerklärung von Strato unter
            https://www.strato.de/datenschutz/.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-slate-900 mb-1">5. Ihre Rechte</h3>
          <p>
            Sie haben im Rahmen der gesetzlichen Bestimmungen jederzeit das Recht auf Auskunft über
            Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten sowie ggf.
            ein Recht auf Berichtigung, Löschung oder Einschränkung der Verarbeitung dieser Daten.
            Außerdem steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-slate-900 mb-1">6. SSL-/TLS-Verschlüsselung</h3>
          <p>
            Diese Website nutzt aus Sicherheitsgründen eine SSL-/TLS-Verschlüsselung. Eine
            verschlüsselte Verbindung erkennen Sie an dem Schloss-Symbol in der Adresszeile Ihres
            Browsers und daran, dass die Adresszeile von "http://" auf "https://" wechselt.
          </p>
        </section>
      </LegalModal>
    </footer>
  );
}
