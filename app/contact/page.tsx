import React from "react";
import { TopBar } from "../../src/sections/TopBar";
import { Footer } from "../../src/sections/Footer";
import { AnimatedSection } from "../about/components/AnimatedSection";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "414-214-0362",
      link: "tel:414-214-0362",
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@bharatproduct.com",
      link: "mailto:info@bharatproduct.com",
    },
    {
      icon: MapPin,
      title: "Address",
      value: "Industrial Area, City, Country",
      link: "#",
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Mon - Fri: 9:00 AM - 6:00 PM",
      link: "#",
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
              // GET IN TOUCH //
            </div>
          </AnimatedSection>
          
          <AnimatedSection animationType="fade-up" delay={200}>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 font-red_hat_display">
              Let's <span className="text-primary">Connect</span>
              <br />
              & Collaborate
            </h1>
          </AnimatedSection>
          
          <AnimatedSection animationType="fade-up" delay={400}>
            <p className="text-lg md:text-xl text-gray-700 leading-8 max-w-3xl mx-auto mb-12">
              Have questions about our products or services? We'd love to hear from you. Contact us today and let's discuss how we can help your business.
            </p>
          </AnimatedSection>
          
          {/* Contact Stats */}
          <AnimatedSection animationType="fade-up" delay={600}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">2hrs</div>
                <div className="text-sm text-gray-600">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">Global</div>
                <div className="text-sm text-gray-600">Reach</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <AnimatedSection key={index} animationType="fade-up" delay={index * 100}>
                  <a href={info.link} className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-all hover:border-primary text-center block">
                    <Icon className="w-10 h-10 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-foreground mb-2">{info.title}</h3>
                    <p className="text-foreground/70 text-sm">{info.value}</p>
                  </a>
                </AnimatedSection>
              );
            })}
          </div>

          {/* Contact Form */}
          <AnimatedSection animationType="fade-up" delay={0}>
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-foreground font-semibold mb-2">Full Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-foreground font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-foreground font-semibold mb-2">Company</label>
                  <input
                    type="text"
                    placeholder="Your company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-foreground font-semibold mb-2">Subject</label>
                  <input
                    type="text"
                    placeholder="How can we help?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-foreground font-semibold mb-2">Message</label>
                  <textarea
                    placeholder="Your message..."
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
