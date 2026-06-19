"use client";

import { useEffect, useState } from "react";

const HERO_SLIDES = [
  {
    image: "/slider1.jpg",
    title: "Engineering Excellence.",
    description:
      "Delivering premium well services, NDT, and pipeline support for Africa's leading energy operators.",
    primaryCta: "Explore Capabilities",
    secondaryCta: "View Safety Records",
  },
  {
    image: "/slider2.jpg",
    title: "Safer pipelines start here.",
    description:
      "Advanced inspection and integrity solutions across Africa for every critical asset.",
    primaryCta: "Discover Services",
    secondaryCta: "View Safety Records",
  },
  {
    image: "/slider3.jpg",
    title: "Trusted energy partners.",
    description:
      "Precision maintenance, commissioning, and emergency response for high-value operations.",
    primaryCta: "See Our Expertise",
    secondaryCta: "View Safety Records",
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section className="relative min-h-screen overflow-hidden bg-navy">
      {/* Image Carousel Background */}
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((slideItem, index) => (
          <div
            key={slideItem.image}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slideItem.image}
              alt={`Hero slide ${index + 1}`}
              className={`h-full w-full object-cover ${
                index === currentSlide ? "zoom-animation" : ""
              }`}
            />
          </div>
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-[1] bg-navy/55" />

      <div className="relative z-10 flex min-h-screen flex-col px-6 pt-32 pb-36 lg:px-10 xl:px-16 lg:pt-40">
        <div className="flex flex-1 flex-col justify-center">
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            {slide.title}
          </h1>
          <p className="mt-6 max-w-3xl text-base font-medium text-white sm:text-lg lg:text-xl">
            {slide.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
            <button
              type="button"
              className="rounded-full bg-red px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-red-hover"
            >
              {slide.primaryCta}
            </button>
            <button
              type="button"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-navy transition-colors hover:bg-white/90"
            >
              {slide.secondaryCta}
            </button>
          </div>
        </div>

        {/* Scroll Indicator - Center Bottom */}
        <div className="absolute bottom-6 left-1/2 z-20 flex transform -translate-x-1/2 flex-col items-center gap-4">
          <div className="scroll-bounce flex h-10 w-10 items-center justify-center rounded-full border border-white/40">
            <svg
              className="h-5 w-5 text-white/60"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
          <span className="text-xs font-light uppercase tracking-widest text-white/60">
            Scroll
          </span>
        </div>
      </div>

      {/* Carousel Indicator Dots - Right Middle */}
      <div className="absolute right-8 top-1/2 z-20 hidden md:flex -translate-y-1/2 flex-col items-center gap-3">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-red scale-110" : "bg-white/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
