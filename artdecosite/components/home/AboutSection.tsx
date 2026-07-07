import Image from "next/image";
import { BotanicalAccent } from "@/components/ui/BotanicalAccent";
import { aboutProfile } from "@/lib/constants/about";
import { aboutSectionId } from "@/lib/utils/scrollToHash";

export function AboutSection() {
  return (
    <section
      id={aboutSectionId}
      className="relative scroll-mt-24 overflow-hidden bg-cream-soft pb-14 pt-4 lg:scroll-mt-28 lg:pb-20 lg:pt-6"
    >
      <BotanicalAccent position="top-right" className="opacity-50" />

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-10 xl:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
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

            <h2 className="font-heading text-3xl font-normal italic leading-snug text-ink sm:text-4xl lg:text-[2.35rem] lg:leading-tight">
              {aboutProfile.heading}
            </h2>

            <div className="mt-8 space-y-6 font-body text-base leading-[1.85] text-ink/70 lg:mt-10 lg:text-[1.05rem] lg:leading-[1.9]">
              {aboutProfile.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
