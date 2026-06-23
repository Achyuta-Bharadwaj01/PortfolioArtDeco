export const colors = {
  navy: "#022B3A",
  teal: "#1F7A8C",
  sky: "#BFDBF7",
  mist: "#F8F9FA",
  white: "#FFFFFF",
  black: "#000000",
} as const;

export const theme = {
  background: colors.mist,
  foreground: colors.black,
  surface: colors.white,
  accent: colors.teal,
  accentMuted: colors.sky,
  accentDeep: colors.navy,
} as const;
