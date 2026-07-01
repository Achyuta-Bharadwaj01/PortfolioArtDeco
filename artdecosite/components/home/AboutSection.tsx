import Image from "next/image";
import Link from "next/link";
import { aboutProfile } from "@/lib/constants/about";

export function AboutSection() {
  return (
    <section className="bg-white pb-14 pt-4 lg:pb-20 lg:pt-6">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-10 xl:px-12">
        <div className="mb-8 max-w-2xl border-b border-black/10 pb-8 lg:mb-10 lg:pb-10">
          <h2 className="font-heading text-2xl font-bold uppercase tracking-[0.14em] text-black sm:text-3xl">
            {aboutProfile.heading}
          </h2>
          <p className="mt-4 max-w-xl text-base italic leading-relaxed text-black/55 lg:text-lg">
            {aboutProfile.subheading}
          </p>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-mist ring-1 ring-black/[0.06] sm:aspect-[3/4] lg:aspect-[4/5]">
            <Image
              src={aboutProfile.image}
              alt="Shaineela Ahmed"
              fill
              unoptimized
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-[center_50%]"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px flex-1 bg-navy/15" />
              <span className="text-black/20">◆</span>
              <span className="h-px flex-1 bg-navy/15" />
            </div>

            <div className="space-y-6 text-base leading-[1.85] text-black/65 lg:text-[1.05rem] lg:leading-[1.9]">
              {aboutProfile.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 lg:mt-12">
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
