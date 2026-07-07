import Link from "next/link";
import { siteConfig } from "@/lib/constants/site";

export function TextLogo() {
  const [firstName, lastName] = siteConfig.name.split(" ");

  return (
    <Link
      href="/"
      aria-label={siteConfig.name}
      className="group flex w-full min-w-0 flex-col items-center text-center text-ink transition-colors hover:text-gold"
    >
      <span className="font-heading text-sm font-bold uppercase leading-tight tracking-[0.18em] sm:hidden">
        <span className="block">{firstName}</span>
        <span className="mt-0.5 block">{lastName}</span>
      </span>

      <span className="hidden font-heading text-lg font-bold uppercase leading-tight tracking-[0.24em] sm:block md:text-xl md:tracking-[0.28em] lg:text-[1.65rem] lg:tracking-[0.3em]">
        {siteConfig.name}
      </span>

      <p className="mt-1.5 max-w-[16rem] font-script text-[1.125rem] leading-[1.35] sm:mt-2 sm:max-w-[20rem] sm:text-[1.25rem] md:max-w-[24rem] md:text-[1.35rem] lg:max-w-none lg:text-[1.5rem]">
        {siteConfig.tagline}
      </p>

      <span
        aria-hidden="true"
        className="mt-2 hidden h-px w-12 bg-gold/40 sm:block md:mt-2.5 md:w-16"
      />
    </Link>
  );
}
