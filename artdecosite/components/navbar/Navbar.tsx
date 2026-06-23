import Image from "next/image";
import Link from "next/link";
import { logos } from "@/lib/constants/assets";
import { siteConfig } from "@/lib/constants/site";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { NavLinks } from "@/components/navbar/NavLinks";

type NavbarProps = {
  variant?: "light" | "dark";
  compact?: boolean;
};

export function Navbar({ variant = "dark", compact = false }: NavbarProps) {
  const isLight = variant === "light";

  const textColor = isLight ? "text-white" : "text-black";
  const borderColor = isLight ? "border-transparent" : "border-border";
  const bgColor = isLight ? "bg-transparent" : "bg-white/70 backdrop-blur-xl";

  const logoSrc = isLight ? logos.onDark : logos.onLight;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-20 border-b transition-all duration-500 ${
        compact ? "px-5 py-3 lg:px-8 lg:py-4" : "px-5 py-6 lg:px-8 lg:py-8"
      } ${bgColor} ${borderColor}`}
    >
      <div className="grid grid-cols-[1fr_auto_1fr] items-center">
        <div className="justify-self-start">
          <Link
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className={`inline-flex transition-all duration-500 hover:opacity-60 ${textColor}`}
          >
            <InstagramIcon
              className={`transition-all duration-500 ${
                compact ? "h-5 w-5" : "h-6 w-6"
              }`}
            />
          </Link>
        </div>

        <Link href="/" className="justify-self-center" aria-label={siteConfig.name}>
          <Image
            src={logoSrc}
            alt={siteConfig.name}
            width={320}
            height={128}
            priority
            unoptimized
            className={`w-auto transition-all duration-500 ${
              compact ? "h-16 lg:h-20" : "h-28 lg:h-36"
            }`}
            style={{ width: "auto" }}
          />
        </Link>

        <div className="justify-self-end">
          <NavLinks tone={isLight ? "light" : "dark"} compact={compact} />
        </div>
      </div>
    </header>
  );
}
