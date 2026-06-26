export type Specialty = {
  number: string;
  eyebrow: string;
  titleRegular: string;
  titleScript: string;
  body: string;
  image: string;
  imageAlt: string;
  imagePosition: "left" | "right";
};

export const specialties: Specialty[] = [
  {
    number: "01.",
    eyebrow: "Designing",
    titleRegular: "Interior Designer/",
    titleScript: "Stylist",
    body: "My journey began with interiors creating spaces that feel like poetry in form. I believe styling is more than arranging objects. It's about translating emotion into environment. My aesthetic leans toward elegant warmth clean lines, organic textures, and lived-in elegance. I love blending functionality with feeling, ensuring every space tells a quiet, graceful story Whether I'm designing and styling a space, a set, or a brand shoot.",
    image: "/about/interiordesign.jpeg",
    imageAlt: "Interior styling with chandeliers and a glass cloche display",
    imagePosition: "left",
  },
  {
    number: "02.",
    eyebrow: "",
    titleRegular: "Content",
    titleScript: "Creator",
    body: "For me, content creation is where creativity meets clarity. I conceptualise, style, and produce content that connect visually striking yet grounded in purpose. Whether it's interiors, lifestyle, or brand storytelling, I focus on authenticity, tone, and detail. My goal is to make every piece feel curated, cohesive, and emotionally resonant",
    image: "/about/ContentCreation.jpeg",
    imageAlt: "Content creation and photo editing on a laptop",
    imagePosition: "right",
  },
  {
    number: "03.",
    eyebrow: "Client Engagement",
    titleRegular: "Social",
    titleScript: "Media",
    body: "I see social media as modern storytelling where visuals, tone, and timing align to build a brand's emotional presence. My approach combines strategy with intuition; I create content ecosystems that feel cohesive, elevated, and true to the brand's voice. From layout curation to audience engagement, I help transform digital spaces into meaningful visual experiences.",
    image: "/about/Social media.jpg",
    imageAlt: "Social media engagement on a smartphone",
    imagePosition: "left",
  },
  {
    number: "04.",
    eyebrow: "Photography",
    titleRegular: "Art",
    titleScript: "Direction",
    body: "My photography and art direction stem from the same instinct that drives my interiors to capture beauty with intention. I approach every frame like a mood in motion, thoughtful composition, natural light, and honest emotion. My art direction revolves around visual storytelling, the way light falls, the colour that anchors a scene, or the stillness between movements. Whether I'm styling a space, curating colour palettes, I enjoy crafting the visual atmosphere of a project, guiding everything from styling to narrative direction, to ensure every frame feels immersive and timeless",
    image: "/about/ArtDirection.jpg",
    imageAlt: "Photography studio with lighting equipment",
    imagePosition: "right",
  },
];
