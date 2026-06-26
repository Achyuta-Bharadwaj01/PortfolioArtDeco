import type { Metadata } from "next";
import { AboutPageContent } from "@/components/about";
import { Navbar } from "@/components/navbar";
import { pageTop } from "@/lib/constants/layout";

export const metadata: Metadata = {
  title: "About | Shaineela Ahmed",
  description:
    "Learn about Shaineela Ahmed — interior designer, stylist, content creator, and art director.",
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
