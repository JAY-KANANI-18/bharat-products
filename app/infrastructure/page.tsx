"use client";
import React, { useState } from "react";
import { AnimatedSection } from "../about/components/AnimatedSection";
import {
  CheckCircle,
  Gauge,
  Cog,
  Layers,
  Box,
  Camera,
  Image as ImageIcon,
  Wrench,
  ShieldCheck,
} from "lucide-react";
function ImageBlock({
  src,
  index,
  className,
}: {
  src: string;
  index: string;
  className: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl group shadow-sm hover:shadow-lg transition ${className}`}
    >
      {/* Number */}
      <div className="absolute top-4 left-4 z-10 text-black text-2xl font-bold">
        {index}
      </div>

      {/* Image */}
      <div className="relative w-full aspect-[16/9]">
        <img
          src={src}
          alt={`Infrastructure ${index}`}
          loading="lazy"
          className="
            absolute inset-0 
            w-full h-full 
            object-cover 
            transition-transform 
            duration-700 
            group-hover:scale-105
          "
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>
    </div>
  );
}

export default function InfrastructurePage() {
  const [activeTab, setActiveTab] = useState<
    "infrastructure" | "machines" | "quality"
  >("infrastructure");
  const [activeProc, setActiveProc] = useState<
    "turning" | "milling" | "forging"
  >("turning");

  const processes = [
    { id: "turning" as const, label: "Turning", icon: Wrench },
    { id: "milling" as const, label: "Milling", icon: Box },
    { id: "forging" as const, label: "Forging", icon: ShieldCheck },
  ];

  const procStats: Record<
    (typeof processes)[number]["id"],
    { minimum: string; maximum: string; size: string; weight: string }
  > = {
    turning: {
      minimum: "Dia. 0.5 mm",
      maximum: "Dia. 450 mm",
      size: "Length up to 1000 mm",
      weight: "—",
    },
    milling: {
      minimum: "—",
      maximum: "—",
      size: "1200 mm × 600 mm × 650 mm",
      weight: "—",
    },
    forging: {
      minimum: "0.75 Kgs",
      maximum: "06 Kgs",
      size: "—",
      weight: "—",
    },
  };

  type StatKey = "minimum" | "maximum" | "size" | "weight";

  const plating = [
    "Zinc",
    "Nickel",
    "Chrome",
    "Copper",
    "Tin",
    "Silver",
    "Anodizing",
    "Lacquering",
  ];

  const gallery = {
    infrastructure: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&h=800&fit=crop`",
    ],
    machines: [
      "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1472417583565-62e7bdeda490?w=1200&h=800&fit=crop",
    ],
    quality: [
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?w=1200&h=800&fit=crop",
    ],
  } as const;

  const metricImages = [
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&h=800&fit=crop",
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&h=1000&fit=crop)",
          }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />

        <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-8 text-center">
          <AnimatedSection animationType="fade-up" delay={0}>
            <div className="text-xs font-bold tracking-[0.3em] text-white/80 mb-4 font-red_hat_text">
              // INFRASTRUCTURE //
            </div>
          </AnimatedSection>
          <AnimatedSection animationType="fade-up" delay={150}>
            <h1 className="text-4xl md:text-6xl font-bold text-white font-red_hat_display">
              Built for <span className="text-primary">Scale</span> and
              Precision
            </h1>
          </AnimatedSection>
          <AnimatedSection animationType="fade-up" delay={300}>
            <p className="text-white/90 mt-5 text-lg md:text-xl max-w-3xl mx-auto">
              Almost{" "}
              <span className="text-primary font-semibold">100K sq ft</span> of
              production, with
              <span className="text-primary font-semibold">
                {" "}
                170+ machining centers
              </span>{" "}
              and growing.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Metrics + Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <AnimatedSection animationType="fade-up" delay={0}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative p-6 rounded-2xl border border-gray-200 bg-white/90 backdrop-blur shadow-md">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-primary/60 to-primary/80" />
                <div className="flex items-center gap-4">
                  <Layers className="w-9 h-9 text-primary" />
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-foreground">
                      ~100K sq ft
                    </div>
                    <div className="text-foreground/70">
                      Manufacturing space
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative p-6 rounded-2xl border border-gray-200 bg-white/90 backdrop-blur shadow-md">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-primary/60 to-primary/80" />
                <div className="flex items-center gap-4">
                  <Cog className="w-9 h-9 text-primary" />
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-foreground">
                      170+
                    </div>
                    <div className="text-foreground/70">Machining centers</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Metric Gallery (hidden here; reinserted after metrics) */}
      <section className="py-6 md:py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <AnimatedSection animationType="fade-up" delay={100}>
            <div
              className="
          grid 
          grid-cols-1 
          md:grid-cols-12 
          gap-6
        "
            >
              {/* 01 */}
              <ImageBlock
                src={metricImages[0]}
                index="01"
                className="md:col-span-7"
              />

              {/* 02 */}
              <ImageBlock
                src={metricImages[1]}
                index="02"
                className="md:col-span-5"
              />

              {/* 03 */}
              <ImageBlock
                src={metricImages[2]}
                index="03"
                className="md:col-span-7"
              />

              {/* 04 */}
              <ImageBlock
                src={metricImages[3]}
                index="04"
                className="md:col-span-5"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Metric Gallery (after metrics) */}

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-8">
            <div className="text-xs font-bold tracking-[0.3em] text-primary/80 mb-3">
              PRODUCTION MACHINES
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Process Envelope
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                {/* ===== HEADER ===== */}
                <thead>
                  <tr className="bg-primary text-white">
                    <th rowSpan={2} className="px-4 py-3 border-r text-left">
                      Process
                    </th>
                    <th colSpan={2} className="px-4 py-3 text-center border-r">
                      Turning
                    </th>
                    <th rowSpan={2} className="px-4 py-3 text-center border-r">
                      Milling
                      <br />
                      Size
                    </th>
                    <th colSpan={2} className="px-4 py-3 text-center">
                      Forging
                    </th>
                  </tr>

                  <tr className="bg-primary/90 text-white">
                    <th className="px-4 py-2 text-center border-r">Minimum</th>
                    <th className="px-4 py-2 text-center border-r">Maximum</th>
                    <th className="px-4 py-2 text-center border-r">Minimum</th>
                    <th className="px-4 py-2 text-center">Maximum</th>
                  </tr>
                </thead>

                {/* ===== BODY ===== */}
                <tbody>
                  <tr className="border-t">
                    <td className="px-4 py-3 font-semibold">Diameter</td>
                    <td className="px-4 py-3">Dia. 0.5 mm</td>
                    <td className="px-4 py-3">Dia. 450 mm</td>
                    <td className="px-4 py-3 text-center">NA</td>
                    <td className="px-4 py-3 text-center">NA</td>
                    <td className="px-4 py-3 text-center">NA</td>
                  </tr>

                  <tr className="border-t">
                    <td className="px-4 py-3 font-semibold">Size / Travel</td>
                    <td className="px-4 py-3 text-center">NA</td>
                    <td className="px-4 py-3">Up to 1000 mm</td>
                    <td className="px-4 py-3">1200 mm × 600 mm × 650 mm</td>
                    <td className="px-4 py-3 text-center">NA</td>
                    <td className="px-4 py-3 text-center">NA</td>
                  </tr>

                  <tr className="border-t">
                    <td className="px-4 py-3 font-semibold">Weight</td>
                    <td className="px-4 py-3 text-center">NA</td>
                    <td className="px-4 py-3 text-center">NA</td>
                    <td className="px-4 py-3 text-center">NA</td>
                    <td className="px-4 py-3">0.75 Kgs</td>
                    <td className="px-4 py-3">06 Kgs</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Subcontracting Capacities (Plating Feasibility) moved up; hide original later */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <AnimatedSection animationType="fade-up" delay={0}>
            <div className="text-center mb-10">
              <div className="text-xs font-bold tracking-[0.3em] text-primary/80 mb-3 font-red_hat_text">
                SUBCONTRACTING
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground font-red_hat_display mb-2">
                Plating Feasibility
              </h2>
              <p className="text-foreground/70">
                Qualified finishing partners for a range of coatings and
                treatments.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection animationType="fade-up" delay={150}>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {plating.map((name) => (
                <span
                  key={name}
                  className="px-6 py-3 rounded-full text-xl md:text-2xl font-semibold bg-primary/10 text-primary border border-primary/20"
                >
                  {name}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Production Machines (Table) (hidden here; reinserted after metrics) */}
      <section className="py-16 md:py-24 bg-gray-50 hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <AnimatedSection animationType="fade-up" delay={0}>
            <div className="text-center mb-8">
              <div className="text-xs font-bold tracking-[0.3em] text-primary/80 mb-3 font-red_hat_text">
                PRODUCTION MACHINES
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground font-red_hat_display mb-2">
                Process Envelope
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection animationType="fade-up" delay={120}>
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="px-4 py-3 align-middle" rowSpan={2}>
                        Process
                      </th>
                      <th className="px-4 py-3 text-center" colSpan={2}>
                        Turning
                      </th>
                      <th className="px-4 py-3 text-center" colSpan={1}>
                        Milling
                      </th>
                      <th className="px-4 py-3 text-center" colSpan={2}>
                        Forging
                      </th>
                    </tr>
                    <tr className="bg-primary/90 text-white">
                      <th className="px-4 py-2 text-center">Minimum</th>
                      <th className="px-4 py-2 text-center">Maximum</th>
                      <th className="px-4 py-2 text-center">Size</th>
                      <th className="px-4 py-2 text-center">Minimum</th>
                      <th className="px-4 py-2 text-center">Maximum</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="px-4 py-3 font-semibold text-foreground">
                        Diameter
                      </td>
                      <td className="px-4 py-3">Dia. 0.5 mm</td>
                      <td className="px-4 py-3">Dia. 450 mm</td>
                      <td className="px-4 py-3">NA</td>
                      <td className="px-4 py-3">NA</td>
                      <td className="px-4 py-3">NA</td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-4 py-3 font-semibold text-foreground">
                        Size / Travel
                      </td>
                      <td className="px-4 py-3">NA</td>
                      <td className="px-4 py-3">Up to 1000 mm</td>
                      <td className="px-4 py-3">1200 mm x 600 mm x 650 mm</td>
                      <td className="px-4 py-3">NA</td>
                      <td className="px-4 py-3">NA</td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-4 py-3 font-semibold text-foreground">
                        Weight
                      </td>
                      <td className="px-4 py-3">NA</td>
                      <td className="px-4 py-3">NA</td>
                      <td className="px-4 py-3">NA</td>
                      <td className="px-4 py-3">0.75 Kgs</td>
                      <td className="px-4 py-3">06 Kgs</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Machine Banner */}
      <section className="relative">
        <div className="relative h-72 md:h-96 w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&h=800&fit=crop"
            alt="Precision machining"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
        </div>
      </section>

      {/* Production Machines Table (hidden duplicate moved above) */}
      <section className="py-16 md:py-24 bg-white hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <AnimatedSection animationType="fade-up" delay={0}>
            <div className="text-center mb-8">
              <div className="text-xs font-bold tracking-[0.3em] text-primary/80 mb-3 font-red_hat_text">
                PRODUCTION MACHINES
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground font-red_hat_display mb-2">
                Process Envelope
              </h2>
              <p className="text-foreground/70">
                Select a process to view the minimum, maximum, size and weight
                envelopes.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animationType="fade-up" delay={120}>
            <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
              {processes.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActiveProc(p.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm border transition ${
                    activeProc === p.id
                      ? "bg-primary text-white border-primary"
                      : "bg-white text-foreground/80 border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  <p.icon className="w-4 h-4" />
                  {p.label}
                </button>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection animationType="fade-up" delay={180}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-xl border border-gray-200 bg-white/90 backdrop-blur shadow-sm">
                <div className="flex items-start gap-3">
                  <Gauge className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="text-xs uppercase tracking-wide text-foreground/60">
                      Minimum
                    </div>
                    <div className="text-lg font-semibold text-foreground">
                      {procStats[activeProc].minimum}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-5 rounded-xl border border-gray-200 bg-white/90 backdrop-blur shadow-sm">
                <div className="flex items-start gap-3">
                  <Gauge className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="text-xs uppercase tracking-wide text-foreground/60">
                      Maximum
                    </div>
                    <div className="text-lg font-semibold text-foreground">
                      {procStats[activeProc].maximum}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-5 rounded-xl border border-gray-200 bg-white/90 backdrop-blur shadow-sm">
                <div className="flex items-start gap-3">
                  <Layers className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="text-xs uppercase tracking-wide text-foreground/60">
                      Size / Envelope
                    </div>
                    <div className="text-lg font-semibold text-foreground">
                      {procStats[activeProc].size}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-5 rounded-xl border border-gray-200 bg-white/90 backdrop-blur shadow-sm">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="text-xs uppercase tracking-wide text-foreground/60">
                      Weight
                    </div>
                    <div className="text-lg font-semibold text-foreground">
                      {procStats[activeProc].weight}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center text-xs text-foreground/60 mt-4">
              All dimensions are indicative; custom envelopes available on
              request.
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Subcontracting Capacities (original) hidden */}
      <section className="py-16 md:py-24 bg-gray-50 hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <AnimatedSection animationType="fade-up" delay={0}>
            <div className="text-center mb-10">
              <div className="text-xs font-bold tracking-[0.3em] text-primary/80 mb-3 font-red_hat_text">
                SUBCONTRACTING
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground font-red_hat_display mb-2">
                Plating Feasibility
              </h2>
              <p className="text-foreground/70">
                Qualified finishing partners for a range of coatings and
                treatments.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection animationType="fade-up" delay={150}>
            <div className="flex flex-wrap justify-center gap-3">
              {plating.map((name) => (
                <span
                  key={name}
                  className="px-6 py-2.5 rounded-full text-2xl font-medium bg-primary/10 text-primary border border-primary/20"
                >
                  {name}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <AnimatedSection animationType="fade-up" delay={0}>
            <div className="text-center mb-8">
              <div className="text-xs font-bold tracking-[0.3em] text-primary/80 mb-3 font-red_hat_text">
                PHOTO GALLERY
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground font-red_hat_display mb-2">
                Explore Our Facilities
              </h2>
            </div>
          </AnimatedSection>

          <div className="mb-6 flex items-center justify-center gap-2">
            {[
              { id: "infrastructure", label: "Infrastructure", icon: Layers },
              { id: "machines", label: "Machine Images", icon: Box },
              {
                id: "quality",
                label: "Quality Equipment Images",
                icon: Camera,
              },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id as typeof activeTab)}
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm border transition ${
                  activeTab === t.id
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-foreground/80 border-gray-200 hover:bg-gray-50"
                }`}
              >
                <t.icon className="w-4 h-4" />
                {t.label}
              </button>
            ))}
          </div>

          <AnimatedSection animationType="fade-up" delay={100}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {gallery[activeTab].map((src, idx) => (
                <div
                  key={idx}
                  className="relative overflow-hidden rounded-2xl group shadow-sm hover:shadow-lg transition"
                >
                  <div className="relative w-full pb-[65%]">
                    <img
                      src={src}
                      alt={`${activeTab} ${idx + 1}`}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
