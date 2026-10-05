import { MetadataRoute } from 'next'
import { projects } from '@/app/_data/projects'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://diaaelsadek.me'
  const currentDate = new Date().toISOString().split('T')[0]

  const caseStudyUrls: MetadataRoute.Sitemap = projects
    .filter((p) => p.caseStudy !== undefined)
    .map((p) => ({
      url: `${baseUrl}/projects/${p.slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    }))

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    ...caseStudyUrls,
  ]
}
