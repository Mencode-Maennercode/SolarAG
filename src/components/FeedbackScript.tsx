"use client";

import Script from "next/script";

export default function FeedbackScript() {
  return (
    <Script
      src="/pw-feedback.umd.js"
      strategy="afterInteractive"
      onLoad={() => {
        if (typeof window !== "undefined" && (window as any).PWFeedback) {
          (window as any).PWFeedback.init({ projectId: "ag-solar-website" });
        }
      }}
    />
  );
}
