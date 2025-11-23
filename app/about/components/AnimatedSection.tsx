"use client";

import React from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animationType?: "fade-up" | "slide-left" | "slide-right" | "scale";
  delay?: number;
  threshold?: number;
  rootMargin?: string;
}

export function AnimatedSection({
  children,
  className = "",
  animationType = "fade-up",
  delay = 0,
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
}: AnimatedSectionProps) {
  const { ref, isIntersecting } = useIntersectionObserver<HTMLDivElement>({
    threshold,
    rootMargin,
    triggerOnce: true,
  });

  const getAnimationClasses = () => {
    let classes = "animate-on-scroll";

    switch (animationType) {
      case "slide-left":
        classes += " slide-left";
        break;
      case "slide-right":
        classes += " slide-right";
        break;
      case "scale":
        classes += " scale";
        break;
      default:
        // fade-up is the default
        break;
    }

    if (isIntersecting) {
      classes += " is-visible";
    }

    return classes;
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClasses()} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
