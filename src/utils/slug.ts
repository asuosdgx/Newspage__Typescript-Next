import slugify from "slugify";

export function generateSlug(title: string): string {
  return slugify(title, {
    lower: true,
    strict: true,
    locale: "pt",
  });
}

function simpleHash(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(36);
}

export function createUniqueSlug(title: string, url: string): string {
  const baseSlug = generateSlug(title);
  const urlHash = simpleHash(url);
  return `${baseSlug}-${urlHash}`;
}
