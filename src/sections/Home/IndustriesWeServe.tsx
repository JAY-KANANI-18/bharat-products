import React from "react";
import { AnimatedSection } from "../../../app/about/components/AnimatedSection";
import {
  Car,
  Ship,
  Plane,
  Sun,
  Droplet,
  Package,
  Flame,
  Zap,
  Wind,
  Sprout,
  BatteryCharging,
  Factory,
} from "lucide-react";

const INDUSTRIES = [
  {
    icon: Car,
    title: "Automobile",
    description:
      "Precision automotive components for engine, transmission, and electrical systems",
  },
  {
    icon: Ship,
    title: "Shipping",
    description:
      "Marine-grade brass components for maritime and offshore applications",
  },
  {
    icon: Plane,
    title: "Aviation & Aerospace",
    description:
      "High-precision aerospace components meeting strict aviation standards",
  },
  {
    icon: Sun,
    title: "Renewable Energy",
    description:
      "Solar and wind energy components for sustainable power generation",
  },
  {
    icon: Droplet,
    title: "Sanitary",
    description:
      "Hygienic brass fittings and components for plumbing and sanitary systems",
  },
  {
    icon: Package,
    title: "Plastic & Rubber",
    description:
      "Specialized components for plastic injection molding and rubber processing",
  },
  {
    icon: Flame,
    title: "Oil & Gas",
    description:
      "Corrosion-resistant components for petroleum and natural gas applications",
  },
  {
    icon: Zap,
    title: "Electricals & Power",
    description:
      "High-conductivity electrical components and power distribution parts",
  },
  {
    icon: Wind,
    title: "Pneumatic",
    description:
      "Precision pneumatic fittings and air handling system components",
  },
  {
    icon: Sprout,
    title: "Agriculture",
    description:
      "Durable agricultural equipment components and irrigation system parts",
  },
  {
    icon: BatteryCharging,
    title: "EV (Electric Vehicles)",
    description:
      "Advanced components for electric vehicle charging and power systems",
  },
  {
    icon: Factory,
    title: "Industrial Manufacturing",
    description:
      "Custom industrial components for various manufacturing applications",
  },
] as const;

export const IndustriesWeServe: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <AnimatedSection animationType="fade-up">
          <div className="text-center mb-10 md:mb-12">
            <div className="text-xs font-bold tracking-[0.3em] text-gray-500 mb-3 font-red_hat_text">
              // GLOBAL EXCELLENCE //
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-red_hat_display">
              Industries We <span className="text-primary">Serve</span>
            </h2>
            <p className="text-foreground/70 max-w-3xl mx-auto leading-7">
              We deliver precision brass parts and various other engineered
              solutions across different industries, meeting specific
              requirements and quality standards for each sector.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
              {["ISO Certified", "Global Standards", "Quality Assured"].map(
                (pill) => (
                  <span
                    key={pill}
                    className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary ring-1 ring-primary/20"
                  >
                    {pill}
                  </span>
                )
              )}
            </div>
          </div>
        </AnimatedSection>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {INDUSTRIES.map((item, index) => {
            const Icon = item.icon;
            return (
              <AnimatedSection
                key={item.title}
                animationType="fade-up"
                delay={index * 80}
              >
                <div className="p-6 border border-gray-200 rounded-xl bg-white h-full hover:shadow-lg hover:border-primary transition-all">
                  <Icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-foreground/70 leading-7 text-sm">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
