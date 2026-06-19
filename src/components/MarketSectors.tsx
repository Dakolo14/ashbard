const SERVICES = [
  { title: "Well Services", href: "/services/well-services" },
  { title: "Valves Supply", href: "/services/valves-supply" },
  { title: "NDT Services", href: "/services/ndt-services" },
  { title: "Tank Cleaning & Rehabilitation", href: "/services/tank-cleaning" },
  { title: "Technical Manpower Services", href: "/services/technical-manpower" },
  { title: "Procurement Solutions", href: "/services/procurement-solutions" },
  { title: "Rig Provision Services", href: "/services/rig-provision" },
  { title: "Drilling Tools & Equipment", href: "/services/drilling-tools" },
  { title: "Corrosion Monitoring Services", href: "/services/corrosion-monitoring" },
];

export function MarketSectors() {
  return (
    <section className="market-sectors relative overflow-hidden py-14 sm:py-16 lg:py-20">
      <img
        className="market-bg"
        src="/pipeline.jpg"
        alt="industrial background"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full px-6 lg:px-10 xl:px-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-12">
          <div className="lg:pr-4">
            <h3 className="text-lg font-bold text-white">OUR SERVICES</h3>
            <div className="mt-3 h-1 w-10 bg-red" />
            <p className="mt-6 max-w-md text-white/90">
              Delivering Outstanding Quality — our expertise spans oil & gas, electricity & power, procurement solutions, and technical manpower services.
            </p>
            <a
              className="mt-6 inline-flex items-center rounded-full bg-red px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-red/20 transition hover:bg-red-hover"
              href="/services"
            >
              View Services
            </a>
          </div>

          <div>
            <div className="service-grid grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-0">
              {SERVICES.map((svc) => {
                const renderIcon = (name: string) => {
                  switch (name) {
                    case "Well Services":
                      return (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 2v6" />
                          <path d="M8 8h8v10H8z" />
                          <path d="M9 20h6" />
                        </svg>
                      );
                    case "Valves Supply":
                      return (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="3" />
                          <path d="M12 2v3" />
                          <path d="M12 19v3" />
                          <path d="M2 12h3" />
                          <path d="M19 12h3" />
                        </svg>
                      );
                    case "NDT Services":
                      return (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="11" cy="11" r="6" />
                          <path d="M21 21l-4.35-4.35" />
                        </svg>
                      );
                    case "Tank Cleaning & Rehabilitation":
                      return (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="7" width="18" height="10" rx="2" />
                          <path d="M7 7v-2" />
                          <path d="M17 7v-2" />
                        </svg>
                      );
                    case "Technical Manpower Services":
                      return (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      );
                    case "Procurement Solutions":
                      return (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 7h18v10H3z" />
                          <path d="M16 3v4" />
                          <path d="M8 3v4" />
                        </svg>
                      );
                    case "Rig Provision Services":
                      return (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 21h18" />
                          <path d="M6 3l6 9 6-9" />
                        </svg>
                      );
                    case "Drilling Tools & Equipment":
                      return (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 21l6-6" />
                          <path d="M14 10l7-7" />
                          <path d="M7 14l3 3" />
                        </svg>
                      );
                    case "Corrosion Monitoring Services":
                      return (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z" />
                        </svg>
                      );
                    default:
                      return (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="9" />
                        </svg>
                      );
                  }
                };

                return (
                  <div
                    key={svc.title}
                    className="flex min-h-[180px] flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:min-h-[200px] lg:rounded-none lg:bg-transparent lg:p-8"
                  >
                    <a
                      href={svc.href}
                      className="text-xl font-bold leading-snug text-white sm:text-2xl"
                    >
                      {svc.title}
                    </a>

                    <div className="mt-6 text-white">
                      {renderIcon(svc.title)}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
