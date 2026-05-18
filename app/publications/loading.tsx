import { Skeleton } from '@/components/ui/Skeleton'

export default function PublicationsLoading() {
  return (
    <main className="max-w-prose px-10 pt-6 pb-section">
      <Skeleton className="h-10 w-56 mb-10" />

      {[...Array(2)].map((_, group) => (
        <div key={group} className="mb-10">
          {/* Year heading */}
          <Skeleton className="h-7 w-20 mb-6" />

          {/* Publication entries */}
          {[...Array(3)].map((_, i) => (
            <div key={i} className="pb-6 mb-6 border-b border-gray-100 dark:border-gray-800 space-y-2">
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-4 w-4/5" />
              <Skeleton className="h-4 w-3/4" />
              <div className="flex gap-2 pt-1">
                <Skeleton className="h-6 w-16" />
                <Skeleton className="h-6 w-16" />
              </div>
            </div>
          ))}
        </div>
      ))}
    </main>
  )
}
