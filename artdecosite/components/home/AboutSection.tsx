import Image from "next/image";
import Link from "next/link";
import { aboutProfile } from "@/lib/constants/about";
import { siteX } from "@/lib/constants/layout";

export function AboutSection() {
  return (
    <section className="bg-white pb-16 pt-6 sm:pb-20 sm:pt-8 lg:pb-28 lg:pt-12">
      <div className="grid lg:grid-cols-2">
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-mist sm:aspect-[3/4] lg:aspect-auto lg:min-h-[32rem] xl:min-h-[44rem]">
          <Image
            src={aboutProfile.image}
            alt="Shaineela Ahmed"
            fill
            unoptimized
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-[center_50%]"
          />
        </div>

        <div className={`flex flex-col justify-center py-12 sm:py-16 lg:px-14 lg:py-24 xl:px-20 ${siteX}`}>
          <div className="mx-auto w-full max-w-lg text-center">
            <div className="mb-6 flex items-center justify-center gap-3 sm:mb-8 sm:gap-4 lg:mb-10">
              <span className="h-px w-8 bg-navy/20 sm:w-12" />
              <span className="text-black/20">◆</span>
              <span className="h-px w-8 bg-navy/20 sm:w-12" />
            </div>

            <h2 className="text-balance font-heading text-lg font-bold uppercase leading-snug tracking-[0.14em] text-black sm:text-xl sm:tracking-[0.16em] lg:text-[1.65rem] lg:tracking-[0.18em]">
              {aboutProfile.heading}
            </h2>

            <div className="mt-8 space-y-5 text-sm leading-[1.8] text-black/65 sm:mt-10 sm:space-y-6 sm:text-base sm:leading-[1.85] lg:mt-12 lg:text-[1.05rem] lg:leading-[1.9]">
              {aboutProfile.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 flex justify-center sm:mt-12 lg:mt-14">
              <Link
                href={aboutProfile.cta.href}
                className="group inline-flex w-full max-w-sm items-center justify-center gap-4 border border-black/20 bg-white px-6 py-3.5 transition-all duration-300 hover:border-teal hover:shadow-[0_8px_30px_rgba(2,43,58,0.06)] sm:w-auto sm:max-w-none sm:gap-5 sm:px-8 sm:py-4 lg:gap-6 lg:px-12 lg:py-5"
              >
                <span className="hidden h-px w-5 bg-black/25 transition-all duration-300 group-hover:w-8 group-hover:bg-teal sm:block" />
                <span className="font-heading text-[10px] font-bold uppercase tracking-[0.28em] text-black transition-colors duration-300 group-hover:text-teal sm:text-[11px] sm:tracking-[0.32em] lg:text-xs">
                  {aboutProfile.cta.label}
                </span>
                <span className="hidden h-px w-5 bg-black/25 transition-all duration-300 group-hover:w-8 group-hover:bg-teal sm:block" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
