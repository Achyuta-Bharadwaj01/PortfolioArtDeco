import fs from "fs";
import path from "path";
import { featuredProjects, type Project } from "@/lib/constants/projects";
import { encodeAssetPath } from "@/lib/utils/assets";
import {
  findMainMediaFile,
  isMediaFile,
  sortMediaFiles,
} from "@/lib/utils/media";

const ASSETS_ROOT = path.join(process.cwd(), "public", "Assets");
const EXCLUDED_DIRS = new Set(["person"]);

const featuredByFolder = new Map(
  featuredProjects.map((project) => {
    const folder = project.image.split("/")[2];
    return [folder, project];
  }),
);

function folderToSlug(folderName: string) {
  return folderName
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();
}

function folderToTitle(folderName: string) {
  return folderName
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[-_]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function getAllProjects(): Project[] {
  const entries = fs.readdirSync(ASSETS_ROOT, { withFileTypes: true });

  const projects = entries
    .filter((entry) => entry.isDirectory() && !EXCLUDED_DIRS.has(entry.name))
    .map((entry) => {
      const folderPath = path.join(ASSETS_ROOT, entry.name);
      const mediaFiles = sortMediaFiles(
        fs.readdirSync(folderPath).filter((file) => isMediaFile(file)),
      );
      const mainMedia = findMainMediaFile(mediaFiles);

      if (!mainMedia) {
        return null;
      }

      const featured = featuredByFolder.get(entry.name);
      const slug = featured?.slug ?? folderToSlug(entry.name);

      return {
        slug,
        title: featured?.title ?? folderToTitle(entry.name),
        category: featured?.category ?? "Interior Design",
        image: encodeAssetPath(entry.name, mainMedia),
        href: featured?.href ?? `/portfolio/${slug}`,
      } satisfies Project;
    })
    .filter((project): project is Project => project !== null);

  return projects.sort((a, b) => a.title.localeCompare(b.title));
}
