import { Skeleton } from '@/components/ui/Skeleton'

export default function TeamLoading() {
  return (
    <main className="max-w-prose px-10 py-section">
      <Skeleton className="h-10 w-28 mb-8" />
      <div className="space-y-2 mb-12">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
      </div>

      {[...Array(3)].map((_, group) => (
        <div key={group} className="mb-10">
          <Skeleton className="h-7 w-48 mb-4" />
          <div className="space-y-3">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-4 w-3/4" />
            ))}
          </div>
        </div>
      ))}
    </main>
  )
}
