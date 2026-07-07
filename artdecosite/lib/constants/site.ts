import { theme } from "@/lib/constants/theme";
import { aboutHref, contactHref } from "@/lib/utils/scrollToHash";

export const siteConfig = {
  brandName: "Ellaria",
  name: "Shaineela Ahmed",
  background: theme.background,
  foreground: theme.foreground,
  instagramUrl:
    "https://www.instagram.com/ellariastudio?igsh=MXg0MmZpM2wyOWw1&utm_source=qr",
  pinterestUrl: "https://uk.pinterest.com/shaineelaa/",
  linkedinUrl: "https://www.linkedin.com/in/shaineela-ahmed-interiorarchitect/",
  tagline: "Interior Architect & Set Designer",
  footerTagline: "Every space has a story.",
} as const;

export const navLinks = [
  { label: "PORTFOLIO", href: "/portfolio" },
  { label: "SERVICES", href: "/services" },
  { label: "SHOP", href: "/shop" },
  { label: "BLOG", href: "/blog" },
  { label: "ABOUT", href: aboutHref },
  { label: "CONTACT", href: contactHref },
] as const;
