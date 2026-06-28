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
  layout?: "inline" | "menu";
  revealed?: boolean;
};

export function SocialLinks({
  className = "",
  iconClassName = "h-5 w-5 sm:h-[1.35rem] sm:w-[1.35rem]",
  tone = "dark",
  layout = "inline",
  revealed = true,
}: SocialLinksProps) {
  const textColor = tone === "light" ? "text-white" : "text-black";

  if (layout === "menu") {
    return (
      <div className={`flex flex-col items-center ${className}`}>
        <p
          className={`mb-4 font-heading text-[10px] font-bold uppercase tracking-[0.32em] transition-all duration-500 ease-out ${
            revealed ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          } ${tone === "light" ? "text-white/70" : "text-black/45"}`}
          style={{ transitionDelay: revealed ? "280ms" : "0ms" }}
        >
          Follow
        </p>
        <div className="flex items-center gap-6">
          {socialLinks.map(({ label, href, Icon }, index) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`inline-flex transition-all duration-500 ease-out hover:opacity-60 ${textColor} ${
                revealed
                  ? "translate-y-0 opacity-100"
                  : "translate-y-3 opacity-0"
              }`}
              style={{
                transitionDelay: revealed ? `${340 + index * 70}ms` : "0ms",
              }}
            >
              <Icon
                aria-hidden="true"
                className={`h-5 w-5 transition-all duration-500 ${iconClassName}`}
              />
            </a>
          ))}
        </div>
      </div>
    );
  }

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
