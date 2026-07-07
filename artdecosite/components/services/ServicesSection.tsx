import Link from "next/link";
import {
  serviceCategories,
  serviceNumerals,
  servicesIntro,
  type ServiceCategory,
} from "@/lib/constants/services";

function ServiceCard({
  category,
  numeral,
}: {
  category: ServiceCategory;
  numeral: string;
}) {
  const href = category.href ?? "/#contact";

  return (
    <article className="group flex h-full flex-col">
      <div className="flex h-full flex-col bg-cream px-7 py-8 ring-1 ring-gold/10 transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:bg-white group-hover:shadow-[0_18px_40px_-24px_rgba(35,32,25,0.28)] group-hover:ring-gold/30 sm:px-8 sm:py-9 lg:px-9 lg:py-10">
        <span className="font-heading text-sm italic text-gold/45 transition-colors duration-300 group-hover:text-gold/70">
          {numeral}
        </span>

        <h3 className="mt-5 font-heading text-[1.35rem] font-normal leading-snug text-ink transition-colors duration-300 group-hover:text-ink sm:text-2xl">
          {category.title}
        </h3>

        <p className="mt-5 flex-1 font-body text-[0.9375rem] italic leading-[1.75] text-ink/60 transition-colors duration-300 group-hover:text-ink/72 sm:text-base">
          {category.description}
        </p>

        <Link
          href={href}
          className="mt-8 inline-flex w-fit font-body text-[10px] font-semibold uppercase tracking-[0.34em] text-ink/55 transition-colors duration-300 group-hover:text-gold"
        >
          <span className="border-b border-ink/25 pb-1 transition-[border-color,color] duration-300 group-hover:border-gold/60">
            Learn More
          </span>
        </Link>
      </div>
    </article>
  );
}

export function ServicesSection() {
  return (
    <section className="bg-cream-soft pb-16 pt-10 sm:pt-12 lg:pb-20 lg:pt-16">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <header className="mx-auto mb-12 max-w-2xl text-center sm:mb-14 lg:mb-16">
          <h1 className="font-heading text-4xl font-normal text-ink sm:text-5xl lg:text-[3.25rem]">
            {servicesIntro.heading}
          </h1>
          <p className="mt-5 font-body text-base italic leading-relaxed text-ink/55 sm:mt-6 sm:text-lg lg:text-xl">
            {servicesIntro.subheading}
          </p>
        </header>

        <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
          {serviceCategories.map((category, index) => (
            <ServiceCard
              key={category.id}
              category={category}
              numeral={serviceNumerals[index] ?? `${index + 1}.`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
