import Image from "next/image";
import Link from "next/link";
import { BotanicalAccent } from "@/components/ui/BotanicalAccent";
import { aboutProfile } from "@/lib/constants/about";

export function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-cream-soft pb-14 pt-4 lg:pb-20 lg:pt-6">
      <BotanicalAccent position="top-right" className="opacity-50" />

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-10 xl:px-12">
        <div className="mb-8 max-w-2xl border-b border-gold/20 pb-8 lg:mb-10 lg:pb-10">
          <h2 className="font-heading text-3xl italic font-normal text-ink sm:text-4xl">
            {aboutProfile.heading}
          </h2>
          <p className="mt-4 max-w-xl text-base italic leading-relaxed text-ink/55 lg:text-lg">
            {aboutProfile.subheading}
          </p>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          {/* Pre-composited portrait — frame, photo and botanicals baked into one PNG */}
          <div className="relative flex items-center justify-center">
            <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[460px]">
              <Image
                src="/UIItems/mirror_borderFilgreen_withimage.png"
                alt="Shaineela Ahmed"
                width={900}
                height={900}
                unoptimized
                sizes="(max-width: 640px) 320px, (max-width: 1024px) 400px, 460px"
                className="h-auto w-full object-contain"
                style={{ mixBlendMode: "multiply" }}
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px flex-1 bg-gold/25" />
              <span className="text-gold/55">◆</span>
              <span className="h-px flex-1 bg-gold/25" />
            </div>

            <div className="space-y-6 font-body text-base leading-[1.85] text-ink/70 lg:text-[1.05rem] lg:leading-[1.9]">
              {aboutProfile.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 lg:mt-12">
              <Link
                href={aboutProfile.cta.href}
                className="group inline-flex items-center gap-5 border border-gold/30 bg-cream px-8 py-4 transition-all duration-300 hover:border-gold hover:shadow-gold lg:gap-6 lg:px-12 lg:py-5"
              >
                <span className="h-px w-5 bg-gold/35 transition-all duration-300 group-hover:w-8 group-hover:bg-gold" />
                <span className="font-body text-[11px] font-semibold uppercase tracking-[0.32em] text-ink/75 transition-colors duration-300 group-hover:text-gold lg:text-xs">
                  {aboutProfile.cta.label}
                </span>
                <span className="h-px w-5 bg-gold/35 transition-all duration-300 group-hover:w-8 group-hover:bg-gold" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
