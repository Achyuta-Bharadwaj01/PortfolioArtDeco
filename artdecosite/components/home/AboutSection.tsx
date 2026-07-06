import Image from "next/image";
import Link from "next/link";
import {
  EditorialStamp,
  HeraldicCrest,
  SketchMural,
} from "@/components/ui/ornaments";
import { aboutProfile } from "@/lib/constants/about";

export function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-parchment bg-parchment-texture pb-14 pt-4 lg:pb-20 lg:pt-6">
      <SketchMural
        variant="botanical"
        tone="mauve"
        className="absolute -right-16 top-0 h-[28rem] w-[32rem] opacity-90 sm:-right-8 lg:h-[34rem] lg:w-[38rem]"
      />
      <SketchMural
        variant="interior"
        tone="cocoa"
        className="absolute -left-20 bottom-0 hidden h-[24rem] w-[30rem] opacity-60 md:block lg:h-[28rem] lg:w-[34rem]"
      />
      <HeraldicCrest
        size="xl"
        tone="brass"
        className="absolute left-1/2 top-[8%] -translate-x-1/2 opacity-40"
      />
      <EditorialStamp
        size="lg"
        tone="brass"
        className="absolute bottom-[10%] left-[3%] hidden opacity-45 lg:block"
      />
      <EditorialStamp
        size="md"
        tone="cocoa"
        className="absolute right-[5%] top-[15%] opacity-50 sm:opacity-60"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-10 xl:px-12">
        <div className="mb-8 max-w-2xl border-b border-cocoa/10 pb-8 lg:mb-10 lg:pb-10">
          <h2 className="font-heading text-2xl font-bold uppercase tracking-[0.14em] text-black sm:text-3xl">
            {aboutProfile.heading}
          </h2>
          <p className="mt-4 max-w-xl font-heading text-base italic leading-relaxed text-black/55 lg:text-lg">
            {aboutProfile.subheading}
          </p>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-linen ring-1 ring-cocoa/[0.08] sm:aspect-[3/4] lg:aspect-[4/5]">
            <Image
              src={aboutProfile.image}
              alt="Shaineela Ahmed"
              fill
              unoptimized
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-[center_50%]"
            />
            <EditorialStamp
              size="sm"
              tone="brass"
              className="absolute -bottom-4 -right-4 opacity-80 sm:-bottom-6 sm:-right-6"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px flex-1 bg-cocoa/15" />
              <HeraldicCrest size="sm" tone="cocoa" className="shrink-0 opacity-80" />
              <span className="h-px flex-1 bg-cocoa/15" />
            </div>

            <div className="space-y-6 font-body text-base leading-[1.85] text-black/65 lg:text-[1.05rem] lg:leading-[1.9]">
              {aboutProfile.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 lg:mt-12">
              <Link
                href={aboutProfile.cta.href}
                className="group inline-flex items-center gap-5 border border-cocoa/15 bg-parchment px-8 py-4 transition-all duration-300 hover:border-camel hover:shadow-warm lg:gap-6 lg:px-12 lg:py-5"
              >
                <span className="h-px w-5 bg-cocoa/25 transition-all duration-300 group-hover:w-8 group-hover:bg-camel" />
                <span className="font-body text-[11px] font-semibold uppercase tracking-[0.32em] text-black transition-colors duration-300 group-hover:text-camel lg:text-xs">
                  {aboutProfile.cta.label}
                </span>
                <span className="h-px w-5 bg-cocoa/25 transition-all duration-300 group-hover:w-8 group-hover:bg-camel" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
