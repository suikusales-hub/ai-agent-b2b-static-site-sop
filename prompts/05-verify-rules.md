# 第 5 步（验证）· 10 项规则自查

规则最容易「写了但没用」。让它自己查，10 项全部通过才算数。

```
现在验证规则有没有真的生效。请随机打开 3 个页面（还没有页面就先建 3 个测试页），
逐项检查并列表告诉我：

title 是否唯一、是否 ≤60 字符
meta description 是否唯一、是否 120-158 字符
canonical 是否是绝对 URL
每张图片是否都有 alt
页面上是否有可见面包屑
源码里是否有 BreadcrumbList 和 Organization 的 JSON-LD
顶部导航和页脚是不是同一个组件引入的（不是复制粘贴的）
访问一个不存在的网址，出现的是不是我自己的 404 页面（不是服务器默认页），
页面里有没有返回首页的链接
robots.txt 能不能打开，里面有没有指向 sitemap 的完整地址
sitemap 里是不是包含了全部页面，是不是排除了 /thank-you/ 这类不该收录的页

有不符合的直接修，修完再报一遍。
```

来源：[seogeo.cc 完整 SOP](https://seogeo.cc/ai-agent-b2b-static-site-cloudflare-sop)
