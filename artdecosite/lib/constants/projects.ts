export type Project = {
  slug: string;
  title: string;
  image: string;
  href: string;
  category: string;
};

export const featuredProjects: Project[] = [
  {
    slug: "fitdistrict",
    title: "Fit District",
    category: "Commercial Wellness",
    image: "/Assets/Fitdistrict/main.jpg",
    href: "/portfolio/fitdistrict",
  },
  {
    slug: "kingfisher",
    title: "Kingfisher",
    category: "Private Residence",
    image: "/Assets/kingfisher/main.png",
    href: "/portfolio/kingfisher",
  },
  {
    slug: "prestige",
    title: "Prestige",
    category: "Urban Living",
    image: "/Assets/prestige/main.jpeg",
    href: "/portfolio/prestige",
  },
  {
    slug: "shapoorji-pallonji",
    title: "Shapoorji Pallonji",
    category: "Luxury Interiors",
    image: "/Assets/shapoorjiPaloonji/main.jpeg",
    href: "/portfolio/shapoorji-pallonji",
  },
];

export const projectNumerals = ["I", "II", "III", "IV"] as const;

export const projectShowcaseIntro = {
  subheading:
    "Interiors composed with proportion, permanence, and a quiet sense of occasion.",
  eyebrow: "Portfolio",
  doorCaption: "Through here, the work itself",
  doorTitle: "Selected interiors, crafted with intention.",
  ctaLabel: "Enter the Portfolio",
} as const;
