"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/constants/site";
import { parseHashHref, scrollToHash } from "@/lib/utils/scrollToHash";

type NavLinksProps = {
  tone?: "light" | "dark";
  compact?: boolean;
  layout?: "horizontal" | "vertical";
  onNavigate?: () => void;
  revealed?: boolean;
  animated?: boolean;
};

export function NavLinks({
  tone = "dark",
  compact = false,
  layout = "horizontal",
  onNavigate,
  revealed = true,
  animated = false,
}: NavLinksProps) {
  const pathname = usePathname();
  const isVertical = layout === "vertical";

  function handleLinkClick(
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) {
    const target = parseHashHref(href);
    if (!target?.hash) return;

    if (pathname === target.path) {
      event.preventDefault();
      scrollToHash(target.hash);
      window.history.replaceState(null, "", `#${target.hash}`);
      onNavigate?.();
    }
  }

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
        {navLinks.map(({ label, href }, index) => (
          <li
            key={href}
            className={
              animated
                ? `transition-all duration-500 ease-out ${
                    revealed
                      ? "translate-y-0 opacity-100"
                      : "translate-y-3 opacity-0"
                  }`
                : undefined
            }
            style={
              animated
                ? {
                    transitionDelay: revealed ? `${80 + index * 70}ms` : "0ms",
                  }
                : undefined
            }
          >
            <Link
              href={href}
              onClick={(event) => handleLinkClick(event, href)}
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
