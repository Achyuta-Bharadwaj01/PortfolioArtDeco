import Image from "next/image";
import type { Specialty } from "@/lib/constants/specialties";
import { siteX } from "@/lib/constants/layout";

type SpecialtyRowProps = {
  specialty: Specialty;
};

export function SpecialtyRow({ specialty }: SpecialtyRowProps) {
  const imageFirst = specialty.imagePosition === "left";

  const imageCell = (
    <div className="relative flex min-h-[280px] items-center justify-center bg-white p-6 sm:min-h-[360px] sm:p-10 lg:min-h-[480px]">
      <div className="relative aspect-[3/4] w-full max-w-[320px] overflow-hidden sm:max-w-[380px]">
        <Image
          src={specialty.image}
          alt={specialty.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 85vw, 40vw"
        />
      </div>
    </div>
  );

  const textCell = (
    <div className="flex flex-col justify-center bg-white px-6 py-10 sm:px-10 sm:py-14 lg:px-12 lg:py-16">
      {specialty.eyebrow ? (
        <>
          <p className="font-script text-[clamp(2rem,4vw,3rem)] leading-none text-black">
            {specialty.eyebrow}
          </p>
          <div className="mt-4 mb-8 h-px w-16 bg-black/25" />
        </>
      ) : null}

      <div className="mb-6 flex flex-wrap items-baseline gap-x-2 gap-y-1">
        <span className="text-sm font-medium tracking-[0.2em] text-black/45 sm:text-base">
          {specialty.number}
        </span>
        <h2 className="text-[clamp(1.35rem,2.5vw,1.75rem)] font-light tracking-wide text-black/70">
          {specialty.titleRegular}{" "}
          <span className="font-script text-[clamp(2rem,4vw,2.75rem)] text-black">
            {specialty.titleScript}
          </span>
        </h2>
      </div>

      <p className="max-w-xl text-[clamp(0.95rem,1.5vw,1.05rem)] leading-[1.9] text-black/75">
        {specialty.body}
      </p>
    </div>
  );

  return (
    <section className="border-b border-black/15 bg-white">
      <div className={`${siteX} border-x border-black/15`}>
        <div className="grid lg:grid-cols-2">
          <div
            className={
              imageFirst
                ? "border-b border-black/15 lg:border-b-0 lg:border-r lg:border-black/15"
                : "border-b border-black/15 lg:order-2 lg:border-b-0 lg:border-l lg:border-black/15"
            }
          >
            {imageFirst ? imageCell : textCell}
          </div>
          <div className={imageFirst ? "" : "lg:order-1"}>
            {imageFirst ? textCell : imageCell}
          </div>
        </div>
      </div>
    </section>
  );
}
