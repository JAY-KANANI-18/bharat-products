import React from "react";
import { TopBar } from "../../src/sections/TopBar";
import { Footer } from "../../src/sections/Footer";
import { AnimatedSection } from "../about/components/AnimatedSection";
import { Download, FileText, Eye } from "lucide-react";

export default function BrochurePage() {
  const brochures = [
    {
      title: "Company Brochure",
      description: "Complete overview of Bharat Product's capabilities, services, and expertise.",
      size: "2.5 MB",
      format: "PDF",
    },
    {
      title: "Product Catalog",
      description: "Detailed catalog of our precision-engineered components and specifications.",
      size: "3.2 MB",
      format: "PDF",
    },
    {
      title: "Quality Certifications",
      description: "Documentation of our ISO 9001:2015 and other quality certifications.",
      size: "1.8 MB",
      format: "PDF",
    },
    {
      title: "Technical Specifications",
      description: "In-depth technical data and specifications for all our products.",
      size: "4.1 MB",
      format: "PDF",
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
              // BROCHURES & RESOURCES //
            </div>
          </AnimatedSection>
          
          <AnimatedSection animationType="fade-up" delay={200}>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 font-red_hat_display">
              Download Our <span className="text-primary">Brochures</span>
              <br />
              & Documentation
            </h1>
          </AnimatedSection>
          
          <AnimatedSection animationType="fade-up" delay={400}>
            <p className="text-lg md:text-xl text-gray-700 leading-8 max-w-3xl mx-auto mb-12">
              Access our comprehensive brochures, product catalogs, and technical documentation. Everything you need to know about our products and services.
            </p>
          </AnimatedSection>
          
          {/* Brochure Stats */}
          <AnimatedSection animationType="fade-up" delay={600}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">4+</div>
                <div className="text-sm text-gray-600">Documents</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">PDF</div>
                <div className="text-sm text-gray-600">Format</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">Free</div>
                <div className="text-sm text-gray-600">Download</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">Updated</div>
                <div className="text-sm text-gray-600">Regularly</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Brochures Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <AnimatedSection animationType="fade-up" delay={0}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Available Documents</h2>
              <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {brochures.map((brochure, index) => (
              <AnimatedSection key={index} animationType="fade-up" delay={index * 100}>
                <div className="p-8 border border-gray-200 rounded-xl hover:shadow-lg transition-all hover:border-primary">
                  <div className="flex items-start justify-between mb-4">
                    <FileText className="w-10 h-10 text-primary flex-shrink-0" />
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {brochure.format}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{brochure.title}</h3>
                  <p className="text-foreground/70 mb-4">{brochure.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="text-sm text-foreground/60">{brochure.size}</span>
                    <div className="flex gap-2">
                      <button className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors">
                        <Eye className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors">
                        <Download className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <AnimatedSection animationType="fade-up" delay={0}>
            <h2 className="text-3xl font-bold text-foreground mb-6">Need Custom Documentation?</h2>
            <p className="text-lg text-foreground/70 mb-8">
              Contact our team to request custom brochures or technical documentation tailored to your needs.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Contact Us
            </a>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
