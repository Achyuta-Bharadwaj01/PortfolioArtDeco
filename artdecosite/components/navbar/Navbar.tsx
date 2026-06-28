"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MenuButton } from "@/components/navbar/MenuButton";
import { NavLinks } from "@/components/navbar/NavLinks";
import { SocialLinks } from "@/components/navbar/SocialLinks";
import { TextLogo } from "@/components/navbar/TextLogo";

type NavbarProps = {
  variant?: "light" | "dark";
  compact?: boolean;
};

const sideRailClass =
  "relative z-10 flex min-w-[2.25rem] shrink-0 items-center md:min-w-[6.25rem]";

export function Navbar({ variant = "dark", compact = false }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isLight = variant === "light";

  const textColor = isLight ? "text-white" : "text-black";
  const borderColor = isLight ? "border-transparent" : "border-border";
  const bgColor = isLight ? "bg-transparent" : "bg-white/70 backdrop-blur-xl";
  const mobileMenuBorder = isLight ? "border-white/15" : "border-black/10";
  const iconSize = compact ? "h-[1.125rem] w-[1.125rem]" : "h-5 w-5 sm:h-6 sm:w-6";

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-20 w-full border-b transition-all duration-500 ${
        compact
          ? "px-4 py-3 sm:px-6 lg:px-10 lg:py-4"
          : "px-4 py-4 sm:px-6 sm:py-5 lg:px-10 lg:py-7"
      } ${bgColor} ${borderColor}`}
    >
      <div className="w-full">
        <div className="relative flex min-h-9 items-center justify-between">
          <div className={sideRailClass}>
            <div className="hidden md:block">
              <SocialLinks
                tone={isLight ? "light" : "dark"}
                iconClassName={iconSize}
              />
            </div>
          </div>

          <div className="pointer-events-none absolute inset-x-0 flex justify-center px-14 sm:px-16 md:px-28">
            <div className="pointer-events-auto w-full max-w-[15rem] sm:max-w-none">
              <TextLogo tone={isLight ? "light" : "dark"} compact={compact} />
            </div>
          </div>

          <div className={`${sideRailClass} justify-end`}>
            <MenuButton
              open={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className={`md:hidden ${textColor}`}
            />
          </div>
        </div>

        <div
          className={`hidden w-full justify-center transition-all duration-500 md:flex ${
            compact ? "mt-3 lg:mt-3.5" : "mt-4 sm:mt-5 lg:mt-6"
          }`}
        >
          <NavLinks tone={isLight ? "light" : "dark"} compact={compact} />
        </div>
      </div>

      <div
        className={`grid overflow-hidden transition-all duration-500 ease-out md:hidden ${
          menuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0">
          <div
            className={`border-t pt-4 transition-transform duration-500 ease-out ${mobileMenuBorder} ${
              menuOpen ? "translate-y-0" : "-translate-y-3"
            } ${isLight ? "bg-black/20 backdrop-blur-sm" : ""}`}
          >
            <NavLinks
              tone={isLight ? "light" : "dark"}
              compact={compact}
              layout="vertical"
              animated
              revealed={menuOpen}
              onNavigate={() => setMenuOpen(false)}
            />

            <div
              className={`mt-6 flex items-center justify-center gap-4 transition-all duration-500 ease-out ${
                menuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-2 opacity-0"
              }`}
              style={{ transitionDelay: menuOpen ? "240ms" : "0ms" }}
            >
              <span
                className={`h-px w-10 ${isLight ? "bg-white/25" : "bg-navy/20"}`}
              />
              <span className={isLight ? "text-white/25" : "text-black/20"}>
                ◆
              </span>
              <span
                className={`h-px w-10 ${isLight ? "bg-white/25" : "bg-navy/20"}`}
              />
            </div>

            <div className="mt-5 pb-2">
              <SocialLinks
                tone={isLight ? "light" : "dark"}
                layout="menu"
                revealed={menuOpen}
                iconClassName="h-5 w-5"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
