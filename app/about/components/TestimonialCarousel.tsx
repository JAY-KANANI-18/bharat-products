'use client';

import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    quote: "Working with Amwerk has been a game-changer for our projects. Their precision manufacturing and electronic solutions are top-notch, and their team is a pleasure to collaborate with.",
    name: "Mark Robert",
    position: "PURCHASE MANAGER",
    industry: "⭐ Automotive Industry",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face"
  },
  {
    id: 2,
    quote: "The quality and precision of Amwerk's components exceeded our expectations. Their ISO certification gives us confidence in every delivery.",
    name: "Sarah Chen",
    position: "OPERATIONS DIRECTOR", 
    industry: "⚡ Electronics Sector",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face"
  },
  {
    id: 3,
    quote: "Fast delivery, competitive pricing, and exceptional customer service. Amwerk is our go-to partner for all manufacturing needs.",
    name: "David Kumar",
    position: "CHIEF ENGINEER",
    industry: "🚀 Aerospace Industry", 
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face"
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

  return (
    <section className="relative text-sm bg-white bg-no-repeat bg-size-[20%] box-border caret-transparent leading-[21px] z-[1] py-20 md:text-base md:leading-6 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=600&fit=crop" 
          alt="Client Background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative text-sm items-center bg-no-repeat box-border caret-transparent flex flex-col justify-center leading-[21px] max-w-4xl mx-auto px-5 md:text-base md:leading-6 md:px-8">
        <div className="text-center mb-16 animate-slide-in-left">
          <div className="text-xs font-bold tracking-[0.3em] text-gray-500 mb-4 font-red_hat_text">
            // OUR TESTIMONIALS //
          </div>
          <h2 className="text-black text-4xl font-bold tracking-[-1.2px] leading-[40px] font-red_hat_display md:text-5xl md:leading-[48px]">
            Client Voices
          </h2>
        </div>
        
        {/* Testimonial Carousel */}
        <div className="relative w-full">
          <div className="testimonial-carousel bg-gray-50 rounded-2xl p-8 md:p-12 text-center animate-slide-in-right delay-300">
            <div className="flex justify-center mb-6">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-primary text-2xl animate-pulse delay-${i * 100}`}>★</span>
                ))}
              </div>
            </div>
            
            {/* Testimonial Slides */}
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`testimonial-slide ${index === currentSlide ? 'active' : ''}`}
              >
                <blockquote className="text-xl md:text-2xl text-gray-800 leading-8 mb-8 font-red_hat_display italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center overflow-hidden animate-float">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-lg font-red_hat_display">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm font-red_hat_text">{testimonial.position}</div>
                    <div className="text-primary text-xs">{testimonial.industry}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => goToSlide(index)}
                className={`testimonial-dot w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-primary scale-125' 
                    : 'bg-gray-300 hover:bg-yellow-400'
                }`}
              />
            ))}
          </div>
          
          <div className="mt-6 text-primary font-bold text-lg animate-count-up delay-1000">
            4.9 Average Rating • 500+ Happy Clients
          </div>
        </div>
      </div>
    </section>
  );
}

