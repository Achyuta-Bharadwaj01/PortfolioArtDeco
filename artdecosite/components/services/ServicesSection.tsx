import {
  serviceCategories,
  servicesIntro,
  type ServiceCategory,
} from "@/lib/constants/services";

function ServiceCard({ category, index }: { category: ServiceCategory; index: number }) {
  const numeral = String(index + 1).padStart(2, "0");

  return (
    <article className="group relative flex flex-col bg-parchment p-6 ring-1 ring-cocoa/[0.06] transition-all duration-300 hover:ring-camel/25 hover:shadow-warm sm:p-7 lg:p-8">
      <div className="mb-6 flex items-center justify-between gap-4">
        <span className="font-body text-[10px] font-semibold uppercase tracking-[0.42em] text-cocoa/50">
          {numeral}
        </span>
        <span className="h-px flex-1 bg-gradient-to-r from-cocoa/15 via-taupe/20 to-transparent" />
      </div>

      <h3 className="font-heading text-lg font-bold uppercase leading-snug tracking-[0.08em] text-black sm:text-xl">
        {category.title}
      </h3>

      {category.items && category.items.length > 0 ? (
        <ul className="mt-6 space-y-3 border-t border-black/[0.06] pt-6">
          {category.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 font-body text-sm leading-relaxed text-black/65 sm:text-base"
            >
              <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-camel/70" />
              <span className="italic">{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}

export function ServicesSection() {
  return (
    <section className="bg-mist pb-24 pt-8 lg:pb-36 lg:pt-12">
      <div className="mx-auto w-full px-5 lg:px-8">
        <header className="mb-16 border-b border-black/10 pb-12 lg:mb-20 lg:flex lg:items-end lg:justify-between lg:pb-14">
          <div className="max-w-2xl">
            <div className="mb-6 flex items-center gap-4 lg:mb-8">
              <span className="h-px flex-1 bg-navy/15" />
              <span className="text-black/20">◆</span>
              <span className="h-px flex-1 bg-navy/15" />
            </div>
            <p className="font-body text-[10px] font-semibold uppercase tracking-[0.42em] text-cocoa/60 lg:text-[11px]">
              {servicesIntro.heading}
            </p>
            <p className="mt-5 max-w-lg text-lg italic leading-relaxed text-black/55 lg:text-xl">
              {servicesIntro.subheading}
            </p>
          </div>

          <div className="mt-10 hidden items-center gap-5 lg:mt-0 lg:flex">
            <span className="h-px w-20 bg-navy/25" />
            <span className="text-black/20">◆</span>
            <span className="text-[10px] font-body uppercase tracking-[0.4em] text-taupe">
              {String(serviceCategories.length).padStart(2, "0")} Disciplines
            </span>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
          {serviceCategories.map((category, index) => (
            <ServiceCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
