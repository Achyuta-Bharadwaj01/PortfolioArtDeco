export const IMAGE_EXTENSION = /\.(jpe?g|png|webp|gif)$/i;
export const VIDEO_EXTENSION = /\.(mp4|webm|mov|m4v|ogv)$/i;
export const MEDIA_EXTENSION =
  /\.(jpe?g|png|webp|gif|mp4|webm|mov|m4v|ogv)$/i;
export const MAIN_FILE_PREFIX = /^main\./i;

export function isImageSrc(src: string) {
  return IMAGE_EXTENSION.test(src);
}

export function isVideoSrc(src: string) {
  return VIDEO_EXTENSION.test(src);
}

export function isMediaFile(filename: string) {
  return MEDIA_EXTENSION.test(filename);
}

export function isMainMediaFile(filename: string) {
  return MAIN_FILE_PREFIX.test(filename) && isMediaFile(filename);
}

export function findMainMediaFile(files: string[]) {
  return files.find((file) => isMainMediaFile(file)) ?? null;
}

export function sortMediaFiles(files: string[]) {
  return files.sort((a, b) =>
    a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }),
  );
}
