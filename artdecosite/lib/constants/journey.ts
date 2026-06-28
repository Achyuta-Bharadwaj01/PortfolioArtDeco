export type JourneyEntry = {
  id: string;
  title: string;
  organization: string;
  period: string;
  description?: string;
};

export const journeyEntries: JourneyEntry[] = [
  {
    id: "livspace-studio-director",
    title: "Studio Director",
    organization: "Livspace",
    period: "2018 – 2021",
    description:
      "Ran the studio — creative direction, client relationships, and the rhythm of bringing residential projects to life.",
  },
  {
    id: "square-yards",
    title: "Business Manager",
    organization: "Square Yards",
    period: "2022",
    description:
      "Moved beyond the design room into business development — building partnerships and solving problems at scale.",
  },
  {
    id: "magicbricks",
    title: "Senior Community Manager",
    organization: "Magicbricks",
    period: "2023",
    description:
      "Built the MB interior vertical — a space where homeowners could compare designers and prices without the hard sell.",
  },
  {
    id: "homelane",
    title: "Senior Category Manager",
    organization: "HomeLane",
    period: "2025 - 2026",
    description:
      "Managed the interior category — sourcing, pricing, and ensuring quality across a portfolio of 100+ products.",
  },
  {
    id: "Founder",
    title: "Founder",
    organization: "Elaria Studios",
    period: "2026 - Present",
    description:
      "Founded Elaria Studios — a studio for interior designers to showcase their work and connect with clients.",
  },
];

export const journeyIntro = {
  heading: "Journey",
  subheading:
    "From college halls to studio floors, platform building, and set styling — the path that shaped how I see and shape space.",
};

export const journeyMaxWidthClass = "max-w-[92rem]";
