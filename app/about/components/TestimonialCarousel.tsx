'use client';

import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Bharat Product transformed our manufacturing process. Their precision engineering and reliable delivery have been instrumental in our success.",
    name: "Rajesh Patel",
    position: "Procurement Director",
    company: "Automotive Solutions Ltd",
    industry: "Automotive",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 2,
    quote: "The quality and precision of their components exceeded our expectations. ISO 9001:2015 certification gives us complete confidence.",
    name: "Priya Sharma",
    position: "Operations Manager", 
    company: "Electronics Manufacturing Co",
    industry: "Electronics",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 3,
    quote: "Fast delivery, competitive pricing, and exceptional support. Bharat Product is our trusted partner for all precision component needs.",
    name: "Vikram Singh",
    position: "Chief Engineer",
    company: "Aerospace Tech Industries",
    industry: "Aerospace",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 4,
    quote: "Their attention to detail and commitment to quality standards set them apart. We've been working together for 5+ years.",
    name: "Anjali Verma",
    position: "Supply Chain Lead",
    company: "Industrial Solutions Group",
    industry: "Manufacturing",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  }
];

export default function TestimonialCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentSlide];

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20 md:py-32 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-xs font-bold tracking-[0.3em] text-gray-500 mb-4">
            // WHAT OUR CLIENTS SAY //
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Trusted by <span className="text-primary">Industry Leaders</span>
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
        </div>

        {/* Main Testimonial Card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start lg:items-center mb-12">
          {/* Left: Navigation - Hidden on mobile, shown on desktop */}
          <div className="hidden lg:flex flex-col justify-center items-start gap-6">
            <div className="flex gap-4">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg active:scale-95"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-primary text-white hover:bg-primary/90 transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg active:scale-95"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            <div className="text-left">
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-primary w-8'
                        : 'bg-gray-300 w-2 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Center: Testimonial Content - Full width on mobile */}
          <div className="lg:col-span-2 relative h-auto lg:h-[350px]">
            <div key={currentTestimonial.id} className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 flex flex-col justify-between lg:absolute lg:inset-0 animate-slide-in-right">
              {/* Stars - Fade in animation */}
              <div className={`flex gap-1 mb-4 sm:mb-6 transition-all duration-500 delay-100`}>
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 sm:w-5 h-4 sm:h-5 fill-primary text-primary animate-pulse" style={{animationDelay: `${i * 100 + 100}ms`}} />
                ))}
              </div>

              {/* Quote - Slide and fade animation */}
              <blockquote className={`text-lg sm:text-xl md:text-2xl text-gray-800 leading-7 sm:leading-8 mb-6 sm:mb-8 italic font-light transition-all duration-500 delay-150`}>
                "{currentTestimonial.quote}"
              </blockquote>

              {/* Author Info - Slide up animation */}
              <div className={`flex items-center gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-gray-200 transition-all duration-500 delay-200`}>
                <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-full overflow-hidden ring-2 ring-primary/20 flex-shrink-0 animate-scale-in">
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-base sm:text-lg text-foreground truncate">
                    {currentTestimonial.name}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 truncate">
                    {currentTestimonial.position}
                  </div>
                  <div className="text-xs text-primary font-semibold mt-1 truncate">
                    {currentTestimonial.company}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation - Shown only on mobile */}
        <div className="lg:hidden flex justify-center items-center gap-4 mb-8">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-primary w-6'
                    : 'bg-gray-300 w-2 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full bg-primary text-white hover:bg-primary/90 transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg active:scale-95"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
            <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-gray-600 text-sm">Average Rating</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-gray-600 text-sm">Satisfied Clients</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-gray-600 text-sm">Years of Trust</div>
          </div>
        </div>
      </div>
    </section>
  );
}

