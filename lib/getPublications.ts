import publicationsData from '@/content/data/publications.json'
import type { Publication } from '@/types'

export function getPublicationsByYear(): [string, Publication[]][] {
  const pubs = (publicationsData.publications as Publication[])
    .sort((a, b) => b.year - a.year)

  const grouped = pubs.reduce((acc, pub) => {
    const y = String(pub.year)
    acc[y] = [...(acc[y] || []), pub]
    return acc
  }, {} as Record<string, Publication[]>)

  return Object.entries(grouped).sort(([a], [b]) => Number(b) - Number(a))
}
