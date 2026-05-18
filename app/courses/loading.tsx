import { Skeleton, SkeletonImage } from '@/components/ui/Skeleton'

export default function CoursesLoading() {
  return (
    <main className="w-full px-10 pt-6 pb-section">
      <Skeleton className="h-10 w-44 mb-8" />
      {[...Array(2)].map((_, i) => (
        <div key={i} className={`py-12 ${i > 0 ? 'border-t border-gray-200 dark:border-gray-800' : 'pt-0'}`}>
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
          {/* Optional embedded videos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <SkeletonImage className="aspect-video w-full" />
            <SkeletonImage className="hidden md:block aspect-video w-full" />
          </div>
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
