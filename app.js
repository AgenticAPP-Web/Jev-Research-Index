const DATA_FILES = {
  manifest: "data/manifest.json",
  sources: "data/sources.json",
  papers: "data/papers.json",
  projects: "data/projects.json",
  onlineMaterials: "data/online-materials.json",
  pending: "data/pending_review.json",
  updates: "data/updates.json"
};

const translations = {
  en: {
    "a11y.skip": "Skip to catalogue",
    "nav.catalog": "Catalogue",
    "nav.protocol": "README",
    "hero.titleLead": "A structured catalogue of",
    "hero.titleEmphasis": "Jev papers and projects.",
    "hero.lede": "A bilingual catalogue of papers, software, demonstrations, interviews, and public materials related to TypeSafe AI Jev. Entries can be filtered by type, platform, relationship, and topic.",
    "hero.primaryAction": "View the catalogue",
    "hero.secondaryAction": "View the README",
    "hero.githubAction": "GitHub repository",
    "hero.scopeLabel": "Scope",
    "scope.label": "SCOPE",
    "scope.statement": "Jev denotes TypeSafe AI’s System One typed probabilistic decision model. Same-name biomedical and journal records are excluded.",
    "scope.asOf": "As of",
    "scope.launchAge": "Since Jev release",
    "scope.sources": "Sources",
    "scope.version": "Scope version",
    "stats.papersShort": "PAPERS",
    "stats.projectsShort": "PROJECTS",
    "stats.materialsShort": "PUBLIC MATERIALS",
    "stats.verifiedShort": "VERIFIED",
    "stats.pendingShort": "REVIEW QUEUE",
    "stats.papers": "Papers and preprints",
    "stats.projects": "Software, SDKs, and applications",
    "stats.materials": "Interviews, posts, essays, and demonstrations",
    "stats.verified": "Records with sources reviewed",
    "stats.pending": "Items to review",
    "updates.latest": "Latest update",
    "catalog.kicker": "THE CATALOGUE",
    "catalog.title": "Records",
    "catalog.aside": "Entries are organized by type, platform, and relationship. Time-dependent metrics are shown with their observation date.",
    "actions.downloadJson": "Download JSON",
    "actions.downloadCsv": "Download CSV",
    "filters.searchLabel": "Search the catalogue",
    "filters.searchPlaceholder": "Search titles, authors, platforms, or topics",
    "filters.all": "All",
    "filters.papers": "Papers",
    "filters.projects": "Projects",
    "filters.materials": "Public materials",
    "filters.categoryLabel": "Filter by category",
    "filters.platformLabel": "Filter by platform",
    "filters.evidenceLabel": "Filter by evidence level",
    "filters.relationLabel": "Filter by relationship",
    "filters.allCategories": "All categories",
    "filters.allPlatforms": "All platforms",
    "filters.allEvidence": "All evidence levels",
    "filters.allRelations": "All relationships",
    "rail.updates": "UPDATE HISTORY",
    "rail.fullLog": "Read the full log",
    "rail.legend": "SOURCE STATUS",
    "rail.boundary": "SOURCE NOTE",
    "rail.boundaryText": "Performance figures and product claims remain attributed to the original author or publisher.",
    "lastUpdate.label": "LAST UPDATE",
    "footer.note": "Static bilingual catalogue of the Jev ecosystem.",
    "footer.affiliationsLabel": "Contributors / affiliations",
    "footer.affiliations": "Weibo Gao — The Hong Kong Polytechnic University · Linan Yue — Southeast University · Zheng Zhang — Nanyang Technological University · Yichao Du — Wuhan University",
    "status.loading": "Loading",
    "status.noUpdates": "No update records are available.",
    "status.noMatches": "No records match the current filters.",
    "status.noMatchesHint": "Clear the search or broaden the filters to continue.",
    "status.dataError": "The catalogue data could not be loaded. Open the page through a local HTTP server rather than directly from the file system.",
    "status.citationCopied": "Citation copied",
    "status.citationFailed": "Copy failed; open the source to copy manually",
    "status.downloadReady": "Download prepared",
    "status.viewDetails": "View source details",
    "status.openCanonical": "Open source page",
    "status.openOriginal": "Open original post",
    "status.copyBibtex": "Copy BibTeX",
    "status.noSummary": "No bilingual summary has been supplied; consult the canonical source.",
    "status.loadMore": "Load more records",
    "status.showing": "Showing",
    "entry.paper": "PAPER",
    "entry.project": "PROJECT",
    "entry.online": "PUBLIC MATERIAL",
    "entry.authors": "Authors",
    "entry.maintainer": "Maintainer / licence",
    "entry.creator": "Creator / channel",
    "entry.relationship": "Relationship",
    "entry.status": "Status",
    "entry.lastVerified": "Last verified",
    "entry.published": "Published",
    "entry.githubCreated": "GitHub repository created",
    "entry.dateUnavailable": "Date not confirmed",
    "entry.sourceIds": "Source IDs",
    "entry.platform": "Platform",
    "entry.contentType": "Material type",
    "evidence.verified": "Verified",
    "evidence.probable": "Probable",
    "evidence.candidate": "Candidate",
    "evidence.verifiedNote": "Clear primary source or independent corroboration",
    "evidence.probableNote": "Credible source; independent confirmation pending",
    "evidence.candidateNote": "Discovery item not yet in the main register",
    "relation.uses_jev": "Directly uses or evaluates Jev",
    "relation.jev_inspired": "Related to Jev or System One",
    "relation.replica": "Replication or alternative implementation",
    "relation.mentions_only": "Background mention only",
    "contentType.interview": "Interview",
    "contentType.podcast": "Podcast",
    "contentType.blog": "Blog post",
    "contentType.article": "Article",
    "contentType.essay": "Essay / analysis",
    "contentType.social_post": "Social post",
    "contentType.social_channel": "Social channel",
    "contentType.video": "Video / demonstration",
    "contentType.directory": "Public directory",
    "status.active": "Active",
    "status.preprint": "Preprint",
    "status.published": "Published",
    "status.channel": "Channel",
    "status.archived": "Archived",
    "status.pending_review": "Pending review",
    "theme.light": "Light theme",
    "theme.dark": "Dark theme",
    "theme.useLight": "Use light theme",
    "theme.useDark": "Use dark theme",
    "language.label": "Language"
  },
  zh: {
    "a11y.skip": "跳转到目录",
    "nav.catalog": "目录",
    "nav.protocol": "README",
    "hero.titleLead": "一份结构化的",
    "hero.titleEmphasis": "Jev 论文与项目目录。",
    "hero.lede": "一个双语目录，收录与 TypeSafe AI Jev 相关的论文、软件、演示、访谈与其他公开材料。条目可按类型、平台、关系和主题筛选。",
    "hero.primaryAction": "查看目录",
    "hero.secondaryAction": "查看 README",
    "hero.githubAction": "GitHub 仓库",
    "hero.scopeLabel": "范围",
    "scope.label": "范围",
    "scope.statement": "Jev 专指 TypeSafe AI 的 System One 类型化概率决策模型；同名生物医学与期刊记录不纳入统计。",
    "scope.asOf": "截至",
    "scope.launchAge": "Jev 首发以来",
    "scope.sources": "来源",
    "scope.version": "范围版本",
    "stats.papersShort": "论文",
    "stats.projectsShort": "项目",
    "stats.materialsShort": "公开材料",
    "stats.verifiedShort": "已核验",
    "stats.pendingShort": "待审队列",
    "stats.papers": "论文与预印本",
    "stats.projects": "软件、SDK 与应用",
    "stats.materials": "访谈、帖子、文章与演示",
    "stats.verified": "已完成来源核对的记录",
    "stats.pending": "待处理条目",
    "updates.latest": "最近更新",
    "catalog.kicker": "研究目录",
    "catalog.title": "记录",
    "catalog.aside": "条目按类型、平台与关系组织。具有时效性的指标均标注观测日期。",
    "actions.downloadJson": "下载 JSON",
    "actions.downloadCsv": "下载 CSV",
    "filters.searchLabel": "搜索目录",
    "filters.searchPlaceholder": "搜索标题、作者、平台或主题",
    "filters.all": "全部",
    "filters.papers": "论文",
    "filters.projects": "项目",
    "filters.materials": "公开材料",
    "filters.categoryLabel": "按类别筛选",
    "filters.platformLabel": "按平台筛选",
    "filters.evidenceLabel": "按证据等级筛选",
    "filters.relationLabel": "按关系筛选",
    "filters.allCategories": "所有类别",
    "filters.allPlatforms": "所有平台",
    "filters.allEvidence": "所有证据等级",
    "filters.allRelations": "所有关系",
    "rail.updates": "更新记录",
    "rail.fullLog": "阅读完整日志",
    "rail.legend": "来源状态",
    "rail.boundary": "来源说明",
    "rail.boundaryText": "性能数字和产品主张均保留原作者或发布方署名。",
    "lastUpdate.label": "最后更新",
    "footer.note": "静态、双语的 Jev 生态目录。",
    "footer.affiliationsLabel": "作者与单位",
    "footer.affiliations": "Weibo Gao — 香港理工大学 · Linan Yue — 东南大学 · Zheng Zhang — 南洋理工大学 · Yichao Du — 武汉大学",
    "status.loading": "读取中",
    "status.noUpdates": "暂无更新记录。",
    "status.noMatches": "当前筛选条件没有匹配记录。",
    "status.noMatchesHint": "清空搜索或放宽筛选条件后继续。",
    "status.dataError": "目录数据加载失败。请通过本地 HTTP server 打开页面，不要直接从文件系统双击 HTML。",
    "status.citationCopied": "引用已复制",
    "status.citationFailed": "复制失败；请打开来源手动复制",
    "status.downloadReady": "已准备下载",
    "status.viewDetails": "查看来源信息",
    "status.openCanonical": "打开来源页面",
    "status.openOriginal": "打开原始帖子",
    "status.copyBibtex": "复制 BibTeX",
    "status.noSummary": "尚未提供双语摘要；请查阅 canonical 来源。",
    "status.loadMore": "加载更多记录",
    "status.showing": "当前显示",
    "entry.paper": "论文",
    "entry.project": "项目",
    "entry.online": "公开材料",
    "entry.authors": "作者",
    "entry.maintainer": "维护者 / 许可证",
    "entry.creator": "创作者 / 频道",
    "entry.relationship": "关系",
    "entry.status": "状态",
    "entry.lastVerified": "最后核验",
    "entry.published": "发布时间",
    "entry.githubCreated": "GitHub 仓库创建日期",
    "entry.dateUnavailable": "日期未确认",
    "entry.sourceIds": "来源 ID",
    "entry.platform": "平台",
    "entry.contentType": "材料类型",
    "evidence.verified": "已核验",
    "evidence.probable": "待补交叉核验",
    "evidence.candidate": "候选",
    "evidence.verifiedNote": "一手来源明确或有独立交叉印证",
    "evidence.probableNote": "来源可信，仍待独立确认",
    "evidence.candidateNote": "发现线索，尚未进入主目录",
    "relation.uses_jev": "直接使用或评测 Jev",
    "relation.jev_inspired": "与 Jev 或 System One 相关",
    "relation.replica": "复现或替代实现",
    "relation.mentions_only": "仅作背景提及",
    "contentType.interview": "访谈",
    "contentType.podcast": "播客",
    "contentType.blog": "博客文章",
    "contentType.article": "文章",
    "contentType.essay": "文章 / 分析",
    "contentType.social_post": "社交媒体帖子",
    "contentType.social_channel": "社交媒体频道",
    "contentType.video": "视频 / 演示",
    "contentType.directory": "公开目录",
    "status.active": "活跃",
    "status.preprint": "预印本",
    "status.published": "已发布",
    "status.channel": "频道",
    "status.archived": "已归档",
    "status.pending_review": "待核验",
    "theme.light": "浅色主题",
    "theme.dark": "深色主题",
    "theme.useLight": "切换到浅色主题",
    "theme.useDark": "切换到深色主题",
    "language.label": "语言"
  }
};

const relationKeys = ["uses_jev", "jev_inspired", "replica", "mentions_only"];
const contentTypeKeys = ["interview", "podcast", "blog", "article", "essay", "social_post", "social_channel", "video", "directory"];

const state = {
  allEntries: [],
  kind: "all",
  query: "",
  category: "all",
  platform: "all",
  evidence: "all",
  relation: "all",
  language: localStorage.getItem("jev-language") || "en",
  visibleLimit: 36
};

let loadedData = null;

const $ = (selector) => document.querySelector(selector);

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function safeUrl(value) {
  if (!value) return "#";
  try {
    const url = new URL(value, window.location.href);
    return ["http:", "https:"].includes(url.protocol) || url.origin === window.location.origin ? url.href : "#";
  } catch {
    return "#";
  }
}

function t(key) {
  return translations[state.language]?.[key] || translations.en[key] || key;
}

function getLocalized(entry, field, fallback = "") {
  const suffix = state.language === "zh" ? "Zh" : "En";
  return entry[`${field}${suffix}`] || entry[field] || fallback;
}

function localizedCategory(entry) {
  if (entry.categoryKey) return t(`category.${entry.categoryKey}`);
  if (entry.contentType && !entry.category) return localizedContentType(entry);
  return getLocalized(entry, "category", "—");
}

function localizedContentType(entry) {
  return entry.contentType ? t(`contentType.${entry.contentType}`) : "";
}

function localizedRelation(relation) {
  return relation ? t(`relation.${relation}`) : "—";
}

function localizedEvidence(confidence) {
  return confidence ? t(`evidence.${confidence}`) : "—";
}

function localizedStatus(status) {
  if (!status) return "—";
  const key = `status.${status}`;
  return translations[state.language]?.[key] || translations.en[key] || status;
}

function formatDate(value) {
  if (!value) return "—";
  const date = new Date(value.includes("T") ? value : `${value}T00:00:00+08:00`);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat(state.language === "zh" ? "zh-CN" : "en-GB", { year: "numeric", month: "short", day: "numeric" }).format(date);
}

function dateOnlyInTimeZone(value, timeZone) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(value);
  const values = Object.fromEntries(parts.filter((part) => part.type !== "literal").map((part) => [part.type, part.value]));
  return `${values.year}-${values.month}-${values.day}`;
}

function dateOnlyToUtc(value) {
  const [year, month, day] = String(value || "").split("-").map(Number);
  if (![year, month, day].every(Number.isFinite)) return null;
  const timestamp = Date.UTC(year, month - 1, day);
  return Number.isNaN(timestamp) ? null : timestamp;
}

function renderLaunchAge(manifest) {
  const target = $("#jev-launch-age");
  if (!target) return;
  const launchDate = manifest?.jevLaunchDate;
  const launchUtc = dateOnlyToUtc(launchDate);
  if (!launchDate || launchUtc === null) {
    target.textContent = "—";
    return;
  }
  const timezone = manifest.timezone || "UTC";
  const today = dateOnlyInTimeZone(new Date(), timezone);
  const todayUtc = dateOnlyToUtc(today);
  const elapsedDays = todayUtc === null ? 0 : Math.max(0, Math.floor((todayUtc - launchUtc) / 86400000));
  const calendarDay = elapsedDays + 1;
  const releaseLabel = formatDate(launchDate);
  target.textContent = state.language === "zh"
    ? `${releaseLabel} · 已过去 ${elapsedDays} 个完整日 · 第 ${calendarDay} 个自然日`
    : `${releaseLabel} · ${elapsedDays} full days · day ${calendarDay}`;
  target.setAttribute("datetime", launchDate);
  target.setAttribute("aria-label", target.textContent);
}

function filterPublicData(data) {
  const hiddenSourceIds = new Set(data.manifest.hiddenSourceIds || []);
  const hiddenSourcePatterns = (data.manifest.hiddenSourcePatterns || [])
    .map((pattern) => String(pattern).trim().toLocaleLowerCase("und"))
    .filter(Boolean);
  const hiddenUpdateLabels = new Set(data.manifest.hiddenUpdateLabels || []);
  const hiddenUpdatePatterns = (data.manifest.hiddenUpdatePatterns || [])
    .map((pattern) => String(pattern).trim().toLocaleLowerCase("und"))
    .filter(Boolean);
  const matchesPattern = (value, patterns) => {
    const text = String(value || "").toLocaleLowerCase("und");
    return patterns.some((pattern) => text.includes(pattern));
  };
  for (const source of data.sources) {
    const sourceText = [source.id, source.name, source.url].join(" ");
    if (matchesPattern(sourceText, hiddenSourcePatterns)) hiddenSourceIds.add(source.id);
  }
  const isVisible = (record) => !(record.sourceIds || []).some((sourceId) => hiddenSourceIds.has(sourceId));
  const isVisibleUpdate = (update) => {
    const label = update.labelEn || update.label || "";
    const updateText = [update.label, update.labelEn, update.labelZh, update.summary, update.summaryEn, update.summaryZh].join(" ");
    return !hiddenUpdateLabels.has(label) && !matchesPattern(updateText, hiddenUpdatePatterns);
  };
  const publicManifest = Object.fromEntries(
    Object.entries(data.manifest).filter(([key]) => ![
      "hiddenSourceIds",
      "hiddenSourcePatterns",
      "hiddenUpdateLabels",
      "hiddenUpdatePatterns"
    ].includes(key))
  );
  return {
    ...data,
    manifest: publicManifest,
    sources: data.sources.filter((source) => !hiddenSourceIds.has(source.id)),
    papers: data.papers.filter(isVisible),
    projects: data.projects.filter(isVisible),
    onlineMaterials: data.onlineMaterials.filter(isVisible),
    pending: data.pending.filter(isVisible),
    updates: data.updates.filter(isVisibleUpdate)
  };
}

function evidenceLetter(confidence) {
  return { verified: "A", probable: "B", candidate: "C" }[confidence] || "?";
}

function sortByDate(a, b) {
  const aDate = a.published || a.lastVerifiedAt || "";
  const bDate = b.published || b.lastVerifiedAt || "";
  return bDate.localeCompare(aDate) || a.id.localeCompare(b.id);
}

function allSearchText(entry) {
  return [
    entry.title,
    entry.titleZh,
    entry.name,
    entry.nameZh,
    entry.owner,
    entry.creator,
    entry.platform,
    entry.language,
    entry.category,
    entry.categoryEn,
    entry.categoryZh,
    entry.venue,
    entry.paperType,
    entry.contentType,
    entry.summaryEn,
    entry.summaryZh,
    entry.evidenceNote,
    entry.originalUrl,
    ...(entry.authors || []),
    ...(entry.topics || [])
  ]
    .filter(Boolean)
    .join(" ")
    .toLocaleLowerCase("und");
}

function matches(entry) {
  if (state.kind !== "all" && entry.kind !== state.kind) return false;
  if (state.evidence !== "all" && entry.confidence !== state.evidence) return false;
  if (state.category !== "all" && (entry.categoryKey || entry.category || entry.contentType) !== state.category) return false;
  if (state.platform !== "all" && entry.platform !== state.platform) return false;
  if (state.relation !== "all" && entry.relation !== state.relation) return false;
  if (state.query && !allSearchText(entry).includes(state.query.toLocaleLowerCase("und"))) return false;
  return true;
}

function renderStats(data) {
  const verified = state.allEntries.filter((entry) => entry.confidence === "verified").length;
  $("#paper-count").textContent = data.papers.length;
  $("#project-count").textContent = data.projects.length;
  $("#material-count").textContent = data.onlineMaterials.length;
  $("#verified-count").textContent = verified;
  $("#pending-count").textContent = data.pending.length;
  $("#source-count").textContent = data.sources.length;
  $("#last-updated").textContent = `${formatDate(data.manifest.lastUpdated)} · ${data.manifest.timezone}`;
  renderLaunchAge(data.manifest);
  const footerDate = $("#last-updated-footer");
  if (footerDate) {
    footerDate.textContent = formatDate(data.manifest.lastUpdated);
    footerDate.setAttribute("datetime", data.manifest.lastUpdated);
  }
  const footerTimezone = $("#last-updated-timezone");
  if (footerTimezone) footerTimezone.textContent = data.manifest.timezone;
  $("#scope-version").textContent = data.manifest.scopeVersion;
  $("#footer-scope-version").textContent = data.manifest.scopeVersion;
}

function optionMarkup(value, label) {
  return `<option value="${escapeHtml(value)}">${escapeHtml(label)}</option>`;
}

function populateFilters() {
  const categoryValues = [...new Set(state.allEntries.map((entry) => entry.categoryKey || entry.category || entry.contentType).filter(Boolean))].sort((a, b) => String(a).localeCompare(String(b)));
  const platformValues = [...new Set(state.allEntries.map((entry) => entry.platform).filter(Boolean))].sort((a, b) => a.localeCompare(b));
  const categorySelect = $("#category-filter");
  const platformSelect = $("#platform-filter");
  const relationSelect = $("#relation-filter");
  categorySelect.innerHTML = optionMarkup("all", t("filters.allCategories")) + categoryValues.map((value) => optionMarkup(value, state.allEntries.find((entry) => (entry.categoryKey || entry.category || entry.contentType) === value) ? localizedCategory(state.allEntries.find((entry) => (entry.categoryKey || entry.category || entry.contentType) === value)) : value)).join("");
  platformSelect.innerHTML = optionMarkup("all", t("filters.allPlatforms")) + platformValues.map((value) => optionMarkup(value, value)).join("");
  relationSelect.innerHTML = optionMarkup("all", t("filters.allRelations")) + relationKeys.map((value) => optionMarkup(value, localizedRelation(value))).join("");
  categorySelect.value = categoryValues.includes(state.category) ? state.category : "all";
  platformSelect.value = platformValues.includes(state.platform) ? state.platform : "all";
  relationSelect.value = relationKeys.includes(state.relation) ? state.relation : "all";
}

function renderUpdates(updates) {
  const target = $("#updates-list");
  if (!updates.length) {
    target.innerHTML = `<p class="muted-copy">${escapeHtml(t("status.noUpdates"))}</p>`;
    return;
  }
  const ordered = updates
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));
  const [latest, ...archive] = ordered;
  const itemMarkup = (update) => `
      <article class="update-item">
        <span class="update-date">${escapeHtml(update.date)}</span>
        <div class="update-copy"><strong>${escapeHtml(getLocalized(update, "label"))}</strong><p>${escapeHtml(getLocalized(update, "summary"))}</p></div>
      </article>`;
  target.innerHTML = itemMarkup(latest) + (archive.length ? `
    <details class="updates-archive">
      <summary>${escapeHtml(state.language === "zh" ? `查看此前 ${archive.length} 条更新` : `Show ${archive.length} previous updates`)}</summary>
      <div class="updates-archive-list">${archive.map(itemMarkup).join("")}</div>
    </details>` : "");
}

function linkMarkup(url, label) {
  if (!url || !label) return "";
  const href = escapeHtml(safeUrl(url));
  return `<a class="entry-link" href="${href}" target="_blank" rel="noreferrer noopener">${escapeHtml(label)} ↗</a>`;
}

function citationFor(entry) {
  if (entry.kind !== "paper") return "";
  const key = entry.id.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "");
  const authors = (entry.authors || []).join(" and ");
  return `@misc{${key},\n  title = {${entry.title}},\n  author = {${authors}},\n  year = {${(entry.published || "").slice(0, 4)}},\n  note = {${entry.venue}},\n  url = {${entry.canonicalUrl}}\n}`;
}

function renderEntry(entry) {
  const isPaper = entry.kind === "paper";
  const isProject = entry.kind === "project";
  const label = isPaper ? t("entry.paper") : isProject ? t("entry.project") : t("entry.online");
  const typeClass = isPaper ? "" : isProject ? "project" : "online";
  const contentType = localizedContentType(entry);
  const meta = isPaper
    ? `${formatDate(entry.published)} · ${entry.venue || "—"}`
    : isProject
      ? `${formatDate(entry.published) === "—" ? t("entry.dateUnavailable") : formatDate(entry.published)} · ${entry.owner || "—"}`
      : `${formatDate(entry.published)} · ${entry.platform || "—"}`;
  // Record content remains in its source-language form when the interface changes
  // language. Only interface labels, filters, and explanatory chrome are localized.
  const title = isProject ? (entry.name || entry.id) : (entry.title || entry.id);
  const summary = entry.summaryEn || entry.summary || t("status.noSummary");
  const topics = (entry.topics || []).map((topic) => `<span class="tag">${escapeHtml(topic)}</span>`).join("");
  const relation = localizedRelation(entry.relation);
  const evidence = localizedEvidence(entry.confidence);
  const people = isPaper
    ? (entry.authors || []).join(", ")
    : isProject
      ? `${entry.owner || "—"}${entry.license ? ` · ${entry.license}` : ""}`
      : `${entry.creator || "—"}${entry.isOriginal === false ? " · secondary record" : ""}`;
  const links = [
    linkMarkup(entry.canonicalUrl, isPaper ? t("status.openCanonical") : isProject ? t("status.openCanonical") : t("status.openCanonical")),
    linkMarkup(entry.originalUrl, t("status.openOriginal")),
    linkMarkup(entry.codeUrl || entry.docsUrl, entry.codeUrl ? "Code" : entry.docsUrl ? "Documentation" : "")
  ].filter(Boolean).join("");
  const citationButton = isPaper ? `<button class="detail-button copy-citation" type="button" data-citation="${escapeHtml(citationFor(entry))}">${escapeHtml(t("status.copyBibtex"))}</button>` : "";
  const onlineDetails = !isPaper && !isProject ? `
    <div class="relation-line">${escapeHtml(t("entry.platform"))}: ${escapeHtml(entry.platform || "—")} · ${escapeHtml(t("entry.contentType"))}: ${escapeHtml(contentType || "—")}</div>` : "";
  return `
    <article class="entry" data-entry-id="${escapeHtml(entry.id)}">
      <div class="entry-type">
        <span class="entry-label ${typeClass}">${escapeHtml(label)}</span>
        <div class="entry-meta">${escapeHtml(meta)}</div>
      </div>
      <div class="entry-main">
        <h3><a href="${escapeHtml(safeUrl(entry.canonicalUrl))}" target="_blank" rel="noreferrer noopener">${escapeHtml(title)} ↗</a></h3>
        <p class="entry-summary">${escapeHtml(summary)}</p>
      </div>
      <div class="entry-side">
        <span class="evidence-marker ${escapeHtml(entry.confidence)}" data-evidence="${escapeHtml(entry.confidence)}" data-tooltip="${escapeHtml(evidence)}" title="${escapeHtml(evidence)}" tabindex="0" role="img" aria-label="${escapeHtml(evidence)}">${evidenceLetter(entry.confidence)}</span>
        <div class="entry-links">${links}</div>
      </div>
      <details class="entry-details">
        <summary>${escapeHtml(t("status.viewDetails"))}</summary>
        <div class="details-copy">
          <div class="relation-line">${escapeHtml(t("entry.published"))}: ${escapeHtml(formatDate(entry.published))}${isProject && entry.published ? ` · ${escapeHtml(t("entry.githubCreated"))}` : ""} · ${escapeHtml(t("entry.relationship"))}: ${escapeHtml(relation)} · ${escapeHtml(t("entry.status"))}: ${escapeHtml(localizedStatus(entry.status))} · ${escapeHtml(t("entry.lastVerified"))}: ${escapeHtml(formatDate(entry.lastVerifiedAt))}</div>
          <div class="relation-line">${escapeHtml(isPaper ? t("entry.authors") : isProject ? t("entry.maintainer") : t("entry.creator"))}: ${escapeHtml(people)}</div>
          ${onlineDetails}
          ${topics ? `<div class="detail-topics"><strong>${escapeHtml(state.language === "zh" ? "主题" : "Topics")}</strong><div class="tag-row">${topics}</div></div>` : ""}
          <div class="relation-line">${escapeHtml(t("entry.sourceIds"))}: ${escapeHtml((entry.sourceIds || []).join(", "))}</div>
          <p>${escapeHtml(entry.evidenceNote || t("status.noSummary"))}</p>
          <div class="details-actions">${citationButton}<a class="detail-button" href="${escapeHtml(safeUrl(entry.canonicalUrl))}" target="_blank" rel="noreferrer noopener">${escapeHtml(t("status.openCanonical"))} ↗</a></div>
        </div>
      </details>
    </article>`;
}

function renderCatalog() {
  const filtered = state.allEntries.filter(matches).sort(sortByDate);
  $("#result-count").textContent = filtered.length;
  const target = $("#catalog-list");
  target.setAttribute("aria-busy", "false");
  if (!filtered.length) {
    target.innerHTML = `<div class="empty-state"><strong>${escapeHtml(t("status.noMatches"))}</strong><span>${escapeHtml(t("status.noMatchesHint"))}</span></div>`;
    return;
  }
  const visible = filtered.slice(0, state.visibleLimit);
  const remaining = filtered.length - visible.length;
  target.innerHTML = visible.map(renderEntry).join("") + (remaining > 0 ? `
    <div class="load-more-wrap"><button type="button" class="load-more-button" data-load-more>${escapeHtml(t("status.loadMore"))} <span>(${remaining})</span></button></div>` : "");
  updateEvidenceTooltips();
}

function resetPagination() {
  state.visibleLimit = 36;
}

function downloadFile(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function catalogCsv() {
  const headers = ["id", "kind", "content_type", "title_or_name", "creator_or_owner", "platform", "relation", "confidence", "status", "published", "topics", "canonical_url", "original_url", "last_verified_at", "source_ids"];
  const rows = state.allEntries.map((entry) => [
    entry.id,
    entry.kind,
    entry.contentType || "",
    entry.title || entry.name,
    entry.creator || entry.owner || "",
    entry.platform || "",
    entry.relation,
    entry.confidence,
    entry.status,
    entry.published || "",
    (entry.topics || []).join("; "),
    entry.canonicalUrl,
    entry.originalUrl || "",
    entry.lastVerifiedAt,
    (entry.sourceIds || []).join("; ")
  ]);
  return [headers, ...rows]
    .map((row) => row.map((value) => `"${String(value ?? "").replaceAll('"', '""')}"`).join(","))
    .join("\n");
}

function applyTranslations() {
  document.documentElement.lang = state.language === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = t(element.dataset.i18n);
    if (value) element.textContent = value;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", t(element.dataset.i18nPlaceholder));
  });
  document.querySelectorAll("[data-language]").forEach((button) => {
    const active = button.dataset.language === state.language;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  updateThemeControl();
  if (loadedData) {
    renderStats(loadedData);
    populateFilters();
    renderUpdates(loadedData.updates);
    renderCatalog();
  }
}

function setLanguage(language) {
  if (!translations[language]) return;
  state.language = language;
  localStorage.setItem("jev-language", language);
  applyTranslations();
}

function updateThemeControl() {
  const isDark = document.documentElement.dataset.theme === "dark";
  const labelKey = isDark ? "theme.useLight" : "theme.useDark";
  const label = isDark ? t("theme.light") : t("theme.dark");
  const button = $("[data-theme-toggle]");
  if (!button) return;
  button.setAttribute("aria-pressed", String(isDark));
  button.setAttribute("aria-label", t(labelKey));
  const labelNode = button.querySelector("[data-theme-label]");
  if (labelNode) labelNode.textContent = label;
  const iconNode = button.querySelector(".theme-icon");
  if (iconNode) iconNode.textContent = isDark ? "☀" : "☾";
}

function updateEvidenceTooltips() {
  const noteKeys = {
    verified: "evidence.verifiedNote",
    probable: "evidence.probableNote",
    candidate: "evidence.candidateNote"
  };
  document.querySelectorAll("[data-evidence]").forEach((marker) => {
    const confidence = marker.dataset.evidence;
    marker.dataset.tooltip = `${t(`evidence.${confidence}`)} — ${t(noteKeys[confidence])}`;
    marker.setAttribute("aria-label", `${t(`evidence.${confidence}`)} — ${t(noteKeys[confidence])}`);
  });
}

function setTheme(theme) {
  const next = theme === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("jev-theme", next);
  updateThemeControl();
  updateEvidenceTooltips();
}

function bindInteractions() {
  $("#search-input").addEventListener("input", (event) => {
    state.query = event.target.value.trim();
    resetPagination();
    renderCatalog();
  });
  $("#category-filter").addEventListener("change", (event) => {
    state.category = event.target.value;
    resetPagination();
    renderCatalog();
  });
  $("#platform-filter").addEventListener("change", (event) => {
    state.platform = event.target.value;
    resetPagination();
    renderCatalog();
  });
  $("#evidence-filter").addEventListener("change", (event) => {
    state.evidence = event.target.value;
    resetPagination();
    renderCatalog();
  });
  $("#relation-filter").addEventListener("change", (event) => {
    state.relation = event.target.value;
    resetPagination();
    renderCatalog();
  });
  document.querySelectorAll("[data-kind]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-kind]").forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      state.kind = button.dataset.kind;
      resetPagination();
      renderCatalog();
    });
  });
  $("#catalog-list").addEventListener("click", async (event) => {
    const loadMore = event.target.closest("[data-load-more]");
    if (loadMore) {
      state.visibleLimit += 36;
      renderCatalog();
      return;
    }
    const button = event.target.closest(".copy-citation");
    if (!button) return;
    const citation = button.dataset.citation || "";
    try {
      await navigator.clipboard.writeText(citation);
      button.textContent = t("status.citationCopied");
    } catch {
      button.textContent = t("status.citationFailed");
    }
    window.setTimeout(() => { button.textContent = t("status.copyBibtex"); }, 1800);
  });
  document.querySelectorAll("[data-export]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!loadedData) return;
      if (button.dataset.export === "json") {
        downloadFile("jev-research-index.json", JSON.stringify(loadedData, null, 2), "application/json;charset=utf-8");
      } else {
        downloadFile("jev-research-index.csv", `\ufeff${catalogCsv()}`, "text/csv;charset=utf-8");
      }
      const original = button.textContent;
      button.textContent = t("status.downloadReady");
      window.setTimeout(() => { button.textContent = original; }, 1600);
    });
  });
  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.language));
  });
  $("[data-theme-toggle]").addEventListener("click", () => {
    setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
  });
  document.querySelectorAll("[data-scroll-to]").forEach((button) => {
    button.addEventListener("click", () => {
      window.scrollTo({
        top: button.dataset.scrollTo === "bottom" ? document.documentElement.scrollHeight : 0,
        behavior: "smooth"
      });
    });
  });
  window.addEventListener("keydown", (event) => {
    if (event.key === "/" && document.activeElement?.tagName !== "INPUT") {
      event.preventDefault();
      $("#search-input").focus();
    }
  });
}

async function loadJson(path) {
  const response = await fetch(path, { cache: "no-store" });
  if (!response.ok) throw new Error(`${path} (${response.status})`);
  return response.json();
}

async function boot() {
  setTheme(localStorage.getItem("jev-theme") || "light");
  applyTranslations();
  try {
    const [manifest, sources, papers, projects, onlineMaterials, pending, updates] = await Promise.all([
      loadJson(DATA_FILES.manifest),
      loadJson(DATA_FILES.sources),
      loadJson(DATA_FILES.papers),
      loadJson(DATA_FILES.projects),
      loadJson(DATA_FILES.onlineMaterials),
      loadJson(DATA_FILES.pending),
      loadJson(DATA_FILES.updates)
    ]);
    const rawData = { manifest, sources, papers, projects, onlineMaterials, pending, updates };
    const data = filterPublicData(rawData);
    loadedData = data;
    state.allEntries = [
      ...data.papers.map((entry) => ({ ...entry, kind: "paper" })),
      ...data.projects.map((entry) => ({ ...entry, kind: "project" })),
      ...data.onlineMaterials.map((entry) => ({ ...entry, kind: "online" }))
    ];
    renderStats(data);
    populateFilters();
    renderUpdates(data.updates);
    renderCatalog();
    bindInteractions();
    window.setInterval(() => renderLaunchAge(data.manifest), 60000);
  } catch (error) {
    console.error(error);
    $("#catalog-list").setAttribute("aria-busy", "false");
    $("#catalog-list").innerHTML = `<div class="error-state">${escapeHtml(t("status.dataError"))}</div>`;
    $("#updates-list").innerHTML = `<p class="muted-copy">${escapeHtml(t("status.dataError"))}</p>`;
  }
}

boot();
