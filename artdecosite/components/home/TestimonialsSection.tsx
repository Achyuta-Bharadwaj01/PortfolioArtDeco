"use client";

import { useEffect, useRef } from "react";
import {
  testimonials,
  testimonialsIntro,
  testimonialsMaxWidthClass,
  type Testimonial,
} from "@/lib/constants/testimonials";

const cornerTransforms = {
  "top-left": "scale-y-[-1]",
  "top-right": "rotate-180",
  "bottom-left": "",
  "bottom-right": "scale-x-[-1]",
} as const;

const cornerPositions = {
  "top-left": "top-2 left-2 sm:top-3 sm:left-3",
  "top-right": "top-2 right-2 sm:top-3 sm:right-3",
  "bottom-left": "bottom-2 left-2 sm:bottom-3 sm:left-3",
  "bottom-right": "bottom-2 right-2 sm:bottom-3 sm:right-3",
} as const;

function CardCorner({
  position,
}: {
  position: keyof typeof cornerTransforms;
}) {
  return (
    <img
      src="/UIItems/Floral_filgree.png"
      alt=""
      aria-hidden="true"
      className={`pointer-events-none absolute h-9 w-9 object-contain opacity-30 transition-all duration-500 ease-out group-hover:scale-110 group-hover:opacity-50 sm:h-10 sm:w-10 ${cornerPositions[position]} ${cornerTransforms[position]}`}
      style={{ mixBlendMode: "multiply" }}
    />
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  return (
    <article
      className="testimonials-animate-card group flex w-[18rem] shrink-0 snap-start flex-col sm:w-[19.5rem] md:w-[21rem] lg:w-[22rem]"
      style={{ animationDelay: `${220 + index * 90}ms` }}
    >
      <div className="relative flex h-full flex-col border border-gold/25 bg-parchment transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:border-gold/45 group-hover:bg-cream group-hover:shadow-[0_24px_48px_-28px_rgba(35,32,25,0.32)]">
        <CardCorner position="top-left" />
        <CardCorner position="top-right" />
        <CardCorner position="bottom-left" />
        <CardCorner position="bottom-right" />

        <div className="relative flex h-full flex-col px-5 pb-6 pt-6 text-center sm:px-6 sm:pb-7 sm:pt-7">
          <span
            aria-hidden="true"
            className="mx-auto block h-px w-10 bg-gold/30 transition-all duration-500 group-hover:w-16 group-hover:bg-gold/55"
          />

          <h3 className="mt-5 font-heading text-lg font-normal leading-snug text-ink transition-colors duration-300 group-hover:text-ink sm:text-xl">
            {testimonial.headline}
          </h3>

          <blockquote className="mt-4 flex-1 font-body text-sm italic leading-[1.75] text-ink/65 transition-colors duration-300 group-hover:text-ink/78 sm:mt-5">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>

          <footer className="mt-6 border-t border-gold/15 pt-4 transition-colors duration-300 group-hover:border-gold/30 sm:mt-7">
            <cite className="not-italic">
              <span className="font-body text-[11px] font-medium uppercase tracking-[0.22em] text-gold transition-all duration-300 group-hover:tracking-[0.26em] sm:text-xs">
                {testimonial.name}
              </span>
            </cite>
          </footer>
        </div>
      </div>
    </article>
  );
}

function TestimonialsHeader() {
  return (
    <header className="testimonials-animate-header mx-auto mb-10 max-w-3xl text-center lg:mb-12">
      <h2 className="font-heading text-3xl font-normal text-ink sm:text-4xl lg:text-[2.5rem]">
        {testimonialsIntro.heading}
      </h2>

      <p className="mx-auto mt-4 max-w-xl text-base italic leading-relaxed text-ink/55 lg:mt-5 lg:text-lg">
        {testimonialsIntro.subheading}
      </p>

      <div className="mx-auto mt-8 h-px w-full max-w-4xl bg-gold/25 lg:mt-10" />
    </header>
  );
}

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("testimonials-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="group/testimonials bg-cream pb-16 pt-4 lg:pb-24 lg:pt-6"
    >
      <div
        className={`mx-auto w-full ${testimonialsMaxWidthClass} px-5 sm:px-6 lg:px-10 xl:px-12`}
      >
        <TestimonialsHeader />

        <div className="relative -mx-5 sm:-mx-6 lg:-mx-10 xl:-mx-12">
          <div className="overflow-x-auto overscroll-x-contain scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory scroll-px-5 sm:scroll-px-6 lg:scroll-px-10 xl:scroll-px-12 [&::-webkit-scrollbar]:hidden">
            <div className="flex w-max min-w-full items-stretch gap-5 px-5 sm:px-6 lg:gap-6 lg:px-10 xl:px-12">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                  index={index}
                />
              ))}
            </div>
          </div>

          <p className="mt-2 text-center font-body text-[10px] uppercase tracking-[0.28em] text-gold/60 sm:hidden">
            Scroll to read more
          </p>
        </div>
      </div>
    </section>
  );
}
