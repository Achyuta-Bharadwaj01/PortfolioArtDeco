import type { Metadata } from "next";
import { ServicesSection } from "@/components/services";
import { Navbar } from "@/components/navbar";
import { pageTop } from "@/lib/constants/layout";

export const metadata: Metadata = {
  title: "Services | Shaineela Ahmed",
  description:
    "Interior consultation, set designing and art direction, and product and furniture design by Shaineela Ahmed.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar variant="dark" compact />
      <main className={`flex flex-1 flex-col ${pageTop}`}>
        <ServicesSection />
      </main>
    </>
  );
}
