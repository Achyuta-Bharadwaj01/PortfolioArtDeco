import fs from "fs";
import path from "path";
import {
  featuredPortfolioSlugs,
  portfolioDetails,
  portfolioFolderOverrides,
} from "@/lib/constants/portfolio";
import {
  buildGalleryFromMedia,
  collectMediaFromDirectory,
  folderToSlug,
  folderToTitle,
  selectPosterMedia,
} from "@/lib/portfolio/scanMedia";
import type {
  PortfolioCollection,
  PortfolioDetail,
  PortfolioItem,
  PortfolioKind,
} from "@/lib/portfolio/types";

const PUBLIC_ROOT = path.join(process.cwd(), "public");

const collections: PortfolioCollection[] = [
  {
    kind: "project",
    root: "Projects",
    defaultCategory: "Interior Design",
    recursive: true,
  },
  {
    kind: "shoot",
    root: "shoots",
    defaultCategory: "Brand Photography",
    recursive: true,
  },
];

function getCollectionConfig(kind: PortfolioKind) {
  const config = collections.find((entry) => entry.kind === kind);

  if (!config) {
    throw new Error(`Unknown portfolio kind: ${kind}`);
  }

  return config;
}

function resolveFolderMetadata(folderName: string, kind: PortfolioKind) {
  const config = getCollectionConfig(kind);
  const normalizedFolder = folderName.trim();
  const override = portfolioFolderOverrides[normalizedFolder];
  const slug = override?.slug ?? folderToSlug(normalizedFolder);

  return {
    slug,
    title: override?.title ?? folderToTitle(normalizedFolder),
    category: override?.category ?? config.defaultCategory,
    href: `/portfolio/${slug}`,
    kind,
  };
}

function loadItemsFromCollection(config: PortfolioCollection): PortfolioItem[] {
  const assetsRoot = path.join(PUBLIC_ROOT, config.root);
  const entries = fs.readdirSync(assetsRoot, { withFileTypes: true });

  return entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => {
      const folderName = entry.name.trim();
      const folderPath = path.join(assetsRoot, entry.name);
      const mediaEntries = collectMediaFromDirectory(
        folderPath,
        entry.name,
        config.root,
        config.recursive,
      );
      const poster = selectPosterMedia(mediaEntries);

      if (!poster) {
        return null;
      }

      const metadata = resolveFolderMetadata(folderName, config.kind);

      return {
        ...metadata,
        image: poster.publicPath,
      } satisfies PortfolioItem;
    })
    .filter((item): item is PortfolioItem => item !== null)
    .sort((a, b) => a.title.localeCompare(b.title));
}

export function getAllProjects(): PortfolioItem[] {
  return loadItemsFromCollection(getCollectionConfig("project"));
}

export function getAllShoots(): PortfolioItem[] {
  return loadItemsFromCollection(getCollectionConfig("shoot"));
}

export function getAllPortfolioItems(): PortfolioItem[] {
  return [...getAllProjects(), ...getAllShoots()].sort((a, b) =>
    a.title.localeCompare(b.title),
  );
}

function findPortfolioItem(slug: string): PortfolioItem | null {
  return getAllPortfolioItems().find((entry) => entry.slug === slug) ?? null;
}

export function getPortfolioDetail(slug: string): PortfolioDetail | null {
  const item = findPortfolioItem(slug);

  if (!item) {
    return null;
  }

  const config = getCollectionConfig(item.kind);
  const assetsRoot = path.join(PUBLIC_ROOT, config.root);
  const collectionFolder = fs
    .readdirSync(assetsRoot, { withFileTypes: true })
    .find(
      (entry) =>
        entry.isDirectory() &&
        resolveFolderMetadata(entry.name, item.kind).slug === slug,
    )?.name;

  if (!collectionFolder) {
    return null;
  }

  const folderPath = path.join(assetsRoot, collectionFolder);
  const mediaEntries = collectMediaFromDirectory(
    folderPath,
    collectionFolder,
    config.root,
    config.recursive,
  );
  const poster = selectPosterMedia(mediaEntries);

  if (!poster) {
    return null;
  }

  const content = portfolioDetails[slug];

  return {
    ...item,
    collectionFolder,
    root: config.root,
    poster: poster.publicPath,
    gallery: buildGalleryFromMedia(mediaEntries, poster),
    description: content?.description ?? [],
  };
}

export function getAllPortfolioSlugs() {
  return getAllPortfolioItems().map((item) => item.slug);
}

export function getFeaturedPortfolioItems(): PortfolioItem[] {
  const projects = getAllProjects();
  const shoots = getAllShoots();

  const pickFeatured = (
    items: PortfolioItem[],
    slugs: string[],
    count: number,
  ) => {
    const selected: PortfolioItem[] = [];

    for (const slug of slugs) {
      const match = items.find((item) => item.slug === slug);
      if (match) {
        selected.push(match);
      }
    }

    for (const item of items) {
      if (selected.length >= count) {
        break;
      }

      if (!selected.some((entry) => entry.slug === item.slug)) {
        selected.push(item);
      }
    }

    return selected.slice(0, count);
  };

  return [
    ...pickFeatured(projects, featuredPortfolioSlugs.project, 2),
    ...pickFeatured(shoots, featuredPortfolioSlugs.shoot, 2),
  ];
}
