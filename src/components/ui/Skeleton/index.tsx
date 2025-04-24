import { HTMLAttributes, ReactElement } from 'react'
import { twMerge } from 'tailwind-merge'

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactElement
}
export default function Skeleton({ children, className }: SkeletonProps) {
  return (
    <div
      className={twMerge(
        `relative rounded-md bg-secondary/10 dark:bg-terciary/10 overflow-hidden ${className}`
      )}
    >
      <div className='absolute inset-0 bg-gradient-to-r from-transparent via-secondary/10 dark:via-terciary/20 to-transparent animate-skeletonShimmer'></div>
      {children}
    </div>
  )
}
