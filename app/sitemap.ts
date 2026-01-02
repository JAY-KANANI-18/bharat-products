import { MetadataRoute } from 'next'
import { products as productList, allCategories, categorySlug } from '../src/data/products'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bharatprod.com'
  const lastModified = new Date()

  const staticRoutes = [
    '/',
    '/about',
    '/products',
    '/contact',
    // '/industries',
    // '/safety',
    // '/team',
    '/infrastructure',
    '/quality',
    '/brochure',
    '/policy',
    '/policy/labour-employment',
    '/policy/harassment',
    '/policy/visitor-policy',
  ]

  const routes: MetadataRoute.Sitemap = [
    ...staticRoutes.map((path) => ({
      url: `${siteUrl}${path}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...productList.map((p) => ({
      url: `${siteUrl}/products/${p.id}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
    ...allCategories().map((c) => ({
      url: `${siteUrl}/products/category/${categorySlug(c)}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })),
  ]

  return routes
}
