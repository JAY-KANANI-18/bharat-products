import React from "react";
import { TopBar } from "../../src/sections/TopBar";
import { Footer } from "../../src/sections/Footer";
import { AnimatedSection } from "../about/components/AnimatedSection";
import { Users, Briefcase, Award, Heart } from "lucide-react";

export default function TeamPage() {
  const teamValues = [
    {
      icon: Users,
      title: "Collaboration",
      description: "We work together as one team to achieve excellence.",
    },
    {
      icon: Briefcase,
      title: "Expertise",
      description: "50+ skilled professionals with decades of combined experience.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering the highest quality standards.",
    },
    {
      icon: Heart,
      title: "Dedication",
      description: "Passionate about precision engineering and customer satisfaction.",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <TopBar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 md:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/20 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-primary/30 rounded-full animate-bounce delay-300"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gray-400/20 rounded-full animate-ping delay-700"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 text-center">
          <AnimatedSection animationType="fade-up" delay={0}>
            <div className="text-xs font-bold tracking-[0.3em] text-gray-500 mb-4 font-red_hat_text">
              // OUR TEAM //
            </div>
          </AnimatedSection>
          
          <AnimatedSection animationType="fade-up" delay={200}>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 font-red_hat_display">
              Meet Our <span className="text-primary">Talented</span>
              <br />
              Professional Team
            </h1>
          </AnimatedSection>
          
          <AnimatedSection animationType="fade-up" delay={400}>
            <p className="text-lg md:text-xl text-gray-700 leading-8 max-w-3xl mx-auto mb-12">
              Meet the talented professionals behind Bharat Product's success. Our team combines expertise, dedication, and passion for precision engineering.
            </p>
          </AnimatedSection>
          
          {/* Team Stats */}
          <AnimatedSection animationType="fade-up" delay={600}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-gray-600">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-gray-600">Satisfied Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-gray-600">Commitment</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <AnimatedSection animationType="fade-up" delay={0}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Team Values</h2>
              <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <AnimatedSection key={index} animationType="fade-up" delay={index * 150}>
                  <div className="p-8 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                    <Icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                    <p className="text-foreground/70">{value.description}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <AnimatedSection animationType="scale" delay={0}>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">50+</div>
                <p className="text-foreground font-semibold">Team Members</p>
                <p className="text-foreground/70 text-sm mt-2">Skilled professionals</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animationType="scale" delay={150}>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">15+</div>
                <p className="text-foreground font-semibold">Years Experience</p>
                <p className="text-foreground/70 text-sm mt-2">Industry expertise</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animationType="scale" delay={300}>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">500+</div>
                <p className="text-foreground font-semibold">Satisfied Clients</p>
                <p className="text-foreground/70 text-sm mt-2">Worldwide</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animationType="scale" delay={450}>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">100%</div>
                <p className="text-foreground font-semibold">Commitment</p>
                <p className="text-foreground/70 text-sm mt-2">To excellence</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
