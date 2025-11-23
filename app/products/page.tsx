import React from "react";
import Link from "next/link";
import { TopBar } from "../../src/sections/TopBar";
import { Footer } from "../../src/sections/Footer";
import { AnimatedSection } from "../about/components/AnimatedSection";

// Product data with detailed information
const products = [
  {
    id: "precision-gaskets",
    title: "Precision Gaskets",
    category: "Sealing Solutions",
    description: "High-performance gaskets engineered for critical sealing applications in automotive and aerospace industries.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
    features: ["Temperature resistant", "Chemical resistant", "Custom shapes", "High durability"],
    applications: ["Automotive", "Aerospace", "Industrial"],
    price: "Custom Quote"
  },
  {
    id: "emi-shielding",
    title: "EMI/RFI Shielding",
    category: "Electronic Protection",
    description: "Advanced electromagnetic interference shielding solutions for sensitive electronic equipment.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
    features: ["Conductive materials", "Custom designs", "High attenuation", "Flexible solutions"],
    applications: ["Electronics", "Medical Devices", "Telecommunications"],
    price: "From $25"
  },
  {
    id: "custom-spacers",
    title: "Custom Spacers",
    category: "Precision Components",
    description: "Precision-machined spacers and washers for exact dimensional requirements in critical applications.",
    image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&h=400&fit=crop",
    features: ["Precision machined", "Various materials", "Tight tolerances", "Custom dimensions"],
    applications: ["Automotive", "Electronics", "Machinery"],
    price: "From $5"
  },
  {
    id: "sound-dampeners",
    title: "Sound Dampeners",
    category: "Acoustic Solutions",
    description: "Advanced sound dampening materials designed to reduce noise and vibration in various applications.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop",
    features: ["Noise reduction", "Vibration control", "Fire resistant", "Easy installation"],
    applications: ["Automotive", "HVAC", "Industrial"],
    price: "From $15"
  },
  {
    id: "conductive-adhesives",
    title: "Conductive Adhesives",
    category: "Electronic Materials",
    description: "Electrically conductive adhesives for electronic assembly and EMI shielding applications.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
    features: ["Electrical conductivity", "Strong bonding", "Temperature stable", "Various viscosities"],
    applications: ["Electronics", "Solar Panels", "LED Assembly"],
    price: "From $35"
  },
  {
    id: "thermal-interface",
    title: "Thermal Interface Materials",
    category: "Heat Management",
    description: "High-performance thermal interface materials for efficient heat transfer in electronic devices.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
    features: ["High thermal conductivity", "Low thermal resistance", "Conformable", "Long-term stability"],
    applications: ["CPU Cooling", "LED Lighting", "Power Electronics"],
    price: "From $20"
  },
  {
    id: "die-cut-components",
    title: "Die-Cut Components",
    category: "Custom Manufacturing",
    description: "Precision die-cut components manufactured to exact specifications for various industrial applications.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop",
    features: ["Precision cutting", "Various materials", "Complex shapes", "High volume production"],
    applications: ["Packaging", "Automotive", "Electronics"],
    price: "Custom Quote"
  },
  {
    id: "protective-films",
    title: "Protective Films",
    category: "Surface Protection",
    description: "Durable protective films designed to safeguard surfaces during manufacturing and transport.",
    image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&h=400&fit=crop",
    features: ["Scratch protection", "UV resistant", "Easy removal", "Various thicknesses"],
    applications: ["Electronics", "Automotive", "Appliances"],
    price: "From $10"
  },
  {
    id: "insulation-materials",
    title: "Insulation Materials",
    category: "Thermal Solutions",
    description: "High-performance insulation materials for thermal and electrical isolation in demanding environments.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop",
    features: ["Thermal insulation", "Electrical insulation", "Fire resistant", "Lightweight"],
    applications: ["HVAC", "Electronics", "Aerospace"],
    price: "From $12"
  }
];

export default function ProductsPage() {
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
              // OUR PRODUCT PORTFOLIO //
            </div>
          </AnimatedSection>
          
          <AnimatedSection animationType="fade-up" delay={200}>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 font-red_hat_display">
              <span className="text-primary">Precision</span> Products
              <br />
              for Every Industry
            </h1>
          </AnimatedSection>
          
          <AnimatedSection animationType="fade-up" delay={400}>
            <p className="text-lg md:text-xl text-gray-700 leading-8 max-w-3xl mx-auto mb-12">
              Discover our comprehensive range of precision-engineered products designed to meet the most demanding industrial requirements. From gaskets to electronic components, we deliver excellence in every solution.
            </p>
          </AnimatedSection>
          
          {/* Category Stats */}
          <AnimatedSection animationType="fade-up" delay={600}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">9</div>
                <div className="text-sm text-gray-600">Product Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-gray-600">Custom Solutions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-gray-600">Industries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">99%</div>
                <div className="text-sm text-gray-600">Quality Rating</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          
          {/* Section Header */}
          <AnimatedSection animationType="fade-up" delay={0}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-6 font-red_hat_display">
                Our Product Range
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our comprehensive collection of precision-engineered products, each designed to deliver exceptional performance and reliability.
              </p>
            </div>
          </AnimatedSection>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <AnimatedSection key={product.id} animationType="fade-up" delay={200 + index * 100}>
                <Link href={`/products/${product.id}`}>
                  <div className="product-card group relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                    
                    {/* Image Container with Multiple Hover Effects */}
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                        {product.category}
                      </div>
                      
                      {/* Price Badge */}
                      <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                        {product.price}
                      </div>
                      
                      {/* Hover Overlay with Features */}
                      <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                        <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                          <div className="text-sm font-semibold mb-2">Key Features:</div>
                          <ul className="text-xs space-y-1">
                            {product.features.slice(0, 3).map((feature, idx) => (
                              <li key={idx} className="flex items-center justify-center">
                                <span className="w-1 h-1 bg-white rounded-full mr-2"></span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <div className="mt-4 text-sm font-bold">Click to Learn More →</div>
                        </div>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-black mb-2 font-red_hat_display group-hover:text-yellow-600 transition-colors duration-300">
                        {product.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm leading-6 mb-4 line-clamp-2">
                        {product.description}
                      </p>
                      
                      {/* Applications Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.applications.map((app, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium group-hover:bg-yellow-100 group-hover:text-yellow-700 transition-colors duration-300">
                            {app}
                          </span>
                        ))}
                      </div>
                      
                      {/* Call to Action */}
                      <div className="flex items-center justify-between">
                        <span className="text-primary font-semibold text-sm group-hover:text-yellow-600 transition-colors duration-300">
                          View Details
                        </span>
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center transform group-hover:scale-110 group-hover:bg-yellow-600 transition-all duration-300">
                          <svg className="w-4 h-4 text-white transform group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Animated Border */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary rounded-2xl transition-all duration-500"></div>
                    
                    {/* Shine Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-yellow-500 to-yellow-600 py-20 md:py-32 relative overflow-hidden">
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
              Need a Custom Solution?
            </h2>
            <p className="text-white/90 text-xl leading-8 mb-8 max-w-2xl mx-auto">
              Our engineering team specializes in creating custom products tailored to your specific requirements. Let's discuss your unique challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="bg-white text-yellow-600 font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 animate-glow"
              >
                Request Custom Quote
              </Link>
              <Link
                href="/about"
                className="border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-yellow-600 transition-all duration-300 hover:scale-105"
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

