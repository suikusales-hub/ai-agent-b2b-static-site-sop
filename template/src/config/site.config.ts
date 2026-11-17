// 站点信息 + 导航/页脚链接的唯一来源。
// 规则：导航和页脚全站只有一份，从这份配置读取，不要在组件里硬编码。
// 见 AGENTS.md「公用模块规则」。

export const site = {
  brand: 'MyBrand',
  legalName: 'MyBrand Co., Ltd.',
  founded: '2020',
  city: 'Shenzhen',
  country: 'China',
  email: 'sales@example.com',
  whatsapp: '+86 000 0000 0000',
  // 响应时效承诺，例如「12 小时内回复」
  responseTime: 'Within 12 hours',
};

// 主导航。隐私政策/服务条款只放页脚，不放这里。
export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products/' },
  { label: 'About', href: '/about/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contact', href: '/contact/' },
];

// 页脚链接（含只放页脚的合规页）。
export const footerLinks = [
  { label: 'Privacy Policy', href: '/privacy/' },
  { label: 'Terms of Sale', href: '/terms/' },
];
