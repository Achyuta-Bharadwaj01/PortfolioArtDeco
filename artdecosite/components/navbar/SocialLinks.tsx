import type { IconType } from "react-icons";
import { FaInstagram, FaLinkedin, FaPinterest } from "react-icons/fa6";
import { siteConfig } from "@/lib/constants/site";

export const socialLinks: {
  label: string;
  href: string;
  Icon: IconType;
}[] = [
  {
    label: "Instagram",
    href: siteConfig.instagramUrl,
    Icon: FaInstagram,
  },
  {
    label: "Pinterest",
    href: siteConfig.pinterestUrl,
    Icon: FaPinterest,
  },
  {
    label: "LinkedIn",
    href: siteConfig.linkedinUrl,
    Icon: FaLinkedin,
  },
];

type SocialLinksProps = {
  className?: string;
  iconClassName?: string;
  tone?: "light" | "dark";
};

export function SocialLinks({
  className = "",
  iconClassName = "h-5 w-5 sm:h-[1.35rem] sm:w-[1.35rem]",
  tone = "dark",
}: SocialLinksProps) {
  const textColor = tone === "light" ? "text-white" : "text-black";

  return (
    <div className={`flex items-center gap-3.5 sm:gap-4 ${className}`}>
      {socialLinks.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`inline-flex transition-all duration-500 hover:opacity-60 ${textColor}`}
        >
          <Icon
            aria-hidden="true"
            className={`transition-all duration-500 ${iconClassName}`}
          />
        </a>
      ))}
    </div>
  );
}
