import Link from "next/link";
import { navLinks } from "@/lib/constants/site";

type NavLinksProps = {
  tone?: "light" | "dark";
};

export function NavLinks({ tone = "dark" }: NavLinksProps) {
  const colorClass =
    tone === "light"
      ? "text-white hover:opacity-70"
      : "text-black hover:text-teal";

  return (
    <nav aria-label="Main navigation">
      <ul className="flex items-center gap-12 lg:gap-16">
        {navLinks.map(({ label, href }) => (
          <li key={href}>
            <Link
              href={href}
              className={`font-heading text-xl font-bold uppercase leading-none tracking-[0.04em] transition-colors lg:text-2xl ${colorClass}`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
