import Link from "next/link";
import { siteConfig } from "@/lib/constants/site";

type TextLogoProps = {
  tone?: "light" | "dark";
  compact?: boolean;
};

export function TextLogo({ tone = "dark", compact = false }: TextLogoProps) {
  const isLight = tone === "light";
  const [firstName, lastName] = siteConfig.name.split(" ");

  return (
    <Link
      href="/"
      aria-label={siteConfig.name}
      className={`group flex min-w-0 flex-col items-center px-1 transition-colors duration-500 sm:px-2 ${
        isLight ? "text-white hover:text-white/85" : "text-black hover:text-teal"
      }`}
    >
      <span
        className={`flex flex-col items-center text-center font-heading font-bold uppercase leading-tight transition-all duration-500 sm:hidden ${
          compact
            ? "text-base tracking-[0.18em]"
            : "text-base tracking-[0.2em]"
        }`}
      >
        <span>{firstName}</span>
        <span className="mt-0.5">{lastName}</span>
      </span>

      <span
        className={`hidden text-center font-heading font-bold uppercase leading-none transition-all duration-500 sm:inline ${
          compact
            ? "text-lg tracking-[0.24em] md:text-xl md:tracking-[0.26em]"
            : "text-xl tracking-[0.28em] md:text-2xl md:tracking-[0.3em] lg:text-[1.75rem] lg:tracking-[0.32em]"
        }`}
      >
        {siteConfig.name}
      </span>

      <span
        aria-hidden="true"
        className={`mt-2 hidden h-px transition-all duration-500 group-hover:opacity-100 md:block sm:mt-3 ${
          compact ? "w-11 md:w-14" : "w-14 md:w-[4.25rem] lg:mt-4 lg:w-20"
        } ${isLight ? "bg-white/55" : "bg-black/35"}`}
      />
    </Link>
  );
}
