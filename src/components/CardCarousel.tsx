"use client";

import React, { useRef } from "react";

interface CardCarouselProps {
  children: React.ReactNode[] | React.ReactNode;
  className?: string;
}

export const CardCarousel: React.FC<CardCarouselProps> = ({ children, className = "" }) => {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (dir: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;
    const container = track.parentElement;
    const delta = (container?.clientWidth || 300) * 0.8;
    track.scrollBy({ left: dir === "left" ? -delta : delta, behavior: "smooth" });
  };

  return (
    <div className={`relative rounded-3xl ring-1 ring-gray-200 bg-gradient-to-br from-gray-50 to-white p-4 md:p-6 ${className}`}>
      {/* Decorative glows */}
      <div className="pointer-events-none absolute -top-8 -left-8 w-40 h-40 bg-primary/10 blur-3xl rounded-full" />
      <div className="pointer-events-none absolute -bottom-10 -right-10 w-56 h-56 bg-gray-400/10 blur-3xl rounded-full" />
      <button
        aria-label="Previous"
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white/90 shadow-lg ring-1 ring-black/5 hover:bg-white"
        onClick={() => scrollByAmount("left")}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 mx-auto text-gray-700"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
      </button>
      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-px-4 px-12 py-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
      >
        {React.Children.map(children, (child, i) => (
          <div key={i} className="shrink-0 snap-start">
            {child}
          </div>
        ))}
      </div>
      <button
        aria-label="Next"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white/90 shadow-lg ring-1 ring-black/5 hover:bg-white"
        onClick={() => scrollByAmount("right")}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 mx-auto text-gray-700"><path fill="currentColor" d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>
      </button>
    </div>
  );
};

export default CardCarousel;
