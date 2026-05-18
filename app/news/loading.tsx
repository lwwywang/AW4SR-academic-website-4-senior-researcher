import { Skeleton } from '@/components/ui/Skeleton'

export default function NewsLoading() {
  return (
    <main className="max-w-prose px-10 py-section">
      <Skeleton className="h-10 w-32 mb-10" />
      <div className="space-y-4">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="flex items-start gap-3">
            <Skeleton className="h-4 w-20 shrink-0 mt-0.5" />
            <Skeleton className="h-4 w-full" />
          </div>
        ))}
      </div>
    </main>
  )
}
