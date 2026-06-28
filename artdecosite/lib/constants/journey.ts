export type JourneyEntry = {
  id: string;
  title: string;
  organization: string;
  period: string;
  description?: string;
};

export const journeyEntries: JourneyEntry[] = [
  {
    id: "education-mcc",
    title: "BSc Interior Design and Management",
    organization: "Mount Carmel College",
    period: "2015 – 2018",
    description:
      "Where it all began — studying interiors at Mount Carmel, hosting on stage, and finding my footing with the IDM team and speakers forum.",
  },
  {
    id: "livspace-designer",
    title: "Interior Designer",
    organization: "Livspace",
    period: "Jun 2018 – Jan 2019",
    description:
      "My first role at Livspace — learning how homes come together, one detail at a time.",
  },
  {
    id: "livspace-senior-designer",
    title: "Senior Interior Designer",
    organization: "Livspace",
    period: "Jan 2019 – Jun 2019",
    description:
      "Took on more complex projects and started shaping spaces with a clearer point of view.",
  },
  {
    id: "livspace-team-lead",
    title: "Design Team Lead",
    organization: "Livspace",
    period: "Jun 2019 – Jun 2020",
    description:
      "Stepped into leadership — guiding a team while keeping design quality at the centre of every delivery.",
  },
  {
    id: "livspace-studio-director",
    title: "Studio Director",
    organization: "Livspace",
    period: "Jun 2020 – Jul 2021",
    description:
      "Ran the studio — creative direction, client relationships, and the rhythm of bringing residential projects to life.",
  },
  {
    id: "square-yards",
    title: "Business Manager",
    organization: "Square Yards",
    period: "Mar 2022 – Nov 2022",
    description:
      "Moved beyond the design room into business development — building partnerships and solving problems at scale.",
  },
  {
    id: "magicbricks",
    title: "Senior Community Manager",
    organization: "Magicbricks",
    period: "Jan 2023 – Dec 2023",
    description:
      "Built the MB interior vertical — a space where homeowners could compare designers and prices without the hard sell.",
  },
  {
    id: "freelance-stylist",
    title: "Interior Stylist",
    organization: "Freelance",
    period: "Feb 2024 – Present",
    description:
      "Styling sets and spaces for brands I love — Amazon, Westside, Good Earth, Aadyam, Ajio, Bewakoof — on shoots built for the camera and beyond.",
  },
];

export const journeyIntro = {
  heading: "Journey",
  subheading:
    "From college halls to studio floors, platform building, and set styling — the path that shaped how I see and shape space.",
};
