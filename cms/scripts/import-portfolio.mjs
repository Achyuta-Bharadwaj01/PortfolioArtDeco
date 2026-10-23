import fs from "node:fs";
import path from "node:path";

const STRAPI_URL = process.env.STRAPI_URL ?? "https://admin.shaineela.com";
const TOKEN = process.env.STRAPI_TOKEN;
const MEDIA = /\.(jpe?g|png|webp|gif|mp4|webm|mov|m4v|ogv)$/i;
const PUBLIC_ROOT = path.resolve("..", "artdecosite", "public");

const overrides = {
  Fitdistrict: { slug: "fitdistrict", title: "Fit District", category: "Commercial Wellness" },
  kingfisher: { slug: "kingfisher", title: "Kingfisher", category: "Private Residence" },
  prestige: { slug: "prestige", title: "Prestige", category: "Urban Living" },
  shapoorjiPaloonji: { slug: "shapoorji-pallonji", title: "Shapoorji Pallonji", category: "Luxury Interiors" },
  restaurant: { slug: "restaurant", title: "Restaurant", category: "Hospitality" },
  "Amazon Diwali Campaign": { slug: "amazon-diwali-campaign", title: "Amazon Diwali Campaign", category: "Brand Campaign" },
  "westside summer campaign 2021": { slug: "westside-summer-campaign-2021", title: "Westside Summer Campaign", category: "Brand Campaign" },
  "TROVE Showroom": { slug: "trove-showroom", title: "TROVE Showroom", category: "Retail Photography" },
  Nestasia: { slug: "nestasia", title: "Nestasia", category: "Product Photography" },
};

const descriptions = {
  fitdistrict: [
    "For Strength & Co, I proposed a calm Bali-inspired concept for the café area—soft neutrals, warm wood, greenery, and a clean, zen layout, as seen in my design. The clients loved this unique vibe, so the lounge and café zones retain this look.",
    "As the project evolved, a new forest-themed direction was developed for the remaining spaces, which is currently under execution and set to finish by year-end.",
  ],
};

const featured = new Set([
  "fitdistrict",
  "shapoorji-pallonji",
  "amazon-diwali-campaign",
  "westside-summer-campaign-2021",
]);

const collections = [
  { kind: "project", root: "Projects", category: "Interior Design" },
  { kind: "shoot", root: "shoots", category: "Brand Photography" },
];

if (!TOKEN) {
  console.error("Set STRAPI_TOKEN to a full-access API token, then run this again.");
  process.exit(1);
}

function slugify(folderName) {
  return folderName
    .trim()
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();
}

function titleFromFolder(folderName) {
  return folderName
    .trim()
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[-_]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function walk(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith(".")) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(fullPath));
    } else if (MEDIA.test(entry.name)) {
      files.push(fullPath);
    }
  }
  return files.sort((a, b) => path.basename(a).localeCompare(path.basename(b), undefined, { numeric: true }));
}

async function strapi(pathname, options = {}) {
  const response = await fetch(new URL(pathname, STRAPI_URL), {
    ...options,
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      ...(options.body instanceof FormData ? {} : { "Content-Type": "application/json" }),
      ...options.headers,
    },
  });
  const text = await response.text();
  const payload = text ? JSON.parse(text) : {};
  if (!response.ok) {
    throw new Error(`${response.status} ${pathname} ${text.slice(0, 300)}`);
  }
  return payload;
}

async function existingSlugs() {
  const payload = await strapi("/api/portfolio-entries?fields[0]=slug&pagination[pageSize]=100");
  return new Set((payload.data ?? []).map((entry) => entry.slug));
}

async function uploadFile(filePath) {
  const form = new FormData();
  form.append("files", new File([fs.readFileSync(filePath)], path.basename(filePath)));
  const payload = await strapi("/api/upload", { method: "POST", body: form });
  return payload[0]?.id;
}

async function importFolder(folderPath, kind, defaultCategory) {
  const folderName = path.basename(folderPath).trim();
  const override = overrides[folderName] ?? {};
  const slug = override.slug ?? slugify(folderName);
  const files = walk(folderPath);
  if (files.length === 0) {
    console.log(`skip ${slug}: no media`);
    return;
  }

  const coverPath = files.find((file) => /^main\./i.test(path.basename(file))) ?? files[0];
  console.log(`upload ${slug} (${files.length} files)`);
  const coverId = await uploadFile(coverPath);
  const galleryIds = [];
  for (const filePath of files) {
    if (filePath === coverPath) continue;
    galleryIds.push(await uploadFile(filePath));
  }

  await strapi("/api/portfolio-entries?status=published", {
    method: "POST",
    body: JSON.stringify({
      data: {
        title: override.title ?? titleFromFolder(folderName),
        slug,
        kind,
        category: override.category ?? defaultCategory,
        featured: featured.has(slug),
        cover: coverId,
        gallery: galleryIds,
        description: (descriptions[slug] ?? []).map((text) => ({ text })),
      },
    }),
  });
  console.log(`published ${slug}`);
}

const taken = await existingSlugs();

for (const collection of collections) {
  const root = path.join(PUBLIC_ROOT, collection.root);
  const folders = fs.readdirSync(root, { withFileTypes: true }).filter((entry) => entry.isDirectory());
  for (const folder of folders) {
    const override = overrides[folder.name.trim()] ?? {};
    const slug = override.slug ?? slugify(folder.name.trim());
    if (taken.has(slug)) {
      console.log(`exists ${slug}`);
      continue;
    }
    await importFolder(path.join(root, folder.name), collection.kind, collection.category);
  }
}
