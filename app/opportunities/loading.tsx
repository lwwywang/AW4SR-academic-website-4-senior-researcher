import { Skeleton } from '@/components/ui/Skeleton'

export default function OpportunitiesLoading() {
  return (
    <main className="max-w-prose px-10 py-section">
      <Skeleton className="h-10 w-56 mb-10" />
      <div className="space-y-6">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="space-y-2">
            <Skeleton className="h-5 w-48" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/6" />
          </div>
        ))}
      </div>
    </main>
  )
}
