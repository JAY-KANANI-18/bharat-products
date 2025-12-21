import React from "react";
import Link from "next/link";
import { TopBar } from "../../../src/sections/TopBar";
import { Footer } from "../../../src/sections/Footer";
import { AnimatedSection } from "../../about/components/AnimatedSection";
import { ExternalLink, ShieldCheck } from "lucide-react";

export default function VisitorPolicyPage() {
  return (
    <div className="relative overflow-hidden">
      <TopBar />

      {/* Hero */}
      <section className="relative h-[55vh] min-h-[420px] w-full overflow-hidden flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=1600&h=900&fit=crop)",
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
              Bharat Products – Visitor Policy
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatedSection animationType="fade-up" delay={0}>
              <div className="p-6 rounded-2xl border border-gray-200 bg-white h-full">
                <h2 className="text-xl font-semibold mb-2">Purpose</h2>
                <p className="text-foreground/80">
                  The purpose of this policy is to provide clear guidance for
                  all visitors to Bharat Products premises, as well as for
                  employees who sponsor and host visitors.
                </p>
                <h2 className="text-xl font-semibold mt-6 mb-2">Scope</h2>
                <p className="text-foreground/80">
                  This policy applies to every visitor entering any Bharat
                  Products facility and to all employees responsible for
                  coordinating or sponsoring visits.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection animationType="fade-up" delay={120}>
              <div className="p-6 rounded-2xl border border-gray-200 bg-white h-full">
                <h2 className="text-xl font-semibold mb-3">
                  Visitor Guidelines
                </h2>
                <ul className="space-y-3 text-foreground/80">
                  {[
                    "Registration: All visitors must sign in and sign out at the security office using the visitor gate pass system.",
                    "Visitor Pass: A valid visitor pass must be carried at all times while inside company premises.",
                    "Safety Compliance: Visitors entering production areas are required to wear appropriate Personal Protective Equipment (PPE) for their safety.",
                    "Photography Restrictions: The use of cameras or mobile phones for photography is strictly prohibited.",
                    "Liability: Visitors are responsible for any damage they may cause during their visit. Bharat Products assumes no liability for harm or injury that may occur.",
                    "Movement Within Premises: Visitors must use designated walkways during plant tours or site visits.",
                    "Staff Responsibility: Employees must confirm the visitor’s name, host, area/room to be visited, and purpose of the visit before granting access.",
                  ].map((t, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ShieldCheck className="w-5 h-5 text-primary mt-0.5" />
                      <span>{t}</span>
                    </li>
                  ))}
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
