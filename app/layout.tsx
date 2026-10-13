import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import { CookieNotice } from "@/components/CookieNotice";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Nav } from "@/components/Nav";
import { Tracking } from "@/components/Tracking";
import { PAGES, SITE_URL } from "@/lib/content";
import { developerLd, orgLd, projectLd, websiteLd } from "@/lib/schema";
import "./globals.css";

const fraunces = localFont({
  src: "../fonts/fraunces-latin.woff2",
  variable: "--font-fraunces",
  display: "swap",
  weight: "500 600",
});

const inter = localFont({
  src: "../fonts/inter-latin.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "400 600",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: PAGES.home.title, template: "%s" },
  description: PAGES.home.description,
  openGraph: {
    type: "website",
    siteName: "Navera at Mayfield Village",
    locale: "en_CA",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  verification: {
    google: "[GSC_VERIFICATION]",
    other: { "msvalidate.01": "[BING_VERIFICATION]" },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-CA" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="bg-surface font-sans text-text-primary antialiased">
        <JsonLd data={[websiteLd, orgLd, projectLd, developerLd]} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-surface focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <Tracking />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <CookieNotice />
      </body>
    </html>
  );
}
