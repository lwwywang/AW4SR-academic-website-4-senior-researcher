import { Skeleton } from '@/components/ui/Skeleton'

export default function OpportunitiesLoading() {
  return (
    <main className="w-full px-10 pt-6 pb-section">
      <Skeleton className="h-10 w-56 mb-8" />
      <div className="space-y-2 mb-6">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/6" />
      </div>
      <div className="space-y-3">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="h-4 w-3/4" />
        ))}
      </div>
    </main>
  )
}
