import Link from "next/link";

export function AboutVideoButton() {
  return (
    <Link
      href="/about"
      aria-label="Glimpse of my story — view about page"
      className="group mt-10 inline-flex w-fit max-w-full items-center gap-3 self-start rounded-full border border-gold/25 bg-cream/90 px-5 py-2 font-body text-[10px] font-semibold uppercase tracking-[0.32em] text-ink/60 transition-all duration-300 hover:border-gold/45 hover:bg-white hover:text-gold lg:mt-12"
    >
      <span
        aria-hidden="true"
        className="h-px w-5 bg-gold/35 transition-all duration-300 group-hover:w-6 group-hover:bg-gold/55"
      />
      Glimpse of My Story
    </Link>
  );
}
