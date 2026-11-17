# Astro 起步模板

按 [seogeo.cc SOP](https://seogeo.cc/ai-agent-b2b-static-site-cloudflare-sop) 第五步的 AGENTS.md 规则搭好的「合规空壳」。业务页面仍按原文第六步、第九步让智能体生成。

## 用法

1. 把这个 `template/` 文件夹整个复制到桌面，改名成英文文件夹（如 `mysite`）。
2. 让智能体进入该文件夹工作。
3. 先把 `src/config/site.config.ts` 里的占位信息换成你的真实信息（`site` 必须是真实域名，否则 sitemap 里所有 URL 都是错的）。
4. 按 SOP 第六步、第九步让智能体写页面和模板。

## 已包含

- `AGENTS.md` —— 全站规则（URL / SEO / GEO / 公用模块 / 抓取基础设施）。智能体每次开工前应先读它。
- `package.json` —— Astro + `@astrojs/sitemap` 依赖与脚本。
- `astro.config.mjs` —— 配置了 `site`（改成你的域名）和 sitemap 集成。
- `src/layouts/BaseLayout.astro` —— 所有页面共用的 HTML 骨架，引入 Nav / Footer / SEOHead。
- `src/components/Nav.astro`、`Footer.astro` —— 全站唯一一份，链接从站点配置读取。
- `src/components/SEOHead.astro` —— 输出 title / description / canonical / OG / Twitter Card。
- `src/components/Breadcrumb.astro` —— 可见面包屑 + BreadcrumbList JSON-LD。
- `src/lib/seo.ts` —— 绝对 canonical 与 Organization / WebSite JSON-LD 生成函数。
- `src/config/site.config.ts` —— 站点信息 + 导航/页脚链接的唯一来源。
- `public/robots.txt` —— 允许抓取并指向 sitemap 完整地址。
- `src/pages/404.astro` —— 自建 404 页面（带返回首页链接）。
- `src/pages/index.astro` —— 示例首页，演示如何套 BaseLayout。

## 规则要点（智能体必读）

- URL 最多三级，小写字母/数字/连字符，无日期、无 `.html`。
- 每页 title 唯一 ≤60 字符，description 唯一 120–158 字符，canonical 自动生成绝对 URL。
- 正文写在 HTML 里，不靠 JS 渲染；语义标签 header/nav/main/article/aside/footer。
- 导航和页脚全站唯一一份，从配置读取，不硬编码。
- sitemap 由 `@astrojs/sitemap` 构建时自动生成，排除 noindex 页面。

完整规则见本目录 [AGENTS.md](AGENTS.md) 与 [SOP 第五步](../docs/SOP.md)。

---

来源：[seogeo.cc — 不懂代码也能建站](https://seogeo.cc/ai-agent-b2b-static-site-cloudflare-sop)
