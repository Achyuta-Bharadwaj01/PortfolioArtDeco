import {
  serviceCategories,
  servicesIntro,
  type ServiceCategory,
} from "@/lib/constants/services";

function ServiceCard({
  category,
  index,
}: {
  category: ServiceCategory;
  index: number;
}) {
  const numeral = String(index + 1).padStart(2, "0");
  const hasItems = Boolean(category.items?.length);

  return (
    <article className="group flex h-full flex-col">
      <div className="flex h-full flex-col bg-cream-soft px-6 py-7 ring-1 ring-gold/12 transition-all duration-300 hover:ring-gold/40 hover:shadow-gold sm:px-7 sm:py-8 lg:px-8">
        <div className="flex items-center gap-4">
          <span className="font-body text-[10px] font-semibold uppercase tracking-[0.42em] text-gold/55">
            {numeral}
          </span>
          <span className="h-px flex-1 bg-gold/15" />
        </div>

        <h3 className="mt-6 font-heading text-xl italic font-normal leading-snug text-ink sm:text-2xl">
          {category.title}
        </h3>

        <div className="mt-auto flex flex-1 flex-col justify-end pt-8">
          {hasItems ? (
            <ul className="space-y-2.5 border-t border-gold/15 pt-6">
              {category.items!.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 font-body text-sm italic leading-relaxed text-ink/60 sm:text-[0.9375rem]"
                >
                  <span className="mt-[0.55rem] h-1 w-1 shrink-0 bg-gold/60" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function ServicesSection() {
  return (
    <section className="bg-cream pb-24 pt-8 lg:pb-36 lg:pt-12">
      <div className="mx-auto w-full px-5 lg:px-8">
        <header className="mb-14 border-b border-gold/20 pb-12 lg:mb-20 lg:flex lg:items-end lg:justify-between lg:pb-14">
          <div className="max-w-2xl">
            <div className="mb-6 flex items-center gap-4 lg:mb-8">
              <span className="h-px flex-1 bg-gold/20" />
              <span className="text-gold/40">◆</span>
              <span className="h-px flex-1 bg-gold/20" />
            </div>
            <p className="font-body text-[10px] font-semibold uppercase tracking-[0.42em] text-gold/70 lg:text-[11px]">
              {servicesIntro.heading}
            </p>
            <p className="mt-5 max-w-lg text-lg italic leading-relaxed text-ink/55 lg:text-xl">
              {servicesIntro.subheading}
            </p>
          </div>

          <div className="mt-10 hidden items-center gap-5 lg:mt-0 lg:flex">
            <span className="h-px w-20 bg-gold/30" />
            <span className="text-gold/45">◆</span>
            <span className="text-[10px] font-body uppercase tracking-[0.4em] text-gold/60">
              {String(serviceCategories.length).padStart(2, "0")} Disciplines
            </span>
          </div>
        </header>

        <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
          {serviceCategories.map((category, index) => (
            <ServiceCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
