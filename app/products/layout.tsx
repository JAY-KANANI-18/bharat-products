import type { Metadata } from "next";
import React from "react";
import { products as productList } from "../../src/data/products";

export const metadata: Metadata = {
  title: "Products | Bharat Products",
  description:
    "Explore precision-engineered products: brass turned parts, stainless steel parts, aluminium parts, automotive parts, copper and forged components.",
  alternates: { canonical: "/products" },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bharatprod.com";
  const itemList = productList.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `${siteUrl}/products/${p.id}`,
    name: p.title,
  }));

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: `${siteUrl}/`,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Products",
                item: `${siteUrl}/products`,
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: itemList,
          }),
        }}
      />
      {children}
    </>
  );
}
