"use client";

import React from "react";
import Link from "next/link";
import { AnimatedSection } from "../../../app/about/components/AnimatedSection";
import AdvancedCarousel from "@/components/AdvancedCarousel";
import Image from "next/image";

const items = [
  {
    id: "precision-high-quality-components",
    title: "Precision High Quality Components",
    category: "Precision Engineering",
    image: "/images/products/precision-brass-components.jpg",
    alt: "precision-high-quality-components",
  },
  {
    id: "brass-turned-parts",
    title: "Brass Turned Parts",
    category: "Brass Components",
    image: "/images/products/brass-turned-parts.jpg",
    alt: "brass-turned-parts",
  },
  {
    id: "aluminium-parts",
    title: "Aluminium Parts",
    category: "Lightweight Components",
    image: "/images/products/aluminium-parts.jpg",
    alt: "aluminium-parts",
  },
  {
    id: "mild-steel-parts",
    title: "Mild Steel Parts",
    category: "Structural Components",
    image: "/images/products/mild-steel-parts.jpg",
    alt: "mild-steel-parts",
  },
  {
    id: "stainless-steel-parts",
    title: "Stainless Steel Parts",
    category: "Corrosion Resistant Components",
    image: "/images/products/stainless-steel-parts.jpg",
    alt: "stainless-steel-parts",
  },
  {
    id: "automotive-parts",
    title: "Automotive Parts",
    category: "Automotive Components",
    image: "/images/products/stainless-steel-parts.jpg",
    alt: "automotive-parts",
  },
  {
    id: "copper-and-other-metal-parts",
    title: "Copper and Other Metal Parts",
    category: "Custom Metal Components",
    image: "/images/products/copper-and-other-metal-parts.jpg",
    alt: "copper-and-other-metal-parts",
  },
  {
    id: "forged-and-machined-components",
    title: "Forged and Machined Components",
    category: "Heavy Duty Components",
    image: "/images/products/stainless-steel-parts.jpg",
    alt: "forged-and-machined-components",
  },
];

export const ProductSliderLocal: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <AnimatedSection animationType="fade-up">
          <div className="text-center mb-10">
            <div className="text-xs font-bold tracking-[0.3em] text-gray-500 mb-3 font-red_hat_text">
              // PRODUCTS //
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-red_hat_display">
              Product Highlights
            </h2>
            <p className="text-foreground/70 max-w-3xl mx-auto leading-7">
              Explore our precision‑engineered portfolio. Slide to preview and
              tap any card to learn more.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animationType="fade-up" delay={150}>
          <div className="relative rounded-3xl ">
            <AdvancedCarousel
              items={items}
              ariaLabel="Product carousel"
              autoPlayMs={3000}
              basisClasses="basis-[92%] sm:basis-[70%] md:basis-[52%] lg:basis-[38%] xl:basis-[32%]"
              renderItem={(p, i, isActive) => (
                <Link
                  key={p.title + p.id}
                  href={p.id === "products" ? "/products" : `/products/${p.id}`}
                  className={
                    isActive
                      ? "border-primary/30 ring-1 ring-primary/20"
                      : "border-gray-200"
                  }
                >
                  <div className="group w-full bg-white rounded-2xl shadow-sm hover:shadow-2xl transition overflow-hidden border border-gray-200 h-[440px] md:h-[500px] flex flex-col">
                    <div className="relative h-64 md:h-80 w-full overflow-hidden">
                      <Image
                        src={p.image}
                        alt={p.alt ?? `${p.title} – ${p.category}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 92vw, (max-width: 1024px) 70vw, (max-width: 1280px) 52vw, (max-width: 1536px) 38vw, 32vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                      {/* Hover showcase overlay */}
                      <div className="absolute bottom-0 left-0 right-0 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="m-4 px-4 py-3 rounded-xl bg-white/90 backdrop-blur ring-1 ring-gray-200 flex items-center justify-between">
                          <div className="text-sm font-semibold text-foreground">
                            Quick view
                          </div>
                          <div className="text-sm font-bold text-primary">
                            Explore →
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <div className="text-xs font-semibold text-primary mb-1">
                        {p.category}
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {p.title}
                      </h3>
                      <div className="text-sm text-foreground/70 mt-auto">
                        Tap to view specs and applications
                      </div>
                    </div>
                  </div>
                </Link>
              )}
            />
          </div>
          <div className="text-center mt-6">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 font-semibold text-primary hover:underline"
            >
              View all products <span aria-hidden>→</span>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProductSliderLocal;
