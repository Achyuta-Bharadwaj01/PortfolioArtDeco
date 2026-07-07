export type Collaborator = {
  id: string;
  name: string;
  initials: string;
};

export const collaboratorsIntro = {
  heading: "Collaborators",
  subheading:
    "Brands, studios, and spaces I've had the pleasure of working alongside.",
} as const;

export const collaborators: readonly Collaborator[] = [
  { id: "atelier-co", name: "Atelier Co.", initials: "AC" },
  { id: "form-studio", name: "Form Studio", initials: "FS" },
  { id: "hospitality-group", name: "Hospitality Group", initials: "HG" },
  { id: "maison-collective", name: "Maison Collective", initials: "MC" },
  { id: "northline-brands", name: "Northline Brands", initials: "NB" },
  { id: "studio-eleven", name: "Studio Eleven", initials: "SE" },
] as const;
