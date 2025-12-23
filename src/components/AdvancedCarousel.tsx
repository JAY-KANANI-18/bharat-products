"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

type AdvancedCarouselProps<T> = {
  items: T[];
  renderItem: (item: T, index: number, isActive: boolean) => React.ReactNode;
  autoPlayMs?: number;
  className?: string;
  initialIndex?: number;
  ariaLabel?: string;
  showDots?: boolean;
  showArrows?: boolean;
  focusOnHover?: boolean;
  basisClasses?: string; // width per-item to control how many are visible
};

export function AdvancedCarousel<T>({
  items,
  renderItem,
  autoPlayMs = 1000,
  className = "",
  initialIndex = 0,
  ariaLabel = "Carousel",
  showDots = true,
  showArrows = true,
  focusOnHover = true,
  basisClasses = "basis-[85%] sm:basis-[60%] md:basis-[45%] lg:basis-[33%]",
}: AdvancedCarouselProps<T>) {
  const [current, setCurrent] = useState(initialIndex);
  const [paused, setPaused] = useState(false);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<Array<HTMLDivElement | null>>([]);

  const count = items.length;
  const goTo = useCallback(
    (i: number) => setCurrent(((i % count) + count) % count),
    [count]
  );
  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // autoplay
  useEffect(() => {
    if (paused || count <= 1) return;
    const id = setInterval(next, autoPlayMs);
    return () => clearInterval(id);
  }, [paused, count, next, autoPlayMs]);

  // keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  // center active slide via scroll
  const centerActive = useCallback((idx: number) => {
    const scroller = scrollerRef.current;
    const el = slideRefs.current[idx];
    if (!scroller || !el) return;
    const scrollerCenter = scroller.clientWidth / 2;
    const slideCenter = el.offsetLeft + el.clientWidth / 2;
    const target = Math.max(0, slideCenter - scrollerCenter);
    scroller.scrollTo({ left: target, behavior: "smooth" });
  }, []);

  useEffect(() => {
    centerActive(current);
  }, [current, centerActive]);

  return (
    <div
      className={`relative isolate overflow-hidden ${className}  md:p-6`}
      aria-label={ariaLabel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {showArrows && (
        <>
          <button
            aria-label="Previous"
            className="hidden sm:flex items-center justify-center absolute left-3 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-white/90 shadow ring-1 ring-black/5 hover:bg-white"
            onClick={prev}
          >
            <span aria-hidden className="inline-block text-lg">
              ‹
            </span>
          </button>
          <button
            aria-label="Next"
            className="hidden sm:flex items-center justify-center absolute right-3 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-white/90 shadow ring-1 ring-black/5 hover:bg-white"
            onClick={next}
          >
            <span aria-hidden className="inline-block text-lg">
              ›
            </span>
          </button>
        </>
      )}

      {/* Track */}
      <div className="overflow-hidden md:px-10">
        <div
          ref={scrollerRef}
          className="flex items-stretch gap-4 md:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((item, i) => {
            const isActive = i === current;
            return (
              <div
                key={i}
                ref={(el) => {
                  slideRefs.current[i] = el;
                }}
                className={`shrink-0 snap-center ${basisClasses}`}
                onMouseEnter={focusOnHover ? () => goTo(i) : undefined}
                onClick={() => goTo(i)}
              >
                <div className="relative h-full w-full transition-all duration-500">
                  {renderItem(item, i, isActive)}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {showDots && (
        <div className="mt-4 flex justify-center gap-2 sm:hidden">
          {items.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                i === current
                  ? "bg-primary scale-110"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default AdvancedCarousel;
