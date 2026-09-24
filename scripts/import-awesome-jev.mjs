import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const snapshotDate = process.env.SNAPSHOT_DATE || "2026-09-24";
const completedAt = process.env.COMPLETED_AT || "2026-09-24T23:30:00+08:00";
const sourceId = "source:yibie-awesome-jev";
const sourceUrl = "https://github.com/yibie/awesome-jev";
const readJson = (relativePath) => JSON.parse(fs.readFileSync(path.join(root, relativePath), "utf8"));
const writeJson = (relativePath, value) => fs.writeFileSync(path.join(root, relativePath), `${JSON.stringify(value, null, 2)}\n`);

function decodeHtml(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&#x27;", "'")
    .replaceAll("&#39;", "'")
    .replaceAll("&quot;", '"')
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
}

function canonicalUrl(value) {
  const url = new URL(value);
  url.hash = "";
  if (url.hostname === "github.com") {
    const parts = url.pathname.split("/").filter(Boolean);
    if (parts.length >= 2) return `https://github.com/${parts[0]}/${parts[1]}`;
  }
  return url.toString().replace(/\/$/, "");
}

function recordId(url, kind) {
  const parsed = new URL(url);
  if (parsed.hostname === "github.com") {
    const parts = parsed.pathname.split("/").filter(Boolean);
    if (parts.length >= 2) return `github:${parts[0]}/${parts[1]}`;
  }
  const slug = `${parsed.hostname}${parsed.pathname}${parsed.search}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 120);
  return `${kind}:${slug}`;
}

function relationFor(description) {
  const text = description.toLowerCase();
  if (/replica|reproduction|open alternative|independent replication|open recipe|local reproduction/.test(text)) return "replica";
  if (/jev-style|jev-like|inspired by jev|derivative|alternative implementation/.test(text)) return "jev_inspired";
  if (/discussion|review|opinion|practice|interview|will openai|simon willison|lunch/.test(text)) return "mentions_only";
  return "uses_jev";
}

function isProjectUrl(url) {
  const parsed = new URL(url);
  const host = parsed.hostname.toLowerCase();
  if (["github.com", "gitlab.com", "codeberg.org", "git.allen-software.com"].some((item) => host === item || host.endsWith(`.${item}`))) return true;
  if (["pypi.org", "npmjs.com", "crates.io", "rubygems.org", "pkg.go.dev", "jsr.io"].some((item) => host === item || host.endsWith(`.${item}`))) return true;
  return ["jev-ai.pro", "jev-fit.com", "semanticspace.dev", "yappy.biz"].some((item) => host === item || host.endsWith(`.${item}`));
}

function contentTypeFor(url, name, description) {
  const parsed = new URL(url);
  const host = parsed.hostname.toLowerCase();
  const text = `${name} ${description}`.toLowerCase();
  if (host.includes("youtube") || host === "youtu.be") return "video";
  if (host.includes("x.com") || host.includes("twitter.com") || host.includes("reddit.com") || host.includes("news.ycombinator.com") || host.includes("threads.net")) return "social_post";
  if (/podcast|interview/.test(text)) return "podcast";
  if (/blog|article|walkthrough|guide|report|paper|study|research/.test(text) || host.includes("arxiv.org") || host.includes("doi.org")) return "article";
  return "directory";
}

function cleanTopic(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  const badge = raw.match(/^([^\]]+)\]\(https?:\/\/[^/]+\/badge\//);
  return (badge ? badge[1] : raw).trim();
}

function projectOwner(url) {
  const parsed = new URL(url);
  if (parsed.hostname === "github.com") return parsed.pathname.split("/").filter(Boolean)[0] || parsed.hostname;
  return parsed.hostname;
}

function parseEntries(markdown) {
  const entries = [];
  let category = "Uncategorized";
  for (const rawLine of markdown.split(/\r?\n/)) {
    const heading = rawLine.match(/^###\s+(.+)$/);
    if (heading) {
      category = decodeHtml(heading[1].trim());
      continue;
    }
    const line = rawLine.trim();
    const match = line.match(/^- \[([^\]]+)\]\((https?:\/\/[^)]+)\)(.*?)\s+-\s+(.*)$/);
    if (!match) continue;
    const [, rawName, rawUrl, badges, rawDescription] = match;
    const tags = [...badges.matchAll(/!\[(?:agent|type):\s*([^\]]+)\]\(/gi)]
      .map((item) => item[1])
      .filter(Boolean)
      .map((item) => decodeHtml(item.replaceAll("%20", " ").trim()));
    entries.push({
      name: decodeHtml(rawName.trim()),
      url: decodeHtml(rawUrl.trim()),
      description: decodeHtml(rawDescription.trim()),
      category,
      tags
    });
  }
  return entries;
}

const response = await fetch("https://raw.githubusercontent.com/yibie/awesome-jev/main/README.md", { headers: { "user-agent": "Jev-Research-Index/0.3.0" } });
if (!response.ok) throw new Error(`awesome-jev README fetch failed: ${response.status}`);
const markdown = await response.text();
const discovered = parseEntries(markdown);
if (discovered.length < 300) throw new Error(`Expected at least 300 awesome-jev entries, found ${discovered.length}`);

const papers = readJson("data/papers.json");
const projects = readJson("data/projects.json");
const onlineMaterials = readJson("data/online-materials.json");
const sources = readJson("data/sources.json");
const updates = readJson("data/updates.json");
const lastRun = readJson("state/last_run.json");
const manifest = readJson("data/manifest.json");

if (!sources.some((source) => source.id === sourceId)) {
  sources.push({
    id: sourceId,
    name: "yibie awesome-jev directory",
    type: "curated_index",
    tier: "C",
    url: sourceUrl,
    retrievedAt: snapshotDate,
    note: "社区维护的 Jev 项目、集成与讨论目录；用于批量发现，具体事实仍需回到所列项目或文章的一手页面核验。"
  });
}

const existingProjectUrls = new Set(projects.map((record) => canonicalUrl(record.canonicalUrl)));
const existingMaterialUrls = new Set(onlineMaterials.map((record) => canonicalUrl(record.canonicalUrl)));
const importedProjects = [];
const importedMaterials = [];

for (const project of projects) {
  project.topics = [...new Set((project.topics || []).map(cleanTopic).filter(Boolean))];
}

for (const item of discovered) {
  let canonical;
  try {
    canonical = canonicalUrl(item.url);
  } catch {
    continue;
  }
  const project = isProjectUrl(item.url);
  const targetSet = project ? existingProjectUrls : existingMaterialUrls;
  if (targetSet.has(canonical)) continue;
  targetSet.add(canonical);
  const relation = relationFor(item.description);
  const topics = [item.category, ...item.tags].filter(Boolean);
  if (project) {
    importedProjects.push({
      id: recordId(canonical, "project"),
      name: item.name,
      nameZh: item.name,
      owner: projectOwner(canonical),
      category: item.category,
      categoryZh: item.category,
      language: "—",
      relation,
      topics: [...new Set(topics.map(cleanTopic).filter(Boolean))],
      summaryEn: item.description,
      summaryZh: item.description,
      evidenceNote: "Discovered in yibie/awesome-jev; the linked primary page must be checked independently before treating implementation details or performance claims as verified.",
      confidence: "probable",
      status: "active",
      canonicalUrl: canonical,
      ...(canonical !== item.url ? { originalUrl: item.url } : {}),
      sourceIds: [sourceId],
      lastVerifiedAt: snapshotDate
    });
  } else {
    importedMaterials.push({
      id: recordId(canonical, "material"),
      title: item.name,
      titleZh: item.name,
      contentType: contentTypeFor(canonical, item.name, item.description),
      platform: new URL(canonical).hostname,
      creator: "Linked source (author not extracted)",
      published: null,
      relation,
      confidence: "probable",
      status: "published",
      isOriginal: true,
      summaryEn: item.description,
      summaryZh: item.description,
      evidenceNote: "Discovered in yibie/awesome-jev; this record preserves the linked public page and does not treat the directory entry as independent confirmation.",
      canonicalUrl: canonical,
      ...(canonical !== item.url ? { originalUrl: item.url } : {}),
      sourceIds: [sourceId],
      lastVerifiedAt: snapshotDate,
      topics: [...new Set(topics.map(cleanTopic).filter(Boolean))]
    });
  }
}

projects.push(...importedProjects);
onlineMaterials.push(...importedMaterials);
manifest.scopeVersion = "0.3.0";
manifest.lastUpdated = snapshotDate;
manifest.notes = "双语目录快照；论文、项目与互联网材料分层保存。awesome-jev 批量条目保留为 probable，具体事实仍需回到一手页面核验。";

const updateSummaryEn = `Imported ${importedProjects.length} project records and ${importedMaterials.length} public-material records discovered through yibie/awesome-jev; all imported records remain probable until their linked primary pages are independently checked.`;
const updateSummaryZh = `通过 yibie/awesome-jev 发现并整理 ${importedProjects.length} 个项目记录与 ${importedMaterials.length} 条公开材料记录；所有新增记录在逐项回到一手页面核验前均保留为 probable。`;
if (importedProjects.length || importedMaterials.length) {
  updates.unshift({
    date: snapshotDate,
    label: "awesome-jev directory import",
    labelEn: "awesome-jev directory import",
    labelZh: "导入 awesome-jev 目录",
    summary: updateSummaryEn,
    summaryEn: updateSummaryEn,
    summaryZh: updateSummaryZh
  });
}

lastRun.completedAt = completedAt;
lastRun.windowEnd = snapshotDate;
lastRun.sourcesChecked = [...new Set([...(lastRun.sourcesChecked || []), sourceId])];
lastRun.newRecords = (lastRun.newRecords || 0) + importedProjects.length + importedMaterials.length;
lastRun.onlineMaterials = onlineMaterials.length;
lastRun.importedFromAwesomeJev = discovered.length;

writeJson("data/sources.json", sources);
writeJson("data/projects.json", projects);
writeJson("data/online-materials.json", onlineMaterials);
writeJson("data/updates.json", updates);
writeJson("data/manifest.json", manifest);
writeJson("state/last_run.json", lastRun);

console.log(JSON.stringify({ discovered: discovered.length, importedProjects: importedProjects.length, importedMaterials: importedMaterials.length, totalProjects: projects.length, totalMaterials: onlineMaterials.length }, null, 2));
