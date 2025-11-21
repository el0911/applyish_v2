/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.applyish.com',
  // (optional) generate robots.txt should allow linkeind
  generateRobotsTxt: true, 
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/app' }, // block /app route
    ],
  },
  // Optional: additional sitemap options here
}
