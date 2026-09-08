"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronRightIcon } from "@/components/icons";

type Slide = {
  src: string;
  alt: string;
  caption?: string;
};

export function HeroSlideshow({
  slides,
  intervalMs = 6000,
}: {
  slides: Slide[];
  intervalMs?: number;
}) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(Date.now());

  const nextSlide = useCallback(() => {
    setIndex((i) => (i + 1) % slides.length);
    setProgress(0);
    startTimeRef.current = Date.now();
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
    setProgress(0);
    startTimeRef.current = Date.now();
  }, [slides.length]);

  const goToSlide = (i: number) => {
    setIndex(i);
    setProgress(0);
    startTimeRef.current = Date.now();
  };

  useEffect(() => {
    if (slides.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const progressInterval = window.setInterval(() => {
      if (!isPaused) {
        const elapsed = Date.now() - startTimeRef.current;
        const p = Math.min((elapsed / intervalMs) * 100, 100);
        setProgress(p);
        if (p >= 100) {
          nextSlide();
        }
      }
    }, 50);

    return () => window.clearInterval(progressInterval);
  }, [slides.length, intervalMs, isPaused, nextSlide]);

  return (
    <div
      className="relative h-full w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        startTimeRef.current = Date.now() - (progress / 100) * intervalMs;
      }}
    >
      {/* Background Slides */}
      {slides.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          priority={i === 0}
          sizes="100vw"
          className={`animate-kenburns absolute inset-0 object-cover transition-opacity duration-[1500ms] ease-in-out ${
            i === index ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
          }`}
        />
      ))}

      {/* KRBL-Style Slide Controller Overlay (Bottom Right on Desktop) */}
      <div className="absolute bottom-8 right-6 z-20 hidden items-center gap-4 rounded-2xl border border-white/20 bg-black/40 px-5 py-3 backdrop-blur-md shadow-2xl sm:flex lg:right-12">
        {/* Slide Counter */}
        <div className="flex items-center gap-1.5 font-display text-sm tracking-wider text-cream">
          <span className="text-gold-light font-bold">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-white/40">/</span>
          <span className="text-white/60">
            {String(slides.length).padStart(2, "0")}
          </span>
        </div>

        {/* Progress Bar */}
        <div className="relative h-1 w-24 overflow-hidden rounded-full bg-white/20">
          <div
            className="h-full bg-gold transition-all duration-75 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Arrow Buttons */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous slide"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-white/10 text-cream transition-all hover:scale-110 hover:bg-gold hover:text-primary-dark"
          >
            <ChevronRightIcon className="h-4 w-4 rotate-180" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-white/10 text-cream transition-all hover:scale-110 hover:bg-gold hover:text-primary-dark"
          >
            <ChevronRightIcon className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Mobile Slide Dots */}
      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 sm:hidden">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? "w-6 bg-gold" : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

