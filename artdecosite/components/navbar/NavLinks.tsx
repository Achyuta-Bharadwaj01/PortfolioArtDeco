import Link from "next/link";
import { navLinks } from "@/lib/constants/site";

type NavLinksProps = {
  tone?: "light" | "dark";
  compact?: boolean;
};

export function NavLinks({ tone = "dark", compact = false }: NavLinksProps) {
  const colorClass =
    tone === "light"
      ? "text-white hover:opacity-70"
      : "text-black hover:text-teal";

  const sizeClass = compact
    ? "text-[clamp(0.625rem,0.85vw,0.9375rem)] tracking-[0.03em]"
    : "text-[clamp(0.6875rem,1vw,1.375rem)] tracking-[0.02em] xl:tracking-[0.035em]";

  const gapClass = compact
    ? "gap-[clamp(0.625rem,1.4vw,2.5rem)]"
    : "gap-[clamp(0.75rem,1.8vw,3.5rem)]";

  return (
    <nav aria-label="Main navigation" className="min-w-0">
      <ul className={`flex items-center justify-end transition-all duration-500 ${gapClass}`}>
        {navLinks.map(({ label, href }) => (
          <li key={href} className="shrink-0">
            <Link
              href={href}
              className={`font-heading whitespace-nowrap font-bold uppercase leading-none transition-all duration-500 ${sizeClass} ${colorClass}`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
