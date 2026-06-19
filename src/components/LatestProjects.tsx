const PROJECTS = [
  {
    title: "Lekki Deep Sea Port",
    subtitle: "Transforming maritime trade and logistics along the Lagos coastline.",
    image:
      "/oilrefinery.jpg",
  },
  {
    title: "Dangote Refinery Expansion",
    subtitle: "Scaling Nigeria's refining capacity for energy independence.",
    image:
      "/pipeline.jpg",
  },
  {
    title: "NLNG Train 7 Development",
    subtitle: "Expanding Nigeria's gas monetization capacity with world-scale LNG export infrastructure.",
    image:
      "/oilrig.jpg",
  },
];

export function LatestProjects() {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="w-full px-6 lg:px-10 xl:px-16">
        <div className="mb-10 grid gap-6 lg:mb-12 lg:grid-cols-[1fr_auto] lg:items-start">
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-[0.08em] text-navy sm:text-3xl">
                LATEST PROJECTS
              </h2>
              <span className="mt-3 block h-1 w-14 bg-red" />
            </div>

            <p className="max-w-2xl text-base leading-8 text-slate-600">
              Our Company has consistently embraced innovation to provide a superior level of excellence to customers.
            </p>
          </div>

          <div className="flex justify-start lg:justify-end">
            <a
              href="#"
              className="inline-flex items-center rounded-full bg-red px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-red/20 transition hover:bg-red-hover"
            >
              View Projects
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[53%_47%] lg:gap-0">
          <article className="group relative h-[340px] overflow-hidden rounded-2xl bg-slate-900 sm:h-[420px] lg:h-[520px] lg:rounded-none">
            <img
              src={PROJECTS[0].image}
              alt={PROJECTS[0].title}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-950/10 transition-opacity duration-300 group-hover:bg-slate-950/35" />
            <div className="absolute bottom-0 left-0 w-full sm:w-[80%] lg:w-[70%] transition-all duration-300 ease-in-out">
              <div className="bg-red px-5 pb-4 pt-4 sm:px-6">
                <h3 className="text-lg font-bold text-white">{PROJECTS[0].title}</h3>
                <p className="mt-2 text-sm font-medium text-white lg:max-h-0 lg:overflow-hidden lg:opacity-0 lg:translate-y-2 lg:transition-all lg:duration-300 lg:ease-in-out lg:group-hover:max-h-20 lg:group-hover:opacity-100 lg:group-hover:translate-y-0">
                  {PROJECTS[0].subtitle} <span className="text-white/80">→</span>
                </p>
              </div>
            </div>
          </article>

          <div className="grid gap-4 lg:gap-0">
            <article className="group relative h-[250px] overflow-hidden rounded-2xl bg-slate-900 sm:h-[260px] lg:rounded-none">
              <img
                src={PROJECTS[1].image}
                alt={PROJECTS[1].title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-slate-950/10 transition-opacity duration-300 group-hover:bg-slate-950/35" />
              <div className="absolute bottom-0 left-0 w-full sm:w-[80%] lg:w-[70%] transition-all duration-300 ease-in-out">
                <div className="bg-red px-5 pb-4 pt-4 sm:px-6">
                  <h3 className="text-lg font-bold text-white">{PROJECTS[1].title}</h3>
                  <p className="mt-2 text-sm font-medium text-white lg:max-h-0 lg:overflow-hidden lg:opacity-0 lg:translate-y-2 lg:transition-all lg:duration-300 lg:ease-in-out lg:group-hover:max-h-20 lg:group-hover:opacity-100 lg:group-hover:translate-y-0">
                    {PROJECTS[1].subtitle} <span className="text-white/80">→</span>
                  </p>
                </div>
              </div>
            </article>

            <article className="group relative h-[250px] overflow-hidden rounded-2xl bg-slate-900 sm:h-[260px] lg:rounded-none">
              <img
                src={PROJECTS[2].image}
                alt={PROJECTS[2].title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-slate-950/10 transition-opacity duration-300 group-hover:bg-slate-950/35" />
              <div className="absolute bottom-0 left-0 w-full sm:w-[80%] lg:w-[70%] transition-all duration-300 ease-in-out">
                <div className="bg-red px-5 pb-4 pt-4 sm:px-6">
                  <h3 className="text-lg font-bold text-white">{PROJECTS[2].title}</h3>
                  <p className="mt-2 text-sm font-medium text-white lg:max-h-0 lg:overflow-hidden lg:opacity-0 lg:translate-y-2 lg:transition-all lg:duration-300 lg:ease-in-out lg:group-hover:max-h-20 lg:group-hover:opacity-100 lg:group-hover:translate-y-0">
                    {PROJECTS[2].subtitle} <span className="text-white/80">→</span>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
