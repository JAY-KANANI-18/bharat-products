import React from "react";
import { AnimatedSection } from "../about/components/AnimatedSection";
import { Plane, Cpu, Wrench, Zap, Factory, Cog } from "lucide-react";

export default function IndustriesPage() {
  const industries = [
    {
      icon: Plane,
      title: "Aerospace",
      description: "Precision components for aircraft and aviation systems.",
    },
    {
      icon: Cpu,
      title: "Electronics",
      description:
        "High-precision parts for electronic and semiconductor industries.",
    },
    {
      icon: Wrench,
      title: "Automotive",
      description:
        "Critical components for automotive manufacturing and assembly.",
    },
    {
      icon: Zap,
      title: "Power Generation",
      description:
        "Reliable parts for renewable and traditional energy systems.",
    },
    {
      icon: Factory,
      title: "Industrial Manufacturing",
      description: "Components for heavy machinery and industrial equipment.",
    },
    {
      icon: Cog,
      title: "Mechanical Engineering",
      description: "Precision parts for mechanical systems and assemblies.",
    },
  ];

  return (
    <div className="relative overflow-hidden">
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
              // INDUSTRIES WE SERVE //
            </div>
          </AnimatedSection>

          <AnimatedSection animationType="fade-up" delay={200}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-red_hat_display">
              Industries We <span className="text-primary">Serve</span>
              <br />
              Worldwide
            </h1>
          </AnimatedSection>

          <AnimatedSection animationType="fade-up" delay={400}>
            <p className="text-lg md:text-xl text-white/90 leading-8 max-w-3xl mx-auto mb-12">
              Bharat Product delivers precision components to diverse industries
              worldwide. Our expertise spans aerospace, electronics, automotive,
              and more.
            </p>
          </AnimatedSection>

          {/* Industry Stats */}
          <AnimatedSection animationType="fade-up" delay={600}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">6+</div>
                <div className="text-sm text-white/80">Major Industries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-white/80">Clients Worldwide</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-white/80">Years Serving</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">99%</div>
                <div className="text-sm text-white/80">Satisfaction Rate</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <AnimatedSection animationType="fade-up" delay={0}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Expertise
              </h2>
              <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <AnimatedSection
                  key={index}
                  animationType="fade-up"
                  delay={index * 100}
                >
                  <div className="p-8 border border-gray-200 rounded-xl hover:shadow-lg transition-all hover:border-primary">
                    <Icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {industry.title}
                    </h3>
                    <p className="text-foreground/70">{industry.description}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <AnimatedSection animationType="fade-up" delay={0}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Industries Trust Us
              </h2>
              <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection animationType="fade-up" delay={0}>
              <div className="bg-white p-8 rounded-xl">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  Proven Track Record
                </h3>
                <p className="text-foreground/70">
                  15+ years of delivering high-quality components to leading
                  industries.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animationType="fade-up" delay={150}>
              <div className="bg-white p-8 rounded-xl">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  Quality Assurance
                </h3>
                <p className="text-foreground/70">
                  ISO 9001:2015 certified with rigorous quality control
                  processes.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animationType="fade-up" delay={300}>
              <div className="bg-white p-8 rounded-xl">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  Technical Expertise
                </h3>
                <p className="text-foreground/70">
                  Advanced machinery and skilled engineers for precision
                  manufacturing.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

    </div>
  );
}
