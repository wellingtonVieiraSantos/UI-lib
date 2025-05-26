import { forwardRef, HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type variantOptions =
  | 'default'
  | 'outline'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'
  | 'notification'

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: variantOptions
}

const variantClasses: Record<variantOptions, string> = {
  default: 'bg-button-secondary',
  outline:
    'bg-transparent border border-secondary/70 dark:border-terciary/70 text-secondary dark:text-terciary',
  info: 'bg-sky-800',
  success: 'bg-emerald-700',
  warning: 'bg-amber-700',
  error: 'bg-red-800',
  notification:
    'absolute px-1 -top-1 -right-3 rounded-full px-0 bg-button-secondary'
}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ variant = 'default', className, ...props }, ref) => {
    return (
      <div
        className={twMerge(
          `min-w-6 h-6 w-fit px-2 text-sm flex justify-center items-center gap-1
          rounded-md pointer-events-none`,
          variantClasses[variant],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Badge.displayName = 'Badge'

export { Badge }
