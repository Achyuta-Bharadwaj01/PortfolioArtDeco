import Image from "next/image";
import Link from "next/link";
import { logos } from "@/lib/constants/assets";
import { contactHref } from "@/lib/utils/scrollToHash";
import { siteConfig } from "@/lib/constants/site";
import { siteX } from "@/lib/constants/layout";

const footerLinks = [
  { label: "Contact Us", href: contactHref },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Projects", href: "/projects" },
  { label: "Instagram", href: "https://www.instagram.com/" },
] as const;

export function Footer() {
  return (
    <footer
      className={`relative mt-auto overflow-hidden bg-gradient-to-b from-moss to-moss-deep py-14 sm:py-16 lg:py-20 ${siteX}`}
    >
      {/* Subtle botanical texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-botanical opacity-10"
      />
      {/* Radial gold glow at centre-top */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[radial-gradient(ellipse_at_50%_0%,rgba(201,168,106,0.12),transparent_70%)]"
      />

      {/* Floral filigree — bottom-left (as-is, no transform) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 z-10"
      >
        <Image
          src="/UIItems/Floral_filgree.png"
          alt=""
          width={220}
          height={220}
          className="h-32 w-32 object-contain sm:h-40 sm:w-40 lg:h-52 lg:w-52"
          style={{ mixBlendMode: "multiply", opacity: 0.55 }}
        />
      </div>

      {/* Floral filigree — bottom-right (mirror X) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 z-10 scale-x-[-1]"
      >
        <Image
          src="/UIItems/Floral_filgree.png"
          alt=""
          width={220}
          height={220}
          className="h-32 w-32 object-contain sm:h-40 sm:w-40 lg:h-52 lg:w-52"
          style={{ mixBlendMode: "multiply", opacity: 0.55 }}
        />
      </div>

      <div className="relative z-20 grid gap-10 sm:gap-12 lg:grid-cols-[1.6fr_1fr] lg:items-start xl:grid-cols-[1.7fr_1.3fr]">
        <div className="flex flex-col items-start gap-5">
          <Image
            src={logos.onDark}
            alt={siteConfig.name}
            width={680}
            height={210}
            unoptimized
            className="h-auto w-full max-w-[14rem] sm:max-w-xs opacity-90"
            style={{ width: "100%" }}
          />
          <p className="font-body text-[10px] uppercase tracking-[0.38em] text-gold-bright/55">
            Interior Architect &amp; Set Designer
          </p>
        </div>

        <ul className="grid grid-cols-2 gap-x-6 gap-y-3.5 self-center font-body text-sm text-cream/50 sm:gap-x-8 sm:text-base lg:justify-items-end lg:text-right">
          {footerLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="transition-colors hover:text-gold-bright"
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Gold separator — inset from edges so it doesn't overlap the filigree corners */}
      <div className="relative z-20 mt-12 px-40 sm:px-48 lg:mt-14 lg:px-60">
        <div className="flex items-center gap-4">
          <span className="h-px flex-1 bg-gold-bright/20" />
          <span className="text-gold-bright/35 text-[10px]">◆</span>
          <span className="h-px flex-1 bg-gold-bright/20" />
        </div>
      </div>

      <div className="relative z-20 mt-5 text-center">
        <p className="font-body text-[10px] uppercase tracking-[0.32em] text-cream/25">
          © {new Date().getFullYear()} Shaineela Ahmed — Every space has a
          story.
        </p>
      </div>
    </footer>
  );
}
