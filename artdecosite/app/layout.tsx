import type { Metadata } from "next";
import { ebGaramond, pinyonScript } from "@/lib/fonts";
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
      className={`${ebGaramond.variable} ${pinyonScript.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-mist font-heading text-black">
        {children}
        <Footer />
      </body>
    </html>
  );
}
