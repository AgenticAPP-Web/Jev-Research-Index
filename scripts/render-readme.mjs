import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const readJson = (relativePath) => JSON.parse(fs.readFileSync(path.join(root, relativePath), "utf8"));

const papers = readJson("data/papers.json");
const projects = readJson("data/projects.json");
const onlineMaterials = readJson("data/online-materials.json");
const pending = readJson("data/pending_review.json");
const manifest = readJson("data/manifest.json");
const readmePath = path.join(root, "README.md");
const readme = fs.readFileSync(readmePath, "utf8");

const hiddenSourceIds = new Set(manifest.hiddenSourceIds || []);
const hiddenSourcePatterns = (manifest.hiddenSourcePatterns || [])
  .map((pattern) => String(pattern).trim().toLocaleLowerCase("und"))
  .filter(Boolean);
const matchesPattern = (value, patterns) => {
  const text = String(value || "").toLocaleLowerCase("und");
  return patterns.some((pattern) => text.includes(pattern));
};
for (const source of readJson("data/sources.json")) {
  const sourceText = [source.id, source.name, source.url].join(" ");
  if (matchesPattern(sourceText, hiddenSourcePatterns)) hiddenSourceIds.add(source.id);
}
const isVisible = (record) => !(record.sourceIds || []).some((sourceId) => hiddenSourceIds.has(sourceId));
const visiblePapers = papers.filter(isVisible);
const visibleProjects = projects.filter(isVisible);
const visibleOnlineMaterials = onlineMaterials.filter(isVisible);
const visiblePending = pending.filter(isVisible);

const START = "<!-- CATALOGUE_TABLES_START -->";
const END = "<!-- CATALOGUE_TABLES_END -->";
const STATS_START = "<!-- CATALOGUE_STATS_START -->";
const STATS_END = "<!-- CATALOGUE_STATS_END -->";

const relationLabels = {
  uses_jev: "Uses Jev",
  studies_jev: "Studies Jev",
  jev_inspired: "Jev-inspired",
  replica: "Open replica",
  mentions_only: "Mentions only"
};

const confidenceLabels = {
  verified: "A — verified",
  probable: "B — probable",
  candidate: "C — candidate"
};

function cell(value) {
  return String(value ?? "—")
    .replaceAll("awesome-typesafe-jev", "web-crawl")
    .replaceAll("awesome-jev", "web-crawl")
    .replaceAll("|", "\\|")
    .replaceAll("\n", " ")
    .trim();
}

function publicUrl(value) {
  return /awesome/i.test(String(value || "")) ? "https://agenticapp-web.github.io/Jev-Research-Index/" : value;
}

function date(value) {
  return value || "—";
}

function linkedTitle(title, titleZh, url) {
  const primary = url ? `[${cell(title)}](${publicUrl(url)})` : cell(title);
  if (!titleZh || titleZh === title) return primary;
  return `${primary}<br><sub>${cell(titleZh)}</sub>`;
}

function evidence(record) {
  return confidenceLabels[record.confidence] || record.confidence || "—";
}

function relation(record) {
  return relationLabels[record.relation] || record.relation || "—";
}

function paperRows() {
  return visiblePapers
    .map((paper) => {
      const work = linkedTitle(paper.title, paper.titleZh, paper.canonicalUrl);
      const venue = `${paper.venue || "—"}<br><sub>${paper.paperType || "—"}</sub>`;
      return `| ${date(paper.published)} | ${work} | ${cell(paper.authors?.join(", "))} | ${venue} | ${relation(paper)} | ${evidence(paper)} | ${date(paper.lastVerifiedAt)} |`;
    })
    .join("\n");
}

function projectRows() {
  return visibleProjects
    .map((project) => {
      const work = linkedTitle(project.name, project.nameZh, project.canonicalUrl);
      const category = `${project.category || "—"}<br><sub>${project.categoryZh || "—"}</sub>`;
      return `| ${date(project.published)} | ${work} | ${cell(project.owner)} | ${category} | ${cell(project.language)} | ${relation(project)} | ${evidence(project)} | ${date(project.lastVerifiedAt)} |`;
    })
    .join("\n");
}

function materialRows() {
  return visibleOnlineMaterials
    .map((material) => {
      const work = linkedTitle(material.title, material.titleZh, material.canonicalUrl);
      const channel = `${material.platform || "—"}<br><sub>${material.contentType || "—"}</sub>`;
      return `| ${date(material.published)} | ${work} | ${channel} | ${cell(material.creator)} | ${relation(material)} | ${evidence(material)} | ${date(material.lastVerifiedAt)} |`;
    })
    .join("\n");
}

function pendingRows() {
  return visiblePending
    .map((record) => {
      const title = linkedTitle(record.title, record.titleZh, record.canonicalUrl || record.sourceUrl);
      const note = record.summaryEn || record.summaryZh || record.evidenceNote || "—";
      return `| ${date(record.lastCheckedAt)} | ${title} | ${cell(record.platform)} | ${cell(record.status)} / ${evidence(record)} | ${cell(note)} |`;
    })
    .join("\n");
}

const block = `${START}
## Catalogue snapshot

The following tables are generated from the JSON snapshots in this repository. They provide a compact Markdown index for reference and review; the website adds full summaries, filters, source notes, and bilingual display. Counts and dates refer to the snapshot labelled **${manifest.lastUpdated}** (${manifest.timezone}).

### Papers and preprints (${visiblePapers.length})

| Published | Work | Authors | Venue / type | Relationship | Evidence | Verified |
| --- | --- | --- | --- | --- | --- | --- |
${paperRows()}

### Projects and implementations (${visibleProjects.length})

| Published / created | Project | Owner | Category | Language | Relationship | Evidence | Verified |
| --- | --- | --- | --- | --- | --- | --- | --- |
${projectRows()}

### Public materials (${visibleOnlineMaterials.length})

| Published | Material | Platform / type | Creator | Relationship | Evidence | Verified |
| --- | --- | --- | --- | --- | --- | --- |
${materialRows()}

The tables intentionally preserve the distinction between **uses Jev**, **studies Jev**, **Jev-inspired**, **open replica**, and **mentions only**. A confidence label describes the evidence state, not the quality or importance of a record.

Some records were discovered through web crawling and community-maintained indexes. They remain explicitly marked by their evidence level; inclusion does not replace verification against the linked primary page.

### Review queue (${visiblePending.length})

These leads are deliberately excluded from the main catalogue until a stable primary page, author, and date can be confirmed.

| Last checked | Candidate | Platform | Status / evidence | Review note |
| --- | --- | --- | --- | --- |
${pendingRows()}
${END}`;

const snapshotSummary = `- **Current snapshot:** ${visiblePapers.length} papers, ${visibleProjects.length} projects, ${visibleOnlineMaterials.length} public materials, and ${readJson("data/sources.json").filter((source) => !hiddenSourceIds.has(source.id)).length} sources`;
const statsBlock = `${STATS_START}\n**Catalogue size:** ${visiblePapers.length} papers · ${visibleProjects.length} projects · ${visibleOnlineMaterials.length} public materials · ${readJson("data/sources.json").filter((source) => !hiddenSourceIds.has(source.id)).length} sources\n${STATS_END}`;
const visibleProjectDates = visibleProjects.filter((project) => project.publishedType === "github_repository_created").length;
const projectDateSummary = `- **Project dates:** ${visibleProjectDates} public GitHub repository creation dates confirmed; ${visibleProjects.length - visibleProjectDates} remain unconfirmed.`;

if (!readme.includes(START) || !readme.includes(END)) {
  throw new Error(`README.md must contain ${START} and ${END}`);
}

if (!readme.includes(STATS_START) || !readme.includes(STATS_END)) {
  throw new Error(`README.md must contain ${STATS_START} and ${STATS_END}`);
}

const start = readme.indexOf(START);
const end = readme.indexOf(END, start);
if (end < start) throw new Error("README.md catalogue markers are out of order");

const tableUpdated = `${readme.slice(0, start)}${block}${readme.slice(end + END.length)}`;
const summaryPattern = /^- \*\*Current snapshot:\*\*.*$/m;
const projectDatePattern = /^- \*\*Project dates:\*\*.*$/m;
let updated = summaryPattern.test(tableUpdated) ? tableUpdated.replace(summaryPattern, snapshotSummary) : tableUpdated;
if (projectDatePattern.test(updated)) updated = updated.replace(projectDatePattern, projectDateSummary);
const statsStart = updated.indexOf(STATS_START);
const statsEnd = updated.indexOf(STATS_END, statsStart);
if (statsEnd < statsStart) throw new Error("README.md catalogue stats markers are out of order");
updated = `${updated.slice(0, statsStart)}${statsBlock}${updated.slice(statsEnd + STATS_END.length)}`;

if (process.argv.includes("--check")) {
  if (updated !== readme) {
    console.error("README.md catalogue tables are out of date. Run: npm run update:readme");
    process.exit(1);
  }
  console.log("README.md catalogue tables are synchronized.");
} else {
  fs.writeFileSync(readmePath, updated);
  console.log(`Rendered ${visiblePapers.length} papers, ${visibleProjects.length} projects, and ${visibleOnlineMaterials.length} public materials into README.md.`);
}
