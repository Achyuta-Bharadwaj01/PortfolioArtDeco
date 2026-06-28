import Link from "next/link";
import { navLinks } from "@/lib/constants/site";

type NavLinksProps = {
  tone?: "light" | "dark";
  compact?: boolean;
  layout?: "horizontal" | "vertical";
  onNavigate?: () => void;
};

export function NavLinks({
  tone = "dark",
  compact = false,
  layout = "horizontal",
  onNavigate,
}: NavLinksProps) {
  const isVertical = layout === "vertical";

  const linkClass =
    tone === "light"
      ? "text-white hover:text-white/80"
      : "text-black hover:text-teal";

  return (
    <nav aria-label="Main navigation">
      <ul
        className={`transition-all duration-500 ${
          isVertical
            ? "flex flex-col items-center gap-5 py-2"
            : `flex flex-wrap items-center justify-center ${
                compact
                  ? "gap-x-5 gap-y-2 md:gap-x-8 lg:gap-x-10"
                  : "gap-x-6 gap-y-2 md:gap-x-9 lg:gap-x-12"
              }`
        }`}
      >
        {navLinks.map(({ label, href }) => (
          <li key={href}>
            <Link
              href={href}
              onClick={onNavigate}
              className={`group relative font-heading font-bold uppercase leading-none transition-all duration-300 ${
                isVertical
                  ? "text-base tracking-[0.26em]"
                  : compact
                    ? "text-xs tracking-[0.22em] md:text-sm md:tracking-[0.24em]"
                    : "text-sm tracking-[0.24em] sm:text-[0.9375rem] sm:tracking-[0.26em] md:text-base md:tracking-[0.28em]"
              } ${linkClass}`}
            >
              {label}
              <span
                aria-hidden="true"
                className={`absolute -bottom-1.5 left-0 h-px w-0 transition-all duration-300 group-hover:w-full ${
                  tone === "light" ? "bg-white/70" : "bg-teal"
                }`}
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
