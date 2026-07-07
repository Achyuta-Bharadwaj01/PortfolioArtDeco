import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetailView } from "@/components/portfolio/ProjectDetailView";
import {
  getAllPortfolioSlugs,
  getPortfolioDetail,
} from "@/lib/portfolio";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPortfolioSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getPortfolioDetail(slug);

  if (!item) {
    return {};
  }

  const fallbackDescription =
    item.kind === "shoot"
      ? `Brand and business photography by Shaineela Ahmed — ${item.title}.`
      : `Interior design project by Shaineela Ahmed — ${item.title}.`;

  return {
    title: `${item.title} | Shaineela Ahmed`,
    description: item.description[0] ?? fallbackDescription,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const item = getPortfolioDetail(slug);

  if (!item) {
    notFound();
  }

  return <ProjectDetailView project={item} />;
}
