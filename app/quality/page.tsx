import React from "react";
import { TopBar } from "../../src/sections/TopBar";
import { Footer } from "../../src/sections/Footer";
import { AnimatedSection } from "../about/components/AnimatedSection";
import { CheckCircle, Award, Zap, Shield } from "lucide-react";

export default function QualityPage() {
  const qualityPoints = [
    {
      icon: Award,
      title: "ISO 9001:2015 Certified",
      description:
        "Our quality management system meets international standards for excellence.",
    },
    {
      icon: Zap,
      title: "Precision Engineering",
      description:
        "Advanced CNC machines and skilled technicians ensure tight tolerances.",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description:
        "Every component undergoes rigorous testing before delivery.",
    },
    {
      icon: CheckCircle,
      title: "100% Inspection",
      description: "Comprehensive quality checks at every stage of production.",
    },
  ];

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
              "url(https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1600&h=900&fit=crop)",
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-4xl mx-auto px-5 md:px-8 text-center z-10">
          <AnimatedSection animationType="fade-up" delay={0}>
            <div className="text-xs font-bold tracking-[0.3em] text-white/80 mb-4 font-red_hat_text">
              // QUALITY EXCELLENCE //
            </div>
          </AnimatedSection>

          <AnimatedSection animationType="fade-up" delay={200}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-red_hat_display">
              <span className="text-primary">Quality</span> Excellence
              <br />
              in Every Component
            </h1>
          </AnimatedSection>

          <AnimatedSection animationType="fade-up" delay={400}>
            <p className="text-lg md:text-xl text-white/90 leading-8 max-w-3xl mx-auto mb-12">
              We are committed to delivering the highest quality
              precision-engineered components that exceed industry standards.
              Our ISO 9001:2015 certification ensures excellence in every
              product.
            </p>
          </AnimatedSection>

          {/* Quality Stats */}
          <AnimatedSection animationType="fade-up" delay={600}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">ISO</div>
                <div className="text-sm text-white/80">9001:2015</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  ±0.01mm
                </div>
                <div className="text-sm text-white/80">Tolerance</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-white/80">Inspection</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  99.9%
                </div>
                <div className="text-sm text-white/80">Quality Rate</div>
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
                Our Quality Standards
              </h2>
              <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {qualityPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <AnimatedSection
                  key={index}
                  animationType="fade-up"
                  delay={index * 150}
                >
                  <div className="p-8 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                    <Icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {point.title}
                    </h3>
                    <p className="text-foreground/70">{point.description}</p>
                  </div>
                </AnimatedSection>
              );
            })}
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
                <div className="text-5xl font-bold text-primary mb-2">RoHS</div>
                <p className="text-foreground font-semibold">Compliant</p>
                <p className="text-foreground/70 text-sm mt-2">
                  Restricted Hazardous Substances
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

      <Footer />
    </div>
  );
}
