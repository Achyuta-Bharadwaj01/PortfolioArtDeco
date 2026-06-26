"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { logos } from "@/lib/constants/assets";
import { siteConfig } from "@/lib/constants/site";
import { siteX } from "@/lib/constants/layout";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { MenuIcon } from "@/components/icons/MenuIcon";
import { MobileNav } from "@/components/navbar/MobileNav";
import { NavLinks } from "@/components/navbar/NavLinks";

type NavbarProps = {
  variant?: "light" | "dark";
  compact?: boolean;
};

export function Navbar({ variant = "dark", compact = false }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isLight = variant === "light";

  const textColor = isLight ? "text-white" : "text-black";
  const borderColor = isLight ? "border-transparent" : "border-border";
  const bgColor = isLight ? "bg-transparent" : "bg-white/70 backdrop-blur-xl";

  const logoSrc = isLight ? logos.onDark : logos.onLight;

  const logoHeightClass = compact
    ? "h-[clamp(2.75rem,7vw,5rem)]"
    : "h-[clamp(3rem,10vw,9rem)]";

  const paddingClass = compact
    ? "py-2.5 sm:py-3 lg:py-3.5"
    : "py-3 sm:py-4 lg:py-6 xl:py-8";

  const iconSizeClass = compact
    ? "h-[clamp(1.125rem,2.5vw,1.25rem)] w-[clamp(1.125rem,2.5vw,1.25rem)]"
    : "h-[clamp(1.125rem,2.8vw,1.5rem)] w-[clamp(1.125rem,2.8vw,1.5rem)]";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-20 border-b transition-all duration-500 ${siteX} ${paddingClass} ${bgColor} ${borderColor}`}
      >
        <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-x-[clamp(0.5rem,2vw,2.5rem)]">
          <div className="min-w-0 justify-self-start">
            <Link
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={`inline-flex transition-all duration-500 hover:opacity-60 ${textColor}`}
            >
              <InstagramIcon className={`transition-all duration-500 ${iconSizeClass}`} />
            </Link>
          </div>

          <Link
            href="/"
            className="min-w-0 max-w-[min(52vw,20rem)] shrink justify-self-center sm:max-w-[min(48vw,24rem)] xl:max-w-[min(42vw,28rem)] 2xl:max-w-none"
            aria-label={siteConfig.name}
          >
            <Image
              src={logoSrc}
              alt={siteConfig.name}
              width={320}
              height={128}
              priority
              unoptimized
              className={`mx-auto w-auto max-w-full object-contain transition-all duration-500 ${logoHeightClass}`}
              style={{ width: "auto", height: "auto", maxHeight: compact ? "5rem" : "9rem" }}
            />
          </Link>

          <div className="min-w-0 justify-self-end">
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(true)}
              className={`inline-flex p-1 transition-opacity hover:opacity-60 xl:hidden ${textColor}`}
            >
              <MenuIcon className={iconSizeClass} />
            </button>

            <div className="hidden xl:block">
              <NavLinks tone={isLight ? "light" : "dark"} compact={compact} />
            </div>
          </div>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
