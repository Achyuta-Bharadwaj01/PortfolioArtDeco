export type ServiceCategory = {
  id: string;
  title: string;
  items?: readonly string[];
};

export const servicesIntro = {
  heading: "Services",
  subheading:
    "From intimate residences to hospitality environments, set design, and bespoke furnishings — tailored design guidance at every scale.",
} as const;

export const serviceCategories: readonly ServiceCategory[] = [
  {
    id: "interior-consultation",
    title: "Interior Consultation",
    items: ["Residential Interiors", "Hospitality Design"],
  },
  {
    id: "set-designing-art-direction",
    title: "Set Designing & Art Direction",
  },
  {
    id: "product-furniture-design",
    title: "Product & Furniture Design",
  },
] as const;
