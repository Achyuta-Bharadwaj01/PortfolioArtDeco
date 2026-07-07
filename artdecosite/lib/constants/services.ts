import { contactHref } from "@/lib/utils/scrollToHash";

export type ServiceCategory = {
  id: string;
  title: string;
  description: string;
  href?: string;
};

export const servicesIntro = {
  heading: "Services",
  subheading:
    "Three ways to work with me — each one starts with a conversation.",
} as const;

export const serviceNumerals = ["I.", "II.", "III."] as const;

export const serviceCategories: readonly ServiceCategory[] = [
  {
    id: "interior-design",
    title: "Interior Design",
    description:
      "End-to-end design for homes and hospitality spaces — biophilic, layered, and built around how you actually live.",
    href: contactHref,
  },
  {
    id: "styling",
    title: "Styling",
    description:
      "Editorial and commercial styling that gives a space its final, unmistakable voice.",
    href: contactHref,
  },
  {
    id: "creative-direction",
    title: "Creative Direction for Brands",
    description:
      "Strategic and visual direction for brands who want their spaces and stories to feel like one thing.",
    href: contactHref,
  },
] as const;
