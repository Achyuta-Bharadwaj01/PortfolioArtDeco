import type { Metadata } from "next";
import { PortfolioGrid } from "@/components/portfolio";
import { Navbar } from "@/components/navbar";
import { getAllProjects, getAllShoots } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Portfolio | Shaineela Ahmed",
  description:
    "Portfolio of interior design projects and brand photography by Shaineela Ahmed.",
};

export default function PortfolioPage() {
  const projects = getAllProjects();
  const shoots = getAllShoots();

  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <PortfolioGrid projects={projects} shoots={shoots} />
      </main>
    </>
  );
}
