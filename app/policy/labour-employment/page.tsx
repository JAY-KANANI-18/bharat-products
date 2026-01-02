import React from "react";
import { TopBar } from "../../../src/sections/TopBar";
import { Footer } from "../../../src/sections/Footer";
import { AnimatedSection } from "../../about/components/AnimatedSection";
import {
  Ban,
  Handshake,
  ShieldCheck,
  HardHat,
  Scale,
  BadgeCheck,
  Dot,
} from "lucide-react";

export const metadata = {
  title: "Labour & Employment Policy | Bharat Products",
  description:
    "Bharat Products’ Labour & Employment Policy outlines our commitment to ethical employment, prohibition of child and forced labour, and a safe, fair workplace.",
};

export default function LabourEmploymentPolicyPage() {
  return (
    <div className="relative overflow-hidden">
      <TopBar />

      {/* Hero */}
      <section className="relative h-[55vh] min-h-[420px] w-full overflow-hidden flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1600&h=900&fit=crop)",
          }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-8 text-center">
          <AnimatedSection animationType="fade-up">
            <div className="text-xs font-bold tracking-[0.3em] text-white/80 mb-4 font-red_hat_text">
              // POLICY //
            </div>
          </AnimatedSection>
          <AnimatedSection animationType="fade-up" delay={150}>
            <h1 className="text-4xl md:text-6xl font-bold text-white font-red_hat_display">
              Labour & Employment Policy
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <AnimatedSection animationType="fade-up">
            <p className="text-foreground/80 leading-8 max-w-4xl mx-auto text-center mb-10">
              At{" "}
              <span className="text-primary text-lg mb-2 ">
                {" "}
                Bharat Products
              </span>
              , we are firmly committed to ethical employment practices, respect
              for human rights, and the creation of a safe, fair, and inclusive
              workplace. Our policies align with applicable labour laws and
              international standards to ensure dignity and equality for every
              individual.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Principles */}
            <AnimatedSection animationType="fade-up" delay={120}>
              <div className="p-6 rounded-2xl border border-gray-200 bg-white h-full">
                <div className="flex items-center gap-3 mb-4">
                  <BadgeCheck className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold">
                    Core Employment Principles
                  </h3>
                </div>

                <ul className="space-y-4 text-foreground/80 leading-relaxed">
                  <li className="flex items-start gap-3">
                    •{" "}
                    <span>
                      <strong>No Child Labour:</strong> Bharat Products strictly
                      prohibits the employment of individuals below the legally
                      permitted working age and complies with all child labour
                      laws and regulations.
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    •{" "}
                    <span>
                      <strong>No Forced or Bonded Labour:</strong> We do not
                      tolerate bonded, forced, trafficked, or compulsory labour
                      in any form across our operations or supply chain.
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    •{" "}
                    <span>
                      <strong>Respect & Dignity:</strong> All employees work by
                      free choice and are treated with respect, without
                      harassment, coercion, abuse, or intimidation.
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    •{" "}
                    <span>
                      <strong>Safe & Fair Workplace:</strong> We ensure equal
                      opportunity, non-discrimination, and a healthy working
                      environment that prioritizes employee well-being.
                    </span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            {/* Commitment */}
            <AnimatedSection animationType="fade-up" delay={180}>
              <div className="p-6 rounded-2xl border border-gray-200 bg-white h-full">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold">Our Commitment</h3>
                </div>

                <p className="text-foreground/80 mb-4 leading-relaxed">
                  Bharat Products is committed to maintaining a workplace that
                  promotes trust, transparency, and accountability. We pledge
                  to:
                </p>

                <ul className="space-y-4 text-foreground/80 leading-relaxed">
                  <li className="flex items-start gap-3">
                    •{" "}
                    <span>
                      Operate in full compliance with all applicable labour,
                      employment, and occupational health & safety laws.
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    •{" "}
                    <span>
                      Uphold ethical practices that protect employee rights and
                      foster mutual respect across all levels of the
                      organization.
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    •{" "}
                    <span>
                      Continuously improve workplace conditions and encourage a
                      culture where employees can grow, contribute, and thrive.
                    </span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
