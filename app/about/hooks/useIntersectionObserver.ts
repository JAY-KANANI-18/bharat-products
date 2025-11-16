'use client';

import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
) {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true,
  } = options;

  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting;
        
        if (isElementIntersecting && (!triggerOnce || !hasTriggered)) {
          setIsIntersecting(true);
          setHasTriggered(true);
        } else if (!triggerOnce) {
          setIsIntersecting(isElementIntersecting);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce, hasTriggered]);

  return { ref: elementRef, isIntersecting };
}

export function useMultipleIntersectionObserver(
  count: number,
  options: UseIntersectionObserverOptions = {}
) {
  const [intersectingStates, setIntersectingStates] = useState<boolean[]>(
    new Array(count).fill(false)
  );
  const elementRefs = useRef<(HTMLElement | null)[]>(new Array(count).fill(null));

  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true,
  } = options;

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    elementRefs.current.forEach((element, index) => {
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIntersectingStates(prev => {
              const newStates = [...prev];
              newStates[index] = true;
              return newStates;
            });
          } else if (!triggerOnce) {
            setIntersectingStates(prev => {
              const newStates = [...prev];
              newStates[index] = false;
              return newStates;
            });
          }
        },
        {
          threshold,
          rootMargin,
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [threshold, rootMargin, triggerOnce]);

  const setRef = (index: number) => (ref: HTMLElement | null) => {
    elementRefs.current[index] = ref;
  };

  return { setRef, intersectingStates };
}
