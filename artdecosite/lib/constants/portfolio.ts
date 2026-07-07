import type { PortfolioKind } from "@/lib/portfolio/types";

export type PortfolioFolderOverride = {
  slug?: string;
  title?: string;
  category?: string;
};

export type PortfolioDetailContent = {
  description: string[];
};

export const portfolioFolderOverrides: Record<string, PortfolioFolderOverride> =
  {
    Fitdistrict: {
      slug: "fitdistrict",
      title: "Fit District",
      category: "Commercial Wellness",
    },
    kingfisher: {
      slug: "kingfisher",
      title: "Kingfisher",
      category: "Private Residence",
    },
    prestige: {
      slug: "prestige",
      title: "Prestige",
      category: "Urban Living",
    },
    shapoorjiPaloonji: {
      slug: "shapoorji-pallonji",
      title: "Shapoorji Pallonji",
      category: "Luxury Interiors",
    },
    restaurant: {
      slug: "restaurant",
      title: "Restaurant",
      category: "Hospitality",
    },
    "Amazon Diwali Campaign": {
      slug: "amazon-diwali-campaign",
      title: "Amazon Diwali Campaign",
      category: "Brand Campaign",
    },
    "westside summer campaign 2021": {
      slug: "westside-summer-campaign-2021",
      title: "Westside Summer Campaign",
      category: "Fashion Campaign",
    },
    "TROVE Showroom": {
      slug: "trove-showroom",
      title: "TROVE Showroom",
      category: "Retail Photography",
    },
    Nestasia: {
      slug: "nestasia",
      title: "Nestasia",
      category: "Product Photography",
    },
  };

export const portfolioDetails: Record<string, PortfolioDetailContent> = {
  fitdistrict: {
    description: [
      "For Strength & Co, I proposed a calm Bali-inspired concept for the café area—soft neutrals, warm wood, greenery, and a clean, zen layout, as seen in my design. The clients loved this unique vibe, so the lounge and café zones retain this look.",
      "As the project evolved, a new forest-themed direction was developed for the remaining spaces, which is currently under execution and set to finish by year-end.",
    ],
  },
};

export const featuredPortfolioSlugs: Record<PortfolioKind, string[]> = {
  project: ["fitdistrict", "shapoorji-pallonji"],
  shoot: ["amazon-diwali-campaign", "westside-summer-campaign-2021"],
};

export const portfolioSectionCopy = {
  pageIntro:
    "A complete collection of interiors, brand campaigns, and visual stories shaped with proportion, permanence, and quiet occasion.",
  showcaseHeading: "Selected Works",
  showcaseIntro:
    "Selected interiors and brand photography composed with proportion, permanence, and a quiet sense of occasion.",
  projectsEyebrow: "Interior Projects",
  shootsEyebrow: "Brand & Business Shoots",
  projectsIntro:
    "Residential, commercial, and hospitality spaces designed with layered texture and enduring calm.",
  shootsIntro:
    "Campaign, product, and lifestyle photography for brands that value atmosphere as much as image.",
  brandWorksEyebrow: "Brand Films",
  brandWorksIntro:
    "Campaign films and brand films — direction, styling, and spatial storytelling brought to life on screen.",
} as const;
