import Link from "next/link";
import { aboutHref, contactHref } from "@/lib/utils/scrollToHash";
import { siteConfig } from "@/lib/constants/site";
import { siteX } from "@/lib/constants/layout";

const footerLinks = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: aboutHref },
  { label: "Contact", href: contactHref },
  { label: "Instagram", href: siteConfig.instagramUrl, external: true },
] as const;

export function Footer() {
  return (
    <footer
      className={`relative mt-auto overflow-hidden bg-gradient-to-b from-moss to-moss-deep py-6 sm:py-7 ${siteX}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-botanical opacity-10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 z-10"
      >
        <img
          src="/UIItems/Floral_filgree.png"
          alt=""
          className="h-28 w-28 object-contain sm:h-36 sm:w-36 lg:h-44 lg:w-44"
          style={{ mixBlendMode: "multiply", opacity: 0.45 }}
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 z-10 scale-x-[-1]"
      >
        <img
          src="/UIItems/Floral_filgree.png"
          alt=""
          className="h-28 w-28 object-contain sm:h-36 sm:w-36 lg:h-44 lg:w-44"
          style={{ mixBlendMode: "multiply", opacity: 0.45 }}
        />
      </div>

      <div className="relative z-20 flex flex-col items-center gap-4 text-center sm:gap-5">
        <div>
          <p className="font-heading text-sm font-bold uppercase tracking-[0.22em] text-cream/90 sm:text-base sm:tracking-[0.24em]">
            {siteConfig.name}
          </p>
          <p className="mt-1 font-body text-[9px] uppercase tracking-[0.34em] text-gold-bright/70 sm:text-[10px]">
            {siteConfig.tagline}
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap items-center justify-center gap-x-1 gap-y-2 font-body text-[11px] uppercase tracking-[0.22em] text-cream/60 sm:gap-x-2 sm:text-xs sm:tracking-[0.24em]">
            {footerLinks.map((link, index) => (
              <li key={link.label} className="flex items-center">
                {index > 0 ? (
                  <span
                    aria-hidden="true"
                    className="mx-2 text-gold-bright/50 sm:mx-3"
                  >
                    ·
                  </span>
                ) : null}
                <Link
                  href={link.href}
                  className="whitespace-nowrap transition-colors hover:text-gold-bright"
                  target={"external" in link && link.external ? "_blank" : undefined}
                  rel={
                    "external" in link && link.external
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex w-full max-w-xl items-center gap-3 px-8 sm:max-w-2xl sm:gap-4 sm:px-12">
          <span className="h-px flex-1 bg-gold-bright/65" />
          <span className="text-[10px] text-gold-bright/85">◆</span>
          <span className="h-px flex-1 bg-gold-bright/65" />
        </div>

        <p className="font-body text-[9px] uppercase tracking-[0.28em] text-cream/35 sm:text-[10px]">
          © {new Date().getFullYear()} Shaineela Ahmed
        </p>
      </div>
    </footer>
  );
}
