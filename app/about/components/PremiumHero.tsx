import Image from "next/image";
import { AnimatedSection } from "./AnimatedSection";
import { ShieldCheck, Gauge, Package, Zap } from "lucide-react";

export function PremiumHero() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Copy */}
        <div>
          <AnimatedSection animationType="fade-up" delay={0}>
            <div className="text-xs font-semibold tracking-[0.25em] text-muted-foreground mb-4">
              ABOUT BHARAT PRODUCT
            </div>
          </AnimatedSection>

          <AnimatedSection animationType="fade-up" delay={150}>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Your Curated Metallic Expertise Partner
            </h1>
            <div className="h-1 w-16 bg-[hsl(var(--primary))] rounded-full mt-4" />
          </AnimatedSection>

          <AnimatedSection animationType="fade-up" delay={300}>
            <p className="mt-6 text-lg leading-8 text-foreground/80 max-w-xl">
              We transform Brass, Stainless Steel, Mild Steel, Copper and Aluminum into
              precision‑engineered components. Our promise is simple: high‑tolerance
              solutions, forged in trust.
            </p>
          </AnimatedSection>

          <AnimatedSection animationType="fade-up" delay={450}>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#pillars"
                className="px-6 py-3 rounded-full bg-primary text-white font-semibold hover:opacity-95 transition"
              >
                Explore Capabilities
              </a>
              <a
                href="/contact"
                className="px-6 py-3 rounded-full border border-primary text-primary font-semibold hover:bg-primary/10 transition"
              >
                Talk to an Expert
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection animationType="fade-up" delay={600}>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-gray-50 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">ISO 9001:2015</span>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 flex items-center gap-3">
                <Gauge className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">High Tolerance</span>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 flex items-center gap-3">
                <Package className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">Millions / day</span>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Right: Imagery */}
        <div className="relative">
          <AnimatedSection animationType="fade-up" delay={200}>
            <div className="relative rounded-2xl overflow-hidden ring-1 ring-primary/20">
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=900&fit=crop"
                alt="Precision manufacturing"
                width={960}
                height={720}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Overlay badges */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-2 shadow-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span className="text-xs font-semibold text-foreground">ISO Certified</span>
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-2 shadow-sm flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-xs font-semibold text-foreground">High Precision</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Accent circle */}
          <div className="pointer-events-none absolute -z-10 -right-6 -bottom-6 w-40 h-40 rounded-full bg-[hsl(var(--accent))]/30 blur-2xl" />
        </div>
      </div>
    </section>
  );
}
