import React from "react";
import { TopBar } from "../../../src/sections/TopBar";
import { Footer } from "../../../src/sections/Footer";
import { AnimatedSection } from "../../about/components/AnimatedSection";
import { Ban, Handshake, ShieldCheck, HardHat, Scale, BadgeCheck } from "lucide-react";

export const metadata = {
  title: "Labour & Employment Policy | Bharat Products",
  description:
    "Bharat Products' Labour & Employment Policy: No child or forced labour, respect and dignity, and a safe, fair workplace.",
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
          <AnimatedSection animationType="fade-up" delay={0}>
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
          <AnimatedSection animationType="fade-up" delay={0}>
            <p className="text-foreground/80 leading-8 max-w-4xl mx-auto text-center mb-8">
              At Bharat Products, we are committed to maintaining the highest standards of ethical employment practices and ensuring a safe, fair, and respectful workplace for all.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatedSection animationType="fade-up" delay={120}>
              <div className="p-6 rounded-2xl border border-gray-200 bg-white h-full">
                <div className="flex items-center gap-3 mb-3"><BadgeCheck className="w-5 h-5 text-primary" /><h3 className="text-lg font-semibold">Our Principles</h3></div>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-start gap-2"><Ban className="w-5 h-5 text-primary mt-0.5" /> <span><strong>No Child Labour:</strong> Bharat Products strictly prohibits the employment of individuals below the age of 18 years.</span></li>
                  <li className="flex items-start gap-2"><Ban className="w-5 h-5 text-primary mt-0.5" /> <span><strong>No Forced Labour:</strong> We categorically reject the use of child labour, bonded labour, or any form of forced or compulsory labour across all operations.</span></li>
                  <li className="flex items-start gap-2"><Handshake className="w-5 h-5 text-primary mt-0.5" /> <span><strong>Respect & Dignity:</strong> Every employee works by choice and is never subjected to coercion, physical punishment, or any form of force.</span></li>
                  <li className="flex items-start gap-2"><HardHat className="w-5 h-5 text-primary mt-0.5" /> <span><strong>Safe & Fair Workplace:</strong> We uphold the rights of our workforce, ensuring impartial treatment, equality, and dignity in every aspect of employment.</span></li>
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection animationType="fade-up" delay={180}>
              <div className="p-6 rounded-2xl border border-gray-200 bg-white h-full">
                <div className="flex items-center gap-3 mb-3"><ShieldCheck className="w-5 h-5 text-primary" /><h3 className="text-lg font-semibold">Our Commitment</h3></div>
                <p className="text-foreground/80 mb-3">We pledge to:</p>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-start gap-2"><Scale className="w-5 h-5 text-primary mt-0.5" /> <span>Provide a workplace built on trust, transparency, and respect.</span></li>
                  <li className="flex items-start gap-2"><Handshake className="w-5 h-5 text-primary mt-0.5" /> <span>Protect the dignity and rights of every employee.</span></li>
                  <li className="flex items-start gap-2"><ShieldCheck className="w-5 h-5 text-primary mt-0.5" /> <span>Ensure compliance with all applicable labour laws and ethical standards; foster a culture where employees can thrive.</span></li>
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
