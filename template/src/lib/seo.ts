// SEO / GEO 工具函数：绝对 canonical 与各类 JSON-LD。
// 规则见 AGENTS.md「SEO 规则」「GEO 规则」。
import { site } from '../config/site.config';

// 从 astro.config.mjs 的 site 派生站点 origin。
// 实际项目中可用 import.meta.env 或把 SITE_URL 提到配置里共享。
const SITE_URL = 'https://mybrand.example.com'; // ⚠️ 与 astro.config.mjs 的 site 保持一致

/** 生成绝对 canonical URL。禁止手写 canonical。 */
export function canonical(pathname: string): string {
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return new URL(path, SITE_URL).toString();
}

/** Organization 结构化数据 —— 全站只用一次（放在首页）。 */
export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.brand,
    legalName: site.legalName,
    foundingDate: site.founded,
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.city,
      addressCountry: site.country,
    },
    email: site.email,
    url: SITE_URL,
  };
}

/** WebSite 结构化数据。 */
export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.brand,
    url: SITE_URL,
  };
}

/** BreadcrumbList 结构化数据 —— 每页都要有，配合可见面包屑。 */
export function breadcrumbJsonLd(items: Array<{ name: string; href: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: canonical(item.href),
    })),
  };
}

/** BlogPosting 结构化数据（文章页用）。 */
export function blogPostingJsonLd(data: {
  headline: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  image?: string;
  pathname: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: data.headline,
    datePublished: data.datePublished,
    dateModified: data.dateModified ?? data.datePublished,
    author: { '@type': 'Person', name: data.authorName },
    image: data.image ? canonical(data.image) : undefined,
    mainEntityOfPage: canonical(data.pathname),
    url: canonical(data.pathname),
  };
}
