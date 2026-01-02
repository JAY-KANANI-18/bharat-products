import React from "react";
import { AnimatedSection } from "../../../app/about/components/AnimatedSection";
import { Package, Globe2, TrendingUp } from "lucide-react";

export const ProductionCapacity: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <AnimatedSection animationType="fade-up">
          <div className="text-center mb-10">
            <div className="text-xs font-bold tracking-[0.3em] text-gray-500 mb-3 font-red_hat_text">
              // PRODUCTION & CAPACITY //
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-red_hat_display">
              Production & Capacity
            </h2>
            <p className="text-foreground/70 max-w-3xl mx-auto leading-7">
              Large‑scale capacity and global reach to meet diverse industry
              demands with consistency and reliability.
            </p>
          </div>
        </AnimatedSection>

        {/* Styled image band to match other sections */}
        <AnimatedSection animationType="fade-up" delay={120}>
          <div className="relative w-full overflow-hidden rounded-3xl shadow-2xl ring-1 ring-gray-200 mb-10">
            {/* Aspect ratio wrapper */}
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9]">
              <img
                src="/images/home/Production  Capacity.png"
                alt="Panoramic factory floor illustrating scalable production lines and workflow"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-black/10 pointer-events-none"></div>

            {/* Badge */}
            <div className="absolute top-3 left-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 backdrop-blur text-xs font-semibold ring-1 ring-gray-200">
              <span>High Volume</span>
              <span className="text-foreground/40">•</span>
              <span>Global Supply</span>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatedSection animationType="scale" delay={100}>
            <div className="p-6 rounded-2xl border border-gray-200 bg-white text-center shadow-sm">
              <Package className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold text-foreground">
                1,000,000+
              </div>
              <div className="text-foreground/70">Parts per month</div>
            </div>
          </AnimatedSection>

          <AnimatedSection animationType="scale" delay={200}>
            <div className="p-6 rounded-2xl border border-gray-200 bg-white text-center shadow-sm">
              <Globe2 className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold text-foreground">21</div>
              <div className="text-foreground/70">Countries supplied</div>
            </div>
          </AnimatedSection>

          <AnimatedSection animationType="scale" delay={300}>
            <div className="p-6 rounded-2xl border border-gray-200 bg-white text-center shadow-sm">
              <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold text-foreground">50%</div>
              <div className="text-foreground/70">International exports</div>
            </div>
          </AnimatedSection>
        </div>
        <AnimatedSection animationType="fade-up" delay={350}>
          <p className="text-foreground/70 leading-7 text-center mt-8">
            At{" "}
            <span className="text-primary text-lg mb-2">Bharat Products</span>,
            our large-scale production capacity, combined with global
            distribution, ensures consistency, reliability, and uncompromising
            quality.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProductionCapacity;
