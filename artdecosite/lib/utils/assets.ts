export function encodePublicPath(
  root: string,
  collectionFolder: string,
  relativePath: string,
) {
  const segments = [root, collectionFolder, ...relativePath.split("/")].map(
    (segment) => encodeURIComponent(segment),
  );

  return `/${segments.join("/")}`;
}

/** @deprecated Use encodePublicPath instead */
export function encodeAssetPath(folder: string, filename: string) {
  return encodePublicPath("Assets", folder, filename);
}
