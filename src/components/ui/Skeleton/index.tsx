import { twMerge } from 'tailwind-merge'

export default function Skeleton({
  className
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={twMerge(
        `relative rounded-md bg-secondary/10 dark:bg-terciary/10 overflow-hidden ${className}`
      )}
    >
      <div className='absolute inset-0 bg-gradient-to-r from-transparent via-secondary/10 dark:via-terciary/20 to-transparent animate-skeletonShimmer' />
    </div>
  )
}
