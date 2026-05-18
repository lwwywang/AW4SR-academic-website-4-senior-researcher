import newsData from '@/content/data/news.json'
import type { NewsItem } from '@/types'

export function getNews(): NewsItem[] {
  return newsData.news as NewsItem[]
}
