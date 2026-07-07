import {
  testimonials,
  testimonialsIntro,
  testimonialsMaxWidthClass,
  type Testimonial,
} from "@/lib/constants/testimonials";
import { toRomanNumeral } from "@/lib/utils/roman";

function StarRating({ rating }: { rating: number }) {
  return (
    <div
      aria-label={`${rating} out of 5 stars`}
      className="flex gap-0.5 font-heading text-sm tracking-widest"
    >
      {Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          className={index < rating ? "text-gold-bright" : "text-ink/15"}
        >
          ★
        </span>
      ))}
    </div>
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
    <article className="group flex w-[18rem] shrink-0 snap-start flex-col sm:w-[19.5rem] md:w-[21rem] lg:w-[22rem]">
      <div className="flex h-full flex-col bg-cream-soft p-5 ring-1 ring-gold/[0.12] transition-all duration-300 group-hover:ring-gold/35 group-hover:shadow-gold sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <span className="font-body text-[10px] uppercase tracking-[0.28em] text-gold/70">
            {toRomanNumeral(index + 1)}
          </span>
          <StarRating rating={testimonial.rating} />
        </div>

        <div className="my-4 flex items-center gap-3">
          <span className="h-px flex-1 bg-gold/20" />
          <span className="text-gold/40">◆</span>
          <span className="h-px flex-1 bg-gold/20" />
        </div>

        <h3 className="font-heading text-sm font-semibold uppercase leading-snug tracking-[0.1em] text-ink">
          {testimonial.headline}
        </h3>

        <blockquote className="mt-4 flex-1 font-body text-sm italic leading-relaxed text-ink/60">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>

        <footer className="mt-6 border-t border-gold/12 pt-4">
          <cite className="not-italic">
            <span className="font-body text-sm font-medium text-gold">
              {testimonial.name}
            </span>
          </cite>
        </footer>
      </div>
    </article>
  );
}

export function TestimonialsSection() {
  return (
    <section className="bg-cream pb-14 pt-4 lg:pb-20 lg:pt-6">
      <div
        className={`mx-auto w-full ${testimonialsMaxWidthClass} px-5 sm:px-6 lg:px-10 xl:px-12`}
      >
        <div className="mb-8 max-w-2xl border-b border-gold/20 pb-8 lg:mb-10 lg:pb-10">
          <h2 className="font-heading text-2xl font-semibold uppercase tracking-[0.14em] text-ink sm:text-3xl">
            {testimonialsIntro.heading}
          </h2>
          <p className="mt-4 max-w-xl text-base italic leading-relaxed text-ink/55 lg:text-lg">
            {testimonialsIntro.subheading}
          </p>
        </div>

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
