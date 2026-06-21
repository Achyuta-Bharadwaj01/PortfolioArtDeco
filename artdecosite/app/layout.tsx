import type { Metadata } from "next";
import { bodoniCondensed } from "@/lib/fonts";
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
    <html lang="en" className={`${bodoniCondensed.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background font-heading text-foreground">
        {children}
        <Footer />
      </body>
    </html>
  );
}
