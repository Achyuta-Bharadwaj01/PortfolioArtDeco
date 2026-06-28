import { siteConfig } from "@/lib/constants/site";

export function HeroTagline() {
  return (
    <section className="bg-gradient-to-b from-white via-[#fafbfc] to-mist px-5 py-8 text-center sm:px-6 sm:py-10 lg:px-10 lg:py-12">
      <p className="mx-auto max-w-6xl font-heading text-sm font-normal uppercase leading-relaxed tracking-[0.28em] text-black sm:text-base sm:tracking-[0.32em] md:text-lg md:tracking-[0.36em] lg:text-xl lg:tracking-[0.4em]">
        {siteConfig.tagline}
      </p>
    </section>
  );
}
