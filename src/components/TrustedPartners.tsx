const LOGOS = Array.from({ length: 10 }, (_, index) => `/logo/Logo ${index + 1}.png`);

export function TrustedPartners() {
  return (
    <section className="pt-10 pb-6 sm:pt-12 sm:pb-8 lg:pt-14 lg:pb-10">
      <div className="w-full px-6 lg:px-10 xl:px-16">
        <div className="mb-7 flex flex-col gap-4 md:mb-10 md:flex-row md:items-center md:justify-between">
          <p className="max-w-3xl text-lg font-medium text-navy md:text-xl">
            Partnering with top energy and logistics firms to provide safe and efficient oil & gas solutions globally.
          </p>
          <span className="self-start inline-flex rounded-full bg-red px-4 py-2 text-sm font-semibold text-white md:self-auto">
            Trusted Partners
          </span>
        </div>

        <div className="logo-marquee-wrapper w-full overflow-hidden rounded-[2rem] py-2 sm:py-3">
          <div className="logo-marquee-track flex items-center gap-3 px-2 sm:gap-4 sm:px-4 md:px-6">
            {LOGOS.concat(LOGOS).map((logo, index) => (
              <div
                key={`${logo}-${index}`}
                className="flex min-w-[31%] flex-shrink-0 items-center justify-center p-2 sm:min-w-[24%] sm:p-3 lg:min-w-[14%]"
              >
                <img src={logo} alt={`Trusted partner ${index + 1}`} className="max-h-12 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
