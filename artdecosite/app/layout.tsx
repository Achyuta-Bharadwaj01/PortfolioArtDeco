import type { Metadata } from "next";
import {
  ebGaramond,
  jost,
  pinyonScript,
  cormorantGaramond,
  parisienne,
} from "@/lib/fonts";
import { Footer } from "@/components/footer/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shaineela Ahmed",
  description: "Portfolio of Shaineela Ahmed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${ebGaramond.variable} ${jost.variable} ${pinyonScript.variable} ${cormorantGaramond.variable} ${parisienne.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-cream font-body text-ink"
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
