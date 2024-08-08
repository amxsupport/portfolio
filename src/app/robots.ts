import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api',
    },
    sitemap: 'https://portfolio-abdelazizamxa.vercel.app/sitemap.xml',
    host: 'https://portfolio-abdelazizamxa.vercel.app',
  };
}
