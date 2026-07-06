import { siteConfig } from "@/lib/constants/site";
import { EditorialStamp, HeraldicCrest } from "@/components/ui/ornaments";

export function HeroTagline() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-parchment via-sofa/30 to-mist bg-parchment-texture px-5 py-10 text-center sm:px-6 sm:py-12 lg:px-10 lg:py-14">
      <EditorialStamp
        size="md"
        tone="cocoa"
        className="absolute -left-4 top-1/2 -translate-y-1/2 opacity-70 sm:left-2 md:left-6"
      />
      <EditorialStamp
        size="md"
        tone="cocoa"
        className="absolute -right-4 top-1/2 -translate-y-1/2 opacity-70 sm:right-2 md:right-6"
      />

      <HeraldicCrest
        size="sm"
        tone="brass"
        className="absolute left-1/2 top-3 -translate-x-1/2 opacity-60 sm:top-4"
      />

      <p className="relative z-10 mx-auto max-w-6xl font-body text-sm font-medium uppercase leading-relaxed tracking-[0.32em] text-cocoa sm:text-base sm:tracking-[0.36em] md:text-lg md:tracking-[0.4em] lg:text-xl lg:tracking-[0.44em]">
        {siteConfig.tagline}
      </p>
    </section>
  );
}
