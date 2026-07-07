export type PortfolioKind = "project" | "shoot";

export type PortfolioItem = {
  slug: string;
  title: string;
  category: string;
  image: string;
  href: string;
  kind: PortfolioKind;
};

export type PortfolioDetail = PortfolioItem & {
  collectionFolder: string;
  root: "Projects" | "shoots";
  poster: string;
  gallery: string[];
  description: string[];
};

export type PortfolioCollection = {
  kind: PortfolioKind;
  root: "Projects" | "shoots";
  defaultCategory: string;
  recursive: boolean;
};
