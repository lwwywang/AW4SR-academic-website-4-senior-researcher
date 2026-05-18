import { Skeleton } from '@/components/ui/Skeleton'

export default function PublicationsLoading() {
  return (
    <main className="max-w-prose px-10 pt-6 pb-section">
      <Skeleton className="h-10 w-56 mb-4" />
      <Skeleton className="h-4 w-40" />
    </main>
  )
}
