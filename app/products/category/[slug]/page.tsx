import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { TopBar } from "../../../../src/sections/TopBar";
import { Footer } from "../../../../src/sections/Footer";
import { AnimatedSection } from "../../../about/components/AnimatedSection";
import {
  categoryFromSlug,
  getProductsByCategorySlug,
  specialCategoryGroups,
  allCategories,
  categorySlug,
} from "../../../../src/data/products";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bharatprod.com";

interface CategoryPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  const categories = allCategories().map((c) => categorySlug(c));
  const groups = Object.keys(specialCategoryGroups);
  const set = new Set<string>([...categories, ...groups]);
  return Array.from(set).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: CategoryPageProps): Metadata {
  const name = categoryFromSlug(params.slug) || params.slug.replace(/-/g, " ");
  const url = `${siteUrl}/products/category/${params.slug}`;
  const items = getProductsByCategorySlug(params.slug);
  const ogImage = items[0]?.image || "/Final-Logo/1x/White BG Favicon.png";
  return {
    title: `${name} | Product Category`,
    description: `Browse ${name} from Bharat Products. Precision‑engineered components with inquiry options and details.`,
    alternates: {
      canonical: `/products/category/${params.slug}`,
    },
    openGraph: {
      url,
      title: `${name} | Bharat Products`,
      description: `Explore ${name} products and sub‑categories.`,
      images: [
        { url: ogImage, width: 1200, height: 630, alt: `${name} products` },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${name} | Bharat Products`,
      description: `Explore ${name} products and sub‑categories.`,
      images: [ogImage],
    },
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const categoryName = categoryFromSlug(params.slug);
  const items = getProductsByCategorySlug(params.slug);
  const groups = (specialCategoryGroups as Record<string, any>)[params.slug] as
    | { title: string; items: { title: string; image?: string }[] }[]
    | undefined;

  const initials = (title: string) =>
    title
      .split(/\s+/)
      .slice(0, 2)
      .map((w) => w[0])
      .join("")
      .toUpperCase();

  if (!categoryName) {
    return (
      <div className="relative overflow-hidden">
        <TopBar />
        <div className="min-h-[60vh] flex items-center justify-center px-5">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Category not found
            </h1>
            <Link
              href="/products"
              className="inline-flex mt-2 px-5 py-2 rounded-full bg-primary text-white font-semibold hover:shadow"
            >
              Back to Products
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden">
      <TopBar />
      {/* JSON-LD for Collection and Breadcrumbs */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: `${categoryName} Products`,
            url: `${siteUrl}/products/category/${params.slug}`,
          }),
        }}
      />
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
              {
                "@type": "ListItem",
                position: 3,
                name: categoryName,
                item: `${siteUrl}/products/category/${params.slug}`,
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 left-10 w-20 h-20 bg-yellow-400/20 rounded-full animate-pulse" />
          <div className="absolute top-36 right-20 w-16 h-16 bg-primary/30 rounded-full animate-bounce delay-300" />
          <div className="absolute bottom-16 left-1/4 w-12 h-12 bg-gray-400/20 rounded-full animate-ping delay-700" />
        </div>
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 text-center">
          <AnimatedSection animationType="fade-up" delay={0}>
            <div className="text-xs font-bold tracking-[0.3em] text-gray-500 mb-3 font-red_hat_text">
              // PRODUCTS //
            </div>
          </AnimatedSection>
          <AnimatedSection animationType="fade-up" delay={150}>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground font-red_hat_display">
              {categoryName}
            </h1>
          </AnimatedSection>
          <AnimatedSection animationType="fade-up" delay={300}>
            <p className="text-foreground/70 max-w-2xl mx-auto mt-3">
              Browse products in this category. Click a card to view details or
              use Inquire now to contact us directly.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Listing */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          {groups && groups.length > 0 ? (
            <>
              {groups.map((g, gi) => (
                <AnimatedSection
                  key={g.title}
                  animationType="fade-up"
                  delay={gi * 100}
                >
                  <div className="mb-5 md:mb-6 flex items-center gap-3">
                    <span className="inline-block w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground font-red_hat_display">
                      {g.title}
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-10">
                    {g.items.map((it) => (
                      <div
                        key={it.title}
                        className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition overflow-hidden border border-gray-200 h-[180px] md:h-[200px] flex"
                      >
                        <div className="w-2/5 relative bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
                          {it.image ? (
                            <Image
                              src={it.image}
                              alt={it.title}
                              fill
                              className="object-cover"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                          ) : (
                            <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold">
                              {initials(it.title)}
                            </div>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                        </div>
                        <div className="flex-1 p-5 flex flex-col">
                          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {it.title}
                          </h3>
                          <div className="mt-auto flex items-center gap-2">
                            <Link
                              href={`/contact?product=${encodeURIComponent(
                                it.title
                              )}`}
                              className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white hover:shadow-md"
                            >
                              Inquire now
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              ))}
            </>
          ) : (
            <>
              <AnimatedSection animationType="fade-up" delay={0}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {items.map((p, i) => (
                    <AnimatedSection
                      key={p.id}
                      animationType="fade-up"
                      delay={100 + i * 100}
                    >
                      <div className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition overflow-hidden border border-gray-200 h-[420px] md:h-[460px] flex flex-col">
                        <Link href={`/products/${p.id}`} className="block">
                          <div className="relative h-64 md:h-72 w-full overflow-hidden">
                            <Image
                              src={p.image}
                              alt={p.title}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                            <div className="absolute top-3 left-3 inline-flex items-center rounded-full bg-primary text-white px-3 py-1 text-xs font-semibold">
                              {categoryName}
                            </div>
                          </div>
                        </Link>
                        <div className="p-5 flex-1 flex flex-col">
                          <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {p.title}
                          </h3>
                          <div className="mt-auto flex items-center gap-3">
                            <Link
                              href={`/products/${p.id}`}
                              className="rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-foreground hover:bg-gray-50"
                            >
                              View details
                            </Link>
                            <Link
                              href={`/contact?product=${encodeURIComponent(
                                p.title
                              )}`}
                              className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white hover:shadow-md"
                            >
                              Inquire now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </AnimatedSection>
            </>
          )}

          <div className="text-center mt-10">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gray-300 text-sm font-semibold text-foreground hover:bg-gray-50"
            >
              ← Back to all products
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
