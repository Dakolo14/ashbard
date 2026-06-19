const ACHIEVEMENTS = [
  {
    image: "https://www.arenasolutions.com/wp-content/uploads/what-is-iso-9001-compliance.png",
    title: "ISO Certifications",
    description:
      "ISO 9001, ISO 14001 and ISO 45001 certifications for quality, environmental and safety management.",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnk_FPQ2XlCzZY3OwZBNSubYNZzZRQUCMplWiEz8rfbQtwV33bm4XTmUp2&s=10",
    title: "Regulatory Licenses",
    description:
      "Permits from DPR and NUPRC that validate Ashbard’s operating compliance across Nigeria.",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROrSGBja0P0lC1peo4NQz9L-aLEkLMpIcsqNwnHTNNz8L8jlf7t2WfANE&s=10",
    title: "Industry Registration",
    description:
      "NJQS qualification for contracting with IOCs, demonstrating our readiness for major upstream projects.",
  },
];

export function AchievementsSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="w-full px-6 lg:px-10 xl:px-16">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-[-0.02em] text-navy">
            Our Licenses
          </h2>
          <span className="mt-3 block h-1 w-14 bg-red mx-auto" />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {ACHIEVEMENTS.map((item) => (
            <article
              key={item.title}
              className="rounded-[12px] border border-slate-200/70 bg-white p-8 text-center shadow-sm shadow-slate-900/5"
            >
              <div className="mb-8 flex h-28 items-center justify-center rounded-3xl bg-slate-100">
                <img src={item.image} alt={item.title} className="h-20 w-auto object-contain" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
