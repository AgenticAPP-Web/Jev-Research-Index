# Jev Research Index

Jev Research Index is a bilingual catalogue of papers, software projects, interviews, public analyses, demonstrations, and social-media material related to **Jev**, the TypeSafe AI System One typed probabilistic decision model.

The site provides a structured reference for the Jev ecosystem. It is a static site designed for GitHub Pages; the data layer is plain JSON and can be reviewed without a database or application account.

## Scope

In this repository, **Jev** means TypeSafe AI’s System One decision model. Records about Japanese encephalitis virus, the Journal of Extracellular Vesicles, JEV vaccines, and other unrelated uses of the abbreviation are excluded and retained separately when an exclusion decision is useful for auditability.

The catalogue separates three collections:

- `papers`: papers and preprints;
- `projects`: SDKs, repositories, applications, and alternative implementations;
- `online-materials`: interviews, podcasts, blog posts, public analyses, videos, social posts, and channel-level records.

An online material is not treated as a paper or a software project. Interviews, videos, X/Twitter posts, third-party directories, and other public records are retained as source-linked materials with an explicit platform, author, canonical URL, relationship, evidence level, and verification date.

<!-- CATALOGUE_TABLES_START -->
## Catalogue snapshot

The following tables are generated from the JSON snapshots in this repository. They provide a compact Markdown index for reference and review; the website adds full summaries, filters, source notes, and bilingual display. Counts and dates refer to the snapshot labelled **2026-09-24** (Asia/Hong_Kong).

### Papers and preprints (12)

| Published | Work | Authors | Venue / type | Relationship | Evidence | Verified |
| --- | --- | --- | --- | --- | --- | --- |
| 2026-09-21 | [Jev for Scientific Decisions: Evaluating Semantic Choices and Their Consequences](https://arxiv.org/abs/2609.24965)<br><sub>Jev 在科学决策中的应用：语义选择及其后果评估</sub> | Boyuan Deng, Shuyi Fan, Hongyang Zhang, Xinhong Xie | arXiv · cs.CL / cs.AI<br><sub>应用实证 / 评测</sub> | Uses Jev | A — verified | 2026-09-24 |
| 2026-09-22 | [Visual Jev: Accurate and Efficient Decisions from Shared Visual Context](https://arxiv.org/abs/2609.25845)<br><sub>Visual Jev：共享视觉上下文下的准确高效决策</sub> | Guanxu Yu, Yuhang Yao | arXiv · cs.CV / cs.LG<br><sub>系统 / 视觉决策</sub> | Jev-inspired | A — verified | 2026-09-24 |
| 2026-09-19 | [Replacing Large Language Models with Jev Decision Models for Low-Latency Edge Service Orchestration](https://arxiv.org/abs/2609.22753)<br><sub>用 Jev 决策模型替代大语言模型进行低延迟边缘服务编排</sub> | Delong Li, Xu Wang, Haochen Gong, Rui Lang, Guangsheng Yu | arXiv · cs.DC / cs.NI<br><sub>系统实证 / 延迟评测</sub> | Uses Jev | A — verified | 2026-09-24 |
| 2026-09-21 | [Jev-Mem: System-One-Controlled Agentic Memory for Efficient AI Agents](https://arxiv.org/abs/2609.23986)<br><sub>Jev-Mem：由 System One 控制的高效智能体记忆</sub> | Dongming Jiang, Yi Li, Bingzhe Li | arXiv<br><sub>架构 / 智能体记忆</sub> | Jev-inspired | A — verified | 2026-09-24 |
| 2026-09-22 | [Type-Safe Is Not Error-Free: A Constrained Decision Head Follows the Option Name, Not the Rubric Bound to It](https://arxiv.org/abs/2609.26758)<br><sub>类型安全并非无错误：受约束决策头跟随选项名称，而非与其绑定的评判准则</sub> | Yu Sun, Junhao Xu | arXiv · cs.AI<br><sub>可靠性 / 受约束决策评测</sub> | Uses Jev | A — verified | 2026-09-24 |
| 2026-09-22 | [JEV-as-a-Judge: Accept When Confident, Escalate When Unsure](https://arxiv.org/abs/2609.26550)<br><sub>JEV-as-a-Judge：有信心时接受，不确定时升级</sub> | Yubo Li, Yidi Miao, Ramayya Krishnan, Rema Padman | arXiv · cs.AI<br><sub>评测 / 级联判定</sub> | Uses Jev | A — verified | 2026-09-24 |
| 2026-09-22 | [REFLEX with Jev for Efficient Selective Control in LLM Agents](https://arxiv.org/abs/2609.26532)<br><sub>使用 Jev 的 REFLEX：面向大语言模型智能体的高效选择性控制</sub> | Tiantong Wu, Wei Yang Bryan Lim | arXiv · cs.AI<br><sub>系统 / 选择性控制评测</sub> | Uses Jev | A — verified | 2026-09-24 |
| 2026-09-21 | [JEVQA - Video Quality from Metadata, Bitstream, and Pixel Features with a General-Purpose Decision Model](https://arxiv.org/abs/2609.24395)<br><sub>JEVQA：利用元数据、比特流和像素特征与通用决策模型评估视频质量</sub> | Werner Robitza | arXiv · eess.IV<br><sub>应用实证 / 视频质量</sub> | Uses Jev | A — verified | 2026-09-24 |
| 2026-09-21 | [Open-Jev Judgments on CallScreenBench: Calibrated One-Pass Scam Screening with a Small Language Model](https://arxiv.org/abs/2609.23959)<br><sub>CallScreenBench 上的 Open-Jev 判定：用小语言模型进行校准的单次诈骗筛查</sub> | Simiao Ren, Kidus Zewde, Xingyu Shen, Yuchen Zhou, Dennis Ng, Ankit Raj, Tommy Duong, Yuxin Zhang, Neo Tiangratanakul | arXiv · cs.CL<br><sub>开源复现 / 应用评测</sub> | Open replica | A — verified | 2026-09-24 |
| 2026-09-20 | [this-that-model-1.0: A typed decision model that decides in 30 ms, for a millionth of a cent](https://arxiv.org/abs/2609.23886)<br><sub>this-that-model-1.0：30 毫秒内、百万分之一美分完成决策的类型化决策模型</sub> | Zehua Cheng, Wei Dai, Jiahao Sun | arXiv · cs.CL<br><sub>替代模型 / 系统评测</sub> | Open replica | A — verified | 2026-09-24 |
| 2026-09-19 | [Fast Intent-Driven Service Orchestration with Jev for 6G Edge Networks](https://arxiv.org/abs/2609.23136)<br><sub>面向 6G 边缘网络的 Jev 快速意图驱动服务编排</sub> | Delong Li, Xu Wang, Haochen Gong, Rui Lang, Guangsheng Yu | arXiv · cs.NI<br><sub>系统实证 / 边缘服务编排</sub> | Uses Jev | A — verified | 2026-09-24 |
| 2026-09-21 | [Calibrated Decisions at Scale: Converting Police Crash Narratives into Probabilistic Crash Variables with a System One Model (Jev)](https://arxiv.org/abs/2609.24052)<br><sub>规模化校准决策：使用 System One 模型（Jev）将警察事故叙述转换为概率事故变量</sub> | Amir Rafe, Subasish Das | arXiv · cs.CL<br><sub>应用实证 / 概率标注</sub> | Uses Jev | A — verified | 2026-09-24 |

### Projects and implementations (17)

| Project | Owner | Category | Language | Relationship | Evidence | Verified |
| --- | --- | --- | --- | --- | --- | --- |
| [typesafe-sdk-js](https://github.com/typesafe-ai/typesafe-sdk-js) | typesafe-ai | official SDK<br><sub>官方 SDK</sub> | TypeScript | Uses Jev | A — verified | 2026-09-24 |
| [typesafe-sdk-python](https://github.com/typesafe-ai/typesafe-sdk-python) | typesafe-ai | official SDK<br><sub>官方 SDK</sub> | Python | Uses Jev | A — verified | 2026-09-24 |
| [system-one-adapter-python](https://github.com/typesafe-ai/system-one-adapter-python) | typesafe-ai | evaluation / adapter<br><sub>评测 / 兼容层</sub> | Python | Jev-inspired | A — verified | 2026-09-24 |
| [skills](https://github.com/typesafe-ai/skills) | typesafe-ai | official developer tool<br><sub>官方开发者工具</sub> | Markdown / Python | Uses Jev | A — verified | 2026-09-24 |
| [Jev-Mem](https://github.com/libingzheren/Jev-Mem) | libingzheren | agent memory<br><sub>智能体记忆</sub> | Python | Jev-inspired | B — probable | 2026-09-24 |
| [jev-java](https://github.com/olti1947/jev-java) | olti1947 | community SDK<br><sub>社区 SDK</sub> | Java | Uses Jev | A — verified | 2026-09-24 |
| [jev-playground](https://github.com/shivanathd/jev-playground) | shivanathd | playground / demo<br><sub>演示 / playground</sub> | TypeScript | Uses Jev | B — probable | 2026-09-24 |
| [jev-ultrafast](https://github.com/browser-use/jev-ultrafast)<br><sub>Jev Ultrafast</sub> | browser-use | browser agent<br><sub>浏览器智能体</sub> | Python / JavaScript | Uses Jev | A — verified | 2026-09-24 |
| [typesafe-computer-use](https://github.com/awlevin/typesafe-computer-use) | awlevin | desktop computer use<br><sub>桌面电脑操作</sub> | Python / Swift | Uses Jev | A — verified | 2026-09-24 |
| [jev-browser](https://github.com/jkudish/jev-browser)<br><sub>Jev Browser</sub> | jkudish | browser automation / MCP<br><sub>浏览器自动化 / MCP</sub> | TypeScript / JavaScript | Uses Jev | A — verified | 2026-09-24 |
| [jev-voice-browser](https://github.com/moritzkremb/jev-voice-browser)<br><sub>Jev Voice Browser</sub> | moritzkremb | voice browser agent<br><sub>语音浏览器智能体</sub> | JavaScript / Node.js | Uses Jev | A — verified | 2026-09-24 |
| [jev-trader](https://github.com/jarrodwatts/jev-trader)<br><sub>Jev Trader</sub> | jarrodwatts | DeFi trading bot<br><sub>DeFi 交易机器人</sub> | TypeScript / Bun | Uses Jev | A — verified | 2026-09-24 |
| [sponsor-skipper](https://github.com/iomiras/sponsor-skipper)<br><sub>YouTube Sponsor Segment Skipper</sub> | iomiras | browser extension / media<br><sub>浏览器扩展 / 媒体处理</sub> | JavaScript | Uses Jev | A — verified | 2026-09-24 |
| [jev-skip](https://github.com/valentynkit/jev-skip)<br><sub>Jev Skip</sub> | valentynkit | browser extension / media<br><sub>浏览器扩展 / 媒体处理</sub> | TypeScript | Uses Jev | A — verified | 2026-09-24 |
| [computer-use-jev](https://github.com/paulsmith/computer-use-jev) | paulsmith | desktop computer use<br><sub>桌面电脑操作</sub> | Go / Swift | Uses Jev | A — verified | 2026-09-24 |
| [Jevbridge](https://github.com/tacticocc/Jevbridge) | tacticocc | MCP / ACP adapter<br><sub>MCP / ACP 适配器</sub> | TypeScript / Node.js | Uses Jev | A — verified | 2026-09-24 |
| [Visual-Jev](https://github.com/guanxuyu-sv/Visual-Jev)<br><sub>Visual Jev</sub> | guanxuyu-sv | vision decision model<br><sub>视觉决策模型</sub> | Python | Jev-inspired | A — verified | 2026-09-24 |

### Public materials (16)

| Published | Material | Platform / type | Creator | Relationship | Evidence | Verified |
| --- | --- | --- | --- | --- | --- | --- |
| 2026-09-15 | [Introducing System One Models & Jev](https://typesafe.ai/blog/introducing-system-one-models-and-jev)<br><sub>发布 System One 模型与 Jev</sub> | TypeSafe AI Blog<br><sub>blog</sub> | Diogo Almeida / TypeSafe AI | Uses Jev | A — verified | 2026-09-24 |
| 2026-09-21 | [Jev: System One models for Prod, not God — with Diogo Almeida](https://www.latent.space/p/jev)<br><sub>Jev：面向生产而非上帝的 System One 模型——Diogo Almeida 访谈</sub> | Latent Space<br><sub>podcast</sub> | Swyx · Diogo Almeida | Uses Jev | A — verified | 2026-09-24 |
| 2026-09-19 | [Jev by TypeSafe AI: What We Found Testing It on Real Work](https://baaderagency.com/blog/jev-typesafe-ai-first-three-days)<br><sub>TypeSafe AI 的 Jev：在真实工作中测试三天后的发现</sub> | Baader<br><sub>blog</sub> | Jesse Ayala | Uses Jev | A — verified | 2026-09-24 |
| 2026-09-19 | [Jev (TypeSafe System One): model, decision AI, and ecosystem tracking](https://www.traeai.com/topics/jev)<br><sub>Jev（TypeSafe System One）：模型、决策 AI 与生态追踪</sub> | TraeAI<br><sub>directory</sub> | TraeAI editorial team | Mentions only | B — probable | 2026-09-24 |
| 2026-09-15 | [TypeSafe AI launch announcement on X](https://x.com/CompleteSkeptic/status/2099925682726002904)<br><sub>TypeSafe AI 在 X 上的发布公告</sub> | X<br><sub>social_post</sub> | TypeSafe AI / @CompleteSkeptic | Uses Jev | B — probable | 2026-09-24 |
| 2026-09-16 | [Vercel CEO report on a Jev safety-review workload](https://x.com/rauchg/status/2100307962262872105)<br><sub>Vercel CEO 关于 Jev 安全审查负载的公开报告</sub> | X<br><sub>social_post</sub> | Guillermo Rauch / @rauchg | Uses Jev | B — probable | 2026-09-24 |
| 2026-09-17 | [724 competitor advertisements analysed with Jev](https://madewithjev.com/builds/competitor-ad-teardown)<br><sub>使用 Jev 分析 724 条竞品广告</sub> | X · Made with Jev<br><sub>social_post</sub> | Matthew Berman / @TheMattBerman | Uses Jev | B — probable | 2026-09-24 |
| 2026-09-17 | [Post scoring with SuperX](https://madewithjev.com/builds/superx-post-scoring)<br><sub>使用 SuperX 对社交帖子评分</sub> | X · Made with Jev<br><sub>social_post</sub> | Rob Hallam / @robj3d3 | Uses Jev | B — probable | 2026-09-24 |
| — | [TypeSafe AI on X](https://x.com/typesafeai)<br><sub>TypeSafe AI 的 X 官方频道</sub> | X<br><sub>social_channel</sub> | TypeSafe AI | Mentions only | A — verified | 2026-09-24 |
| 2026-09-16 | [45-second Jev explainer](https://x.com/MatijaSosic/status/2100190746389135772)<br><sub>45 秒理解 Jev 原理</sub> | X<br><sub>video</sub> | Matija Šošić / @MatijaSosic | Mentions only | B — probable | 2026-09-24 |
| 2026-09-17 | [Full Jev tutorial: API setup and three demos](https://madewithjev.com/resources/full-jev-tutorial)<br><sub>Jev 完整教程：API 配置与三个演示</sub> | Made with Jev / X<br><sub>video</sub> | Moritz Kremb / @moritzkremb | Uses Jev | B — probable | 2026-09-24 |
| 2026-09-18 | [Testing out Jev: real-world developer experience](https://parallel.ai/blog/testing-jev)<br><sub>测试 Jev：真实开发场景中的体验</sub> | Parallel<br><sub>blog</sub> | Vlad Shulman / Parallel | Uses Jev | A — verified | 2026-09-24 |
| 2026-09-18 | [Jev is HERE. How to use it](https://www.youtube.com/watch?v=4mTLpuQpB80)<br><sub>Jev 来了：如何使用</sub> | YouTube<br><sub>video</sub> | Greg Isenberg / Startup Ideas Pod | Mentions only | B — probable | 2026-09-24 |
| — | [Awesome TypeSafe Jev: community project and media directory](https://github.com/thevibeworks/awesome-typesafe-jev)<br><sub>Awesome TypeSafe Jev：社区项目与媒体目录</sub> | GitHub<br><sub>directory</sub> | thevibeworks | Mentions only | A — verified | 2026-09-24 |
| — | [Awesome Jev: community directory of projects built on Jev](https://github.com/hellogumbo/awesome-jev)<br><sub>Awesome Jev：Jev 项目社区目录</sub> | GitHub<br><sub>directory</sub> | hellogumbo | Mentions only | A — verified | 2026-09-24 |
| — | [Awesome Jev: source-backed project directory with review workflow](https://github.com/fatwang2/awesome-jev)<br><sub>Awesome Jev：带来源审查流程的项目目录</sub> | GitHub<br><sub>directory</sub> | fatwang2 | Mentions only | A — verified | 2026-09-24 |

The tables intentionally preserve the distinction between **uses Jev**, **Jev-inspired**, **open replica**, and **mentions only**. A confidence label describes the evidence state, not the quality or importance of a record.

### Review queue (2)

These leads are deliberately excluded from the main catalogue until a stable primary page, author, and date can be confirmed.

| Candidate | Platform | Status / evidence | Last checked | Review note |
| --- | --- | --- | --- | --- |
| [Chinese-language Jev coverage on TRAE AI](https://www.traeai.com/articles/dfba38f2-770a-4637-9e10-4cc3ac89af85)<br><sub>TRAE AI 上关于 Jev 的中文报道/转述</sub> | traeai | pending_review / C — candidate | 2026-09-24 | 检索中发现的中文页面，可能是对 Jev 或相关访谈的转述；当前抓取环境无法稳定读取正文，暂不进入已核验互联网材料目录。 |
| Potential Xiaohongshu posts mentioning TypeSafe AI Jev<br><sub>可能提及 TypeSafe AI Jev 的小红书帖子</sub> | Xiaohongshu | pending_review / C — candidate | 2026-09-24 | Search results did not expose a stable public post URL or an attributable author during this review window. The item must not be promoted until the original post is available. |
<!-- CATALOGUE_TABLES_END -->

## Evidence policy

Every main-catalogue record has a stable identifier, a canonical URL, one or more source IDs, a Jev relationship, a confidence level, and a last verification date.

The confidence level describes the state of the evidence, not the quality of Jev or the importance of a project:

- **A / verified** — a clear primary source, or independent sources that corroborate the record;
- **B / probable** — a credible source is available, but an additional cross-check is still needed;
- **C / candidate** — a discovery lead that has not yet met the primary-source requirement.

Vendor statements, author-reported measurements, and social-media claims remain attributed to their authors. They are not rewritten as independent benchmarks. A failed fetch is recorded as a limitation; it is never converted into a claim that no material exists.

## Repository layout

```text
config/ontology.json          Canonical name, aliases, exclusions, and inclusion rules
data/papers.json              Scholarly papers and preprints
data/projects.json            Projects, SDKs, applications, and implementations
data/online-materials.json    Interviews, blogs, podcasts, videos, and social evidence
data/sources.json             Source metadata, tier, URL, and retrieval date
data/updates.json             Short update entries shown on the home page
data/pending_review.json      Candidates retained for manual verification
data/rejected.json            Excluded same-name or out-of-scope records
state/last_run.json           Previous successful review window and source status
updates/YYYY-MM-DD.md         Human-readable change log for each review date
schema/*.schema.json          Lightweight JSON Schema descriptions
scripts/validate.mjs          Deterministic local and CI validation
scripts/render-readme.mjs     Rebuild the Markdown catalogue tables from JSON
index.html / app.js / styles.css  Static bilingual GitHub Pages surface
```

## Language and presentation

The public interface defaults to English for an international audience and provides a Chinese interface through the `EN` / `中文` control. The default theme is light; a dark theme is available as an optional user preference. Language and theme choices are stored locally in the browser and do not alter the repository data.

## Repository README and deployed site

The repository has two coordinated surfaces:

- `README.md` is the versioned, reference-friendly catalogue description that GitHub renders on the repository home page. It documents scope, source notes, data fields, update protocol, and release instructions.
- `index.html`, `app.js`, `styles.css`, and the JSON snapshots form the static website. The Pages workflow publishes the repository root after validation, so the same commit that a reader audits in Markdown is the commit served by the website.

For a root GitHub Pages address, name the repository **`<account>.github.io`** exactly; the site will then be available at `https://<account>.github.io/`. If you keep the repository name `jev-research-index`, the site will instead use the project URL `https://<account>.github.io/jev-research-index/`. After pushing the `main` branch, select **GitHub Actions** under **Settings → Pages → Build and deployment**. No database, build service, or runtime secrets are required for the static site.

## Incremental update protocol

To request a new review, use the phrase **“Update Jev”** and optionally specify a narrower scope, for example `Update Jev: papers only` or `Update Jev: public materials after 2026-09-24`.

Each review should:

1. Read `state/last_run.json`, the most recent dated log, and the current JSON snapshots.
2. Search the controlled Jev/TypeSafe/System One vocabulary across scholarly indexes (including arXiv), official documentation, repositories, interviews, public channels, videos, and social platforms.
3. Normalize titles and URLs, deduplicate by stable identifier, and preserve the retrieval date.
4. Add only records with a usable primary source to the relevant main collection. Keep unresolved leads in `pending_review.json` and unrelated same-name hits in `rejected.json`.
5. Run `npm run validate`, update `state/last_run.json`, and write a dated change log that lists additions, changes, exclusions, failed sources, and unresolved candidates.

The default workflow edits the local repository only. Pushing to GitHub or changing publication settings is a separate release action.

## Local verification

No frontend dependency installation is required:

```bash
npm run validate
python3 -m http.server 4173
```

Open <http://127.0.0.1:4173/> in a browser. The page must be served over HTTP because the browser blocks `fetch()` requests for local JSON files opened with a `file://` URL.

The validation command checks JSON syntax, required fields, supported relationships and confidence levels, source references, date formats, duplicate IDs, the separate online-material schema, and synchronization between the JSON snapshots and the generated Markdown tables. Run `npm run update:readme` after a data change to rebuild those tables.

## GitHub Pages deployment

1. Push the repository to GitHub.
2. In **Settings → Pages**, select **GitHub Actions** as the source.
3. `.github/workflows/validate.yml` validates every push and pull request.
4. `.github/workflows/deploy-pages.yml` publishes the repository root after a successful `main`-branch push.

The first snapshot is dated **2026-09-24** and is explicitly not a claim of complete internet coverage. Dynamic stars, forks, issue counts, prices, and model versions are not stored as timeless facts; if they are added later, they must carry an `as_of` date and a source URL.

## 中文说明

本仓库面向全球学者，默认显示英文，并提供中文界面切换。目录将论文、项目和互联网材料分层保存；访谈、播客、博客、X/Twitter、小红书线索等不会与论文或软件项目混为一类。每条主目录记录都保存 canonical URL、关系、证据等级、来源 ID 和最后核验日期。

小红书等平台如果只能得到搜索摘要、无法确认原帖 URL、作者或发布时间，则只进入 `data/pending_review.json`，不会直接写入已核验目录。另一个对话中的检索结果不会自动同步到本仓库；需要提供稳定链接或导出文件后，才能按相同数据模型合并。

如果希望使用根地址 `https://<account>.github.io/`，GitHub 仓库必须严格命名为 `<account>.github.io`；如果保留 `jev-research-index`，网站地址则是 `https://<account>.github.io/jev-research-index/`。GitHub 仓库首页显示 `README.md` 的目录说明；同一仓库中的 GitHub Actions 会在校验通过后发布 `index.html` 静态站点。论文、项目、X 帖子和视频演示均保留原始链接与来源状态，无法直接读取的内容不会被写成已核验事实。

Any subsequent automation must preserve `source_url`, `retrieved_at`, `evidence_note`, and failure records.
