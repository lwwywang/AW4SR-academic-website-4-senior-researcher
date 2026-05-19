import { Fragment } from 'react'
import type { NewsItem } from '@/content/news'

export default function NewsGrid({ items }: { items: NewsItem[] }) {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-x-6 md:gap-x-10">
      {items.map((item, i) => (
        <Fragment key={i}>
          <span
            className={`text-body text-[#6B6B6B] dark:text-gray-400 whitespace-nowrap py-4 ${
              i > 0 ? 'border-t border-gray-100 dark:border-gray-800' : ''
            }`}
          >
            {item.date}
          </span>
          <p
            className={`text-body text-[#6B6B6B] dark:text-gray-400 min-w-0 py-4 ${
              i > 0 ? 'border-t border-gray-100 dark:border-gray-800' : ''
            }`}
          >
            {item.text}
          </p>
        </Fragment>
      ))}
    </div>
  )
}
