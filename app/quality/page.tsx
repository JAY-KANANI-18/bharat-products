import React from "react";
import { TopBar } from "../../src/sections/TopBar";
import { Footer } from "../../src/sections/Footer";
import { AnimatedSection } from "../about/components/AnimatedSection";
import {
  CheckCircle,
  Shield,
  Users,
  Cog,
  Gauge,
  Briefcase,
  BookOpen,
} from "lucide-react";

export default function QualityPage() {
  const qualityPoints = [
    {
      icon: Shield,
      title: "Material Compliance",
      description: "RoHS and REACH‑compliant sourcing and traceability.",
      img: "/images/quality/Material Compliance 2592076305.jpg",
    },
    {
      icon: Cog,
      title: "Precision Equipment",
      description:
        "Advanced CNC and inspection tools to meet tight tolerances.",
      img: "/images/quality/Precision Equipment.jpg",
    },
    {
      icon: Gauge,
      title: "Process Control",
      description:
        "SPC, first‑article inspection, and in‑line gauging to catch deviations early.",
      img: "/images/quality/Process Control 2655166337.jpg",
    },
    {
      icon: Users,
      title: "Skilled Workforce",
      description:
        "Trained operators and engineers focused on defect prevention.",
      img: "",
    },
    {
      icon: BookOpen,
      title: "Documentation",
      description:
        "Full lot traceability, inspection records, and customer‑specific reporting.",
      img: "/images/quality/Documentation 2547020979.jpg",
    },
    {
      icon: Briefcase,
      title: "Customer Partnership",
      description:
        "Collaborative problem solving, transparent communication, and tailored quality plans.",
      img: "/images/quality/Customer Partnership 2524990405.jpg",
    },
  ];

  const instrumentItems = [
    {
      img: "/images/quality/Digital Micrometers and Calipers.jpg",
      text: "Digital Micrometers and Calipers: For high-precision measurement of component dimensions.",
    },
    {
      img: "/images/quality/Coordinate Measuring Machines.jpg",
      text: "Coordinate Measuring Machines (CMM): For complex geometric and profile measurements.",
    },
    {
      img: "/images/quality/Digital Height Gauges & Surface Plates.jpg",
      text: "Digital Height Gauges & Surface Plates: For accurate vertical measurements and reference plane inspections.",
    },
    {
      img: "/images/quality/Optical Comparators.png",
      text: "Optical Comparators: For non-contact measurement and inspection of small, complex parts against a magnified profile.",
    },
    {
      img: "/images/quality/Thread Gauges (Plug & Ring).jpg",
      text: "Thread Gauges (Plug & Ring): For comprehensive verification of thread accuracy and fit.",
    },
  ];

  const trainingItems = [
    {
      img: "/images/quality/Structured Onboarding.jpg",
      text: "Structured Onboarding: Every new employee undergoes rigorous training on our QMS, specific SOPs, and health & safety protocols.",
    },
    {
      img: "/images/quality/Skill-Specific Certification.jpg",
      text: "Skill-Specific Certification: Operators and technicians receive regular, certified training on advanced machinery, precision instruments, and new technologies.",
    },
    {
      img: "/images/quality/Quality Mindset Workshops.jpg",
      text: "Quality Mindset Workshops: We conduct periodic workshops to reinforce the culture of quality, problem-solving techniques, and the importance of each individual's role in delivering excellence.",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <TopBar />

      {/* Hero Section – Full Screen */}
      <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/images/quality/Title%202640251683.jpg)",
          }}
        >
          {/* Base Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Bottom Gradient – for stats readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-8 text-center pt-24 pb-28">
          {/* Eyebrow */}
          <AnimatedSection animationType="fade-up" delay={0}>
            <div className="text-xs font-bold tracking-[0.3em] text-white/80 mb-4 font-red_hat_text">
              // QUALITY EXCELLENCE //
            </div>
          </AnimatedSection>

          {/* Heading */}
          <AnimatedSection animationType="fade-up" delay={150}>
            <h1
              className="text-4xl md:text-6xl font-bold text-white mb-6 font-red_hat_display
                   drop-shadow-[0_4px_30px_rgba(0,0,0,0.75)]"
            >
              Precision is a <span className="text-primary">Promise</span>
            </h1>
          </AnimatedSection>

          {/* Description */}
          <AnimatedSection animationType="fade-up" delay={300}>
            <p
              className="text-lg md:text-xl text-white/90 leading-8 max-w-3xl mx-auto mb-14
                  drop-shadow-[0_2px_14px_rgba(0,0,0,0.6)]"
            >
              At Bharat Product, quality is not just a checkpoint; it is the
              foundational principle that permeates every aspect of our
              operations. As an ISO 9001:2015 TÜV SÜD Certified Company, our
              commitment to excellence is embedded in our processes, our people,
              and our philosophy. We don&apos;t just meet standards; we set
              them, ensuring every component we deliver is a testament to
              reliability and precision.
            </p>
          </AnimatedSection>

          {/* Stats Panel */}
          <AnimatedSection animationType="fade-up" delay={450}>
            <div
              className="mx-auto max-w-4xl rounded-2xl border border-white/10
                    bg-white/5 backdrop-blur-md px-6 py-8
                    shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1 drop-shadow">
                    ISO
                  </div>
                  <div className="text-sm text-white/80 tracking-wide">
                    9001:2015
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1 drop-shadow">
                    ±0.01mm
                  </div>
                  <div className="text-sm text-white/80 tracking-wide">
                    Tolerance
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1 drop-shadow">
                    100%
                  </div>
                  <div className="text-sm text-white/80 tracking-wide">
                    Inspection
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1 drop-shadow">
                    99.9%
                  </div>
                  <div className="text-sm text-white/80 tracking-wide">
                    Quality Rate
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <AnimatedSection animationType="fade-up" delay={0}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Key Quality Practices (What We Do Differently)
              </h2>
              <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {qualityPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <AnimatedSection
                  key={index}
                  animationType="fade-up"
                  delay={index * 120}
                >
                  <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all h-full flex flex-col">
                    <div className="relative w-full overflow-hidden rounded-t-2xl pb-[56%]">
                      <img
                        src={point.img}
                        alt={point.title}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur rounded-full p-2 shadow">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-lg font-bold text-foreground mb-2">
                        {point.title}
                      </h3>
                      <p className="text-foreground/70 leading-7">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Quality Approach */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <AnimatedSection animationType="fade-up" delay={0}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Quality Approach: A Culture of Excellence
              </h2>
              <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
            <AnimatedSection animationType="slide-left" delay={150}>
              <div className="relative group">
                <img
                  src="/images/quality/Our Quality Approach 2664576671.jpg"
                  alt="Engineers reviewing process controls"
                  className="w-full h-[360px] md:h-[420px] object-cover rounded-3xl shadow-2xl border-8 border-white"
                />
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gray-400 rounded-full opacity-30 animate-float"></div>
              </div>
            </AnimatedSection>

            <div>
              <AnimatedSection animationType="fade-up" delay={100}>
                <p className="text-lg text-foreground/80 leading-8 mb-10">
                  Our quality approach is proactive, systematic, and ingrained
                  in our culture. It begins at the design stage and continues
                  through to final delivery, ensuring seamless consistency and
                  continuous improvement.
                </p>
              </AnimatedSection>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Prevention Over Correction",
                    desc: "We focus on robust process design and control to prevent errors before they occur, rather than inspecting them out at the end.",
                  },
                  {
                    title: "Integrated Systems",
                    desc: "Our ISO 9001:2015 certified Quality Management System (QMS) provides a structured framework for managing all our quality-oriented activities, from supplier evaluation to customer feedback.",
                  },
                  {
                    title: "Continuous Improvement",
                    desc: "We adhere to the Plan-Do-Check-Act (PDCA) cycle, constantly analyzing data and feedback to refine our processes, enhance efficiency, and elevate the quality of our output.",
                  },
                  {
                    title: "RoHS & REACH Compliance",
                    desc: "We are committed to environmental and safety standards, employing materials that are fully compliant with RoHS and REACH regulations, meeting the most demanding global requirements.",
                  },
                ].map((item, idx) => (
                  <AnimatedSection
                    key={idx}
                    animationType="fade-up"
                    delay={150 * (idx + 1)}
                  >
                    <div className="p-6 bg-white rounded-xl border border-gray-200 flex gap-4">
                      <CheckCircle className="w-6 h-6 text-primary mt-1 shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-1">
                          {item.title}
                        </h3>
                        <p className="text-foreground/70">{item.desc}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <AnimatedSection animationType="fade-up" delay={0}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Certifications & Compliance
              </h2>
              <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
            </div>
          </AnimatedSection>

          <AnimatedSection animationType="fade-up" delay={100}>
            <div className="relative mb-12">
              <img
                src="/images/quality/Health & Safety Policy.jpeg"
                alt="Standards and certifications documents"
                className="w-full h-56 md:h-64 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 rounded-2xl bg-black/10"></div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection animationType="scale" delay={0}>
              <div className="bg-white p-8 rounded-xl text-center shadow-md">
                <div className="text-5xl font-bold text-primary mb-2">ISO</div>
                <p className="text-foreground font-semibold">9001:2015</p>
                <p className="text-foreground/70 text-sm mt-2">
                  Quality Management System
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animationType="scale" delay={150}>
              <div className="bg-white p-8 rounded-xl text-center shadow-md">
                <div className="text-4xl font-bold text-primary mb-2">
                  RoHS & REACH
                </div>
                <p className="text-foreground font-semibold">Compliant</p>
                <p className="text-foreground/70 text-sm mt-2">
                  Materials Compliance
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animationType="scale" delay={300}>
              <div className="bg-white p-8 rounded-xl text-center shadow-md">
                <div className="text-5xl font-bold text-primary mb-2">
                  ±0.01mm
                </div>
                <p className="text-foreground font-semibold">Tolerance</p>
                <p className="text-foreground/70 text-sm mt-2">
                  Precision Capability
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Quality Instruments */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <AnimatedSection animationType="fade-up" delay={0}>
            <div className="text-center mb-12">
              <div className="text-xs font-bold tracking-[0.3em] text-primary/80 mb-3 font-red_hat_text">
                INSTRUMENTS
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-red_hat_display">
                Quality Instruments: The Tools of Precision
              </h2>
              <p className="text-foreground/70 max-w-3xl mx-auto mt-2">
                Calibrated, compliant, and verified instrumentation for
                repeatable precision.
              </p>
              <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
            </div>
          </AnimatedSection>

          <AnimatedSection animationType="fade-up" delay={150}>
            <div className="relative w-full overflow-hidden rounded-3xl shadow-2xl pb-[56%] mb-10">
              <img
                src="/images/quality/Quality Instruments 2642860503.jpg"
                alt="Instrumentation showcase"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection animationType="fade-up" delay={220}>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              {[
                "CMM verified",
                "±0.01mm Tolerance",
                "Non‑contact Optical",
                "Thread Gauging",
              ].map((pill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20"
                >
                  {pill}
                </span>
              ))}
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {instrumentItems.map((item, idx) => (
              <AnimatedSection
                key={idx}
                animationType="fade-up"
                delay={100 * (idx + 1)}
              >
                <div className="relative group h-full">
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/15 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition" />

                  <div
                    className="relative rounded-2xl border border-gray-200 bg-white/90 backdrop-blur
                        h-full flex flex-col shadow-md hover:shadow-xl
                        ring-1 ring-gray-200/60 hover:ring-primary/30
                        transition-all duration-300 transform-gpu group-hover:-translate-y-1 overflow-hidden"
                  >
                    {/* Top accent */}
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-primary/60 to-primary/80" />

                    {/* IMAGE — now visually dominant */}
                    <div className="relative w-full h-44 overflow-hidden">
                      <img
                        src={item.img}
                        alt="Instrument"
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover
                         transition-transform duration-500 group-hover:scale-110"
                      />

                      {/* subtle overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    </div>

                    {/* CONTENT */}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className="inline-flex items-center gap-1 px-2 py-0.5
                               text-[10px] font-semibold uppercase tracking-wider
                               bg-primary/10 text-primary rounded-full"
                        >
                          Instrument
                        </span>
                        <Gauge className="w-4 h-4 text-primary/70" />
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                      </div>

                      <h3
                        className="text-base md:text-lg font-semibold text-foreground
                           font-red_hat_display tracking-tight"
                      >
                        {item.text.split(":")[0]}
                      </h3>

                      {item.text.includes(":") && (
                        <p className="text-foreground/70 leading-7 mt-1">
                          {item.text.split(":").slice(1).join(":").trim()}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Equipment */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/images/quality/Hardness%20Testers.jpg)",
          }}
        >
          {/* Gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
          {/* Section Title */}
          <AnimatedSection animationType="fade-up" delay={0}>
            <div className="text-center mb-14">
              <h2
                className="text-3xl md:text-4xl font-bold text-white mb-4
                   drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]"
              >
                Testing Equipment: Validating Every Component
              </h2>
              <div className="h-1 w-20 bg-primary rounded-full mx-auto" />
            </div>
          </AnimatedSection>

          {/* Equipment List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Hardness Testers (Rockwell, Vickers): To verify the material hardness and heat treatment efficacy.",
              "Spectrometers: For precise chemical composition analysis of raw materials, guaranteeing material grade integrity.",
              "Tensile Testing Machines: To assess the ultimate tensile strength, yield strength, and elongation of materials.",
              "Salt Spray Chambers (Corrosion Testing): To evaluate the corrosion resistance of plated and finished components.",
              "Leak Testers: For critical components requiring airtight or watertight integrity.",
              "Vision Inspection Systems: For automated, high-speed visual defect detection and quality control.",
            ].map((text, idx) => (
              <AnimatedSection
                key={idx}
                animationType="fade-up"
                delay={100 * (idx + 1)}
              >
                <div
                  className="p-6 rounded-xl flex gap-4 items-start
                     bg-black/55 backdrop-blur-md
                     border border-white/20
                     shadow-[0_10px_40px_rgba(0,0,0,0.4)]
                     hover:bg-black/65 transition"
                >
                  <CheckCircle className="w-6 h-6 text-primary mt-1 shrink-0 drop-shadow" />
                  <p className="text-white leading-7 text-sm md:text-base">
                    {text}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Training Policy */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <AnimatedSection animationType="fade-up" delay={0}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Training Policy: Empowering Our Greatest Asset
              </h2>
              <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
            </div>
          </AnimatedSection>

          <AnimatedSection animationType="fade-up" delay={150}>
            <div className="relative w-full overflow-hidden rounded-3xl shadow-2xl pb-[56%] mb-10">
              <img
                src="/images/quality/Training Policy 2612611991.jpg"
                alt="Team training session"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </AnimatedSection>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-primary/30 hidden sm:block" />

            <div className="space-y-6">
              {trainingItems.map((item, idx) => (
                <AnimatedSection
                  key={idx}
                  animationType="fade-up"
                  delay={100 * (idx + 1)}
                >
                  <div className="relative pl-12 sm:pl-20">
                    {/* ICON — centered on the line */}
                    <div
                      className="absolute left-5 top-6 -translate-x-1/2
                     w-9 h-9 rounded-full
                     bg-white ring-4 ring-primary/20
                     flex items-center justify-center
                     shadow-md z-10"
                    >
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>

                    {/* Content Card */}
                    <div className="p-5 border border-gray-200 rounded-xl bg-white shadow-sm">
                      <div className="text-sm text-primary font-semibold mb-1">
                        Step {String(idx + 1).padStart(2, "0")}
                      </div>
                      <p className="text-foreground/80 leading-7">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Health & Safety Policy */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <AnimatedSection animationType="fade-up" delay={0}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Health & Safety Policy: A Safe Environment for Quality Work
              </h2>
              <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {[
                "Proactive Risk Management: We conduct regular risk assessments to identify and mitigate potential hazards in the workplace.",
                "Mandatory PPE & Protocols: Strict enforcement of Personal Protective Equipment (PPE) and safe operational procedures for all machinery and tasks.",
                "Clean & Organized Workspaces: We maintain a 5S methodology (Sort, Set in order, Shine, Standardize, Sustain) to ensure a clean, organized, and hazard-free factory floor, which directly contributes to higher quality and fewer errors.",
                "Continuous Monitoring & Improvement: We regularly audit our H&S practices and invest in ergonomic improvements to foster a safe, healthy, and productive work environment.",
              ].map((text, idx) => (
                <AnimatedSection
                  key={idx}
                  animationType="fade-up"
                  delay={100 * (idx + 1)}
                >
                  <div className="p-6 border border-gray-200 rounded-xl flex gap-4 mb-6 bg-white">
                    <CheckCircle className="w-6 h-6 text-primary mt-1 shrink-0" />
                    <p className="text-foreground/80">{text}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
            <AnimatedSection animationType="slide-right" delay={200}>
              <img
                src="/images/quality/Health & Safety Policy.jpeg"
                alt="Workplace safety gear"
                className="w-full h-[360px] md:h-[420px] object-cover rounded-2xl shadow-2xl border-8 border-white"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/images/quality/Health & Safety Policy.jpeg)",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
          <AnimatedSection animationType="fade-up" delay={0}>
            <p className="text-lg md:text-xl text-white leading-8">
              At Bharat Product, quality is the silent ingredient in every
              component we produce. It is our promise of reliability, our
              commitment to your success, and the core of our existence.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
