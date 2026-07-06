import { siteConfig } from "@/lib/constants/site";

export function HeroTagline() {
  return (
    <section className="bg-gradient-to-b from-parchment via-sofa/30 to-mist px-5 py-8 text-center sm:px-6 sm:py-10 lg:px-10 lg:py-12">
      <p className="mx-auto max-w-6xl font-body text-sm font-medium uppercase leading-relaxed tracking-[0.32em] text-cocoa sm:text-base sm:tracking-[0.36em] md:text-lg md:tracking-[0.4em] lg:text-xl lg:tracking-[0.44em]">
        {siteConfig.tagline}
      </p>
    </section>
  );
}
