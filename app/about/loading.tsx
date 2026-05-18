import { Skeleton, SkeletonImage } from '@/components/ui/Skeleton'

export default function AboutLoading() {
  return (
    <main className="max-w-content px-10 pt-6 pb-section">
      {/* H1 */}
      <Skeleton className="h-8 md:h-10 w-32 md:w-40 mb-8 md:mb-10" />

      {/* Intro paragraph */}
      <div className="space-y-2 mb-8 md:mb-10">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/6" />
      </div>

      {/* Research direction 1 */}
      <Skeleton className="h-6 md:h-7 w-48 md:w-64 mb-3" />
      <div className="space-y-2 mb-5">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
      {/* Image row — 2 cols on mobile, 4 on desktop */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-10 md:mb-12">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="space-y-2">
            <SkeletonImage className="h-[120px] md:h-[180px] w-full" />
            <Skeleton className="h-3 w-2/3 mx-auto" />
          </div>
        ))}
      </div>

      {/* Research direction 2 */}
      <Skeleton className="h-6 md:h-7 w-44 md:w-56 mb-3" />
      <div className="space-y-2 mb-5">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
      {/* Image row — 2 cols on mobile, 3 on desktop */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-10 md:mb-12">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="space-y-2">
            <SkeletonImage className="h-[120px] md:h-[180px] w-full" />
            <Skeleton className="h-3 w-2/3 mx-auto" />
          </div>
        ))}
      </div>

      <hr className="border-gray-200 dark:border-gray-800 my-10 md:my-12" />

      {/* Our Approach */}
      <Skeleton className="h-6 md:h-7 w-40 md:w-48 mb-4" />
      <div className="space-y-3 mb-8">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="h-4 w-64 md:w-72" />
        ))}
      </div>

      <hr className="border-gray-200 dark:border-gray-800 my-10 md:my-12" />

      {/* Contact — single col on mobile, two cols on desktop */}
      <Skeleton className="h-6 md:h-7 w-28 md:w-32 mb-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <SkeletonImage className="h-48 md:h-60 w-full" />
        <SkeletonImage className="h-48 md:h-60 w-full" />
      </div>
    </main>
  )
}
