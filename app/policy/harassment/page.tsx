import React from "react";
import { TopBar } from "../../../src/sections/TopBar";
import { Footer } from "../../../src/sections/Footer";
import { AnimatedSection } from "../../about/components/AnimatedSection";
import { ShieldCheck, Handshake, BadgeCheck, HardHat } from "lucide-react";

export default function HarassmentPolicyPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold text-white font-red_hat_display">
              Harassment Policy
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Commitment to a Respectful Workplace",
                desc: "We maintain a zero-tolerance policy toward sexual or any other form of harassment. We take all necessary measures to protect employees from inappropriate conduct and ensure a safe, respectful environment.",
              },
              {
                title: "Equal Treatment & Dignity",
                desc: "Every individual is treated fairly, with dignity and respect, regardless of race, gender, age, national origin, disability, caste, or religion. Inclusivity is fundamental to our culture.",
              },
              {
                title: "Professional Growth & Opportunity",
                desc: "We foster an environment that supports development and equality of opportunity. Employees are provided with meaningful opportunities to enhance their skills and grow.",
              },
            ].map((card, i) => (
              <AnimatedSection
                key={card.title}
                animationType="fade-up"
                delay={120 * (i + 1)}
              >
                <div className="p-6 rounded-2xl border border-gray-200 bg-white h-full">
                  <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                  <p className="text-foreground/80">{card.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animationType="fade-up" delay={480}>
            <div className="mt-8 p-6 rounded-2xl border border-gray-200 bg-white">
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-semibold">Our Promise</h3>
                <BadgeCheck className="w-5 h-5 text-primary" />
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-foreground/80">
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-5 h-5 text-primary mt-0.5" /> Zero
                  tolerance: Harassment in any form will not be tolerated.
                </li>
                <li className="flex items-start gap-2">
                  <Handshake className="w-5 h-5 text-primary mt-0.5" /> Respect
                  & Fairness: Every employee is entitled to integrity and
                  equality.
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck className="w-5 h-5 text-primary mt-0.5" /> Growth
                  & Development: We support continuous learning and advancement.
                </li>
                <li className="flex items-start gap-2">
                  <HardHat className="w-5 h-5 text-primary mt-0.5" /> Safe
                  Environment: A culture of trust, transparency, and
                  accountability.
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
