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
