import { Skeleton } from '@/components/ui/Skeleton'

export default function AllNewsLoading() {
  return (
    <main className="max-w-content px-10 pt-6 pb-section">
      <Skeleton className="h-4 w-16 mb-8" />
      <Skeleton className="h-10 w-40 mb-10" />
      <div className="space-y-4">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="flex items-start gap-3">
            <Skeleton className="h-4 w-20 shrink-0 mt-0.5" />
            <Skeleton className="h-4 w-full" />
          </div>
        ))}
      </div>
    </main>
  )
}
