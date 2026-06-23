type GalleryGroup =
  | { variant: "feature"; items: [string]; numerals: [number] }
  | { variant: "duo"; items: [string, string]; numerals: [number, number] }
  | { variant: "single"; items: [string]; numerals: [number] };

export function buildGalleryLayout(images: string[]): GalleryGroup[] {
  const layout: GalleryGroup[] = [];
  let index = 0;
  let numeral = 0;

  while (index < images.length) {
    const position = layout.length;

    if (position % 2 === 0) {
      numeral += 1;
      layout.push({
        variant: "feature",
        items: [images[index]],
        numerals: [numeral],
      });
      index += 1;
      continue;
    }

    if (index + 1 < images.length) {
      numeral += 1;
      const leftNumeral = numeral;
      numeral += 1;
      layout.push({
        variant: "duo",
        items: [images[index], images[index + 1]],
        numerals: [leftNumeral, numeral],
      });
      index += 2;
      continue;
    }

    numeral += 1;
    layout.push({
      variant: "single",
      items: [images[index]],
      numerals: [numeral],
    });
    index += 1;
  }

  return layout;
}
