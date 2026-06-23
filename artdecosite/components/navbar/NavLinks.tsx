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

  return (
    <nav aria-label="Main navigation">
      <ul
        className={`flex items-center transition-all duration-500 ${
          compact ? "gap-8 lg:gap-10" : "gap-12 lg:gap-16"
        }`}
      >
        {navLinks.map(({ label, href }) => (
          <li key={href}>
            <Link
              href={href}
              className={`font-heading font-bold uppercase leading-none tracking-[0.04em] transition-all duration-500 ${
                compact ? "text-base lg:text-lg" : "text-xl lg:text-2xl"
              } ${colorClass}`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
