# 第 5 步（指令一）· 生成 AGENTS.md 全站规则

跳过这步后面全是返工。也可直接用仓库里现成的 [`template/AGENTS.md`](../template/AGENTS.md)。

```
现在先不要写任何页面。请把我们这个项目的"隐形规则"整理成一个文件，
放在项目根目录，文件名 AGENTS.md。
这个文件的作用是：以后你每次开工前先读它，我就不用重复交代规则了。
请把这些规则写进去，用清单形式，一条一句，不要长篇解释：
【URL 规则】

只允许小写英文字母 a-z、阿拉伯数字 0-9、连字符 -
禁止大写、中文、空格、下划线、问号、等号、% 等任何特殊符号
最多三级，常规页面两级：汇总页 /模块/，详情页和分类页 /模块/名字/
不允许带日期，不允许 .html 后缀
发布后不允许修改，确需修改必须加 301 跳转

【SEO 规则】

每页 title 唯一，不超过 60 字符，包含主关键词
每页 meta description 唯一，120-158 字符
每页 canonical 自动生成绝对 URL，禁止手写
每张图片必须有描述性 alt，不许留空，不许堆关键词
每页必须有可见面包屑 + BreadcrumbList 结构化数据
结构化数据：Organization（全站一次）、WebSite、BreadcrumbList（每页）、

BlogPosting（文章）、Product（产品）、FAQPage（仅页面上真实可见的问答）
语义标签：header / nav / main / article / aside / footer，不用 div 堆布局
正文必须直接写在 HTML 里，不能靠 JS 渲染才看得见

【GEO 规则】

正文纯 HTML 可读，爬虫不执行 JS 也能拿到全部内容
品牌名、地址、认证、产能这类事实写成明确句子，不要只放在图片里
标题层级清楚，一段话说清一件事
不伪造 review 或 aggregateRating
不为 AI 发明特殊文件；llms.txt 可加，但不作为主要手段

【公用模块规则】

顶部导航、页脚全站只有一份，所有页面自动引入
任何页面都不允许自己复制一份导航或页脚
改导航只需要改一个文件

【抓取基础设施规则】

必须自己生成 404 页面（不是用服务器默认的），页面里要有返回首页和主要分类的链接
必须在 public/robots.txt 写明：允许抓取，并指向 sitemap 的完整地址
必须用 @astrojs/sitemap 在构建时自动生成 sitemap，不允许手工维护清单
以后每新增一个页面或一篇文章，重新构建后 URL 必须自动出现在 sitemap 里
sitemap 必须排除 noindex 的页面（比如 /thank-you/）
配置里的 site 必须是真实域名，否则 sitemap 里所有 URL 都是错的

写完告诉我：文件放在哪、一共写了多少条规则。
```

来源：[seogeo.cc 完整 SOP](https://seogeo.cc/ai-agent-b2b-static-site-cloudflare-sop)
