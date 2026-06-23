import { theme } from "@/lib/constants/theme";

export const siteConfig = {
  name: "Shaineela Ahmed",
  background: theme.background,
  foreground: theme.foreground,
  instagramUrl: "https://www.instagram.com/",
} as const;

export const navLinks = [
  { label: "PORTFOLIO", href: "/portfolio" },
  { label: "BLOG", href: "/blog" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
] as const;
