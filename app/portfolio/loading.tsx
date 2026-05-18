import { Skeleton, SkeletonImage } from '@/components/ui/Skeleton'

export default function PortfolioLoading() {
  return (
    <main>
      {/* Dark header */}
      <div className="bg-gray-300 dark:bg-gray-800 px-20 py-16">
        <Skeleton className="h-10 w-48 mb-3 bg-gray-400 dark:bg-gray-600" />
        <Skeleton className="h-4 w-80 bg-gray-400 dark:bg-gray-600" />
      </div>

      {/* Direction banner — full-width image */}
      <SkeletonImage className="h-64 w-full rounded-none" />

      {/* Project cards */}
      <div className="max-w-content px-10 py-10 space-y-10">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 pb-8 border-b border-gray-100 dark:border-gray-800"
          >
            {/* Project media — shimmer */}
            <SkeletonImage className="h-[186px] w-full" />
            <div className="space-y-3">
              <Skeleton className="h-6 w-3/4" />
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
