# 第 13 步 · 爬站结果分诊

把 Screaming Frog 导出的结果（或截图）一起发给它。

```
我用 Screaming Frog 爬完了上线后的网站。请根据我贴上的爬取结果（或截图），按优先级列出要改的问题：

1. 404 和错误的 301/302（给出 URL 和可能原因）
2. 缺少 title / meta description 的页面
3. title 或 meta description 重复的页面（标出哪些页撞车）

每条问题告诉我：改哪个文件、改成什么样。不要编造我没贴出来的 URL。
```

- ✅ 成功：没有红一片的 404；Page Titles / Meta Description 里 Missing 和 Duplicate 都是 0。
- ❌ 爬到的全是 404：多半填成了本地 `localhost` 或旧预览地址。填 Cloudflare 上能公开打开的网址。

来源：[seogeo.cc 完整 SOP](https://seogeo.cc/ai-agent-b2b-static-site-cloudflare-sop)
