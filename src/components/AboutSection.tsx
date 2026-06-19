"use client";

import { useEffect, useRef, useState } from "react";

const METRICS = [
  { label: "Projects Delivered", value: 128 },
  { label: "Tonnes Exported", value: 4200000 },
  { label: "Safety Hours", value: 15000 },
  { label: "Countries Supported", value: 8 },
];

function formatMetric(value?: number, label?: string) {
  const amount = value ?? 0;

  if (label === "Tonnes Exported" && amount >= 1000000) {
    const formatted = (amount / 1000000).toFixed(amount % 1000000 === 0 ? 0 : 1);
    return `${formatted.replace(/\.0$/, "")}m`;
  }

  return amount.toLocaleString("en-US");
}

export function AboutSection() {
  const [counts, setCounts] = useState<number[]>(() => METRICS.map(() => 0));
  const ref = useRef<HTMLDivElement | null>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          const start = performance.now();
          const duration = 1200;

          const animate = (timestamp: number) => {
            const progress = Math.min((timestamp - start) / duration, 1);
            setCounts(
              METRICS.map((metric) =>
                Math.round(metric.value * progress)
              )
            );
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="pt-8 pb-16 sm:pt-10 sm:pb-20">
      <div className="w-full px-6 lg:px-10 xl:px-16">
        <div className="mb-8 text-center sm:mb-10">
          <div>
            <h2 className="text-3xl font-bold tracking-[-0.02em] text-navy">
              About Ashbard
            </h2>
            <span className="mt-3 block h-1 w-14 bg-red mx-auto" />
          </div>
          <p className="mt-6 text-xl font-semibold leading-tight text-[#111111] sm:text-2xl">
            Cleaner energy outcomes across African operations.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-4 lg:grid-cols-[1.2fr_0.9fr_1fr]">
          <div className="order-1 row-span-2 overflow-hidden rounded-[6px] sm:order-none">
            <img
              src="/oilrig.jpg"
              alt="Oil rig at sunrise"
              className="h-full w-full min-h-[360px] object-cover"
            />
          </div>

          <div className="overflow-hidden rounded-[6px]">
            <img
              src="/oilrefinery.jpg"
              alt="Oil refinery piping"
              className="h-full w-full min-h-[260px] object-cover"
            />
          </div>

          <div className="rounded-[6px] bg-[#1E1E1E] p-8 text-white sm:p-10">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-red/10 text-red">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
                <path d="M12 2C8 2 4 4.5 4 10.5c0 4.5 3.5 7.5 8 11 4.5-3.5 8-6.5 8-11C20 4.5 16 2 12 2Zm0 14.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z" />
              </svg>
            </div>
            <p className="text-base font-bold uppercase tracking-[0.22em] text-red">
              Ashbard Energy story
            </p>
            <p className="mt-6 text-xl font-semibold leading-tight text-white sm:text-2xl">
              Supporting operators across Africa with precision well services, integrity management, and rapid response support.
            </p>
          </div>

          <div ref={ref} className="lg:col-span-2 p-8 sm:p-10">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {METRICS.map((metric, index) => (
                <div
                  key={metric.label}
                  className="text-center border-b border-slate-200/10 pb-4 last:border-b-0 sm:border-b-0 sm:pb-0"
                >
                  <p className="text-4xl font-semibold text-red">
                    {formatMetric(counts[index], metric.label)}
                    {metric.value >= 1000 && counts[index] === metric.value && metric.label === "Tonnes Exported" ? "+" : ""}
                  </p>
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-600">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
