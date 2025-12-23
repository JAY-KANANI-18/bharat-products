"use client";
import React from "react";
import Link from "next/link";
import { TopBar } from "../../src/sections/TopBar";
import { Footer } from "../../src/sections/Footer";
import { AnimatedSection } from "../about/components/AnimatedSection";
import { categorySlug } from "../../src/data/products";

import { useState } from "react";

// Product data with detailed information
const products = [
  {
    id: "precision-high-quality-components",
    title: "Precision High Quality Components",
    category: "Precision Engineering",
    description:
      "High-precision engineered components manufactured to meet strict quality standards and tight tolerances for critical industrial applications.",
    image: "/images/products/precision-brass-components.jpg",
    features: [
      "Tight dimensional tolerances",
      "Superior surface finish",
      "Consistent quality",
      "Long service life",
    ],
    applications: ["Automotive", "Aerospace", "Industrial Machinery"],
    price: "Custom Quote",
  },
  {
    id: "brass-turned-parts",
    title: "Brass Turned Parts",
    category: "Brass Components",
    description:
      "CNC-machined brass turned parts offering excellent machinability, corrosion resistance, and dimensional accuracy.",
    image: "/images/products/brass-turned-parts.jpg",
    features: [
      "High machinability",
      "Corrosion resistant",
      "Precise threading",
      "Smooth finish",
    ],
    applications: ["Electrical", "Plumbing", "Automotive", "Electronics"],
    price: "Custom Quote",
  },
  {
    id: "aluminium-parts",
    title: "Aluminium Parts",
    category: "Lightweight Components",
    description:
      "Precision aluminium components designed for lightweight strength, excellent thermal conductivity, and corrosion resistance.",
    image: "/images/products/aluminium-parts.jpg",
    features: [
      "Lightweight and strong",
      "High precision machining",
      "Corrosion resistant",
      "Excellent heat dissipation",
    ],
    applications: ["Automotive", "Electronics", "Aerospace"],
    price: "Custom Quote",
  },
  {
    id: "mild-steel-parts",
    title: "Mild Steel Parts",
    category: "Structural Components",
    description:
      "Durable mild steel components manufactured for strength, reliability, and cost-effective industrial use.",
    image: "/images/products/mild-steel-parts.jpg",
    features: [
      "High tensile strength",
      "Easy machinability",
      "Weld-friendly",
      "Cost effective",
    ],
    applications: ["Construction", "Automotive", "Industrial Machinery"],
    price: "Custom Quote",
  },
  {
    id: "stainless-steel-parts",
    title: "Stainless Steel Parts",
    category: "Corrosion Resistant Components",
    description:
      "High-quality stainless steel parts offering excellent corrosion resistance, strength, and durability for demanding environments.",
    image: "/images/products/stainless-steel-parts.jpg",
    features: [
      "Corrosion resistant",
      "High mechanical strength",
      "Heat and chemical resistant",
      "Long service life",
    ],
    applications: ["Food Processing", "Medical", "Chemical", "Automotive"],
    price: "Custom Quote",
  },
  {
    id: "automotive-parts",
    title: "Automotive Parts",
    category: "Automotive Components",
    description:
      "Precision-engineered automotive components designed to meet OEM standards for performance, safety, and durability.",
    image: "/images/products/stainless-steel-parts.jpg",
    features: [
      "OEM quality standards",
      "High fatigue resistance",
      "Precision manufacturing",
      "Reliable performance",
    ],
    applications: ["Passenger Vehicles", "Commercial Vehicles"],
    price: "Custom Quote",
  },
  {
    id: "copper-and-other-metal-parts",
    title: "Copper and Other Metal Parts",
    category: "Custom Metal Components",
    description:
      "Custom-manufactured copper and metal components providing excellent electrical and thermal conductivity.",
    image: "/images/products/copper-and-other-metal-parts.jpg",
    features: [
      "High conductivity",
      "Precision machining",
      "Multiple metal options",
      "Custom specifications",
    ],
    applications: ["Electrical", "Power Equipment", "Electronics"],
    price: "Custom Quote",
  },
  {
    id: "forged-and-machined-components",
    title: "Forged and Machined Components",
    category: "Heavy Duty Components",
    description:
      "Forged and precision-machined components engineered for high strength, durability, and performance under extreme conditions.",
    image: "/images/products/stainless-steel-parts.jpg",
    features: [
      "High load-bearing capacity",
      "Enhanced material strength",
      "Precision machining",
      "Long-term durability",
    ],
    applications: ["Automotive", "Heavy Engineering", "Industrial Machinery"],
    price: "Custom Quote",
  },
];

export default function ProductsPage() {
  const [tilt, setTilt] = useState<{ [key: string]: { x: number; y: number } }>(
    {}
  );

  const handleMouseMove = (
    key: string,
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    setTilt((prev) => ({
      ...prev,
      [key]: {
        x: (0.5 - py) * 6, // softer tilt
        y: (px - 0.5) * 8,
      },
    }));
  };

  const handleMouseLeave = (key: string) => {
    setTilt((prev) => ({
      ...prev,
      [key]: { x: 0, y: 0 },
    }));
  };

  return (
    <div className="relative overflow-hidden">
      <TopBar />

      {/* Hero Section - Full Screen */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/images/products/product-banner.jpg)",
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-4xl mx-auto px-5 md:px-8 text-center z-10">
          <AnimatedSection animationType="fade-up" delay={0}>
            <div className="text-xs font-bold tracking-[0.3em] text-white/80 mb-4 font-red_hat_text">
              // OUR PRODUCT PORTFOLIO //
            </div>
          </AnimatedSection>

          <AnimatedSection animationType="fade-up" delay={200}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-red_hat_display">
              <span className="text-primary">Precision</span> Products
              <br />
              for Every Industry
            </h1>
          </AnimatedSection>

          <AnimatedSection animationType="fade-up" delay={400}>
            <p className="text-lg md:text-xl text-white/90 leading-8 max-w-3xl mx-auto mb-12">
              Discover our comprehensive range of precision-engineered products
              designed to meet the most demanding industrial requirements. From
              gaskets to electronic components, we deliver excellence in every
              solution.
            </p>
          </AnimatedSection>

          {/* Category Stats */}
          <AnimatedSection animationType="fade-up" delay={600}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">9</div>
                <div className="text-sm text-white/80">Product Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-white/80">Custom Solutions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-white/80">Industries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">99%</div>
                <div className="text-sm text-white/80">Quality Rating</div>
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
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-4xl font-bold text-black mb-6 font-red_hat_display">
                Our Product Range
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our comprehensive collection of precision-engineered
                products, each designed to deliver exceptional performance and
                reliability.
              </p>
            </div>
          </AnimatedSection>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <AnimatedSection
                key={product.id}
                animationType="fade-up"
                delay={200 + index * 100}
              >
                <div
                  onMouseMove={(e) => handleMouseMove(product.id, e)}
                  onMouseLeave={() => handleMouseLeave(product.id)}
                  style={{
                    transform: `perspective(1000px) rotateX(${
                      tilt[product.id]?.x || 0
                    }deg) rotateY(${tilt[product.id]?.y || 0}deg)`,
                    transition: "transform 0.15s ease-out",
                    transformStyle: "preserve-3d",
                  }}
                  className="will-change-transform"
                >
                  <Link href={`/products/${product.id}`}>
                    <div className="product-card group relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                      {/* Image Container with Multiple Hover Effects */}
                      <div className="relative overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* Category Badge (links to category page) */}
                        <Link
                          href={`/products/category/${categorySlug(
                            product.category
                          )}`}
                          className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100"
                        >
                          {product.category}
                        </Link>

                        {/* Price Badge */}
                        <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                          {product.price}
                        </div>

                        {/* Hover Overlay with Features */}
                        <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                          <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                            <div className="text-sm font-semibold mb-2">
                              Key Features:
                            </div>
                            <ul className="text-xs space-y-1">
                              {product.features
                                .slice(0, 3)
                                .map((feature, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-center justify-center"
                                  >
                                    <span className="w-1 h-1 bg-white rounded-full mr-2"></span>
                                    {feature}
                                  </li>
                                ))}
                            </ul>
                            <div className="mt-4 text-sm font-bold">
                              Click to Learn More →
                            </div>
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
                            <span
                              key={idx}
                              className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium group-hover:bg-yellow-100 group-hover:text-yellow-700 transition-colors duration-300"
                            >
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
                            <svg
                              className="w-4 h-4 text-white transform group-hover:translate-x-0.5 transition-transform duration-300"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
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
                </div>
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
              Our engineering team specializes in creating custom products
              tailored to your specific requirements. Let's discuss your unique
              challenges.
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
