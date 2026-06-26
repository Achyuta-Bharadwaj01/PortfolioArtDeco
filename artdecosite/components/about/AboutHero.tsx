import { siteX } from "@/lib/constants/layout";

export function AboutHero() {
  return (
    <section className="border-b border-black/15 bg-white">
      <div
        className={`${siteX} flex flex-col items-center justify-center px-4 py-16 sm:py-20 lg:py-28`}
      >
        <h1 className="text-center leading-none">
          <span className="font-script text-[clamp(3rem,8vw,5.5rem)] text-black">
            My
          </span>{" "}
          <span className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-light tracking-[0.08em] text-black">
            Specialities
          </span>
        </h1>
      </div>
    </section>
  );
}
