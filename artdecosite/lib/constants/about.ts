export const aboutProfile = {
  image: "/Assets/person/mainphoto.png",
  heading: "Every space has a story, and I help you create yours.",
  paragraphs: [
    "I believe every space has a story, and the most meaningful designs are the ones that tell it authentically. My approach begins with understanding the people, purpose, and experiences that shape a space, translating ideas into visual emotions through thoughtful, timeless design. Blending interior architecture, styling, and visual storytelling, I create environments that balance beauty with function, where every detail is intentional and every element contributes to a greater narrative. Whether designing a home, a hospitality destination, a workplace, or curating an editorial space, my goal is to craft spaces that are not only seen, but deeply felt and truly lived in.",
  ],
  /** Placeholder until the about video is ready. */
  videoUrl: null,
} as const;

export type SupportSystemMember = {
  id: string;
  name: string;
  headline: string;
  location?: string;
  linkedinUsername?: string;
  photoSrc?: string;
  linkedinUrl?: string;
};

export const aboutPage = {
  title: "About Me",
  videoPlaceholderLabel: "About video — coming soon",
} as const;

export const supportSystemIntro = {
  heading: "My Support System",
} as const;

export const supportSystemMembers: SupportSystemMember[] = [
  {
    id: "saif-ahmed",
    name: "Saif Ahmed",
    headline: "FMVA® | AICPA - Candidate | Audit & Assurance Analyst @ Deloitte USI",
    location: "Bengaluru, Karnataka, India",
    linkedinUsername: "saif-ahmed-finance",
    linkedinUrl: "https://www.linkedin.com/in/saif-ahmed-finance",
  },
  {
    id: "saniya-ahmed",
    name: "Saniya Ahmed N",
    headline: "UI UX Designer at Infobrandz",
    location: "Bengaluru, Karnataka, India",
    linkedinUsername: "saniya-ahmed-n-07574b21a",
    linkedinUrl: "https://www.linkedin.com/in/saniya-ahmed-n-07574b21a",
  },
  {
    id: "omar-nabil-ahmed",
    name: "Dr. Omar Nabil Ahmed",
    headline:
      "CEO at ETA, Inc. | MD at India Builders Corporation Pvt Ltd. | LP at Ullegiant Ecojects Pvt Ltd.",
    location: "Bengaluru, Karnataka, India",
    linkedinUsername: "omar-nabil-ahmed",
    linkedinUrl: "https://www.linkedin.com/in/omar-nabil-ahmed",
  },
  {
    id: "naziya-ahmed",
    name: "Dr. Naziya Ahmed",
    headline: "Doctor",
    location: "India",
    photoSrc: "/Assets/person/NaziyaAhmed.png",
  },
];
