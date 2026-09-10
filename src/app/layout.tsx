import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const SITE_URL = "https://www.ag-solar.net";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "AG Solar GmbH | Photovoltaik, Batteriespeicher & Wallboxen in der Grafschaft, Ahr & Rhein",
    template: "%s | AG Solar GmbH",
  },
  description:
    "AG Solar GmbH aus Grafschaft – Ihr regionaler Experte für Photovoltaikanlagen, Batteriespeicher (BYD), Wallboxen (KOSTAL) und Energiemanagement für Privathaushalte und Unternehmen in Ahr, Rhein, Eifel und Köln-Bonn.",
  keywords: [
    "Photovoltaik Grafschaft",
    "Solaranlage Ahr",
    "Solaranlage Rhein",
    "Photovoltaik Bad Neuenahr",
    "Solaranlage Bonn",
    "Batteriespeicher BYD",
    "Wallbox KOSTAL",
    "Photovoltaik Eifel",
    "Solaranlage Koblenz",
    "AG Solar GmbH",
    "Solarteur Grafschaft",
    "PV-Anlage Privat",
    "Gewerbe Photovoltaik",
    "Energiewende",
  ],
  authors: [{ name: "AG Solar GmbH", url: SITE_URL }],
  creator: "AG Solar GmbH",
  publisher: "AG Solar GmbH",
  applicationName: "AG Solar GmbH",
  category: "Solaranlagen",
  alternates: {
    canonical: SITE_URL,
    languages: {
      "de-DE": SITE_URL,
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: SITE_URL,
    siteName: "AG Solar GmbH",
    title: "AG Solar GmbH | Photovoltaik, Batteriespeicher & Wallboxen",
    description:
      "Ihr Solar-Partner in der Grafschaft, Ahr und Rhein. Maßgeschneiderte Photovoltaikanlagen, Batteriespeicher und Wallboxen vom regionalen Meisterbetrieb.",
    images: [
      {
        url: "/logo_transparent.png",
        width: 1200,
        height: 630,
        alt: "AG Solar GmbH Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AG Solar GmbH | Photovoltaik in der Grafschaft",
    description:
      "Photovoltaik, Batteriespeicher und Wallboxen vom regionalen Meisterbetrieb in Grafschaft.",
    images: ["/logo_transparent.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/logo_transparent.png", type: "image/png" },
    ],
    shortcut: ["/logo_transparent.png"],
    apple: [{ url: "/logo_transparent.png" }],
  },
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0f172a",
  colorScheme: "light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}#organization`,
  name: "AG Solar GmbH",
  image: `${SITE_URL}/logo_transparent.png`,
  logo: `${SITE_URL}/logo_transparent.png`,
  url: SITE_URL,
  telephone: "+49 2641 9029358",
  email: "info@ag-solar.net",
  priceRange: "€€",
  description:
    "Photovoltaik, Batteriespeicher und Wallboxen für Privat und Gewerbe in der Grafschaft, Ahr und Rhein.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Johannes Häbler Straße 21a",
    postalCode: "53501",
    addressLocality: "Grafschaft",
    addressRegion: "Rheinland-Pfalz",
    addressCountry: "DE",
  },
  areaServed: [
    "Grafschaft",
    "Ahr",
    "Rhein",
    "Eifel",
    "Bonn",
    "Köln",
    "Koblenz",
    "Bad Neuenahr-Ahrweiler",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Matomo Analytics, selbst gehostet auf matomo.praesenzwert.de.
            disableCookies() macht das Tracking cookie-los (TTDSG §25 greift
            nur bei Zugriff auf Endgeraete-Speicher) - dadurch ist kein
            Consent-Banner noetig. IP-Anonymisierung ist serverseitig aktiv. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){
if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') return;
var _paq = window._paq = window._paq || [];
_paq.push(['disableCookies']);
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
  var u="https://matomo.praesenzwert.de/";
  _paq.push(['setTrackerUrl', u+'matomo.php']);
  _paq.push(['setSiteId', '3']);
  var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
  g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
})();
})();`,
          }}
        />
      </head>
      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
