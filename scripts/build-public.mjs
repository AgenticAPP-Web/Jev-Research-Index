import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicRoot = path.join(root, "public");

const readJson = (relativePath) => JSON.parse(fs.readFileSync(path.join(root, relativePath), "utf8"));
const writeJson = (relativePath, value) => {
  const target = path.join(publicRoot, relativePath);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, `${JSON.stringify(value, null, 2)}\n`);
};
const copyFile = (relativePath) => {
  const source = path.join(root, relativePath);
  const target = path.join(publicRoot, relativePath);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.copyFileSync(source, target);
};

const manifest = readJson("data/manifest.json");
const sources = readJson("data/sources.json");
const papers = readJson("data/papers.json");
const projects = readJson("data/projects.json");
const onlineMaterials = readJson("data/online-materials.json");
const pending = readJson("data/pending_review.json");
const updates = readJson("data/updates.json");

const hiddenSourceIds = new Set(manifest.hiddenSourceIds || []);
const hiddenSourcePatterns = (manifest.hiddenSourcePatterns || [])
  .map((pattern) => String(pattern).trim().toLocaleLowerCase("und"))
  .filter(Boolean);
const hiddenUpdateLabels = new Set(manifest.hiddenUpdateLabels || []);
const hiddenUpdatePatterns = (manifest.hiddenUpdatePatterns || [])
  .map((pattern) => String(pattern).trim().toLocaleLowerCase("und"))
  .filter(Boolean);
const matchesPattern = (value, patterns) => {
  const text = String(value || "").toLocaleLowerCase("und");
  return patterns.some((pattern) => text.includes(pattern));
};

const isWebCrawlSource = (source) => /awesome/i.test([source.id, source.name, source.url].join(" "));
const webCrawlSourceIds = new Map();
let webCrawlIndex = 0;
const publicizeText = (value) => String(value)
  .replaceAll("awesome-typesafe-jev", "web-crawl")
  .replaceAll("awesome-jev", "web-crawl");
const publicizeRecord = (record) => {
  if (Array.isArray(record)) return record.map(publicizeRecord);
  if (!record || typeof record !== "object") return typeof record === "string" ? publicizeText(record) : record;
  return Object.fromEntries(Object.entries(record).map(([key, value]) => {
    if (key === "sourceIds" && Array.isArray(value)) return [key, value.map((sourceId) => webCrawlSourceIds.get(sourceId) || sourceId)];
    return [key, publicizeRecord(value)];
  }));
};

const publicSources = sources.map((source) => {
  if (!isWebCrawlSource(source)) return source;
  webCrawlIndex += 1;
  const publicId = `source:web-crawl-${String(webCrawlIndex).padStart(2, "0")}`;
  webCrawlSourceIds.set(source.id, publicId);
  return {
    ...source,
    id: publicId,
    name: "Web crawl discovery source",
    type: "web_crawl",
    url: "https://agenticapp-web.github.io/Jev-Research-Index/",
    note: "Record discovered through public web crawling; linked primary pages remain the reference for verification."
  };
});

for (const source of sources) {
  if (matchesPattern([source.id, source.name, source.url].join(" "), hiddenSourcePatterns)) {
    hiddenSourceIds.add(source.id);
  }
}

const isVisibleRecord = (record) => !(record.sourceIds || []).some((sourceId) => hiddenSourceIds.has(sourceId));
const isVisibleUpdate = (update) => {
  const label = update.labelEn || update.label || "";
  const text = [update.label, update.labelEn, update.labelZh, update.summary, update.summaryEn, update.summaryZh].join(" ");
  return !hiddenUpdateLabels.has(label) && !matchesPattern(text, hiddenUpdatePatterns);
};
const publicManifest = Object.fromEntries(
  Object.entries(manifest).filter(([key]) => ![
    "hiddenSourceIds",
    "hiddenSourcePatterns",
    "hiddenUpdateLabels",
    "hiddenUpdatePatterns"
  ].includes(key))
);

fs.rmSync(publicRoot, { recursive: true, force: true });
fs.mkdirSync(publicRoot, { recursive: true });

for (const file of ["index.html", "app.js", "styles.css", "favicon.svg", "README.md"]) copyFile(file);
fs.cpSync(path.join(root, "assets"), path.join(publicRoot, "assets"), { recursive: true });
fs.cpSync(path.join(root, "updates"), path.join(publicRoot, "updates"), { recursive: true });
fs.writeFileSync(path.join(publicRoot, ".nojekyll"), "\n");

writeJson("data/manifest.json", publicManifest);
writeJson("data/sources.json", publicSources.filter((source) => !hiddenSourceIds.has(source.id)));
writeJson("data/papers.json", papers.filter(isVisibleRecord).map(publicizeRecord));
writeJson("data/projects.json", projects.filter(isVisibleRecord).map(publicizeRecord));
writeJson("data/online-materials.json", onlineMaterials.filter(isVisibleRecord).map(publicizeRecord));
writeJson("data/pending_review.json", pending.filter(isVisibleRecord).map(publicizeRecord));
writeJson("data/updates.json", updates.filter(isVisibleUpdate).map(publicizeRecord));

const forbiddenPublicText = /awesome-(?:ai|jev)|importedFromAwesomeJev|source:[^\s"']*awesome/i;
const textExtensions = new Set([".html", ".js", ".json", ".md", ".css", ".svg"]);
const violations = [];
const scan = (directory) => {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      scan(target);
    } else if (textExtensions.has(path.extname(entry.name).toLowerCase())) {
      const content = fs.readFileSync(target, "utf8");
      if (forbiddenPublicText.test(content)) violations.push(path.relative(publicRoot, target));
    }
  }
};
scan(publicRoot);
if (violations.length) {
  throw new Error(`Public artifact contains excluded-source text: ${violations.join(", ")}`);
}

const publicCounts = {
  papers: papers.filter(isVisibleRecord).length,
  projects: projects.filter(isVisibleRecord).length,
  onlineMaterials: onlineMaterials.filter(isVisibleRecord).length,
  sources: publicSources.filter((source) => !hiddenSourceIds.has(source.id)).length
};
console.log(`Built public/ (${publicCounts.papers} papers, ${publicCounts.projects} projects, ${publicCounts.onlineMaterials} materials, ${publicCounts.sources} sources).`);
