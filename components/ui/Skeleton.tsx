/** Static gray block — for text lines and structural placeholders */
export function Skeleton({ className }: { className?: string }) {
  return (
    <div className={`bg-gray-200 dark:bg-gray-700 rounded ${className ?? ''}`} />
  )
}

/** Shimmer block — for image placeholders only */
export function SkeletonImage({ className }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-gray-200 dark:bg-gray-700 rounded ${className ?? ''}`}>
      <div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 dark:via-white/10 to-transparent"
        style={{ animation: 'shimmer 1.5s infinite linear' }}
      />
    </div>
  )
}
