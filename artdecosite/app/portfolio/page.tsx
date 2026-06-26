import type { Metadata } from "next";
import { PortfolioGrid } from "@/components/portfolio";
import { Navbar } from "@/components/navbar";
import { pageTop } from "@/lib/constants/layout";
import { getAllProjects } from "@/lib/projects/getAllProjects";

export const metadata: Metadata = {
  title: "Portfolio | Shaineela Ahmed",
  description: "Portfolio of interior design projects by Shaineela Ahmed.",
};

export default function PortfolioPage() {
  const projects = getAllProjects();

  return (
    <>
      <Navbar variant="dark" compact />
      <main className={`flex flex-1 flex-col ${pageTop}`}>
        <PortfolioGrid projects={projects} />
      </main>
    </>
  );
}
