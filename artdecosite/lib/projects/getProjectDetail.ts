import fs from "fs";
import path from "path";
import { projectDetails } from "@/lib/constants/projectDetails";
import { getAllProjects } from "@/lib/projects/getAllProjects";
import { encodeAssetPath } from "@/lib/utils/assets";
import {
  findMainMediaFile,
  isMediaFile,
  sortMediaFiles,
} from "@/lib/utils/media";

const ASSETS_ROOT = path.join(process.cwd(), "public", "Assets");

export type ProjectDetail = {
  slug: string;
  title: string;
  category: string;
  href: string;
  folder: string;
  poster: string;
  gallery: string[];
  description: string[];
};

export function getProjectDetail(slug: string): ProjectDetail | null {
  const project = getAllProjects().find((entry) => entry.slug === slug);

  if (!project) {
    return null;
  }

  const folder = project.image.split("/")[2];
  const folderPath = path.join(ASSETS_ROOT, folder);

  if (!fs.existsSync(folderPath)) {
    return null;
  }

  const mediaFiles = sortMediaFiles(
    fs.readdirSync(folderPath).filter((file) => isMediaFile(file)),
  );

  const mainMedia = findMainMediaFile(mediaFiles);

  if (!mainMedia) {
    return null;
  }

  const gallery = mediaFiles
    .filter((file) => file !== mainMedia)
    .map((file) => encodeAssetPath(folder, file));

  const content = projectDetails[slug];

  return {
    slug: project.slug,
    title: project.title,
    category: project.category,
    href: project.href,
    folder,
    poster: encodeAssetPath(folder, mainMedia),
    gallery,
    description: content?.description ?? [],
  };
}

export function getAllProjectSlugs() {
  return getAllProjects().map((project) => project.slug);
}
