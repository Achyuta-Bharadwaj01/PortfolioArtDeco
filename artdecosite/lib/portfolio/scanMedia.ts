import fs from "fs";
import path from "path";
import { encodePublicPath } from "@/lib/utils/assets";
import {
  findMainMediaFile,
  isImageSrc,
  isMainMediaFile,
  isMediaFile,
  sortMediaFiles,
} from "@/lib/utils/media";

export type MediaEntry = {
  relativePath: string;
  publicPath: string;
};

export function folderToSlug(folderName: string) {
  return folderName
    .trim()
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();
}

export function folderToTitle(folderName: string) {
  return folderName
    .trim()
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[-_]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function collectMediaFromDirectory(
  absoluteRoot: string,
  collectionFolder: string,
  publicRoot: "Projects" | "shoots",
  recursive = false,
): MediaEntry[] {
  if (!fs.existsSync(absoluteRoot)) {
    return [];
  }

  const entries: MediaEntry[] = [];

  function walk(currentDir: string, relativeDir = "") {
    const dirents = fs.readdirSync(currentDir, { withFileTypes: true });
    const files: string[] = [];
    const subdirs: fs.Dirent[] = [];

    for (const dirent of dirents) {
      if (dirent.name.startsWith(".")) {
        continue;
      }

      if (dirent.isFile() && isMediaFile(dirent.name)) {
        files.push(dirent.name);
      } else if (dirent.isDirectory() && recursive) {
        subdirs.push(dirent);
      }
    }

    for (const file of sortMediaFiles(files)) {
      const relativePath = relativeDir ? `${relativeDir}/${file}` : file;

      entries.push({
        relativePath,
        publicPath: encodePublicPath(publicRoot, collectionFolder, relativePath),
      });
    }

    for (const subdir of subdirs.sort((a, b) =>
      a.name.localeCompare(b.name, undefined, {
        numeric: true,
        sensitivity: "base",
      }),
    )) {
      walk(
        path.join(currentDir, subdir.name),
        relativeDir ? `${relativeDir}/${subdir.name}` : subdir.name,
      );
    }
  }

  walk(absoluteRoot);
  return entries;
}

export function selectPosterMedia(entries: MediaEntry[]): MediaEntry | null {
  if (entries.length === 0) {
    return null;
  }

  const rootLevel = entries.filter((entry) => !entry.relativePath.includes("/"));
  const rootFilenames = rootLevel.map((entry) => path.basename(entry.relativePath));
  const mainAtRoot = findMainMediaFile(rootFilenames);

  if (mainAtRoot) {
    return (
      rootLevel.find(
        (entry) => path.basename(entry.relativePath) === mainAtRoot,
      ) ?? null
    );
  }

  const mainAnywhere = entries.find((entry) =>
    isMainMediaFile(path.basename(entry.relativePath)),
  );

  if (mainAnywhere) {
    return mainAnywhere;
  }

  const firstImage = entries.find((entry) => isImageSrc(entry.publicPath));
  return firstImage ?? entries[0];
}

export function buildGalleryFromMedia(
  entries: MediaEntry[],
  poster: MediaEntry,
): string[] {
  return entries
    .filter((entry) => entry.publicPath !== poster.publicPath)
    .map((entry) => entry.publicPath);
}
