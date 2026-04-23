import type { MetadataRoute } from 'next';

const routes = [
  '',
  '/nosotros',
  '/manual',
  '/especificaciones',
  '/app-movil',
  '/aplicacion',
  '/huevos',
  '/buenas-practicas',
  '/ecosistema',
  '/solucion-problemas',
  '/impacto',
  '/cto',
  '/contacto',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://libreincu.altermundi.net';
  const lastModified = new Date();
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1.0 : 0.7,
  }));
}
