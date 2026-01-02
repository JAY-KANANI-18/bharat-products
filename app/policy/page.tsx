import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { TopBar } from "../../src/sections/TopBar";
import { Footer } from "../../src/sections/Footer";
import { AnimatedSection } from "../about/components/AnimatedSection";
import {
  Ban,
  Handshake,
  ShieldCheck,
  HardHat,
  Scale,
  ExternalLink,
  BadgeCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Policies | Bharat Products",
  description:
    "Labour & Employment, Harassment, Visitor Policy, and Quality Policy of Bharat Products.",
  alternates: { canonical: "/policy" },
  openGraph: {
    url: "/policy",
    title: "Company Policies | Bharat Products",
    description:
      "Explore Labour & Employment, Harassment, Visitor, and Quality policies.",
  },
};

const safetyMeasures = [
  {
    icon: "🚭",
    title: "No Smoking",
    description: "Smoking and alcohol banned here.",
    details:
      "Strictly prohibited throughout all premises to ensure a safe and healthy work environment for all employees and visitors.",
  },
  {
    icon: "📱",
    title: "No Devices",
    description: "No mobile, camera on premises.",
    details:
      "Personal electronic devices and cameras are restricted in production areas to maintain security and prevent industrial espionage.",
  },
  {
    icon: "🐕",
    title: "No Pets",
    description: "Pets are not allowed on premises.",
    details:
      "Animals are prohibited in manufacturing areas to maintain hygiene standards and prevent contamination of products.",
  },
  {
    icon: "🚫",
    title: "No Spitting",
    description: "Spitting and littering banned.",
    details:
      "Maintaining cleanliness and hygiene is essential for our manufacturing processes and workplace safety standards.",
  },
  {
    icon: "👶",
    title: "Child Policy",
    description: "Strictly no child labor allowed.",
    details:
      "We maintain zero tolerance for child labor and ensure all employees meet legal age requirements for industrial work.",
  },
  {
    icon: "🦺",
    title: "Safety Equipment",
    description: "Mandatory PPE in all areas.",
    details:
      "Personal protective equipment including helmets, safety glasses, and protective clothing must be worn at all times.",
  },
];

const safetyCommitments = [
  {
    title: "Safety Training",
    description: "Comprehensive safety training programs for all employees",
    icon: "🎓",
  },
  {
    title: "Regular Inspections",
    description: "Routine safety inspections and equipment maintenance",
    icon: "🔍",
  },
  {
    title: "Emergency Response",
    description: "Well-defined emergency response procedures and protocols",
    icon: "🚨",
  },
  {
    title: "Health Monitoring",
    description: "Regular health check-ups and occupational health programs",
    icon: "🏥",
  },
];

export default function SafetyPage() {
  return (
    <div className="relative overflow-hidden">
      <TopBar />

      {/* Hero Section - Full Screen */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=900&fit=crop)",
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-4xl mx-auto px-5 md:px-8 text-center z-10">
          <AnimatedSection animationType="fade-up" delay={0}>
            <div className="text-xs font-bold tracking-[0.3em] text-white/80 mb-4 font-red_hat_text">
              // POLICIES //
            </div>
          </AnimatedSection>

          <AnimatedSection animationType="fade-up" delay={200}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-red_hat_display">
              Company Policies
            </h1>
          </AnimatedSection>

          <AnimatedSection animationType="fade-up" delay={400}>
            <p className="text-lg md:text-xl text-white/90 leading-8 max-w-3xl mx-auto mb-12">
              At Bharat Products, our policies uphold ethical employment, zero
              tolerance for harassment, safe visitor practices, and a rigorous
              commitment to quality.
            </p>
          </AnimatedSection>

          <AnimatedSection animationType="fade-up" delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/products"
                className="bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-yellow-600 transition-all duration-300 hover:scale-105"
              >
                EXPLORE PRODUCTS
              </Link>
              <Link
                href="/about"
                className="border-2 border-gray-800 text-gray-800 font-bold px-8 py-4 rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300 hover:scale-105"
              >
                Learn More About Us
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Sticky in-page menu */}
      <nav className="sticky top-16 md:top-20 z-[9997] bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex flex-wrap items-center gap-2 py-3">
            <a
              href="#labour"
              className="px-3 py-1.5 rounded-full text-sm border border-gray-200 hover:bg-gray-50"
            >
              Labour & Employment
            </a>
            <a
              href="#harassment"
              className="px-3 py-1.5 rounded-full text-sm border border-gray-200 hover:bg-gray-50"
            >
              Harassment
            </a>
            <a
              href="#visitor"
              className="px-3 py-1.5 rounded-full text-sm border border-gray-200 hover:bg-gray-50"
            >
              Visitor Policy
            </a>
            <a
              href="#quality"
              className="px-3 py-1.5 rounded-full text-sm border border-gray-200 hover:bg-gray-50"
            >
              Quality
            </a>
          </div>
        </div>
      </nav>

      {/* Quick Links to Policies */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <AnimatedSection animationType="fade-up" delay={0}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  href: "/policy/labour-employment",
                  title: "Labour & Employment",
                  Icon: Scale,
                },
                {
                  href: "/policy/harassment",
                  title: "Harassment",
                  Icon: ShieldCheck,
                },
                {
                  href: "/policy/visitor-policy",
                  title: "Visitor Policy",
                  Icon: ExternalLink,
                },
                { href: "/policy/quality", title: "Quality", Icon: BadgeCheck },
              ].map(({ href, title, Icon }, i) => (
                <a
                  key={href}
                  href={href}
                  className="group block p-5 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-primary" />
                    <div className="text-foreground font-semibold group-hover:text-primary">
                      {title}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Labour & Employment Policy */}
      <section id="labour" className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <AnimatedSection animationType="fade-up" delay={0}>
            <div className="text-center mb-10">
              <div className="text-xs font-bold tracking-[0.3em] text-primary/80 mb-3 font-red_hat_text">
                POLICY
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground font-red_hat_display">
                Labour & Employment Policy
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection animationType="fade-up" delay={120}>
            <p className="text-foreground/80 leading-8 max-w-4xl mx-auto text-center mb-8">
              At Bharat Products, we are committed to maintaining the highest
              standards of ethical employment practices and ensuring a safe,
              fair, and respectful workplace for all.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatedSection animationType="fade-up" delay={160}>
              <div className="p-6 rounded-2xl border border-gray-200 bg-white h-full">
                <div className="flex items-center gap-3 mb-3">
                  <BadgeCheck className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold">Our Principles</h3>
                </div>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <Ban className="w-5 h-5 text-primary mt-0.5" />{" "}
                    <span>
                      <strong>No Child Labour:</strong> Bharat Products strictly
                      prohibits the employment of individuals below the age of
                      18 years.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Ban className="w-5 h-5 text-primary mt-0.5" />{" "}
                    <span>
                      <strong>No Forced Labour:</strong> We categorically reject
                      the use of child labour, bonded labour, or any form of
                      forced or compulsory labour across all operations.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Handshake className="w-5 h-5 text-primary mt-0.5" />{" "}
                    <span>
                      <strong>Respect & Dignity:</strong> Every employee works
                      by choice and is never subjected to coercion, physical
                      punishment, or any form of force.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <HardHat className="w-5 h-5 text-primary mt-0.5" />{" "}
                    <span>
                      <strong>Safe & Fair Workplace:</strong> We uphold the
                      rights of our workforce, ensuring impartial treatment,
                      equality, and dignity in every aspect of employment.
                    </span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection animationType="fade-up" delay={200}>
              <div className="p-6 rounded-2xl border border-gray-200 bg-white h-full">
                <div className="flex items-center gap-3 mb-3">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold">Our Commitment</h3>
                </div>
                <p className="text-foreground/80 mb-3">We pledge to:</p>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <Scale className="w-5 h-5 text-primary mt-0.5" />{" "}
                    <span>
                      Provide a workplace built on trust, transparency, and
                      respect.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Handshake className="w-5 h-5 text-primary mt-0.5" />{" "}
                    <span>
                      Protect the dignity and rights of every employee.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-5 h-5 text-primary mt-0.5" />{" "}
                    <span>
                      Ensure compliance with all applicable labour laws and
                      ethical standards, and foster a culture where employees
                      can thrive.
                    </span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Harassment Policy */}
      <section id="harassment" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <AnimatedSection animationType="fade-up" delay={0}>
            <div className="text-center mb-10">
              <div className="text-xs font-bold tracking-[0.3em] text-primary/80 mb-3 font-red_hat_text">
                POLICY
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground font-red_hat_display">
                Harassment
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Commitment to a Respectful Workplace",
                desc: "Zero‑tolerance toward sexual or any other form of harassment. We ensure employees are protected from inappropriate conduct and can work safely.",
              },
              {
                title: "Equal Treatment & Dignity",
                desc: "Fair treatment for all regardless of race, gender, age, national origin, disability, caste, or religion. Inclusivity is fundamental to our culture.",
              },
              {
                title: "Professional Growth & Opportunity",
                desc: "We support development and equality of opportunity, enabling employees to enhance skills and grow within the organization.",
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
                <BadgeCheck className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold">Our Promise</h3>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-foreground/80">
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-5 h-5 text-primary mt-0.5" /> Zero
                  tolerance for harassment in any form.
                </li>
                <li className="flex items-start gap-2">
                  <Handshake className="w-5 h-5 text-primary mt-0.5" /> Respect
                  and fairness for every employee.
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck className="w-5 h-5 text-primary mt-0.5" />{" "}
                  Continuous growth and development support.
                </li>
                <li className="flex items-start gap-2">
                  <HardHat className="w-5 h-5 text-primary mt-0.5" /> Safe
                  environment built on trust and accountability.
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Visitor Policy */}
      <section id="visitor" className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <AnimatedSection animationType="fade-up" delay={0}>
            <div className="text-center mb-10">
              <div className="text-xs font-bold tracking-[0.3em] text-primary/80 mb-3 font-red_hat_text">
                POLICY
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground font-red_hat_display">
                Bharat Products – Visitor Policy
              </h2>
              <p className="text-foreground/70 mt-2">
                Reference:&nbsp;
                <Link
                  href="https://www.bharatprecision.com/visitor-policy/"
                  target="_blank"
                  className="inline-flex items-center gap-1 text-primary hover:underline"
                >
                  https://www.bharatprecision.com/visitor-policy/
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatedSection animationType="fade-up" delay={120}>
              <div className="p-6 rounded-2xl border border-gray-200 bg-white h-full">
                <h3 className="text-lg font-semibold mb-2">Purpose</h3>
                <p className="text-foreground/80">
                  Provide clear guidance for all visitors to Bharat Products
                  premises, as well as for employees who sponsor and host
                  visitors.
                </p>
                <h3 className="text-lg font-semibold mt-6 mb-2">Scope</h3>
                <p className="text-foreground/80">
                  Applies to every visitor entering any Bharat Products facility
                  and to all employees responsible for coordinating or
                  sponsoring visits.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection animationType="fade-up" delay={180}>
              <div className="p-6 rounded-2xl border border-gray-200 bg-white h-full">
                <h3 className="text-lg font-semibold mb-3">
                  Visitor Guidelines
                </h3>
                <ul className="space-y-3 text-foreground/80">
                  {[
                    "Registration: All visitors must sign in and sign out at the security office using the visitor gate pass system.",
                    "Visitor Pass: A valid visitor pass must be carried at all times while inside company premises.",
                    "Safety Compliance: Visitors entering production areas are required to wear appropriate Personal Protective Equipment (PPE).",
                    "Photography Restrictions: The use of cameras or mobile phones for photography is strictly prohibited.",
                    "Liability: Visitors are responsible for any damage they may cause during their visit. Bharat Products assumes no liability for harm or injury that may occur.",
                    "Movement Within Premises: Visitors must use designated walkways during plant tours or site visits.",
                    "Staff Responsibility: Employees must confirm the visitor’s name, host, area/room to be visited, and purpose of the visit before granting access.",
                  ].map((t, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ShieldCheck className="w-5 h-5 text-primary mt-0.5" />{" "}
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Quality & Commitment */}
      <section id="quality" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <AnimatedSection animationType="fade-up" delay={0}>
            <div className="text-center mb-10">
              <div className="text-xs font-bold tracking-[0.3em] text-primary/80 mb-3 font-red_hat_text">
                POLICY
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground font-red_hat_display">
                Quality & Commitment Statement
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection animationType="fade-up" delay={120}>
            <div className="mx-auto max-w-4xl p-6 rounded-2xl border border-gray-200 bg-white">
              <p className="text-foreground/80 leading-8">
                At{" "}
                <span className="text-primary text-lg mb-2 ">
                  Bharat Products
                </span>
                , we are dedicated to delivering precision‑engineered components
                that meet exact customer specifications while upholding the
                highest standards of business ethics and regulatory compliance.
                Our unwavering focus is on achieving complete customer
                satisfaction through the motivation of our workforce and the
                efficient utilization of resources.
              </p>
              <p className="text-foreground/80 leading-8 mt-4">
                We are committed to implementing, maintaining, and continually
                improving our Quality Management System across all areas of
                operation, ensuring consistency, reliability, and excellence in
                every product we deliver.
              </p>
              <p className="text-foreground/80 leading-8 mt-4">
                Our mission is to provide cost‑effective solutions that empower
                our customers to excel in their industries, strengthening their
                competitive edge through precision, trust, and innovation.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Safety Measures Grid (hidden legacy section) */}
      <section className="py-20 md:py-32 hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection animationType="fade-up" delay={0}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-6 font-red_hat_display">
                Ensuring Workplace Safety
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our comprehensive safety measures are designed to protect
                everyone on our premises and maintain the highest standards of
                workplace safety.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safetyMeasures.map((measure, index) => (
              <AnimatedSection
                key={index}
                animationType="fade-up"
                delay={200 + index * 100}
              >
                <div className="safety-card group bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-100 to-red-100 rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500 opacity-50"></div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="safety-icon text-6xl mb-6">
                      {measure.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-black mb-4 font-red_hat_display group-hover:text-red-600 transition-colors duration-300">
                      {measure.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 font-semibold mb-4">
                      {measure.description}
                    </p>

                    {/* Details */}
                    <p className="text-gray-500 text-sm leading-6">
                      {measure.details}
                    </p>

                    {/* Hover Border */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-200 rounded-2xl transition-all duration-300"></div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Commitments (hidden legacy section) */}
      <section className="bg-gray-50 py-20 md:py-32 hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection animationType="fade-up" delay={0}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-6 font-red_hat_display">
                Cultivating Awareness
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Beyond basic safety measures, we actively cultivate safety
                awareness through comprehensive programs and continuous
                improvement initiatives.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safetyCommitments.map((commitment, index) => (
              <AnimatedSection
                key={index}
                animationType="scale"
                delay={200 + index * 150}
              >
                <div className="text-center group">
                  <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <span className="text-3xl">{commitment.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4 font-red_hat_display group-hover:text-red-600 transition-colors duration-300">
                    {commitment.title}
                  </h3>
                  <p className="text-gray-600 leading-6">
                    {commitment.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Video Section (hidden legacy section) */}
      <section className="hidden relative h-screen overflow-hidden">
        {/* Fixed Background Image with Parallax Effect */}
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=1080&fit=crop')",
            backgroundAttachment: "fixed",
          }}
        >
          {/* Semi-transparent overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content that scrolls normally over the fixed background */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-5 md:px-8">
          <AnimatedSection animationType="fade-up" delay={0}>
            <div className="text-xs font-bold tracking-[0.3em] text-primary mb-4 font-red_hat_text">
              // PIONEERING EXCELLENCE IN //
            </div>
          </AnimatedSection>

          <AnimatedSection animationType="fade-up" delay={200}>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 font-red_hat_display leading-tight">
              Precision Metal
              <br />
              <span className="text-primary">Crafting</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection animationType="fade-up" delay={400}>
            <p className="text-xl md:text-2xl leading-8 mb-12 opacity-90 max-w-3xl mx-auto">
              We're not just crafting metal; we're shaping the future of metal
              manufacturing. Join us on our journey towards excellence.
            </p>
          </AnimatedSection>

          <AnimatedSection animationType="fade-up" delay={600}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <button className="group bg-primary text-black font-bold px-8 py-4 rounded-full hover:bg-yellow-400 transition-all duration-300 hover:scale-105 flex items-center space-x-3 shadow-2xl">
                <span className="text-lg">WATCH OUR</span>
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            </div>

            <div className="text-center">
              <div className="text-sm font-bold tracking-[0.3em] text-primary mb-2">
                INTRODUCTION
              </div>
              <div className="text-2xl font-bold tracking-wider">VIDEO</div>
            </div>
          </AnimatedSection>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Founder Section (hidden legacy section) */}
      <section className="py-20 md:py-32 hidden">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <AnimatedSection animationType="fade-up" delay={0}>
            <div className="relative inline-block mb-8">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                alt="Founder"
                className="w-32 h-32 rounded-full mx-auto shadow-2xl"
              />
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">CEO</span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animationType="fade-up" delay={200}>
            <h3 className="text-2xl font-bold text-black mb-2 font-red_hat_display">
              Jaydeep Patel
            </h3>
            <div className="text-yellow-600 font-semibold mb-6 tracking-[0.2em] text-sm">
              FOUNDER
            </div>
          </AnimatedSection>

          <AnimatedSection animationType="fade-up" delay={400}>
            <blockquote className="text-lg md:text-xl text-gray-700 leading-8 italic">
              "In a world where precision is paramount, Amwerk stands out. Our
              commitment to excellence and safety is unmatched. We don't just
              manufacture products; we craft solutions that shape the future of
              industry."
            </blockquote>
          </AnimatedSection>
        </div>
      </section>

      {/* Client Testimonials (hidden legacy section) */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20 md:py-32 hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection animationType="fade-up" delay={0}>
            <div className="text-center mb-16">
              <div className="text-xs font-bold tracking-[0.3em] text-gray-500 mb-4 font-red_hat_text">
                // OUR TESTIMONIALS //
              </div>
              <h2 className="text-4xl font-bold text-black mb-6 font-red_hat_display">
                Client Voices
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                Discover what our valued clients have to say about their
                experience with Amwerk. Our commitment to excellence shines
                through their testimonials.
              </p>

              {/* Rating */}
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-primary"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <span className="text-2xl font-bold text-yellow-600">4.9</span>
                <span className="text-gray-600">Average rating</span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animationType="fade-up" delay={200}>
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-6xl text-primary mb-6">"</div>
                <blockquote className="text-xl md:text-2xl text-gray-700 leading-8 mb-8 italic">
                  In a world where precision is paramount, Amwerk stands out.
                  Their commitment to excellence is unmatched. We highly
                  recommend their services.
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
                    alt="Client"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="text-left">
                    <div className="font-bold text-gray-800">
                      Michael Johnson
                    </div>
                    <div className="text-sm text-gray-600">
                      Engineering Director, TechCorp
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Call to Action (hidden legacy section) */}
      <section className="bg-gradient-to-r from-red-500 to-yellow-500 py-20 md:py-32 relative overflow-hidden hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=600&fit=crop"
            alt="Safety Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-5 md:px-8 text-center">
          <AnimatedSection animationType="fade-up" delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-red_hat_display">
              Safety First, Excellence Always
            </h2>
            <p className="text-white/90 text-xl leading-8 mb-8 max-w-2xl mx-auto">
              Join us in our commitment to maintaining the highest safety
              standards while delivering exceptional manufacturing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="bg-white text-red-600 font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                Contact Our Safety Team
              </Link>
              <Link
                href="/about"
                className="border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-red-600 transition-all duration-300 hover:scale-105"
              >
                Learn About Our Process
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
