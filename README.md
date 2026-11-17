# 不懂代码也能建站：用 AI 智能体 2 小时做出外贸独立站（完整 SOP）

> 一份面向外贸从业者的实操手册：从零开始，用 AI 智能体（Agent）在 2 小时内搭出一个可被 Google 收录、可被 AI 搜索引用的 B2B 静态独立站，并部署到 Cloudflare Pages。全程 13 步，从第 3 步起不需要你敲任何命令。

**原文与最新版**：[SEO小平 · seogeo.cc — 用 AI 智能体做外贸独立站](https://seogeo.cc/ai-agent-b2b-static-site-cloudflare-sop)

**作者站点**：[seogeo.cc — 外贸 SEO / GEO 实战笔记](https://seogeo.cc)

---

## 为什么会有这个仓库

原文是一篇给「不懂代码的外贸人」看的建站 SOP。它把过去需要开发者做的事（装环境、写页面、配 SEO、做模板、上线）全部拆成「复制一段话发给 AI」的动作。

这个开源仓库把那篇文章结构化整理成三份可直接使用的资产：

1. **[完整 SOP 正文](docs/SOP.md)** —— 13 步全流程 + 2 个附录，可打印、可逐项打勾。
2. **[提示词库](prompts/README.md)** —— 每一步「复制这段发给 AI」的指令，单独成文件，随取随用。
3. **[Astro 起步模板](template/README.md)** —— 按文章里的 AGENTS.md 规则搭好的组件骨架（BaseLayout / Nav / Footer / SEOHead / Breadcrumb / seo 工具函数），拿来就能改。

如果你只想读一遍完整流程，直接看 [docs/SOP.md](docs/SOP.md)；如果你想边做边复制指令，用 [prompts/](prompts/)；如果你想让智能体直接开工，用 [template/](template/) 作为工作目录起点。

> 本仓库内容整理自 [seogeo.cc 的原始文章](https://seogeo.cc/ai-agent-b2b-static-site-cloudflare-sop)，转载与二次整理请保留原文链接。

---

## 全程 13 步地图

| 步骤 | 干什么 | 耗时 | 做完你会得到 |
|------|--------|------|--------------|
| 1 | 装一个智能体 | 10 分钟 | 电脑上有了干活的 AI |
| 2 | 建空文件夹，让它进去 | 3 分钟 | 给它划好了工地 |
| 3 | 让它把 Node.js 装好 | 3 分钟 | 环境通了，不用你动手 |
| 4 | 填 6 行基础信息 | 3 分钟 | 它知道你在做什么生意 |
| 5 | **先立规矩（隐形规则）** | 10 分钟 | 全站规则一次定死 |
| 6 | 补语料，一次写 5 个页面 | 25 分钟 | 网站门面写完了 |
| 7 | 浏览器打开看 | 1 分钟 | 第一次看见自己的网站 |
| 8 | 改到你满意 | 30 分钟 | 定下视觉风格 |
| 9 | 做模板（博客/方案/产品） | 30 分钟 | **以后能批量出页面了** |
| 10 | 打包 | 2 分钟 | 一个 `dist` 文件夹 |
| 11 | 上线 | 10 分钟 | 一个能分享的网址 |
| 12 | 绑自己的域名 | 10 分钟 | SEO/GEO 必须有正式域名 |
| 13 | 尖叫青蛙爬站检查 | 15 分钟 | 301/404 和 SEO 字段扫清 |

**从第 3 步开始，你就不用敲任何命令了**——全部是跟智能体说话。

---

## 三步走用法

### 路径 A：读流程

打开 [完整 SOP](docs/SOP.md)，从第一步看到第十三步。

### 路径 B：复制提示词

进入 [prompts/](prompts/README.md)，每一步对应一个 `.md` 文件，里面只有「复制这段发给 AI」的纯指令。按顺序复制即可。

### 路径 C：直接开工

把 [template/](template/) 文件夹复制到桌面（用英文名，比如 `mysite`），作为智能体的工作目录。里面已经放好：

- `AGENTS.md` —— 全站规则（URL / SEO / GEO / 公用模块 / 抓取基础设施）
- `src/layouts/BaseLayout.astro` —— 所有页面共用的 HTML 骨架
- `src/components/` —— Nav / Footer / SEOHead / Breadcrumb
- `src/lib/seo.ts` —— canonical 与 JSON-LD 生成函数
- `src/config/site.config.ts` —— 站点信息（导航/页脚链接的唯一来源）
- `public/robots.txt` —— 允许抓取并指向 sitemap

> 模板只是一个「符合规则的空壳」，业务页面仍按 SOP 第六步、第九步让智能体生成。

---

## 核心规则速览（AGENTS.md 摘要）

规则全文见 [`template/AGENTS.md`](template/AGENTS.md)。五类规则：

- **URL**：只允许小写字母、数字、连字符；最多三级；不带日期、不带 `.html`；发布后不修改，必须改就做 301。
- **SEO**：每页 title 唯一且 ≤60 字符；description 唯一 120–158 字符；canonical 自动生成绝对 URL；图片必须有 alt；可见面包屑 + BreadcrumbList；结构化数据齐全；正文写在 HTML 里而非 JS 渲染。
- **GEO**：爬虫不执行 JS 也能拿到全部内容；品牌/地址/认证/产能写成明确句子；不伪造 review；llms.txt 可加但不作为主要手段。
- **公用模块**：导航、页脚全站唯一一份，所有页面自动引入；改导航只改一个文件。
- **抓取基础设施**：自建 404 页面；robots.txt 指向 sitemap 完整地址；用 `@astrojs/sitemap` 自动生成；排除 noindex 页面；`site` 必须是真实域名。

---

## 常见问题

**Q：一定要用 Astro 吗？**
A：文章以 Astro 为例（因为有 Content Collections 和官方 sitemap 集成，规则容易落地）。核心是那套规则，换成别的静态站生成器也能照做，但要自己保证规则和 sitemap 自动生成。

**Q：拖拽上传建站有什么坑？**
A：Cloudflare 官方明确说明，拖拽（Direct Upload）建的站以后**不能改成 Git 自动部署**，不可逆。认真做的话建议一开始就用 Git 自动部署。

**Q：为什么博客详情页侧边栏要放 10 篇文章？**
A：每篇文章自动链出 10 篇，100 篇的站光靠侧边栏就有约 1000 条内链——这是纯静态站防止「孤岛页面」最有效的一招。

---

## 延伸阅读

- [原文：不懂代码也能建站 · seogeo.cc](https://seogeo.cc/ai-agent-b2b-static-site-cloudflare-sop)
- [seogeo.cc 首页：外贸 SEO / GEO 实战](https://seogeo.cc)
- [Astro 官方文档](https://docs.astro.build)
- [Cloudflare Pages](https://pages.cloudflare.com)
- [Screaming Frog SEO Spider](https://www.screamingfrog.co.uk/seo-spider/)

---

## License

MIT —— 随便用，改了也行。转载请保留 [原文链接](https://seogeo.cc/ai-agent-b2b-static-site-cloudflare-sop) 与作者署名。
