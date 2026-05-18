import { Skeleton, SkeletonImage } from '@/components/ui/Skeleton'

export default function PortfolioLoading() {
  return (
    <main>
      {/* Dark header — 手机减小内边距 */}
      <div className="bg-gray-300 dark:bg-gray-800 px-10 md:px-20 py-10 md:py-16">
        <Skeleton className="h-8 md:h-10 w-36 md:w-48 mb-3 bg-gray-400 dark:bg-gray-600" />
        <Skeleton className="h-4 w-48 md:w-80 bg-gray-400 dark:bg-gray-600" />
      </div>

      {/* Direction banner — 手机矮一点 */}
      <SkeletonImage className="h-40 md:h-64 w-full rounded-none" />

      {/* Project cards */}
      <div className="max-w-content px-10 py-10 space-y-8 md:space-y-10">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-5 md:gap-8 pb-8 border-b border-gray-100 dark:border-gray-800"
          >
            {/* Project media — 手机全宽较矮，桌面固定尺寸 */}
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
