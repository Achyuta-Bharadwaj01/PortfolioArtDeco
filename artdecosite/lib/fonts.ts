import localFont from "next/font/local";
import { Pinyon_Script } from "next/font/google";

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

export const pinyonScript = Pinyon_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});
