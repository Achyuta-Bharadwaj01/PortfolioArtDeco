import fs from "fs";
import path from "path";
import { cache } from "react";
import {
  featuredPortfolioSlugs,
  portfolioDetails,
  portfolioFolderOverrides,
} from "@/lib/constants/portfolio";
import { getStrapiPortfolio } from "@/lib/portfolio/strapi";
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
        featured: featuredPortfolioSlugs[config.kind].includes(metadata.slug),
      };
    })
    .filter((item): item is PortfolioItem => item !== null)
    .sort((a, b) => a.title.localeCompare(b.title));
}

function getLocalProjects(): PortfolioItem[] {
  return loadItemsFromCollection(getCollectionConfig("project"));
}

function getLocalShoots(): PortfolioItem[] {
  return loadItemsFromCollection(getCollectionConfig("shoot"));
}

function getLocalPortfolioItems(): PortfolioItem[] {
  return [...getLocalProjects(), ...getLocalShoots()].sort((a, b) =>
    a.title.localeCompare(b.title),
  );
}

function findPortfolioItem(slug: string): PortfolioItem | null {
  return getLocalPortfolioItems().find((entry) => entry.slug === slug) ?? null;
}

function getLocalPortfolioDetail(slug: string): PortfolioDetail | null {
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

function getLocalCatalog(): PortfolioDetail[] {
  return getLocalPortfolioItems()
    .map((item) => getLocalPortfolioDetail(item.slug))
    .filter((item): item is PortfolioDetail => item !== null);
}

const getPortfolioCatalog = cache(async () => {
  const remote = await getStrapiPortfolio();

  if (remote && remote.length > 0) {
    return remote;
  }

  return getLocalCatalog();
});

export async function getAllProjects(): Promise<PortfolioItem[]> {
  const catalog = await getPortfolioCatalog();
  return catalog.filter((item) => item.kind === "project");
}

export async function getAllShoots(): Promise<PortfolioItem[]> {
  const catalog = await getPortfolioCatalog();
  return catalog.filter((item) => item.kind === "shoot");
}

export async function getAllPortfolioItems(): Promise<PortfolioItem[]> {
  const catalog = await getPortfolioCatalog();
  return [...catalog].sort((a, b) => a.title.localeCompare(b.title));
}

export async function getPortfolioDetail(slug: string): Promise<PortfolioDetail | null> {
  const catalog = await getPortfolioCatalog();
  return catalog.find((item) => item.slug === slug) ?? null;
}

export async function getAllPortfolioSlugs() {
  const catalog = await getPortfolioCatalog();
  return catalog.map((item) => item.slug);
}

export async function getFeaturedPortfolioItems(): Promise<PortfolioItem[]> {
  const projects = await getAllProjects();
  const shoots = await getAllShoots();

  const pickFeatured = (
    items: PortfolioItem[],
    slugs: string[],
    count: number,
  ) => {
    const selected: PortfolioItem[] = [];

    for (const item of items) {
      if (item.featured) {
        selected.push(item);
      }
    }

    for (const slug of slugs) {
      const match = items.find((item) => item.slug === slug);
      if (match && !selected.some((entry) => entry.slug === match.slug)) {
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
