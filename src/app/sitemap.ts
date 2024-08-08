import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '/',
    '/#about',
    '/#sobre-mi',
    '/#tech-stack',
    '/#stack-tecnologias',
    '/#career',
    '/#carrera',
    '/#projects',
    '/#proyectos',
    '/#contact',
    '/#contacto',
  ].map((route) => ({
    url: `https://portfolio-abdelazizamxa.vercel.app${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes];
}
