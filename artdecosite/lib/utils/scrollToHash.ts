export const contactSectionId = "contact";

export const contactHref = `/#${contactSectionId}`;

export function parseHashHref(href: string) {
  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) return null;

  return {
    path: href.slice(0, hashIndex) || "/",
    hash: href.slice(hashIndex + 1),
  };
}

export function scrollToHash(hash: string, behavior: ScrollBehavior = "smooth") {
  const id = hash.startsWith("#") ? hash.slice(1) : hash;
  if (!id) return false;

  const element = document.getElementById(id);
  if (!element) return false;

  element.scrollIntoView({ behavior });
  return true;
}
