"use client";

import React from "react";
import Link from "next/link";
import { AnimatedSection } from "../../../app/about/components/AnimatedSection";
import AdvancedCarousel from "@/components/AdvancedCarousel";
import { Scale, ShieldCheck, BadgeCheck, ExternalLink } from "lucide-react";

const policies = [
  {
    href: "/policy/labour-employment",
    title: "Labour & Employment",
    Icon: Scale,
    desc: "Ethical, fair, and safe workplace standards.",
  },
  {
    href: "/policy/harassment",
    title: "Harassment",
    Icon: ShieldCheck,
    desc: "Zero tolerance and a culture of respect.",
  },
  {
    href: "/policy/visitor-policy",
    title: "Visitor Policy",
    Icon: ExternalLink,
    desc: "Secure, compliant, and guided visitor access.",
  },
  {
    href: "/policy/quality",
    title: "Quality",
    Icon: BadgeCheck,
    desc: "ISO‑driven QMS and continuous improvement.",
  },
];

const policyDetails: Record<string, string[]> = {
  "/policy/labour-employment": [
    "No Child Labour – strictly prohibits employment below 18 years.",
    "No Forced/Bonded Labour across all operations.",
    "Respect & Dignity – no coercion or punishment; equality and fairness.",
    "Safe & Fair Workplace – rights upheld with impartial treatment.",
  ],
  "/policy/harassment": [
    "Zero‑tolerance toward sexual or any form of harassment.",
    "Equal treatment for all – dignity regardless of background.",
    "Professional growth with equal opportunities.",
    "Our Promise: Safe environment built on trust and accountability.",
  ],
  "/policy/visitor-policy": [
    "Purpose & Scope – guidance for all visitors and hosting employees.",
    "Registration at security office; sign‑in/sign‑out required.",
    "Visitor Pass must be carried at all times.",
    "PPE required in production areas; follow safety compliance.",
  ],
  "/policy/quality": [
    "Deliver precision components to exact specifications.",
    "Uphold business ethics and regulatory compliance.",
    "Implement, maintain, and improve the QMS continuously.",
  ],
};

export const PolicySlider: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <AnimatedSection animationType="fade-up">
          <div className="text-center mb-10">
            <div className="text-xs font-bold tracking-[0.3em] text-gray-500 mb-3 font-red_hat_text">
              // POLICIES //
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-red_hat_display">
              Our Policy Framework
            </h2>
            <p className="text-foreground/70 max-w-3xl mx-auto leading-7">
              A quick look at our core policies. Slide through and tap any card
              to read the full statement.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animationType="fade-up" delay={150}>
          <div className="relative rounded-3xl  p-4 md:p-6">
            <AdvancedCarousel
              items={policies}
              ariaLabel="Policies carousel"
              autoPlayMs={2500}
              basisClasses="basis-[92%] sm:basis-[70%] md:basis-[55%] lg:basis-[42%] xl:basis-[36%]"
              renderItem={({ href, title, Icon, desc }, _i, isActive) => {
                const details = policyDetails[href] ?? [desc];
                const visibleDetails = true ? details : details.slice(0, 2);
                return (
                  <Link key={href} href={href}>
                    <div
                      className={`group w-full bg-white rounded-2xl shadow-sm hover:shadow-2xl transition overflow-hidden border ${
                        isActive
                          ? "border-primary/30 ring-1 ring-primary/20"
                          : "border-gray-200"
                      } h-[360px] md:h-[380px] flex flex-col`}
                    >
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-3 mb-3">
                          <Icon className="w-6 h-6 text-primary" />
                          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                            {title}
                          </h3>
                        </div>
                        {/* Preview for inactive; full details for active */}
                        <div
                          className={`${"max-h-[420px]"} relative transition-all flex-1 overflow-hidden`}
                          aria-expanded={isActive}
                        >
                          <ul className="space-y-2 text-foreground/80 text-sm">
                            {visibleDetails.map((d, j) => (
                              <li key={j} className="flex items-start gap-2">
                                <ShieldCheck className="w-4 h-4 text-primary mt-0.5" />
                                <span>{d}</span>
                              </li>
                            ))}
                          </ul>
                          {!isActive && (
                            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-white/0" />
                          )}
                        </div>
                        <div className="mt-4 text-sm font-semibold text-primary">
                          {isActive && false
                            ? "Open full policy →"
                            : "Read more →"}
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              }}
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PolicySlider;
