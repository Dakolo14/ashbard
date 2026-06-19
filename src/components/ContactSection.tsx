export function ContactSection() {
  return (
    <section className="bg-cream py-20 text-[#0f172a]">
      <div className="w-full px-6 lg:px-10 xl:px-16">
        <div className="mb-10 text-center">
          <div className="mt-6">
            <h2 className="text-3xl font-bold tracking-[-0.02em] text-[#0f172a]">
              Contact Us
            </h2>
            <span className="mt-3 block h-1 w-14 bg-red mx-auto" />
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[24px] border border-[#d7d1c4] bg-white p-10 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-[#0f172a]">Office</h3>
                <p className="mt-3 text-[#475569]">Lagos, Nigeria</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0f172a]">Email</h3>
                <p className="mt-3 text-[#475569]">connect@ashbardenergy.com</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0f172a]">Phone</h3>
                <p className="mt-3 text-[#475569]">+234 800 000 0000</p>
              </div>
            </div>
          </div>

          <form className="space-y-5 rounded-[24px] border border-[#d7d1c4] bg-white p-10 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
            <div>
              <label className="block text-sm font-semibold text-[#334155]">Name</label>
              <input
                type="text"
                className="mt-2 w-full rounded-2xl border border-[#c9c2b5] bg-[#f8f5ef] px-4 py-3 text-[#0f172a] outline-none transition focus:border-red focus:ring-2 focus:ring-red/10"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#334155]">Email</label>
              <input
                type="email"
                className="mt-2 w-full rounded-2xl border border-[#c9c2b5] bg-[#f8f5ef] px-4 py-3 text-[#0f172a] outline-none transition focus:border-red focus:ring-2 focus:ring-red/10"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#334155]">Message</label>
              <textarea
                rows={5}
                className="mt-2 w-full rounded-2xl border border-[#c9c2b5] bg-[#f8f5ef] px-4 py-3 text-[#0f172a] outline-none transition focus:border-red focus:ring-2 focus:ring-red/10"
                placeholder="Tell us about your project"
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-[#0f172a] px-6 py-3 text-sm font-semibold text-cream transition hover:bg-red"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
