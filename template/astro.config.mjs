import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// ⚠️ 必须改成你的真实域名，否则 sitemap 里所有 URL 都是错的。
// 见 AGENTS.md「抓取基础设施规则」。
export default defineConfig({
  site: 'https://mybrand.example.com',
  integrations: [
    sitemap({
      // noindex 页面不进 sitemap，例如 /thank-you/
      filter: (page) => !page.includes('/thank-you/'),
    }),
  ],
});
