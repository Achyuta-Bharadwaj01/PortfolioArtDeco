export const colors = {
  /* Sampled from reference interiors — showroom, prestige, shapoorji, books */
  ivory: "#E8E0D5",
  parchment: "#F5F3EE",
  sand: "#E8DCC8",
  linen: "#D6CEC3",
  taupe: "#B4A79A",
  mauve: "#A3928F",
  cocoa: "#4B3621",
  walnut: "#5C4033",
  camel: "#A67C52",
  brass: "#C5A572",
  slate: "#6B7F8A",
  sofa: "#D4C5B5",
  /* Semantic aliases */
  navy: "#4B3621",
  teal: "#A67C52",
  sky: "#E8DCC8",
  mist: "#E8E0D5",
  white: "#F5F3EE",
  black: "#2B2520",
  bronze: "#A67C52",
  gold: "#C5A572",
  lavender: "#A3928F",
} as const;

export const theme = {
  background: colors.ivory,
  foreground: colors.black,
  surface: colors.parchment,
  accent: colors.camel,
  accentMuted: colors.sand,
  accentDeep: colors.cocoa,
  accentGold: colors.brass,
  accentMauve: colors.mauve,
  accentSlate: colors.slate,
} as const;
