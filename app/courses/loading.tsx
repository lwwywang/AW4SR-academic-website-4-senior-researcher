import { Skeleton, SkeletonImage } from '@/components/ui/Skeleton'

export default function CoursesLoading() {
  return (
    <main className="max-w-prose px-10 py-section">
      {[...Array(2)].map((_, i) => (
        <div key={i} className={i > 0 ? 'mt-16 pt-16 border-t border-gray-200 dark:border-gray-800' : ''}>
          {/* Course title */}
          <Skeleton className="h-9 w-3/4 mb-2" />
          {/* Course URL */}
          <Skeleton className="h-4 w-40 mb-6" />
          {/* Description */}
          <div className="space-y-2 mb-6">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/6" />
          </div>
          {/* Video button */}
          <Skeleton className="h-9 w-48 mb-4" />
          {/* Video iframe — shimmer */}
          <SkeletonImage className="h-96 w-full mb-8" />
          {/* Student work */}
          <Skeleton className="h-7 w-36 mb-4" />
          <div className="space-y-3">
            {[...Array(3)].map((_, j) => (
              <Skeleton key={j} className="h-4 w-2/3" />
            ))}
          </div>
        </div>
      ))}
    </main>
  )
}
