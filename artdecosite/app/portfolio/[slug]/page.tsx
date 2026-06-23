import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetailView } from "@/components/portfolio/ProjectDetailView";
import {
  getAllProjectSlugs,
  getProjectDetail,
} from "@/lib/projects/getProjectDetail";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectDetail(slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | Shaineela Ahmed`,
    description:
      project.description[0] ??
      `Interior design project by Shaineela Ahmed — ${project.title}.`,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectDetail(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailView project={project} />;
}
