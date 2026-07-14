import { aboutPage } from "@/lib/constants/about";

export function AboutShowcaseVideo() {
  return (
    <section className="bg-cream px-5 pb-10 pt-2 sm:px-6 lg:px-10 lg:pb-14 lg:pt-4 xl:px-12">
      <div className="mx-auto w-full max-w-5xl">
        <header className="mx-auto mb-8 max-w-2xl text-center lg:mb-10">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px flex-1 bg-gold/20" />
            <span className="text-gold/40">◆</span>
            <span className="h-px flex-1 bg-gold/20" />
          </div>
          <h1 className="font-heading text-3xl font-normal text-ink sm:text-4xl lg:text-[2.75rem]">
            {aboutPage.title}
          </h1>
        </header>

        <div className="relative aspect-video w-full overflow-hidden bg-moss-deep/5 ring-1 ring-gold/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(201,168,106,0.12),transparent_70%)]" />
          <div className="absolute inset-4 border border-gold/15 sm:inset-6" />

          <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
            <span
              aria-hidden="true"
              className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 bg-cream/80"
            >
              <span className="ml-1 font-body text-xl text-gold/70">▶</span>
            </span>
            <p className="font-heading text-lg text-ink/75 sm:text-xl">
              Video placeholder
            </p>
            <p className="mt-2 max-w-sm font-body text-sm italic leading-relaxed text-ink/50">
              {aboutPage.videoPlaceholderLabel}
            </p>
          </div>

          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/10" />
        </div>
      </div>
    </section>
  );
}
