"use client";

import { useEffect, useRef } from "react";

export default function ParallaxGrid() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onScroll() {
      if (!ref.current) return;
      const offset = window.scrollY * 0.05; // very slow, subtle shift
      ref.current.style.transform = `translateY(${offset}px)`;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <div ref={ref} className="dot-grid" />;
}