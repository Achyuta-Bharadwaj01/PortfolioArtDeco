export const colors = {
  ivory: "#F6F1E9",
  parchment: "#FDFBF7",
  sand: "#E8DCC8",
  linen: "#F0E8DC",
  taupe: "#9A8576",
  cocoa: "#3D2E24",
  bronze: "#A67C52",
  gold: "#C4A574",
  lavender: "#B8A9B0",
  /* Semantic aliases */
  navy: "#3D2E24",
  teal: "#A67C52",
  sky: "#E8DCC8",
  mist: "#F6F1E9",
  white: "#FDFBF7",
  black: "#1A1410",
} as const;

export const theme = {
  background: colors.ivory,
  foreground: colors.black,
  surface: colors.parchment,
  accent: colors.bronze,
  accentMuted: colors.sand,
  accentDeep: colors.cocoa,
  accentGold: colors.gold,
} as const;
