import { NEWS_ITEMS } from '@/content/news'
import NewsGrid from '@/components/news/NewsGrid'
import InlineLink from '@/components/ui/InlineLink'

export default function AllNewsPage() {
  return (
    <main className="max-w-content px-10 pt-6 pb-section">
      <div className="mb-8">
        <InlineLink href="/news">← News</InlineLink>
      </div>
      <h1 className="text-h1 font-bold font-serif mb-10">All News</h1>
      <NewsGrid items={NEWS_ITEMS} />
    </main>
  )
}
