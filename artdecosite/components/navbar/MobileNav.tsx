"use client";

import Link from "next/link";
import { useEffect } from "react";
import { CloseIcon } from "@/components/icons/CloseIcon";
import { navLinks } from "@/lib/constants/site";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileNav({ open, onClose }: MobileNavProps) {
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const linkClass = "text-black hover:text-teal";

  return (
    <div
      className="fixed inset-0 z-30 xl:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Main navigation"
    >
      <button
        type="button"
        aria-label="Close menu"
        className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
        onClick={onClose}
      />

      <div className="absolute inset-x-0 top-0 border-b border-border bg-white/95 px-4 pb-8 pt-[4.75rem] shadow-sm backdrop-blur-xl sm:px-5">
        <button
          type="button"
          aria-label="Close menu"
          onClick={onClose}
          className="absolute right-4 top-5 inline-flex p-1 text-black transition-opacity hover:opacity-60 sm:right-5"
        >
          <CloseIcon className="h-6 w-6" />
        </button>

        <nav>
          <ul className="flex flex-col items-center gap-7 pt-4">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={onClose}
                  className={`font-heading text-lg font-bold uppercase tracking-[0.2em] transition-colors sm:text-xl ${linkClass}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
