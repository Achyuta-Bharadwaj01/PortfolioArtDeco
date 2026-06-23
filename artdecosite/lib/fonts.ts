import localFont from "next/font/local";

export const ebGaramond = localFont({
  src: [
    {
      path: "../public/Fonts/EBGaramond/EBGaramond-VariableFont_wght.ttf",
      weight: "400 800",
      style: "normal",
    },
    {
      path: "../public/Fonts/EBGaramond/EBGaramond-Italic-VariableFont_wght.ttf",
      weight: "400 800",
      style: "italic",
    },
  ],
  variable: "--font-garamond",
  display: "swap",
});
