import { siteConfig } from "@/lib/constants/site";

export function HeroTagline() {
  return (
    <section className="relative bg-gradient-to-b from-cream via-parchment/40 to-cream px-5 py-10 text-center sm:px-6 sm:py-12 lg:px-10 lg:py-14">
      <div className="mx-auto max-w-xs sm:max-w-none">
        <p className="font-script-display text-xl text-gold sm:text-2xl lg:text-3xl">
          Interior Architect &amp; Set Designer
        </p>
      </div>
      <p className="mx-auto mt-3 max-w-6xl font-body text-[11px] font-medium uppercase leading-relaxed tracking-[0.32em] text-ink/50 sm:text-xs sm:tracking-[0.38em] md:text-sm md:tracking-[0.42em] lg:text-[0.9375rem] lg:tracking-[0.48em]">
        {siteConfig.tagline}
      </p>
    </section>
  );
}
