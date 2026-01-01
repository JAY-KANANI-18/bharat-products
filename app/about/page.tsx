import React from "react";
import { TopBar } from "../../src/sections/TopBar";
import { Footer } from "../../src/sections/Footer";
import TestimonialCarousel from "./components/TestimonialCarousel";
import { AnimatedSection } from "./components/AnimatedSection";
import {
  Award,
  Zap,
  Users,
  Target,
  Wrench,
  Cog,
  TrendingUp,
  CheckCircle,
  Lightbulb,
  Cpu,
  Gauge,
  Layers,
  BookOpen,
  Briefcase,
  Shield,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      <TopBar />

      {/* Hero Section - Full Screen */}
      <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/images/about/title-1809528311.jpg)",
          }}
        >
          {/* Base Dark Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Bottom Gradient (CRITICAL for stats visibility) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-8 text-center pt-24 pb-28">
          {/* Top Label */}
          <AnimatedSection animationType="fade-up" delay={0}>
            <div className="text-xs font-bold tracking-[0.3em] text-white/80 mb-4 font-red_hat_text">
              // ABOUT BHARAT PRODUCT //
            </div>
          </AnimatedSection>

          {/* Heading */}
          <AnimatedSection animationType="fade-up" delay={150}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-red_hat_display drop-shadow-[0_4px_30px_rgba(0,0,0,0.75)]">
              Your Curated <span className="text-primary">Metallic</span>
              <br />
              Expertise Partner
            </h1>
          </AnimatedSection>

          {/* Description */}
          <AnimatedSection animationType="fade-up" delay={300}>
            <p className="text-lg md:text-xl text-white/90 leading-8 max-w-3xl mx-auto mb-14 drop-shadow-[0_2px_14px_rgba(0,0,0,0.6)]">
              Transforming raw metals into precision-engineered components that
              drive industrial excellence. We combine advanced technology with
              unwavering integrity to deliver reliable, high-tolerance
              solutions.
            </p>
          </AnimatedSection>

          {/* Stats Panel */}
          <AnimatedSection animationType="fade-up" delay={450}>
            <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-6 py-8 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1 drop-shadow">
                    11+
                  </div>
                  <div className="text-sm text-white/80 tracking-wide">
                    Years Experience
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1 drop-shadow">
                    50+
                  </div>
                  <div className="text-sm text-white/80 tracking-wide">
                    Team Members
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1 drop-shadow">
                    500+
                  </div>
                  <div className="text-sm text-white/80 tracking-wide">
                    Satisfied Clients
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1 drop-shadow">
                    TÜV SÜD
                  </div>
                  <div className="text-sm text-white/80 tracking-wide">
                    Certified
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
        {/* Decorative Bubbles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-5 w-32 h-32 bg-primary/10 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-10 w-24 h-24 bg-primary/15 rounded-full animate-bounce delay-300"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-primary/20 rounded-full animate-ping delay-700"></div>
          <div className="absolute bottom-10 right-1/3 w-28 h-28 bg-primary/10 rounded-full animate-float"></div>
        </div>

        <div className="max-w-6xl mx-auto px-5 md:px-8 relative z-10">
          <AnimatedSection animationType="fade-up" delay={0}>
            <div className="text-center mb-16">
              <div className="text-xs font-bold tracking-[0.3em] text-gray-500 mb-4 font-red_hat_text">
                // ABOUT BHARAT PRODUCT //
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 font-red_hat_display">
                Who We Are
              </h2>
              <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image with Bubbles */}
            <AnimatedSection animationType="slide-left" delay={100}>
              <div className="relative">
                <div className="relative max-w-lg mx-auto lg:max-w-full">
                  <img
                    src="/images/about/Precision Manufacturing Excellence 1926254777.jpg"
                    alt="Bharat Product - Manufacturing Excellence"
                    className="w-full h-auto rounded-full shadow-2xl hover:scale-105 transition-transform duration-500 border-8 border-white"
                  />

                  {/* Animated Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary rounded-full opacity-20 animate-pulse"></div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gray-400 rounded-full opacity-30 animate-float"></div>
                  <div className="absolute top-1/2 -right-8 w-16 h-16 bg-primary/30 rounded-full animate-bounce delay-500"></div>
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Content */}
            <AnimatedSection animationType="slide-right" delay={200}>
              <div className="space-y-8">
                <div>
                  <AnimatedSection animationType="fade-up" delay={300}>
                    <p className="text-lg text-gray-700 leading-8 mb-6">
                      At <strong>Bharat Product</strong>, we are more than just
                      manufacturers; we are architects of precision and partners
                      in progress. As a leading force in Indian manufacturing,
                      we specialize in transforming raw metals—Brass, Stainless
                      Steel, Mild Steel, Copper, and Aluminum—into high-quality,
                      precision-engineered components that drive industrial and
                      national growth.
                    </p>
                  </AnimatedSection>

                  <AnimatedSection animationType="fade-up" delay={400}>
                    <p className="text-gray-700 leading-8 mb-6">
                      Our identity is built on a foundation of Indian
                      manufacturing excellence, where advanced technology meets
                      unwavering integrity.
                    </p>
                  </AnimatedSection>

                  <AnimatedSection animationType="fade-up" delay={500}>
                    <p className="text-gray-700 leading-8 mb-6">
                      Our mission is clear: to harness advanced machining and
                      curated expertise to transform raw metals into reliable,
                      high-tolerance solutions. We go beyond supplying parts; we
                      partner with industries to provide the essential building
                      blocks for our clients' success.
                    </p>
                  </AnimatedSection>
                </div>

                {/* Materials we work with */}
                <AnimatedSection animationType="fade-up" delay={600}>
                  <div className="pt-4">
                    <p className="text-sm font-semibold text-gray-600 mb-4">
                      Materials We Specialize In:
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {[
                        "Brass",
                        "Stainless Steel",
                        "Mild Steel",
                        "Copper",
                        "Aluminum",
                      ].map((m) => (
                        <span
                          key={m}
                          className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 hover:bg-primary/20 hover:shadow-md transition-all duration-300"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </AnimatedSection>
          </div>

          {/* Vision, Promise, Difference Cards */}
          <section className="relative py-20">
            <div className="max-w-7xl mx-auto ">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 items-stretch">
                {/* Card 1 */}
                <AnimatedSection animationType="scale" delay={700}>
                  <div
                    className="h-full p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10
                        border border-primary/20 hover:shadow-xl hover:scale-105
                        transition-all duration-300 relative overflow-hidden group
                        flex flex-col"
                  >
                    {/* Bubble Decoration */}
                    <div
                      className="absolute -top-8 -right-8 w-24 h-24 bg-primary/20 rounded-full
                          group-hover:scale-150 transition-transform duration-500"
                    />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col flex-1">
                      <Target className="w-10 h-10 text-primary mb-4" />

                      <h3 className="text-xl font-bold text-foreground mb-3 font-red_hat_display">
                        Our Vision
                      </h3>

                      <p className="text-gray-700 leading-6 flex-1">
                        To be recognized as India&apos;s most trusted
                        engineering partner and set the global standard for
                        precision manufacturing excellence.
                      </p>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Card 2 */}
                <AnimatedSection animationType="scale" delay={800}>
                  <div
                    className="h-full p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10
                        border border-primary/20 hover:shadow-xl hover:scale-105
                        transition-all duration-300 relative overflow-hidden group
                        flex flex-col"
                  >
                    {/* Bubble Decoration */}
                    <div
                      className="absolute -top-8 -right-8 w-24 h-24 bg-primary/20 rounded-full
                          group-hover:scale-150 transition-transform duration-500"
                    />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col flex-1">
                      <Award className="w-10 h-10 text-primary mb-4" />

                      <h3 className="text-xl font-bold text-foreground mb-3 font-red_hat_display">
                        Our Brand Promise
                      </h3>

                      <p className="text-gray-700 leading-6 flex-1">
                        Precision, forged in trust. Transforming raw metals into
                        reliable, high-tolerance solutions through
                        uncompromising integrity.
                      </p>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Card 3 */}
                <AnimatedSection animationType="scale" delay={900}>
                  <div
                    className="h-full p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10
                        border border-primary/20 hover:shadow-xl hover:scale-105
                        transition-all duration-300 relative overflow-hidden group
                        flex flex-col"
                  >
                    {/* Bubble Decoration */}
                    <div
                      className="absolute -top-8 -right-8 w-24 h-24 bg-primary/20 rounded-full
                          group-hover:scale-150 transition-transform duration-500"
                    />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col flex-1">
                      <Zap className="w-10 h-10 text-primary mb-4" />

                      <h3 className="text-xl font-bold text-foreground mb-3 font-red_hat_display">
                        Our Difference
                      </h3>

                      <p className="text-gray-700 leading-6 flex-1">
                        Where others see an order, we see a partnership. We
                        deliver precision-engineered solutions that become the
                        foundation of your long-term success.
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* The Pillars of Our Excellence */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <AnimatedSection animationType="fade-up" delay={0}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 font-red_hat_display">
                What Sets Us Apart
              </h2>
              <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
            </div>
          </AnimatedSection>

          {/* Alternating Image-Content Sections */}
          <div className="space-y-20">
            {/* Section 1: Quality & Reliability */}
            <AnimatedSection animationType="fade-up" delay={0}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <AnimatedSection animationType="slide-left" delay={200}>
                  <div>
                    <h3 className="text-3xl font-bold text-black mb-6 font-red_hat_display">
                      Uncompromising Quality & Reliability
                    </h3>
                    <p className="text-gray-700 leading-8 mb-4">
                      As an TÜV SÜD & ISO 9001:2015 Certified Company, our
                      adherence to stringent international standards is
                      non-negotiable. We employ RoHS and REACH-compliant
                      materials, ensuring every component meets the most
                      demanding industry requirements and earns the constant
                      faith of our customers.
                    </p>
                    <div className="flex items-center gap-3 text-primary font-semibold">
                      <Award className="w-6 h-6" />
                      <span>TÜV SÜD Certified</span>
                    </div>
                  </div>
                </AnimatedSection>
                <AnimatedSection animationType="slide-right" delay={400}>
                  <div className="relative group">
                    <img
                      src="/images/about/What Sets Us Apart 2646862705.jpg"
                      alt="Quality & Reliability"
                      className="w-full h-auto rounded-full shadow-2xl group-hover:scale-105 transition-transform duration-500 border-8 border-white"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-full"></div>
                    {/* Decorative Bubbles */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary rounded-full opacity-20 animate-pulse"></div>
                    <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gray-400 rounded-full opacity-30 animate-float"></div>
                    <div className="absolute top-1/2 -right-8 w-16 h-16 bg-primary/30 rounded-full animate-bounce delay-500"></div>
                  </div>
                </AnimatedSection>
              </div>
            </AnimatedSection>

            {/* Section 2: Engineering with Excellent Precision */}
            <AnimatedSection animationType="fade-up" delay={0}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <AnimatedSection
                  animationType="slide-left"
                  delay={200}
                  className="lg:order-2"
                >
                  <div>
                    <h3 className="text-3xl font-bold text-black mb-6 font-red_hat_display">
                      Engineering with Excellent Precision
                    </h3>
                    <p className="text-gray-700 leading-8 mb-4">
                      We are highly equipped with cutting-edge technology,
                      enabling us to deliver exceptional precision and
                      high-tolerance solutions day after day. Our advanced CNC
                      machinery and skilled engineers ensure every component
                      meets exact specifications.
                    </p>
                    <div className="flex items-center gap-3 text-primary font-semibold">
                      <Zap className="w-6 h-6" />
                      <span>±0.01mm Tolerance Capability</span>
                    </div>
                  </div>
                </AnimatedSection>
                <AnimatedSection
                  animationType="slide-right"
                  delay={400}
                  className="lg:order-1"
                >
                  <div className="relative group">
                    <img
                      src="/images/about/Engineering with Excellent Precision 8749717.jpg"
                      alt="Precision Engineering"
                      className="w-full h-auto rounded-full shadow-2xl group-hover:scale-105 transition-transform duration-500 border-8 border-white"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-full"></div>
                    {/* Decorative Bubbles */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary rounded-full opacity-20 animate-pulse"></div>
                    <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gray-400 rounded-full opacity-30 animate-float"></div>
                    <div className="absolute top-1/2 -right-8 w-16 h-16 bg-primary/30 rounded-full animate-bounce delay-500"></div>
                  </div>
                </AnimatedSection>
              </div>
            </AnimatedSection>

            {/* Section 3: Customer-Centric Partnership */}
            <AnimatedSection animationType="fade-up" delay={0}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <AnimatedSection animationType="slide-left" delay={200}>
                  <div>
                    <h3 className="text-3xl font-bold text-black mb-6 font-red_hat_display">
                      Customer-Centric Partnership
                    </h3>
                    <p className="text-gray-700 leading-8 mb-4">
                      Our "customer-first" policy is more than a motto; it's our
                      practice. We believe in strengthening relationships
                      through unmatched transparency and providing fully
                      customized solutions for every unique requirement,
                      ensuring total satisfaction.
                    </p>
                    <div className="flex items-center gap-3 text-primary font-semibold">
                      <Users className="w-6 h-6" />
                      <span>500+ Satisfied Clients</span>
                    </div>
                  </div>
                </AnimatedSection>
                <AnimatedSection animationType="slide-right" delay={400}>
                  <div className="relative group">
                    <img
                      src="/images/about/customer-centricity 2659741901.jpg"
                      alt="Customer Partnership"
                      className="w-full h-auto rounded-full shadow-2xl group-hover:scale-105 transition-transform duration-500 border-8 border-white"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-full"></div>
                    {/* Decorative Bubbles */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary rounded-full opacity-20 animate-pulse"></div>
                    <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gray-400 rounded-full opacity-30 animate-float"></div>
                    <div className="absolute top-1/2 -right-8 w-16 h-16 bg-primary/30 rounded-full animate-bounce delay-500"></div>
                  </div>
                </AnimatedSection>
              </div>
            </AnimatedSection>

            {/* Section 4: Unbeatable Value & Capacity */}
            <AnimatedSection animationType="fade-up" delay={0}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <AnimatedSection
                  animationType="slide-left"
                  delay={200}
                  className="lg:order-2"
                >
                  <div>
                    <h3 className="text-3xl font-bold text-black mb-6 font-red_hat_display">
                      Unbeatable Value & Capacity
                    </h3>
                    <p className="text-gray-700 leading-8 mb-4">
                      We combine the most competitive rates in the market with a
                      massive production capacity, capable of producing millions
                      of precision components daily. This synergy of scale and
                      efficiency makes us the undeniable market leader.
                    </p>
                    <div className="flex items-center gap-3 text-primary font-semibold">
                      <Target className="w-6 h-6" />
                      <span>Millions of Components Daily</span>
                    </div>
                  </div>
                </AnimatedSection>
                <AnimatedSection
                  animationType="slide-right"
                  delay={400}
                  className="lg:order-1"
                >
                  <div className="relative group">
                    <img
                      src="/images/about/Unbeatable Value & Capacity 2175192891.jpg"
                      alt="Value & Capacity"
                      className="w-full h-auto rounded-full shadow-2xl group-hover:scale-105 transition-transform duration-500 border-8 border-white"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-full"></div>
                    {/* Decorative Bubbles */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary rounded-full opacity-20 animate-pulse"></div>
                    <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gray-400 rounded-full opacity-30 animate-float"></div>
                    <div className="absolute top-1/2 -right-8 w-16 h-16 bg-primary/30 rounded-full animate-bounce delay-500"></div>
                  </div>
                </AnimatedSection>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Main About Section - Improved Desktop Layout */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          {/* Story, Culture, Capabilities Sections */}
          <div className="space-y-20">
            {/* Our Story Section - Timeline Style */}
            <AnimatedSection animationType="fade-up" delay={0}>
              <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-3xl p-12 relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/10 rounded-full"></div>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <AnimatedSection animationType="slide-left" delay={200}>
                    <div>
                      <div className="flex items-center mb-8">
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mr-4 animate-pulse shadow-lg">
                          <BookOpen className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-4xl font-semibold text-black font-red_hat_display">
                          Our Story
                        </h2>
                      </div>

                      <div className="space-y-6">
                        <AnimatedSection animationType="fade-up" delay={400}>
                          <div className="flex gap-4">
                            <div className="w-1 bg-gradient-to-b from-primary to-primary/30 rounded-full"></div>
                            <div>
                              <h3 className="font-bold text-black mb-2">
                                Quality Management Excellence
                              </h3>
                              <p className="text-gray-700 leading-7">
                                We take your trust seriously, employing proven
                                quality management principles to enhance
                                customer satisfaction and continually improve
                                our performance and capabilities.
                              </p>
                            </div>
                          </div>
                        </AnimatedSection>

                        <AnimatedSection animationType="fade-up" delay={600}>
                          <div className="flex gap-4">
                            <div className="w-1 bg-gradient-to-b from-primary to-primary/30 rounded-full"></div>
                            <div>
                              <h3 className="font-bold text-black mb-2">
                                Industry Expertise
                              </h3>
                              <p className="text-gray-700 leading-7">
                                We have decades of experience meeting stringent
                                regulations for automotive, aerospace and
                                medical device industries with precision and
                                reliability.
                              </p>
                            </div>
                          </div>
                        </AnimatedSection>
                      </div>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection animationType="slide-right" delay={400}>
                    <div className="relative group">
                      <img
                        src="/images/about/Our Story 1082567276.jpg"
                        alt="Our Manufacturing Story"
                        className="w-full h-auto rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500 border-8 border-white"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl"></div>
                      <div className="absolute bottom-6 left-6 text-white">
                        <div className="bg-black/60 backdrop-blur px-4 py-3 rounded-full text-sm font-bold flex items-center gap-2">
                          <Layers className="w-5 h-5" /> Since 2014
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </AnimatedSection>

            {/* Our Culture Section - Card Grid Style */}
            <AnimatedSection animationType="fade-up" delay={0}>
              <div>
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center shadow-lg">
                      <Briefcase className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <h2 className="text-4xl font-semibold text-black mb-4 font-red_hat_display">
                    Our Culture
                  </h2>
                  <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-8">
                    Over the years, we've built a culture of service, teamwork,
                    and innovation with an exceptionally diverse staff and
                    strong commitment to excellence.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <AnimatedSection animationType="scale" delay={300}>
                    <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-primary overflow-hidden">
                      <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                      <div className="relative z-10">
                        <div className="text-4xl font-bold text-primary mb-2">
                          8+
                        </div>
                        <div className="text-sm text-gray-600 font-semibold">
                          Years Average Tenure
                        </div>
                        <p className="text-gray-700 text-sm mt-3 leading-6">
                          Our team members stay with us, reflecting our positive
                          work environment.
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection animationType="scale" delay={400}>
                    <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-primary overflow-hidden">
                      <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                      <div className="relative z-10">
                        <div className="text-4xl font-bold text-primary mb-2">
                          95%
                        </div>
                        <div className="text-sm text-gray-600 font-semibold">
                          Employee Satisfaction
                        </div>
                        <p className="text-gray-700 text-sm mt-3 leading-6">
                          Our team is satisfied and engaged in their work every
                          day.
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection animationType="scale" delay={500}>
                    <div className="group relative bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-white overflow-hidden">
                      <div className="absolute -top-10 -right-10 w-24 h-24 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                      <div className="relative z-10">
                        <div className="text-4xl font-bold mb-2">26+</div>
                        <div className="text-sm font-semibold opacity-90">
                          Diverse Team Members
                        </div>
                        <p className="text-white/90 text-sm mt-3 leading-6">
                          Bringing varied perspectives and expertise to every
                          project.
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>

                <section className="relative py-20">
                  <div className="max-w-7xl mx-auto px-5 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                      {/* LEFT : IMAGE (same height as right content) */}
                      <AnimatedSection animationType="slide-left" delay={200}>
                        <div className="relative h-full w-full rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                          <img
                            src="/images/about/Service Excellence 2676276151.jpg"
                            alt="Team Culture"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          />
                        </div>
                      </AnimatedSection>

                      {/* RIGHT : CONTENT */}
                      <AnimatedSection animationType="slide-right" delay={400}>
                        <div className="flex flex-col space-y-6 h-full">
                          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-6 border border-primary/20">
                            <h3 className="text-xl font-bold text-black mb-3 flex items-center gap-2">
                              <span className="w-3 h-3 bg-primary rounded-full"></span>
                              Service Excellence
                            </h3>
                            <p className="text-gray-700 leading-7">
                              We prioritize customer and team member
                              satisfaction in everything we do.
                            </p>
                          </div>

                          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-6 border border-primary/20">
                            <h3 className="text-xl font-bold text-black mb-3 flex items-center gap-2">
                              <span className="w-3 h-3 bg-primary rounded-full"></span>
                              Teamwork & Innovation
                            </h3>
                            <p className="text-gray-700 leading-7">
                              Collaborative environment where ideas flourish and
                              innovation thrives.
                            </p>
                          </div>

                          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-6 border border-primary/20">
                            <h3 className="text-xl font-bold text-black mb-3 flex items-center gap-2">
                              <span className="w-3 h-3 bg-primary rounded-full"></span>
                              Continuous Growth
                            </h3>
                            <p className="text-gray-700 leading-7">
                              We invest in our people's development and career
                              advancement.
                            </p>
                          </div>
                        </div>
                      </AnimatedSection>
                    </div>
                  </div>
                </section>
              </div>
            </AnimatedSection>

            {/* Our Capabilities Section - Hexagon Grid Style */}
            <AnimatedSection animationType="fade-up" delay={0}>
              <div>
                <div className="text-center mb-16">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center shadow-lg">
                      <Cog className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <h2 className="text-4xl font-semibold text-black mb-4 font-red_hat_display">
                    Our Capabilities
                  </h2>
                  <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-8">
                    We specialize in precision manufacturing across diverse
                    product categories with cutting-edge technology and expert
                    craftsmanship.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                  {[
                    {
                      icon: Wrench,
                      text: "Gaskets & Sealing",
                      color: "from-yellow-500 to-yellow-600",
                    },
                    {
                      icon: Shield,
                      text: "EMI/RFI Shielding",
                      color: "from-yellow-500 to-yellow-600",
                    },
                    {
                      icon: Gauge,
                      text: "Spacers & Washers",
                      color: "from-yellow-500 to-yellow-600",
                    },
                    {
                      icon: Zap,
                      text: "Sound Dampeners",
                      color: "from-yellow-500 to-yellow-600",
                    },
                    {
                      icon: Cpu,
                      text: "Conductive Adhesives",
                      color: "from-yellow-500 to-yellow-600",
                    },
                    {
                      icon: Layers,
                      text: "Custom Manufacturing",
                      color: "from-yellow-500 to-yellow-600",
                    },
                  ].map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <AnimatedSection
                        key={index}
                        animationType="scale"
                        delay={300 + index * 100}
                      >
                        <div
                          className={`group relative bg-gradient-to-br ${item.color} rounded-2xl p-8 text-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:scale-105`}
                        >
                          <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                          <div className="relative z-10 text-center">
                            <IconComponent className="w-12 h-12 mx-auto mb-4 opacity-90" />
                            <h3 className="font-bold text-lg">{item.text}</h3>
                          </div>
                        </div>
                      </AnimatedSection>
                    );
                  })}
                </div>

                <section className="relative py-20">
                  <div className="max-w-7xl mx-auto px-5 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                      {/* LEFT : CONTENT (defines height) */}
                      <AnimatedSection animationType="slide-left" delay={200}>
                        <div className="flex flex-col space-y-6 h-full">
                          <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-primary">
                            <h3 className="text-2xl font-bold text-black mb-4 flex items-center gap-3">
                              <Award className="w-6 h-6 text-primary" />
                              Quality Assured
                            </h3>
                            <p className="text-gray-700 leading-8">
                              ISO 9001:2015 certified quality management system
                              ensures every component meets the highest
                              standards of excellence.
                            </p>
                          </div>

                          <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-primary">
                            <h3 className="text-2xl font-bold text-black mb-4 flex items-center gap-3">
                              <Zap className="w-6 h-6 text-primary" />
                              Advanced Technology
                            </h3>
                            <p className="text-gray-700 leading-8">
                              State-of-the-art CNC machinery and precision
                              equipment enable us to deliver consistent,
                              high-tolerance components.
                            </p>
                          </div>
                        </div>
                      </AnimatedSection>

                      {/* RIGHT : IMAGE GRID (matches left height) */}
                      <AnimatedSection animationType="slide-right" delay={400}>
                        <div className="h-full grid grid-cols-2 gap-4">
                          {[
                            {
                              src: "/images/about/CNC Technology 2473146403.jpg",
                              label: "CNC Technology",
                            },
                            {
                              src: "/images/about/Precision Machining 1926254777.jpg",
                              label: "Precision Machining",
                            },
                            {
                              src: "/images/about/Quality Control 1926254777.jpg",
                              label: "Quality Control",
                            },
                            {
                              src: "/images/about/Assembly & Testing 348871838.jpg",
                              label: "Assembly & Testing",
                            },
                          ].map((item, index) => (
                            <AnimatedSection
                              key={index}
                              animationType="scale"
                              delay={600 + index * 100}
                            >
                              <div className="relative h-full group overflow-hidden rounded-2xl">
                                <img
                                  src={item.src}
                                  alt={item.label}
                                  className="absolute inset-0 w-full h-full object-cover
                             group-hover:scale-110 transition-transform duration-500"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                                {/* Label */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                  <p className="font-bold text-sm">
                                    {item.label}
                                  </p>
                                </div>
                              </div>
                            </AnimatedSection>
                          ))}
                        </div>
                      </AnimatedSection>
                    </div>
                  </div>
                </section>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection animationType="fade-up" delay={0}>
            <div className="text-center mb-16">
              <div className="text-xs font-bold tracking-[0.3em] text-gray-500 mb-4 font-red_hat_text">
                // ENHANCING BUSINESS IMPACT //
              </div>
              <h2 className="text-4xl font-bold text-black font-red_hat_display">
                Benefits of Our Solutions
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
            {[
              {
                icon: Users,
                title: "Trust",
                desc: "Integrity‑driven partnerships with long‑term reliability at the core.",
              },
              {
                icon: Layers,
                title: "Quality",
                desc: "Every product meets the highest benchmarks — no compromises.",
              },
              {
                icon: Gauge,
                title: "Excellent Precision",
                desc: "Cutting‑edge equipment delivers unmatched tolerance and repeatability.",
              },
              {
                icon: CheckCircle,
                title: "Service",
                desc: "A customer‑first philosophy that delivers experiences—not just products.",
              },
              {
                icon: TrendingUp,
                title: "Rate",
                desc: "Most competitive pricing without sacrificing quality or service.",
              },
              {
                icon: Shield,
                title: "Reliability",
                desc: "Trusted for dependable solutions—time after time.",
              },
              {
                icon: Lightbulb,
                title: "Satisfaction",
                desc: "Your satisfaction drives our innovation and daily practice.",
              },
              {
                icon: Cpu,
                title: "Customization",
                desc: "Tailored solutions for every unique requirement.",
              },
              {
                icon: Award,
                title: "Market Leadership",
                desc: "A position earned through dedication, innovation, and loyalty.",
              },
              {
                icon: Wrench,
                title: "Capacity",
                desc: "Millions of precision components per day—scale with efficiency.",
              },
              {
                icon: Zap,
                title: "Transparency",
                desc: "Open, honest interactions that strengthen relationships.",
              },
              {
                icon: Target,
                title: "Large Customer Base",
                desc: "Widespread industry trust reflected in our growing clientele.",
              },
            ].map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <AnimatedSection
                  key={index}
                  animationType="scale"
                  delay={150 + index * 100}
                >
                  <div className="text-center group hover:scale-105 transition-all duration-300">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 animate-float bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] text-white shadow-md">
                      <IconComponent className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 font-red_hat_display">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-6">{benefit.desc}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonial Carousel */}
      <TestimonialCarousel />

      {/* Manufacturing Showcase */}
      <section className="bg-gradient-to-br from-white to-gray-50 py-20 md:py-32 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full"></div>

        <div className="max-w-6xl mx-auto px-5 md:px-8 relative z-10">
          <AnimatedSection animationType="fade-up" delay={0}>
            <div className="text-center mb-16">
              <div className="text-xs font-bold tracking-[0.3em] text-gray-500 mb-4 font-red_hat_text">
                // EXCELLENCE IN MANUFACTURING //
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 font-red_hat_display">
                Our Manufacturing Excellence
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-8">
                State-of-the-art facilities and cutting-edge technology
                delivering precision components with uncompromising quality
                standards.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                src: "/images/about/CNC Technology 2473146403.jpg",
                title: "Advanced CNC Technology",
                desc: "Precision machinery for consistent, high-tolerance manufacturing",
              },
              {
                src: "/images/about/Precision Machining 1926254777.jpg",
                title: "Precision Manufacturing",
                desc: "Expert craftsmanship meets advanced engineering excellence",
              },
              {
                src: "/images/about/Quality Control 1926254777.jpg",
                title: "Quality Control",
                desc: "Rigorous testing and inspection at every production stage",
              },
            ].map((item, index) => (
              <AnimatedSection
                key={index}
                animationType="scale"
                delay={200 + index * 150}
              >
                <div className="group h-full">
                  <div className="relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold font-red_hat_display mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-white/90 leading-6">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animationType="fade-up" delay={800}>
            <div className="relative">
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl p-12 md:p-16 border border-primary/20 relative overflow-hidden">
                {/* Decorative Element */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full"></div>

                <div className="relative z-10 text-center">
                  <div className="flex items-center justify-center mb-6">
                    <Award className="w-12 h-12 text-primary mr-3" />
                    <h3 className="text-3xl font-bold text-black font-red_hat_display">
                      TÜV SÜD Certified
                    </h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-8 max-w-3xl mx-auto mb-6">
                    Our facility is ISO 9001:2015 certified, ensuring the
                    highest standards of quality management. We craft
                    high-quality components using advanced technology and
                    rigorous quality control processes. Our commitment to
                    excellence allows us to serve various industries with
                    precision-engineered solutions that exceed expectations.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <div className="bg-white rounded-full px-6 py-3 shadow-md">
                      <span className="font-semibold text-primary">
                        ✓ ISO 9001:2015 Certified
                      </span>
                    </div>
                    <div className="bg-white rounded-full px-6 py-3 shadow-md">
                      <span className="font-semibold text-primary">
                        ✓ RoHS Compliant
                      </span>
                    </div>
                    <div className="bg-white rounded-full px-6 py-3 shadow-md">
                      <span className="font-semibold text-primary">
                        ✓ REACH Compliant
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] py-20 md:py-32 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=600&fit=crop"
            alt="Manufacturing Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-5 md:px-8 text-center">
          <AnimatedSection animationType="fade-up" delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-red_hat_display">
              Ready to Start Your Project?
            </h2>
            <p className="text-white/90 text-xl leading-8 mb-8 max-w-2xl mx-auto">
              We're not just crafting products; we're shaping the future of
              manufacturing. Join us on our journey towards excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="bg-white text-primary font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 animate-glow"
              >
                Get Started Today
              </a>
              <a
                href="/products"
                className="border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105"
              >
                Explore Products
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
