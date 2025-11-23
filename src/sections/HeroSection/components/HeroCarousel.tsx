"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

type Slide = {
  id: number;
  title: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  imageUrl: string;
  overlay?: string; // tailwind bg opacity e.g. 'bg-black/50'
};

interface HeroCarouselProps {
  slides?: Slide[];
  intervalMs?: number;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({
  slides: slidesProp,
  intervalMs = 5000,
}) => {
  // Default demo slides if none passed
  const slides = useMemo<Slide[]>(
    () =>
      slidesProp ?? [
        {
          id: 1,
          title: "The crafting excellence",
          subtitle: "Passion for steel",
          description:
            "Dynamically target high-payoff intellectual capital for customized technologies. Objectively integrate emerging core competency innovations.",
          ctaText: "View our services",
          ctaHref: "#services",
          imageUrl: " ",
          overlay: "bg-black/50",
        },
        {
          id: 2,
          title: "Precision engineering",
          subtitle: "Built to perform",
          description:
            "From concept to completion, we deliver quality workmanship and reliable results for demanding projects.",
          ctaText: "Explore projects",
          ctaHref: "#projects",
          imageUrl:
            "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1940&auto=format&fit=crop",
          overlay: "bg-black/45",
        },
        {
          id: 3,
          title: "Innovation in motion",
          subtitle: "Future-ready manufacturing",
          description:
            "We combine modern technology with experienced craftsmanship to achieve consistent, scalable outcomes.",
          ctaText: "Contact us",
          ctaHref: "#contact",
          imageUrl:
            "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1940&auto=format&fit=crop",
          overlay: "bg-black/40",
        },
      ],
    [slidesProp]
  );

  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  // Mouse-based parallax for subtle motion
  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / rect.width; // ~-0.5..0.5
    const dy = (e.clientY - cy) / rect.height;
    const strength = 15; // px
    setParallax({ x: dx * strength, y: dy * strength });
  };

  // rAF loop to sync slide change with progress bar (Ken Burns duration = intervalMs)
  const rafRef = useRef<number | null>(null);
  useEffect(() => {
    // reset progress when slide changes
    setProgress(0);
    let start: number | null = null;

    const animate = (now: number) => {
      if (start === null) start = now;
      const elapsed = now - start;
      const p = Math.min(1, elapsed / intervalMs);
      setProgress(p);

      if (p >= 1) {
        // advance to next slide, effect will re-run and restart progress
        setCurrent((c) => (c + 1) % slides.length);
        return;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [current, intervalMs, slides.length]);

  return (
    <div
      className="relative w-full min-h-screen overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setParallax({ x: 0, y: 0 })}
    >
      {/* Slides */}
      {slides.map((slide, index) => {
        const isActive = index === current;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              isActive ? "opacity-100 z-10" : "opacity-0"
            }`}
          >
            {/* Background image */}
            <div
              className="pointer-events-none absolute inset-0 bg-cover bg-center will-change-transform"
              style={{
                backgroundImage: `url(${slide.imageUrl})`,
                transform: isActive
                  ? `scale(${(1.05 + 0.1 * progress).toFixed(
                      3
                    )}) translate3d(${parallax.x.toFixed(
                      1
                    )}px, ${parallax.y.toFixed(1)}px, 0)`
                  : "scale(1.05)",
              }}
              aria-hidden
            />
            {/* Overlay */}
            <div
              className={`pointer-events-none absolute inset-0 ${
                slide.overlay ?? "bg-black/40"
              }`}
            />

            {/* Content */}
            <div className="relative z-10 flex h-screen items-center justify-center md:justify-start px-6">
              <div
                className={`max-w-3xl text-white transition-all duration-700 ${
                  isActive
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-3"
                }`}
              >
                {slide.subtitle ? (
                  <p className="text-yellow-400 text-xl mb-2 font-sanchez">
                    {slide.subtitle}
                  </p>
                ) : null}
                <h1 className="text-4xl md:text-6xl font-bold leading-tight font-red_hat_display">
                  {slide.title}
                </h1>
                {slide.description ? (
                  <p className="mt-4 text-base md:text-lg text-white/90">
                    {slide.description}
                  </p>
                ) : null}

                {slide.ctaText && slide.ctaHref ? (
                  <div className="mt-8">
                    <a
                      href={slide.ctaHref}
                      className="inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3 font-semibold text-black shadow hover:shadow-lg transition-shadow"
                    >
                      {slide.ctaText}
                      <span aria-hidden>→</span>
                    </a>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        );
      })}

      {/* Progress bars */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-20 px-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setCurrent(i);
              setProgress(0);
            }}
            aria-label={`Go to slide ${i + 1}`}
            className="group h-2 w-14 rounded-full bg-white/25 overflow-hidden"
          >
            <span
              className="block h-full bg-white"
              style={{
                width: i === current ? `${Math.round(progress * 100)}%` : 0,
              }}
            />
          </button>
        ))}
      </div>

      {/* Optional Prev/Next controls */}
      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between z-20 px-3 md:px-6">
        <button
          className="pointer-events-auto hidden md:inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30"
          onClick={() => {
            setCurrent((c) => (c - 1 + slides.length) % slides.length);
            setProgress(0);
          }}
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          className="pointer-events-auto hidden md:inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30"
          onClick={() => {
            setCurrent((c) => (c + 1) % slides.length);
            setProgress(0);
          }}
          aria-label="Next slide"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default HeroCarousel;

