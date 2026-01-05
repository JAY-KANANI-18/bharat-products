import React from "react";
import { TopBar } from "../../../src/sections/TopBar";
import { Footer } from "../../../src/sections/Footer";
import { AnimatedSection } from "../../about/components/AnimatedSection";

export default function QualityPolicyPage() {
  return (
    <div className="relative overflow-hidden">
      {/* <TopBar /> */}

      {/* Hero */}
      <section className="relative h-[55vh] min-h-[420px] w-full overflow-hidden flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(/images/policy/quality/Customer-Partnership.jpg)",
          }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-8 text-center">
          <AnimatedSection animationType="fade-up" delay={0}>
            <div className="text-xs font-bold tracking-[0.3em] text-white/80 mb-4 font-red_hat_text">
              // POLICY //
            </div>
          </AnimatedSection>
          <AnimatedSection animationType="fade-up" delay={150}>
            <h1 className="text-3xl md:text-5xl font-bold text-white font-red_hat_display">
              Quality & Commitment Statement
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <AnimatedSection animationType="fade-up" delay={0}>
            <div className="mx-auto max-w-4xl p-6 rounded-2xl border border-gray-200 bg-white">
              <p className="text-foreground/80 leading-8">
                At <span className="text-primary">Bharat Products</span>, we are
                dedicated to delivering precision-engineered components that
                meet exact customer specifications while upholding the highest
                standards of business ethics and regulatory compliance. Our
                unwavering focus is on achieving complete customer satisfaction
                through the motivation of our workforce and the efficient
                utilization of resources.
              </p>
              <p className="text-foreground/80 leading-8 mt-4">
                We are committed to implementing, maintaining, and continually
                improving our Quality Management System across all areas of
                operation, ensuring consistency, reliability, and excellence in
                every product we deliver.
              </p>
              <p className="text-foreground/80 leading-8 mt-4">
                Our mission is to provide cost-effective solutions that empower
                our customers to excel in their industries, strengthening their
                competitive edge through precision, trust, and innovation.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
}
