"use client";

import { useEffect, useRef, useState } from "react";

export const ScrollProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const max = scrollHeight - clientHeight;
      const value = max > 0 ? Math.min(1, Math.max(0, scrollTop / max)) : 0;
      setProgress(value);
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 z-[10003] w-full pointer-events-none"
    >
      <div
        className="h-[3px] bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 shadow-[0_0_12px_rgba(224,169,35,0.55)]"
        style={{ width: `${progress * 100}%`, transition: "width 150ms ease-out" }}
      />
    </div>
  );
};