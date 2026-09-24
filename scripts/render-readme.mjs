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

const START = "<!-- CATALOGUE_TABLES_START -->";
const END = "<!-- CATALOGUE_TABLES_END -->";

const relationLabels = {
  uses_jev: "Uses Jev",
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
    .replaceAll("|", "\\|")
    .replaceAll("\n", " ")
    .trim();
}

function date(value) {
  return value || "—";
}

function linkedTitle(title, titleZh, url) {
  const primary = url ? `[${cell(title)}](${url})` : cell(title);
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
  return papers
    .map((paper) => {
      const work = linkedTitle(paper.title, paper.titleZh, paper.canonicalUrl);
      const venue = `${paper.venue || "—"}<br><sub>${paper.paperType || "—"}</sub>`;
      return `| ${date(paper.published)} | ${work} | ${cell(paper.authors?.join(", "))} | ${venue} | ${relation(paper)} | ${evidence(paper)} | ${date(paper.lastVerifiedAt)} |`;
    })
    .join("\n");
}

function projectRows() {
  return projects
    .map((project) => {
      const work = linkedTitle(project.name, project.nameZh, project.canonicalUrl);
      const category = `${project.category || "—"}<br><sub>${project.categoryZh || "—"}</sub>`;
      return `| ${work} | ${date(project.published)} | ${cell(project.owner)} | ${category} | ${cell(project.language)} | ${relation(project)} | ${evidence(project)} | ${date(project.lastVerifiedAt)} |`;
    })
    .join("\n");
}

function materialRows() {
  return onlineMaterials
    .map((material) => {
      const work = linkedTitle(material.title, material.titleZh, material.canonicalUrl);
      const channel = `${material.platform || "—"}<br><sub>${material.contentType || "—"}</sub>`;
      return `| ${date(material.published)} | ${work} | ${channel} | ${cell(material.creator)} | ${relation(material)} | ${evidence(material)} | ${date(material.lastVerifiedAt)} |`;
    })
    .join("\n");
}

function pendingRows() {
  return pending
    .map((record) => {
      const title = linkedTitle(record.title, record.titleZh, record.canonicalUrl || record.sourceUrl);
      const note = record.summaryEn || record.summaryZh || record.evidenceNote || "—";
      return `| ${title} | ${cell(record.platform)} | ${cell(record.status)} / ${evidence(record)} | ${date(record.lastCheckedAt)} | ${cell(note)} |`;
    })
    .join("\n");
}

const block = `${START}
## Catalogue snapshot

The following tables are generated from the JSON snapshots in this repository. They provide a compact Markdown index for reference and review; the website adds full summaries, filters, source notes, and bilingual display. Counts and dates refer to the snapshot labelled **${manifest.lastUpdated}** (${manifest.timezone}).

### Papers and preprints (${papers.length})

| Published | Work | Authors | Venue / type | Relationship | Evidence | Verified |
| --- | --- | --- | --- | --- | --- | --- |
${paperRows()}

### Projects and implementations (${projects.length})

| Project | Published / created | Owner | Category | Language | Relationship | Evidence | Verified |
| --- | --- | --- | --- | --- | --- | --- | --- |
${projectRows()}

### Public materials (${onlineMaterials.length})

| Published | Material | Platform / type | Creator | Relationship | Evidence | Verified |
| --- | --- | --- | --- | --- | --- | --- |
${materialRows()}

The tables intentionally preserve the distinction between **uses Jev**, **Jev-inspired**, **open replica**, and **mentions only**. A confidence label describes the evidence state, not the quality or importance of a record.

### Review queue (${pending.length})

These leads are deliberately excluded from the main catalogue until a stable primary page, author, and date can be confirmed.

| Candidate | Platform | Status / evidence | Last checked | Review note |
| --- | --- | --- | --- | --- |
${pendingRows()}
${END}`;

if (!readme.includes(START) || !readme.includes(END)) {
  throw new Error(`README.md must contain ${START} and ${END}`);
}

const start = readme.indexOf(START);
const end = readme.indexOf(END, start);
if (end < start) throw new Error("README.md catalogue markers are out of order");

const updated = `${readme.slice(0, start)}${block}${readme.slice(end + END.length)}`;

if (process.argv.includes("--check")) {
  if (updated !== readme) {
    console.error("README.md catalogue tables are out of date. Run: npm run update:readme");
    process.exit(1);
  }
  console.log("README.md catalogue tables are synchronized.");
} else {
  fs.writeFileSync(readmePath, updated);
  console.log(`Rendered ${papers.length} papers, ${projects.length} projects, and ${onlineMaterials.length} public materials into README.md.`);
}
