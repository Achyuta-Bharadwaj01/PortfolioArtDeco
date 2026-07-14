import Image from "next/image";
import { AboutVideoButton } from "@/components/home/AboutVideoButton";
import { aboutProfile } from "@/lib/constants/about";
import { aboutSectionId } from "@/lib/utils/scrollToHash";

export function AboutSection() {
  return (
    <section
      id={aboutSectionId}
      className="relative scroll-mt-24 overflow-hidden bg-cream pb-16 pt-10 lg:scroll-mt-28 lg:pb-24 lg:pt-14"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-10 xl:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          <div className="relative flex items-center justify-center">
            <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px]">
              <div className="overflow-hidden rounded-[1.75rem] border border-gold/25 bg-parchment p-1.5 shadow-[0_24px_48px_-28px_rgba(35,32,25,0.2)] sm:rounded-[2rem] sm:p-2">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] sm:rounded-[1.65rem]">
                  <Image
                    src={aboutProfile.image}
                    alt="Shaineela Ahmed"
                    fill
                    unoptimized
                    sizes="(max-width: 640px) 320px, (max-width: 1024px) 380px, 420px"
                    className="object-cover object-[center_42%] scale-[1.02]"
                  />
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/15" />
                </div>
              </div>
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

            <AboutVideoButton />
          </div>
        </div>
      </div>
    </section>
  );
}
