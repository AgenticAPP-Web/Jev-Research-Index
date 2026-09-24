import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const file = path.join(root, "data/projects.json");
const snapshotDate = process.env.SNAPSHOT_DATE || "2026-09-24";
const userAgent = "Jev-Research-Index/0.3.0 (project-date-enrichment)";
const projects = JSON.parse(fs.readFileSync(file, "utf8"));

function isGitHubRepository(value) {
  try {
    const url = new URL(value);
    const parts = url.pathname.split("/").filter(Boolean);
    return url.hostname === "github.com" && parts.length >= 2;
  } catch {
    return false;
  }
}

function extractCreatedDate(html) {
  const match = html.match(/createdAt\\?":\\?"(\d{4}-\d{2}-\d{2})T[^"\\]+/);
  return match?.[1] || null;
}

async function fetchCreatedDate(project) {
  const response = await fetch(project.canonicalUrl, {
    headers: { "user-agent": userAgent, accept: "text/html" },
    signal: AbortSignal.timeout(30000)
  });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const html = await response.text();
  const date = extractCreatedDate(html);
  if (!date) throw new Error("createdAt not found");
  return date;
}

const targets = projects.filter((project) => isGitHubRepository(project.canonicalUrl));
let cursor = 0;
let enriched = 0;
let failed = 0;
const failures = [];

async function worker() {
  while (cursor < targets.length) {
    const project = targets[cursor++];
    try {
      project.published = await fetchCreatedDate(project);
      project.publishedType = "github_repository_created";
      project.publishedSource = project.canonicalUrl;
      enriched += 1;
    } catch (error) {
      project.published = null;
      project.publishedType = "unconfirmed";
      project.publishedSource = project.canonicalUrl;
      failed += 1;
      failures.push({ id: project.id, url: project.canonicalUrl, error: error.message });
    }
  }
}

await Promise.all(Array.from({ length: 10 }, () => worker()));

for (const project of projects) {
  if (!Object.prototype.hasOwnProperty.call(project, "published")) project.published = null;
  if (!Object.prototype.hasOwnProperty.call(project, "publishedType")) project.publishedType = "unconfirmed";
  if (!Object.prototype.hasOwnProperty.call(project, "publishedSource")) project.publishedSource = project.canonicalUrl;
}

fs.writeFileSync(file, `${JSON.stringify(projects, null, 2)}\n`);
console.log(JSON.stringify({ totalProjects: projects.length, githubRepositories: targets.length, enriched, failed, snapshotDate, failures: failures.slice(0, 20) }, null, 2));
