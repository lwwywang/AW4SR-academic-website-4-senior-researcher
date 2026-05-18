import { Skeleton, SkeletonImage } from '@/components/ui/Skeleton'

export default function PortfolioLoading() {
  return (
    <main>
      {/* Hero banner */}
      <SkeletonImage className="h-32 md:h-48 w-full rounded-none" />

      <div className="max-w-content px-10 pt-8 pb-section">
        {/* Intro paragraph */}
        <div className="space-y-2 mb-10 max-w-prose">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/6" />
        </div>

        {/* Project cards — full-width rows */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-5 md:gap-8 pb-8 mb-8 border-b border-gray-100 dark:border-gray-800"
          >
            <SkeletonImage className="h-48 md:h-[186px] w-full" />
            <div className="space-y-3">
              <Skeleton className="h-5 md:h-6 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-4 w-1/3" />
              <div className="flex gap-2 pt-1">
                <Skeleton className="h-6 w-16" />
                <Skeleton className="h-6 w-16" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
