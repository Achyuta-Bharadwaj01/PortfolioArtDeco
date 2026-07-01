import type { Metadata } from "next";
import { AboutPageContent } from "@/components/about";
import { Navbar } from "@/components/navbar";
import { pageTop } from "@/lib/constants/layout";

export const metadata: Metadata = {
  title: "About | Shaineela Ahmed",
  description:
    "Human-centered interior design — designing for how you live, not just how a space looks.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar variant="dark" compact />
      <main className={`flex flex-1 flex-col ${pageTop}`}>
        <AboutPageContent />
      </main>
    </>
  );
}
