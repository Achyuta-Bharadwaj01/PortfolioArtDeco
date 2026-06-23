import Image from "next/image";
import Link from "next/link";
import { logos } from "@/lib/constants/assets";
import { siteConfig } from "@/lib/constants/site";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { NavLinks } from "@/components/navbar/NavLinks";

type NavbarProps = {
  variant?: "light" | "dark";
};

export function Navbar({ variant = "dark" }: NavbarProps) {
  const isLight = variant === "light";

  const textColor = isLight ? "text-white" : "text-black";
  const borderColor = isLight ? "border-transparent" : "border-border";
  const bgColor = isLight ? "bg-transparent" : "bg-white/95 backdrop-blur-sm";

  const logoSrc = isLight ? logos.onDark : logos.onLight;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-20 border-b px-5 py-6 transition-colors duration-500 lg:px-8 lg:py-8 ${bgColor} ${borderColor}`}
    >
      <div className="grid grid-cols-[1fr_auto_1fr] items-center">
        <div className="justify-self-start">
          <Link
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className={`inline-flex transition-opacity hover:opacity-60 ${textColor}`}
          >
            <InstagramIcon className="h-6 w-6" />
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
            className="h-28 w-auto lg:h-36"
            style={{ width: "auto" }}
          />
        </Link>

        <div className="justify-self-end">
          <NavLinks tone={isLight ? "light" : "dark"} />
        </div>
      </div>
    </header>
  );
}
