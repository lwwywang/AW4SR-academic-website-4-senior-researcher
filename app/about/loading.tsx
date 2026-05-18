import { Skeleton, SkeletonImage } from '@/components/ui/Skeleton'

export default function AboutLoading() {
  return (
    <main className="max-w-content px-10 py-section">
      {/* H1 */}
      <Skeleton className="h-10 w-40 mb-10" />

      {/* Intro paragraph */}
      <div className="space-y-2 mb-10 max-w-prose">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/6" />
      </div>

      {/* Research direction 1 */}
      <Skeleton className="h-7 w-64 mb-3" />
      <div className="space-y-2 mb-6 max-w-prose">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
      {/* Image row — shimmer */}
      <div className="flex gap-4 mb-12">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex-1 space-y-2">
            <SkeletonImage className="h-[180px] w-full" />
            <Skeleton className="h-3 w-2/3 mx-auto" />
          </div>
        ))}
      </div>

      {/* Research direction 2 */}
      <Skeleton className="h-7 w-56 mb-3" />
      <div className="space-y-2 mb-6 max-w-prose">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
      {/* Image row — shimmer */}
      <div className="flex gap-4 mb-12">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex-1 space-y-2">
            <SkeletonImage className="h-[180px] w-full" />
            <Skeleton className="h-3 w-2/3 mx-auto" />
          </div>
        ))}
      </div>

      <hr className="border-gray-200 dark:border-gray-800 my-12" />

      {/* Our Approach */}
      <Skeleton className="h-7 w-48 mb-4" />
      <div className="space-y-3 mb-8">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="h-4 w-72" />
        ))}
      </div>

      <hr className="border-gray-200 dark:border-gray-800 my-12" />

      {/* Contact — 两列图片 */}
      <Skeleton className="h-7 w-32 mb-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <SkeletonImage className="h-60 w-full" />
        <SkeletonImage className="h-60 w-full" />
      </div>
    </main>
  )
}
