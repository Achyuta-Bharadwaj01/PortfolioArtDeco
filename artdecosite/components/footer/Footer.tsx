import Link from "next/link";
import { contactHref } from "@/lib/utils/scrollToHash";
import { siteConfig } from "@/lib/constants/site";
import { siteX } from "@/lib/constants/layout";

const footerLinks = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: contactHref },
  { label: "Instagram", href: siteConfig.instagramUrl, external: true },
] as const;

export function Footer() {
  return (
    <footer
      className={`relative mt-auto overflow-hidden bg-gradient-to-b from-moss to-moss-deep pb-28 pt-8 sm:pb-20 sm:pt-9 lg:pb-24 lg:pt-10 ${siteX}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-botanical opacity-10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 z-[1]"
      >
        <img
          src="/UIItems/Floral_filgree.png"
          alt=""
          className="h-28 w-28 object-contain opacity-40 sm:h-36 sm:w-36 sm:opacity-45 lg:h-44 lg:w-44"
          style={{ mixBlendMode: "multiply" }}
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 z-[1] scale-x-[-1]"
      >
        <img
          src="/UIItems/Floral_filgree.png"
          alt=""
          className="h-28 w-28 object-contain opacity-40 sm:h-36 sm:w-36 sm:opacity-45 lg:h-44 lg:w-44"
          style={{ mixBlendMode: "multiply" }}
        />
      </div>

      <div className="relative z-20 mx-auto flex w-full max-w-7xl flex-col gap-6 sm:gap-7 lg:gap-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between lg:items-center">
          <div className="min-w-0">
            <p className="font-heading text-2xl font-normal text-cream/95 sm:text-[1.65rem] lg:text-[1.85rem]">
              {siteConfig.brandName}
            </p>
            <p className="mt-1 font-body text-[10px] uppercase tracking-[0.32em] text-gold-bright/70 sm:text-[11px]">
              {siteConfig.name}
            </p>
          </div>

          <nav aria-label="Footer navigation" className="sm:text-right">
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 font-body text-[11px] uppercase tracking-[0.18em] text-cream/65 sm:justify-end sm:gap-x-6 sm:text-xs sm:tracking-[0.2em] lg:gap-x-8">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1 whitespace-nowrap transition-colors hover:text-gold-bright"
                    target={
                      "external" in link && link.external ? "_blank" : undefined
                    }
                    rel={
                      "external" in link && link.external
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {link.label}
                    {"external" in link && link.external ? (
                      <span aria-hidden="true" className="text-[10px] leading-none">
                        ↗
                      </span>
                    ) : null}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <span className="h-px w-full bg-gold-bright/30" />

        <div className="flex flex-col items-center gap-5 px-6 pb-2 text-center sm:flex-row sm:items-center sm:justify-between sm:px-0 sm:pb-0 sm:text-left">
          <p className="order-2 font-body text-[10px] uppercase tracking-[0.24em] text-cream/40 sm:order-1 sm:text-[11px]">
            © {new Date().getFullYear()} {siteConfig.name}.
          </p>

          <p className="order-1 max-w-[15rem] font-script text-xl leading-snug text-gold-bright drop-shadow-[0_1px_8px_rgba(24,37,24,0.45)] sm:order-2 sm:max-w-none sm:text-2xl lg:text-[1.65rem]">
            {siteConfig.footerTagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
