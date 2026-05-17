import type { Metadata, Viewport } from "next";
import SmoothScrollProvider from "@/components/providers/smooth-scroll";
import { Sora } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/bits/Header";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap", // ← Prevents font flash & improves CLS score
});

// ✅ Viewport export (Next.js 14+ separates this from metadata)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: "Shema Cleaning Servies | Luxury Property Maintenance & Fine Cleaning",
  description: "Bespoke structural maintenance and cleaning services for architectural masterworks and high-end residential interiors.",
  metadataBase: new URL("https://shemacleaning.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Shema Cleaning Services | Shema Cleaning Matrix",
    description: "Premium property curation via spatial hygiene orchestration.",
    url: "https://shemacleaning.com",
    siteName: "Shema Cleaning Services",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Local SEO Architectural Schema definition for localized visibility performance
  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Shema Cleaning Services",
    "image": "https://shema.com/assets/og-hero.jpg",
    "url": "https://auracleaning.com",
    "telephone": "07346459922",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "100 Architectural Vista Suite",
      "addressLocality": "Metropolis",
      "addressRegion": "Manchester",
      "postalCode": "10001",
      "addressCountry": "UK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.7128,
      "longitude": -74.0060
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "05:00",
      "closes": "23:59"
    }
  };

  return (
    <html lang="en" className={`${sora.variable} dark bg-obsidian antialiased overflow-x-hidden`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
        />
      </head>
      <body>
        <SmoothScrollProvider>
          <Header />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}