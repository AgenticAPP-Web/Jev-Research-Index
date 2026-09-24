import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function readJson(relativePath) {
  const absolutePath = path.join(root, relativePath);
  try {
    const text = fs.readFileSync(absolutePath, "utf8");
    assertNoDuplicateObjectKeys(text, relativePath);
    return JSON.parse(text);
  } catch (error) {
    throw new Error(`${relativePath}: ${error.message}`);
  }
}

function assertNoDuplicateObjectKeys(text, relativePath) {
  const stack = [];
  let index = 0;

  const skipWhitespace = () => {
    while (/\s/.test(text[index] || "")) index += 1;
  };

  const readString = () => {
    const start = index;
    index += 1;
    while (index < text.length) {
      if (text[index] === "\\") {
        index += 2;
      } else if (text[index] === '"') {
        index += 1;
        return JSON.parse(text.slice(start, index));
      } else {
        index += 1;
      }
    }
    throw new Error("unterminated string");
  };

  while (index < text.length) {
    skipWhitespace();
    const character = text[index];
    if (character === "{") {
      stack.push({ type: "object", keys: new Set(), expectingKey: true });
      index += 1;
      continue;
    }
    if (character === "[") {
      stack.push({ type: "array" });
      index += 1;
      continue;
    }
    if (character === "}" || character === "]") {
      stack.pop();
      index += 1;
      continue;
    }
    if (character === ",") {
      const current = stack.at(-1);
      if (current?.type === "object") current.expectingKey = true;
      index += 1;
      continue;
    }
    if (character === '"') {
      const value = readString();
      const current = stack.at(-1);
      skipWhitespace();
      if (current?.type === "object" && current.expectingKey && text[index] === ":") {
        if (current.keys.has(value)) throw new Error(`duplicate object key ${JSON.stringify(value)}`);
        current.keys.add(value);
        current.expectingKey = false;
      }
      continue;
    }
    index += 1;
  }
}

const manifest = readJson("data/manifest.json");
const sources = readJson("data/sources.json");
const papers = readJson("data/papers.json");
const projects = readJson("data/projects.json");
const onlineMaterials = readJson("data/online-materials.json");
const pending = readJson("data/pending_review.json");
const rejected = readJson("data/rejected.json");
const updates = readJson("data/updates.json");
const lastRun = readJson("state/last_run.json");

const errors = [];
const sourceIds = new Set();
const recordIds = new Set();
const allowedConfidence = new Set(["verified", "probable", "candidate"]);
const allowedRelations = new Set(["uses_jev", "jev_inspired", "replica", "mentions_only"]);
const isoDate = /^\d{4}-\d{2}-\d{2}(?:T[^\s]+)?$/;

function requireField(object, field, label) {
  if (object[field] === undefined || object[field] === null || object[field] === "") {
    errors.push(`${label}: missing ${field}`);
  }
}

if (!manifest.scopeVersion || !manifest.lastUpdated || !isoDate.test(manifest.lastUpdated)) {
  errors.push("data/manifest.json: scopeVersion and ISO lastUpdated are required");
}

if (!Array.isArray(sources) || sources.length === 0) errors.push("data/sources.json: expected a non-empty array");
for (const source of sources) {
  const label = `source ${source.id || "<unknown>"}`;
  requireField(source, "id", label);
  requireField(source, "url", label);
  requireField(source, "tier", label);
  requireField(source, "retrievedAt", label);
  if (sourceIds.has(source.id)) errors.push(`${label}: duplicate id`);
  sourceIds.add(source.id);
  if (source.retrievedAt && !isoDate.test(source.retrievedAt)) errors.push(`${label}: invalid retrievedAt`);
}

function validateRecords(records, kind) {
  if (!Array.isArray(records)) {
    errors.push(`data/${kind}s.json: expected an array`);
    return;
  }
  for (const record of records) {
    const label = `${kind} ${record.id || "<unknown>"}`;
    for (const field of ["id", "relation", "confidence", "status", "canonicalUrl", "lastVerifiedAt"]) requireField(record, field, label);
    if (record.id && recordIds.has(record.id)) errors.push(`${label}: duplicate id across catalog`);
    recordIds.add(record.id);
    if (record.relation && !allowedRelations.has(record.relation)) errors.push(`${label}: unsupported relation ${record.relation}`);
    if (record.confidence && !allowedConfidence.has(record.confidence)) errors.push(`${label}: unsupported confidence ${record.confidence}`);
    if (record.lastVerifiedAt && !isoDate.test(record.lastVerifiedAt)) errors.push(`${label}: invalid lastVerifiedAt`);
    if (!Array.isArray(record.sourceIds) || record.sourceIds.length === 0) errors.push(`${label}: sourceIds must contain at least one source`);
    for (const sourceId of record.sourceIds || []) if (!sourceIds.has(sourceId)) errors.push(`${label}: unknown source ${sourceId}`);
    if (record.canonicalUrl && !/^https?:\/\//.test(record.canonicalUrl)) errors.push(`${label}: canonicalUrl must be http(s)`);
    if (record.originalUrl && !/^https?:\/\//.test(record.originalUrl)) errors.push(`${label}: originalUrl must be http(s)`);
    if (kind === "paper") {
      requireField(record, "title", label);
      requireField(record, "published", label);
      if (record.published && !isoDate.test(record.published)) errors.push(`${label}: invalid published`);
    }
    if (kind === "project") {
      requireField(record, "name", label);
      if (!Object.prototype.hasOwnProperty.call(record, "published")) errors.push(`${label}: missing published`);
      if (record.published !== null && record.published !== undefined && !isoDate.test(record.published)) errors.push(`${label}: invalid published`);
      if (!Object.prototype.hasOwnProperty.call(record, "publishedType")) errors.push(`${label}: missing publishedType`);
      if (!Object.prototype.hasOwnProperty.call(record, "publishedSource")) errors.push(`${label}: missing publishedSource`);
    }
  }
}

function validateOnlineMaterials(records) {
  if (!Array.isArray(records)) {
    errors.push("data/online-materials.json: expected an array");
    return;
  }
  const allowedContentTypes = new Set([
    "interview",
    "podcast",
    "blog",
    "article",
    "essay",
    "directory",
    "video",
    "social_post",
    "social_channel"
  ]);
  for (const record of records) {
    const label = `online material ${record.id || "<unknown>"}`;
    for (const field of [
      "id",
      "title",
      "titleZh",
      "contentType",
      "platform",
      "creator",
      "relation",
      "confidence",
      "status",
      "isOriginal",
      "summaryEn",
      "summaryZh",
      "evidenceNote",
      "canonicalUrl",
      "lastVerifiedAt"
    ]) requireField(record, field, label);
    if (!Object.prototype.hasOwnProperty.call(record, "published")) errors.push(`${label}: missing published`);
    if (record.id && recordIds.has(record.id)) errors.push(`${label}: duplicate id across catalog`);
    recordIds.add(record.id);
    if (record.contentType && !allowedContentTypes.has(record.contentType)) {
      errors.push(`${label}: unsupported contentType ${record.contentType}`);
    }
    if (record.relation && !allowedRelations.has(record.relation)) errors.push(`${label}: unsupported relation ${record.relation}`);
    if (record.confidence && !allowedConfidence.has(record.confidence)) errors.push(`${label}: unsupported confidence ${record.confidence}`);
    if (record.published !== null && record.published !== undefined && !isoDate.test(record.published)) {
      errors.push(`${label}: invalid published`);
    }
    if (record.lastVerifiedAt && !isoDate.test(record.lastVerifiedAt)) errors.push(`${label}: invalid lastVerifiedAt`);
    if (!Array.isArray(record.sourceIds) || record.sourceIds.length === 0) errors.push(`${label}: sourceIds must contain at least one source`);
    for (const sourceId of record.sourceIds || []) if (!sourceIds.has(sourceId)) errors.push(`${label}: unknown source ${sourceId}`);
    if (record.canonicalUrl && !/^https?:\/\//.test(record.canonicalUrl)) errors.push(`${label}: canonicalUrl must be http(s)`);
    if (record.isOriginal !== true && record.isOriginal !== false && record.isOriginal !== null) errors.push(`${label}: isOriginal must be boolean or null`);
  }
}

validateRecords(papers, "paper");
validateRecords(projects, "project");
validateOnlineMaterials(onlineMaterials);

if (!Array.isArray(pending)) errors.push("data/pending_review.json: expected an array");
if (!Array.isArray(rejected)) errors.push("data/rejected.json: expected an array");
if (!Array.isArray(updates)) errors.push("data/updates.json: expected an array");
if (!lastRun.status || !lastRun.completedAt) errors.push("state/last_run.json: status and completedAt are required");
if (lastRun.onlineMaterials !== onlineMaterials.length) {
  errors.push(`state/last_run.json: onlineMaterials ${lastRun.onlineMaterials} does not match catalog count ${onlineMaterials.length}`);
}
if (lastRun.pendingRecords !== pending.length) {
  errors.push(`state/last_run.json: pendingRecords ${lastRun.pendingRecords} does not match review queue count ${pending.length}`);
}
for (const sourceId of lastRun.sourcesChecked || []) {
  if (!sourceIds.has(sourceId)) errors.push(`state/last_run.json: unknown checked source ${sourceId}`);
}

if (errors.length) {
  console.error(`Validation failed with ${errors.length} issue(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Validated ${papers.length} papers, ${projects.length} projects, ${onlineMaterials.length} online materials, ${sources.length} sources.`);
