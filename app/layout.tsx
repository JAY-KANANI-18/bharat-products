import type { Metadata } from "next";
import type { Viewport } from "next";
import React from "react";
import { Roboto } from "next/font/google";
import "../src/globals.css";
import { ScrollToTop } from "../src/components/ScrollToTop";
import { TopBar } from "../src/sections/TopBar";
import { Footer } from "../src/sections/Footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bharatprod.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bharat Products",
    template: "%s | Bharat Products",
  },
  description:
    "Bharat Products is an ISO 9001:2015 certified precision engineering partner delivering high‑tolerance brass, stainless steel, aluminium and forged components.",
  applicationName: "Bharat Products",
  keywords: [
    "Bharat Products",
    "precision components",
    "CNC machining",
    "brass turned parts",
    "stainless steel parts",
    "aluminium parts",
    "forged components",
    "India manufacturer",
  ],
  authors: [{ name: "Bharat Products" }],
  creator: "Bharat Products",
  publisher: "Bharat Products",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Bharat Products",
    siteName: "Bharat Products",
    description:
      "ISO 9001:2015 certified precision partner for brass, stainless steel, aluminium and forged components.",
    images: [
      {
        url: "/images/Final-Logo/SVG/White-BG-Favicon.svg",
        width: 512,
        height: 512,
        alt: "Bharat Products Logo",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bharat Products",
    description:
      "Precision engineered components: brass, stainless steel, aluminium and forged parts.",
    images: ["/images/Final-Logo/SVG/White-BG-Favicon.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/images/Final-Logo/SVG/White-BG-Favicon.svg",
    apple: "/images/Final-Logo/SVG/White-Favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f59e0b",
  colorScheme: "light",
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} text-foreground/70 text-sm not-italic normal-nums font-normal accent-auto bg-fixed bg-white bg-no-repeat bg-cover box-border caret-transparent block tracking-[normal] leading-[21px] list-outside list-disc min-h-[1000px] pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-roboto md:text-base md:leading-6 pt-16 md:pt-20`}
      >
        {/* Organization & WebSite JSON-LD */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Bharat Products",
              url: siteUrl,
              logo: `${siteUrl}/images/Final-Logo/SVG/White-BG-Favicon.svg`,
            }),
          }}
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Bharat Products",
              url: siteUrl,
              potentialAction: {
                "@type": "SearchAction",
                target: `${siteUrl}/products?query={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <TopBar />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
