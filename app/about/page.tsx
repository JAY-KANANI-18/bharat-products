import React from "react";
import { TopBar } from "../../src/sections/TopBar";
import { Footer } from "../../src/sections/Footer";
import TestimonialCarousel from "./components/TestimonialCarousel";
import { AnimatedSection } from "./components/AnimatedSection";
import { Award, Zap, Users, Target, Wrench, Cog, TrendingUp, CheckCircle, Lightbulb, Cpu, Gauge, Layers, BookOpen, Briefcase, Shield } from "lucide-react";

export default function AboutPage() {
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
              // ABOUT BHARAT PRODUCT //
            </div>
          </AnimatedSection>
          
          <AnimatedSection animationType="fade-up" delay={200}>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 font-red_hat_display">
              Your Curated <span className="text-primary">Metallic</span>
              <br />
              Expertise Partner
            </h1>
          </AnimatedSection>
          
          <AnimatedSection animationType="fade-up" delay={400}>
            <p className="text-lg md:text-xl text-gray-700 leading-8 max-w-3xl mx-auto mb-12">
              Transforming raw metals into precision-engineered components that drive industrial excellence. We combine advanced technology with unwavering integrity to deliver reliable, high-tolerance solutions.
            </p>
          </AnimatedSection>
          
          {/* About Stats */}
          <AnimatedSection animationType="fade-up" delay={600}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-gray-600">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-gray-600">Satisfied Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">ISO</div>
                <div className="text-sm text-gray-600">9001:2015</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <AnimatedSection animationType="fade-up" delay={0}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 font-red_hat_display">
                Who We Are
              </h2>
              <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animationType="slide-left" delay={100}>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-8">
                  At <strong>Bharat Product</strong>, we are architects of precision and partners in progress. We transform raw metals—Brass, Stainless Steel, Mild Steel, Copper, and Aluminum—into high-quality, precision-engineered components that drive industrial excellence.
                </p>
                <p className="text-gray-700 leading-8">
                  With 15+ years of expertise, our team of 50+ skilled professionals combines advanced technology with unwavering integrity. We deliver reliable, high-tolerance solutions that exceed industry standards and customer expectations.
                </p>
                <p className="text-gray-700 leading-8">
                  Our ISO 9001:2015 certification reflects our commitment to quality management and continuous improvement. We serve 500+ satisfied clients across diverse industries worldwide.
                </p>

                {/* Materials we work with */}
                <div className="pt-4">
                  <p className="text-sm font-semibold text-gray-600 mb-3">Materials We Specialize In:</p>
                  <div className="flex flex-wrap gap-2">
                    {['Brass','Stainless Steel','Mild Steel','Copper','Aluminum'].map((m) => (
                      <span key={m} className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">{m}</span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animationType="slide-right" delay={200}>
              <div className="grid grid-cols-1 gap-4">
                <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 hover:shadow-lg transition-shadow">
                  <Target className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-lg font-bold text-foreground mb-2">Our Mission</h3>
                  <p className="text-gray-700 text-sm leading-6">Transform raw metals through advanced machining and curated expertise into dependable building blocks for our clients' success and growth.</p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 hover:shadow-lg transition-shadow">
                  <Award className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-lg font-bold text-foreground mb-2">Our Vision</h3>
                  <p className="text-gray-700 text-sm leading-6">Be India's most trusted engineering partner and a global benchmark for precision manufacturing, innovation, and customer satisfaction.</p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 hover:shadow-lg transition-shadow">
                  <Zap className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-lg font-bold text-foreground mb-2">Our Promise</h3>
                  <p className="text-gray-700 text-sm leading-6">Precision forged in trust—delivering reliable, high-tolerance solutions with unwavering integrity and exceptional service.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* The Pillars of Our Excellence */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <AnimatedSection animationType="fade-up" delay={0}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 font-red_hat_display">What Sets Us Apart</h2>
              <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Award,
                title: 'Quality & Reliability',
                desc: 'ISO 9001:2015 certified with RoHS & REACH compliant materials—quality you can trust.'
              },
              {
                icon: Zap,
                title: 'Precision Engineering',
                desc: 'Cutting-edge technology and high-tolerance machining for consistent excellence.'
              },
              {
                icon: Users,
                title: 'Customer Partnership',
                desc: 'Transparent, tailored solutions with a true customer-first approach.'
              },
              {
                icon: Target,
                title: 'Value & Capacity',
                desc: 'Competitive rates and massive capacity—millions of components daily.'
              },
            ].map((p, i) => {
              const Icon = p.icon;
              return (
                <AnimatedSection key={i} animationType="scale" delay={100 + i * 100}>
                  <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                    <Icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="font-bold text-foreground mb-2">{p.title}</h3>
                    <p className="text-gray-700 text-sm leading-6">{p.desc}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main About Section - Improved Desktop Layout */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            
            {/* Image Section with Animation */}
            <AnimatedSection animationType="slide-left" delay={0}>
              <div className="relative">
                <div className="relative max-w-lg mx-auto lg:max-w-full">
                  <img
                    src="https://c.animaapp.com/mhypf3xrXgMUxE/assets/img-yellow-demo-11-1280x1280.avif"
                    title="About Bharat Product"
                    alt="Bharat Product manufacturing facility"
                    className="w-full h-auto rounded-full shadow-2xl hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Animated Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary rounded-full opacity-20 animate-pulse"></div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gray-400 rounded-full opacity-30 animate-float"></div>
                </div>
              </div>
            </AnimatedSection>

            {/* Content Section */}
            <AnimatedSection animationType="slide-right" delay={200}>
              <div className="space-y-8">
                <div>
                  <AnimatedSection animationType="fade-up" delay={400}>
                    <div className="text-xs font-bold tracking-[0.3em] text-gray-500 mb-4 font-red_hat_text">
                      // ABOUT AMWERK //
                    </div>
                  </AnimatedSection>
                  <AnimatedSection animationType="fade-up" delay={600}>
                    <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 font-red_hat_display">
                      Precision Manufacturing Excellence
                    </h2>
                  </AnimatedSection>
                </div>
                
                <AnimatedSection animationType="fade-up" delay={800}>
                  <p className="text-lg text-gray-700 leading-8 mb-6">
                    Amwerk has been dedicated to precision manufacturing for over two decades. We specialize in custom products, electronic interfaces, and advanced manufacturing solutions, ensuring quality and innovation in every product we deliver.
                  </p>
                </AnimatedSection>
                
                <AnimatedSection animationType="fade-up" delay={1000}>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-4 bg-gray-50 rounded-xl hover-lift">
                      <div className="text-3xl font-bold text-primary mb-2">2000+</div>
                      <div className="text-sm text-gray-600">Projects Completed</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-xl hover-lift">
                      <div className="text-3xl font-bold text-primary mb-2">15+</div>
                      <div className="text-sm text-gray-600">Years Experience</div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </AnimatedSection>
          </div>

          {/* Story, Culture, Capabilities Sections */}
          <div className="space-y-20">
            
            {/* Our Story Section */}
            <AnimatedSection animationType="fade-up" delay={0}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <AnimatedSection animationType="slide-left" delay={200}>
                  <div>
                    <header className="mb-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4 animate-float">
                          <BookOpen className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-4xl font-semibold text-black font-red_hat_display">
                          Our Story
                        </h2>
                      </div>
                    </header>
                    <div className="space-y-4">
                      <AnimatedSection animationType="fade-up" delay={400}>
                        <p className="text-gray-700 leading-7">
                          We take your trust seriously, employing proven quality management principles to enhance customer satisfaction and continually improve our performance and capabilities.
                        </p>
                      </AnimatedSection>
                      <AnimatedSection animationType="fade-up" delay={600}>
                        <p className="text-gray-700 leading-7">
                          We have decades of experience meeting stringent regulations for automotive, aerospace and medical device industries.
                        </p>
                      </AnimatedSection>
                    </div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection animationType="slide-right" delay={400}>
                  <div className="relative group">
                    <img 
                      src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&h=400&fit=crop" 
                      alt="Our Manufacturing Story" 
                      className="w-full h-80 object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--primary))]/20 to-transparent rounded-2xl"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="bg-black/50 px-3 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Layers className="w-4 h-4" /> Since 1995
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </AnimatedSection>

            {/* Our Culture Section */}
            <AnimatedSection animationType="fade-up" delay={0}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <AnimatedSection animationType="slide-left" delay={200} className="lg:order-2">
                  <div>
                    <header className="mb-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4 animate-float">
                          <Briefcase className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-4xl font-semibold text-black font-red_hat_display">
                          Our Culture
                        </h2>
                      </div>
                    </header>
                    <div className="space-y-4">
                      <AnimatedSection animationType="fade-up" delay={400}>
                        <p className="text-gray-700 leading-7">
                          Over the years, we've built a culture of service, teamwork, and innovation. With an exceptionally diverse staff and an average tenure of ten years.
                        </p>
                      </AnimatedSection>
                      
                      <AnimatedSection animationType="fade-up" delay={600}>
                        <div className="grid grid-cols-2 gap-4 mt-6">
                          <div className="bg-gray-50 p-4 rounded-xl text-center hover-lift">
                            <div className="text-2xl font-bold text-primary mb-1">10+</div>
                            <div className="text-sm text-gray-600">Years Average Tenure</div>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-xl text-center hover-lift">
                            <div className="text-2xl font-bold text-primary mb-1">95%</div>
                            <div className="text-sm text-gray-600">Employee Satisfaction</div>
                          </div>
                        </div>
                      </AnimatedSection>
                    </div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection animationType="slide-right" delay={400} className="lg:order-1">
                  <div className="relative group">
                    <img 
                      src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=500&h=400&fit=crop" 
                      alt="Team Culture" 
                      className="w-full h-80 object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--accent))]/20 to-transparent rounded-2xl"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="bg-black/50 px-3 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Users className="w-4 h-4" /> Diverse Team
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </AnimatedSection>

            {/* Our Capabilities Section */}
            <AnimatedSection animationType="fade-up" delay={0}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <AnimatedSection animationType="slide-left" delay={200}>
                  <div>
                    <header className="mb-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4 animate-float">
                          <Cog className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-4xl font-semibold text-black font-red_hat_display">
                          Our Capabilities
                        </h2>
                      </div>
                    </header>
                    
                    <div className="space-y-4">
                      {[
                        { icon: Wrench, text: "Gasketing and sealing" },
                        { icon: Shield, text: "EMI and RFI shielding" },
                        { icon: Gauge, text: "Spacers and washers" },
                        { icon: Zap, text: "Sound dampeners and insulators" },
                        { icon: Cpu, text: "Electrically conductive adhesives" }
                      ].map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                          <AnimatedSection key={index} animationType="slide-left" delay={400 + index * 100}>
                            <div className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                <IconComponent className="w-4 h-4 text-white" />
                              </div>
                              <span className="text-gray-800 font-medium">{item.text}</span>
                            </div>
                          </AnimatedSection>
                        );
                      })}
                    </div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection animationType="slide-right" delay={400}>
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=150&fit=crop", label: "CNC Tech" },
                        { src: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=200&h=150&fit=crop", label: "Precision" },
                        { src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=200&h=150&fit=crop", label: "Quality" },
                        { src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=200&h=150&fit=crop", label: "Assembly" }
                      ].map((item, index) => (
                        <AnimatedSection key={index} animationType="scale" delay={600 + index * 100}>
                          <div className="relative group">
                            <img 
                              src={item.src}
                              alt={item.label}
                              className="w-full h-32 object-cover rounded-xl group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
                            <div className="absolute bottom-2 left-2 text-white text-xs font-semibold">
                              {item.label}
                            </div>
                          </div>
                        </AnimatedSection>
                      ))}
                    </div>
                    
                    <AnimatedSection animationType="fade-up" delay={1000}>
                      <div className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] p-6 rounded-xl text-white text-center animate-glow">
                        <div className="flex items-center justify-center mb-2">
                          <Award className="w-6 h-6 mr-2" />
                          <span className="font-bold text-lg">ISO 9001:2015</span>
                        </div>
                        <div className="text-sm opacity-90">Certified Quality Management</div>
                      </div>
                    </AnimatedSection>
                  </div>
                </AnimatedSection>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Users, title: 'Trust', desc: 'Integrity‑driven partnerships with long‑term reliability at the core.' },
              { icon: Layers, title: 'Quality', desc: 'Every product meets the highest benchmarks—no compromises.' },
              { icon: Gauge, title: 'Excellent Precision', desc: 'Cutting‑edge equipment delivers unmatched tolerance and repeatability.' },
              { icon: CheckCircle, title: 'Service', desc: 'A customer‑first philosophy that delivers experiences—not just products.' },
              { icon: TrendingUp, title: 'Rate', desc: 'Most competitive pricing without sacrificing quality or service.' },
              { icon: Shield, title: 'Reliability', desc: 'Trusted for dependable solutions—time after time.' },
              { icon: Lightbulb, title: 'Satisfaction', desc: 'Your satisfaction drives our innovation and daily practice.' },
              { icon: Cpu, title: 'Customization', desc: 'Tailored solutions for every unique requirement.' },
              { icon: Award, title: 'Market Leadership', desc: 'A position earned through dedication, innovation, and loyalty.' },
              { icon: Wrench, title: 'Capacity', desc: 'Millions of precision components per day—scale with efficiency.' },
              { icon: Zap, title: 'Transparency', desc: 'Open, honest interactions that strengthen relationships.' },
              { icon: Target, title: 'Large Customer Base', desc: 'Widespread industry trust reflected in our growing clientele.' },
            ].map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <AnimatedSection key={index} animationType="scale" delay={150 + index * 100}>
                  <div className="text-center group hover:scale-105 transition-all duration-300">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 animate-float bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] text-white shadow-md">
                      <IconComponent className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 font-red_hat_display">{benefit.title}</h3>
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
      <section className="bg-white py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <AnimatedSection animationType="fade-up" delay={0}>
            <div className="text-center mb-16">
              <div className="text-xs font-bold tracking-[0.3em] text-gray-500 mb-4 font-red_hat_text">
                // EXCELLENCE IN MANUFACTURING //
              </div>
              <h2 className="text-4xl font-bold text-black font-red_hat_display">
                Our Manufacturing Excellence
              </h2>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop", title: "Advanced CNC Technology" },
              { src: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=400&h=250&fit=crop", title: "Precision Manufacturing" },
              { src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop", title: "Quality Control" }
            ].map((item, index) => (
              <AnimatedSection key={index} animationType="fade-up" delay={200 + index * 200}>
                <div className="group hover:scale-105 transition-all duration-300">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img 
                      src={item.src}
                      alt={item.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg font-semibold font-red_hat_display">{item.title}</h3>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          <AnimatedSection animationType="fade-up" delay={800}>
            <div className="text-center">
              <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-4 font-red_hat_display">ISO 9001:2015 Certified Facility</h3>
                <p className="text-gray-600 leading-6 max-w-3xl mx-auto">
                  At Bharat Product, we craft high-quality components using advanced technology in our certified facility. 
                  Our commitment to excellence allows us to serve various industries with precision-engineered solutions.
                </p>
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
              We're not just crafting products; we're shaping the future of manufacturing. Join us on our journey towards excellence.
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

