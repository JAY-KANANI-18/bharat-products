import React from "react";
import Link from "next/link";
import { TopBar } from "../../src/sections/TopBar";
import { Footer } from "../../src/sections/Footer";
import { AnimatedSection } from "../about/components/AnimatedSection";

const safetyMeasures = [
  {
    icon: "🚭",
    title: "No Smoking",
    description: "Smoking and alcohol banned here.",
    details: "Strictly prohibited throughout all premises to ensure a safe and healthy work environment for all employees and visitors."
  },
  {
    icon: "📱",
    title: "No Devices",
    description: "No mobile, camera on premises.",
    details: "Personal electronic devices and cameras are restricted in production areas to maintain security and prevent industrial espionage."
  },
  {
    icon: "🐕",
    title: "No Pets",
    description: "Pets are not allowed on premises.",
    details: "Animals are prohibited in manufacturing areas to maintain hygiene standards and prevent contamination of products."
  },
  {
    icon: "🚫",
    title: "No Spitting",
    description: "Spitting and littering banned.",
    details: "Maintaining cleanliness and hygiene is essential for our manufacturing processes and workplace safety standards."
  },
  {
    icon: "👶",
    title: "Child Policy",
    description: "Strictly no child labor allowed.",
    details: "We maintain zero tolerance for child labor and ensure all employees meet legal age requirements for industrial work."
  },
  {
    icon: "🦺",
    title: "Safety Equipment",
    description: "Mandatory PPE in all areas.",
    details: "Personal protective equipment including helmets, safety glasses, and protective clothing must be worn at all times."
  }
];

const safetyCommitments = [
  {
    title: "Safety Training",
    description: "Comprehensive safety training programs for all employees",
    icon: "🎓"
  },
  {
    title: "Regular Inspections",
    description: "Routine safety inspections and equipment maintenance",
    icon: "🔍"
  },
  {
    title: "Emergency Response",
    description: "Well-defined emergency response procedures and protocols",
    icon: "🚨"
  },
  {
    title: "Health Monitoring",
    description: "Regular health check-ups and occupational health programs",
    icon: "🏥"
  }
];

export default function SafetyPage() {
  return (
    <div className="relative overflow-hidden">
      <TopBar />
      
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-yellow-600 transition-colors">HOME</Link>
            <span>/</span>
            <span className="text-gray-800 font-semibold">SAFETY</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 md:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-red-400/20 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-primary/30 rounded-full animate-bounce delay-300"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-400/20 rounded-full animate-ping delay-700"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 text-center">
          <AnimatedSection animationType="fade-up" delay={0}>
            <div className="text-xs font-bold tracking-[0.3em] text-gray-500 mb-4 font-red_hat_text">
              // OUR COMMITMENT //
            </div>
          </AnimatedSection>
          
          <AnimatedSection animationType="fade-up" delay={200}>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 font-red_hat_display">
              <span className="text-red-500">Safety</span> is
              <br />
              Our <span className="text-primary">Priority</span>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection animationType="fade-up" delay={400}>
            <p className="text-lg md:text-xl text-gray-700 leading-8 max-w-3xl mx-auto mb-12">
              At Amwerk, safety is paramount. We are dedicated to maintaining a safe and secure work environment for our employees and stakeholders. Our safety measures go beyond compliance, fostering a culture of well-being.
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

      {/* Safety Measures Grid */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection animationType="fade-up" delay={0}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-6 font-red_hat_display">
                Ensuring Workplace Safety
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our comprehensive safety measures are designed to protect everyone on our premises and maintain the highest standards of workplace safety.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safetyMeasures.map((measure, index) => (
              <AnimatedSection key={index} animationType="fade-up" delay={200 + index * 100}>
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

      {/* Safety Commitments */}
      <section className="bg-gray-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection animationType="fade-up" delay={0}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-6 font-red_hat_display">
                Cultivating Awareness
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Beyond basic safety measures, we actively cultivate safety awareness through comprehensive programs and continuous improvement initiatives.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safetyCommitments.map((commitment, index) => (
              <AnimatedSection key={index} animationType="scale" delay={200 + index * 150}>
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

      {/* Parallax Video Section - Only this section has transparent background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Fixed Background Image with Parallax Effect */}
        <div 
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=1080&fit=crop')",
            backgroundAttachment: 'fixed'
          }}
        >
          {/* Semi-transparent overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Content that scrolls normally over the fixed background */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-5 md:px-8">
          <AnimatedSection animationType="fade-up" delay={0}>
            <div className="text-xs font-bold tracking-[0.3em] text-yellow-400 mb-4 font-red_hat_text">
              // PIONEERING EXCELLENCE IN //
            </div>
          </AnimatedSection>
          
          <AnimatedSection animationType="fade-up" delay={200}>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 font-red_hat_display leading-tight">
              Precision Metal
              <br />
              <span className="text-yellow-400">Crafting</span>
            </h2>
          </AnimatedSection>
          
          <AnimatedSection animationType="fade-up" delay={400}>
            <p className="text-xl md:text-2xl leading-8 mb-12 opacity-90 max-w-3xl mx-auto">
              We're not just crafting metal; we're shaping the future of metal manufacturing. Join us on our journey towards excellence.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animationType="fade-up" delay={600}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <button className="group bg-primary text-black font-bold px-8 py-4 rounded-full hover:bg-yellow-400 transition-all duration-300 hover:scale-105 flex items-center space-x-3 shadow-2xl">
                <span className="text-lg">WATCH OUR</span>
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </button>
            </div>
            
            <div className="text-center">
              <div className="text-sm font-bold tracking-[0.3em] text-yellow-400 mb-2">
                INTRODUCTION
              </div>
              <div className="text-2xl font-bold tracking-wider">
                VIDEO
              </div>
            </div>
          </AnimatedSection>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 md:py-32">
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
              "In a world where precision is paramount, Amwerk stands out. Our commitment to excellence and safety is unmatched. We don't just manufacture products; we craft solutions that shape the future of industry."
            </blockquote>
          </AnimatedSection>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20 md:py-32">
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
                Discover what our valued clients have to say about their experience with Amwerk. Our commitment to excellence shines through their testimonials.
              </p>
              
              {/* Rating */}
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
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
                  In a world where precision is paramount, Amwerk stands out. Their commitment to excellence is unmatched. We highly recommend their services.
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
                    alt="Client"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="text-left">
                    <div className="font-bold text-gray-800">Michael Johnson</div>
                    <div className="text-sm text-gray-600">Engineering Director, TechCorp</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-red-500 to-yellow-500 py-20 md:py-32 relative overflow-hidden">
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
              Join us in our commitment to maintaining the highest safety standards while delivering exceptional manufacturing solutions.
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

