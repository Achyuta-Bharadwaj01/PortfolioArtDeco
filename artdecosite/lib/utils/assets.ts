export function encodeAssetPath(folder: string, filename: string) {
  return `/Assets/${folder}/${encodeURIComponent(filename)}`;
}
