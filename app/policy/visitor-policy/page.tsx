"use client";
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
              "url(/images/policy/visitor-policy/imgi_13_img_1.png)",
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
      <section className="py-14 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <AnimatedSection animationType="fade-up">
            <h2 className="text-2xl font-semibold mb-8 text-center">
              Prohibited Inside Premises
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-4">
              {[
                {
                  img: "/images/policy/visitor-policy/imgi_6_group_1.png",
                },
                {
                  img: "/images/policy/visitor-policy/imgi_7_group_2.png",
                },
                {
                  img: "/images/policy/visitor-policy/imgi_8_group_3.png",
                },
                {
                  img: "/images/policy/visitor-policy/imgi_9_group_4.png",
                },
                {
                  img: "/images/policy/visitor-policy/imgi_10_group_5.png",
                },
                {
                  img: "/images/policy/visitor-policy/imgi_11_group_6.png",
                },
                {
                  img: "/images/policy/visitor-policy/imgi_12_group_7.png",
                },
              ].map((item, i) => (
                <img
                  src={item.img}
                  alt="Icon"
                  className="h-40 object-contain mb-3"
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Purpose & Scope */}
            <AnimatedSection animationType="fade-up" delay={0}>
              <div className="p-6 rounded-2xl border border-gray-200 bg-white h-full">
                <h2 className="text-xl font-semibold mb-3">Purpose</h2>
                <p className="text-foreground/80 leading-relaxed">
                  This Visitor Policy is established to ensure the safety,
                  security, and smooth operation of Bharat Products’ facilities.
                  It provides clear guidance for all visitors and defines the
                  responsibilities of employees who sponsor or host visitors
                  within the premises.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-3">Scope</h2>
                <p className="text-foreground/80 leading-relaxed">
                  This policy applies to all visitors, contractors, suppliers,
                  and guests entering any Bharat Products facility. It also
                  applies to employees responsible for coordinating, escorting,
                  or approving visitor access.
                </p>
              </div>
            </AnimatedSection>

            {/* Visitor Guidelines */}
            <AnimatedSection animationType="fade-up" delay={120}>
              <div className="p-6 rounded-2xl border border-gray-200 bg-white h-full">
                <h2 className="text-xl font-semibold mb-4">
                  Visitor Guidelines & Safety Rules
                </h2>

                <ul className="space-y-4 text-foreground/80 leading-relaxed">
                  {[
                    "Entry & Exit Registration: All visitors must register at the security office and sign in and out using the official visitor gate pass system.",
                    "Visitor Identification: Visitors must wear a valid visitor pass visibly at all times while inside company premises.",
                    "Safety Compliance: Visitors entering production, warehouse, or operational areas must wear the required Personal Protective Equipment (PPE) as instructed.",
                    "Photography & Recording: The use of cameras, mobile phones, or any recording devices for photography or videography is strictly prohibited unless prior written approval is granted.",
                    "Liability & Responsibility: Visitors are responsible for any damage, loss, or safety incidents caused during their visit. Bharat Products shall not be held liable for any injury or harm arising from non-compliance.",
                    "Movement Within Premises: Visitors must remain within designated walkways and permitted areas and should always be accompanied by authorized personnel where required.",
                    "Host Responsibility: The hosting employee must verify the visitor’s identity, purpose of visit, and authorized area before granting access and ensure compliance throughout the visit.",
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 text-primary mt-1 shrink-0" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <AnimatedSection animationType="fade-up">
            <h2 className="text-2xl font-semibold mb-8 text-center">
              Mandatory Personal Protective Equipment (PPE)
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-4">
              {[
                {
                  img: "/images/policy/visitor-policy/imgi_13_img_1.png",
                },
                {
                  img: "/images/policy/visitor-policy/imgi_14_img_2.png",
                },
                {
                  img: "/images/policy/visitor-policy/imgi_15_img_3.png",
                },
                {
                  img: "/images/policy/visitor-policy/imgi_16_img_4.png",
                },
                {
                  img: "/images/policy/visitor-policy/imgi_17_img_5.png",
                },
                {
                  img: "/images/policy/visitor-policy/imgi_18_img_6.png",
                },
                {
                  img: "/images/policy/visitor-policy/imgi_19_img_7.png",
                },
              ].map((item, i) => (
                <img
                  src={item.img}
                  alt="PPE"
                  className="h-40 object-contain mb-3"
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
