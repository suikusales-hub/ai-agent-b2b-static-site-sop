# 第 5 步（指令二）· 建公用组件

规则写在纸上没用，得变成代码。先不做任何业务页面。

```
现在按 AGENTS.md 的规则，建好全站的公用组件。先不做任何业务页面。

BaseLayout：HTML 骨架，以后所有页面都用它
Nav：顶部导航，全站唯一一份
Footer：页脚，全站唯一一份
SEOHead：接收 title / description / ogImage，
自动输出 title、meta description、canonical、Open Graph、Twitter Card
Breadcrumb：可见面包屑 + BreadcrumbList 结构化数据
seo 工具函数：生成绝对 canonical 和各类 JSON-LD

要求：

导航和页脚的链接从一份站点配置里读，不要硬编码
以后所有页面必须套 BaseLayout，不允许绕过
移动端导航用纯 CSS，不引入 JS

做完给我一张表：组件文件名 / 用途 / 需要传哪些参数。
```

来源：[seogeo.cc 完整 SOP](https://seogeo.cc/ai-agent-b2b-static-site-cloudflare-sop)
