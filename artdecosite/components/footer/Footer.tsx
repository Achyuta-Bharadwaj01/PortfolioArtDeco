import Image from "next/image";
import Link from "next/link";
import { logos } from "@/lib/constants/assets";
import { siteConfig } from "@/lib/constants/site";

const footerLinks = [
  { label: "Contact Us", href: "/contact" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Projects", href: "/projects" },
  { label: "Instagram", href: "https://www.instagram.com/" },
] as const;

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-white px-5 py-10 lg:px-8 lg:py-14">
      <div className="grid gap-10 lg:grid-cols-[1.7fr_1.3fr] lg:items-start">
        <div className="flex items-start">
          <Image
            src={logos.onLight}
            alt={siteConfig.name}
            width={680}
            height={210}
            unoptimized
            className="h-auto w-full max-w-[540px]"
            style={{ width: "100%" }}
          />
        </div>

        <ul className="grid grid-cols-2 gap-x-10 gap-y-3 self-center text-sm text-black lg:grid-cols-2 lg:text-base">
          {footerLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="transition-colors hover:text-teal"
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
