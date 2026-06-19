const TESTIMONIALS = [
  {
    quote:
      "Ashbard delivered ahead of schedule with exceptional safety and local engagement. Their team transformed our site execution.",
    author: "Kemi Adeyemi",
    role: "Operations Director, West African Energy",
  },
  {
    quote:
      "Their disciplined approach and technical delivery gave us confidence on a complex offshore package.",
    author: "Emmanuel Okonkwo",
    role: "Project Manager, Onshore Infrastructure",
  },
  {
    quote:
      "We chose Ashbard for their safety-first culture and reliable performance in demanding environments.",
    author: "Nina Bello",
    role: "Head of Procurement, Industry Partner",
  },
];

export function TestimonialSection() {
  return (
    <section className="bg-white py-20">
      <div className="w-full px-6 lg:px-10 xl:px-16">
        <div className="mb-12 text-center">
          <div>
            <h2 className="text-3xl font-bold tracking-[-0.02em] text-navy">
              Trusted by operators across Africa
            </h2>
            <span className="mt-3 block h-1 w-14 bg-red mx-auto" />
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <article key={item.author} className="rounded-[12px] border border-slate-200/80 bg-slate-50 p-8 shadow-sm shadow-slate-900/5">
              <p className="text-base leading-8 text-slate-700">“{item.quote}”</p>
              <div className="mt-8">
                <p className="font-semibold text-slate-900">{item.author}</p>
                <p className="text-sm text-slate-500">{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
