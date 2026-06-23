import Image from "next/image";
import Link from "next/link";
import { aboutProfile } from "@/lib/constants/about";

export function AboutSection() {
  return (
    <section className="bg-white pb-20 pt-8 lg:pb-28 lg:pt-12">
      <div className="grid lg:grid-cols-2">
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-mist sm:aspect-[3/4] lg:aspect-auto lg:min-h-[38rem] xl:min-h-[44rem]">
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

        <div className="flex flex-col justify-center px-5 py-16 sm:px-10 lg:px-14 lg:py-24 xl:px-20">
          <div className="mx-auto w-full max-w-lg text-center">
            <div className="mb-8 flex items-center justify-center gap-4 lg:mb-10">
              <span className="h-px w-12 bg-navy/20" />
              <span className="text-black/20">◆</span>
              <span className="h-px w-12 bg-navy/20" />
            </div>

            <h2 className="font-heading text-xl font-bold uppercase leading-tight tracking-[0.18em] text-black sm:text-2xl lg:text-[1.65rem]">
              {aboutProfile.heading}
            </h2>

            <div className="mt-10 space-y-6 text-base leading-[1.85] text-black/65 lg:mt-12 lg:text-[1.05rem] lg:leading-[1.9]">
              {aboutProfile.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-12 flex justify-center lg:mt-14">
              <Link
                href={aboutProfile.cta.href}
                className="group inline-flex items-center gap-5 border border-black/20 bg-white px-8 py-4 transition-all duration-300 hover:border-teal hover:shadow-[0_8px_30px_rgba(2,43,58,0.06)] lg:gap-6 lg:px-12 lg:py-5"
              >
                <span className="h-px w-5 bg-black/25 transition-all duration-300 group-hover:w-8 group-hover:bg-teal" />
                <span className="font-heading text-[11px] font-bold uppercase tracking-[0.32em] text-black transition-colors duration-300 group-hover:text-teal lg:text-xs">
                  {aboutProfile.cta.label}
                </span>
                <span className="h-px w-5 bg-black/25 transition-all duration-300 group-hover:w-8 group-hover:bg-teal" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
