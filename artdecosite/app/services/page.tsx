import type { Metadata } from "next";
import { CollaboratorsSection, ServicesSection } from "@/components/services";
import { Navbar } from "@/components/navbar";
import { pageTop } from "@/lib/constants/layout";

export const metadata: Metadata = {
  title: "Services | Shaineela Ahmed",
  description:
    "Interior design, styling, and creative direction for brands by Shaineela Ahmed.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className={`flex flex-1 flex-col ${pageTop}`}>
        <ServicesSection />
        <CollaboratorsSection />
      </main>
    </>
  );
}
