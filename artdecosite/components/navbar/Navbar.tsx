"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MenuButton } from "@/components/navbar/MenuButton";
import { NavLinks } from "@/components/navbar/NavLinks";
import { SocialLinks } from "@/components/navbar/SocialLinks";
import { TextLogo } from "@/components/navbar/TextLogo";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

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
    <header className="sticky top-0 z-30 w-full overflow-visible border-b border-gold/15 bg-cream shadow-[0_1px_0_rgba(169,131,79,0.2)]">
      <div className="mx-auto w-full px-4 py-3 sm:px-6 sm:py-3.5 lg:px-10 lg:py-4">
        <div className="grid grid-cols-[2.25rem_1fr_2.25rem] items-start gap-x-2 sm:grid-cols-[6.25rem_1fr_2.25rem] md:grid-cols-[6.25rem_1fr_6.25rem]">
          <div className="hidden pt-1 md:block">
            <SocialLinks tone="dark" iconClassName="h-5 w-5 lg:h-6 lg:w-6" />
          </div>

          <div className="col-start-2 min-w-0 px-1 sm:px-2">
            <TextLogo />
          </div>

          <div className="flex justify-end pt-0.5 md:col-start-3">
            <MenuButton
              open={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="text-ink md:hidden"
            />
          </div>
        </div>

        <div className="mt-3 hidden justify-center md:flex lg:mt-3.5">
          <NavLinks tone="dark" compact />
        </div>
      </div>

      <div
        className={`grid overflow-hidden border-t border-gold/15 md:hidden ${
          menuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0">
          <div className="px-4 pb-4 pt-3">
            <NavLinks
              tone="dark"
              layout="vertical"
              animated
              revealed={menuOpen}
              onNavigate={() => setMenuOpen(false)}
            />

            <div className="mt-5 flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-gold/20" />
              <span className="text-gold/35">◆</span>
              <span className="h-px w-10 bg-gold/20" />
            </div>

            <div className="mt-4 flex justify-center pb-1">
              <SocialLinks
                tone="dark"
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
