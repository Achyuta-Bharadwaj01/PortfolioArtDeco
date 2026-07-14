import type { Metadata } from "next";
import { AboutPageContent } from "@/components/about";
import { Navbar } from "@/components/navbar";
import { pageTop } from "@/lib/constants/layout";

export const metadata: Metadata = {
  title: "About | Shaineela Ahmed",
  description:
    "About Shaineela Ahmed — interior architect, set designer, and the people who've shaped her journey.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className={`flex flex-1 flex-col ${pageTop}`}>
        <AboutPageContent />
      </main>
    </>
  );
}
