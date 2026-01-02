import React from "react";
import { AnimatedSection } from "../../../app/about/components/AnimatedSection";
import { BadgeCheck, ShieldCheck, Cpu, Users, Gauge } from "lucide-react";

export const QualityHighlight: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <AnimatedSection animationType="fade-up">
          <div className="text-center mb-10">
            <div className="text-xs font-bold tracking-[0.3em] text-gray-500 mb-3 font-red_hat_text">
              // QUALITY //
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-red_hat_display">
              Quality You Can Trust
            </h2>
            <p className="text-foreground/70 max-w-3xl mx-auto leading-7">
              At <span className="text-primary">Bharat Products</span>, quality
              is the cornerstone of our identity. As an ISO 9001:2015 TUV SÜD
              Certified Company, we adhere to the highest international
              standards, using RoHS and REACH-compliant materials to ensure
              reliability and excellence in every component.
            </p>
          </div>
        </AnimatedSection>

        {/* Styled image band for Quality */}
        <AnimatedSection animationType="fade-up" delay={100}>
          <div className="relative w-full overflow-hidden rounded-3xl shadow-2xl ring-1 ring-gray-200 mb-8">
            <img
              src="/images/quality/Title 2640251683.jpg"
              alt="Quality systems and inspection"
              className="w-full h-56 md:h-72 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-primary/10 pointer-events-none"></div>

            {/* Overlay chips */}
            <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
              {["CMM verified", "±0.01mm Tolerance", "SPC", "FAI"].map(
                (pill) => (
                  <span
                    key={pill}
                    className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur text-foreground ring-1 ring-gray-200"
                  >
                    {pill}
                  </span>
                )
              )}
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatedSection animationType="fade-up" delay={100}>
            <div className="p-6 rounded-2xl border border-gray-200 bg-white h-full">
              <div className="flex items-center gap-3 mb-2">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold">
                  Uncompromising Quality & Reliability
                </h3>
              </div>
              <p className="text-foreground/70 leading-7">
                Precision‑engineered parts that meet the toughest benchmarks.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection animationType="fade-up" delay={150}>
            <div className="p-6 rounded-2xl border border-gray-200 bg-white h-full">
              <div className="flex items-center gap-3 mb-2">
                <Cpu className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold">Advanced Precision</h3>
              </div>
              <p className="text-foreground/70 leading-7">
                Cutting‑edge technology delivering consistent, high‑tolerance
                solutions.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection animationType="fade-up" delay={200}>
            <div className="p-6 rounded-2xl border border-gray-200 bg-white h-full">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold">
                  Customer‑First Service
                </h3>
              </div>
              <p className="text-foreground/70 leading-7">
                Transparent, tailored solutions designed around your needs.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection animationType="fade-up" delay={250}>
            <div className="p-6 rounded-2xl border border-gray-200 bg-white h-full">
              <div className="flex items-center gap-3 mb-2">
                <Gauge className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold">
                  Competitive Value & Scale
                </h3>
              </div>
              <p className="text-foreground/70 leading-7">
                Millions of components produced at market‑leading rates.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection animationType="fade-up" delay={300}>
            <div className="p-6 rounded-2xl border border-gray-200 bg-white h-full">
              <div className="flex items-center gap-3 mb-2">
                <BadgeCheck className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold">Trusted Partnerships</h3>
              </div>
              <p className="text-foreground/70 leading-7">
                Long‑term relationships built on integrity, transparency,
                satisfaction.
              </p>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection animationType="fade-up" delay={350}>
          <p className="text-xl text-foreground/80 text-center mt-8">
            Where others deliver parts, we deliver precision, trust, and
            reliability—your true partner in progress.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default QualityHighlight;
