export function Logo({ variant = "light" }: { variant?: "light" | "dark" }) {
  return (
    <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.35em] text-cream">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-red text-base font-bold text-white">
        A
      </span>
      <span className={variant === "light" ? "text-cream" : "text-navy"}>Ashbard</span>
    </div>
  );
}
