import { NEWS_ITEMS } from '@/content/news'
import NewsGrid from '@/components/news/NewsGrid'
import InlineLink from '@/components/ui/InlineLink'

const PREVIEW_LIMIT = 8

export default function NewsPage() {
  const items = NEWS_ITEMS.slice(0, PREVIEW_LIMIT)
  const hasMore = NEWS_ITEMS.length > PREVIEW_LIMIT

  return (
    <main className="max-w-content px-10 pt-6 pb-section">
      <h1 className="text-h1 font-bold font-serif mb-10">News</h1>
      <NewsGrid items={items} />
      {hasMore && (
        <div className="mt-6">
          <InlineLink href="/news/all">More →</InlineLink>
        </div>
      )}
    </main>
  )
}
