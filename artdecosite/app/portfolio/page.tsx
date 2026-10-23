import type { Metadata } from "next";
import { PortfolioGrid } from "@/components/portfolio";
import { Navbar } from "@/components/navbar";
import { getAllProjects, getAllShoots } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Portfolio | Shaineela Ahmed",
  description:
    "Portfolio of interior design projects and brand photography by Shaineela Ahmed.",
};

export const revalidate = 60;

export default async function PortfolioPage() {
  const projects = await getAllProjects();
  const shoots = await getAllShoots();

  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <PortfolioGrid projects={projects} shoots={shoots} />
      </main>
    </>
  );
}
