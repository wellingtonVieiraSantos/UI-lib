import { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type variantTypes = 'outline' | 'info' | 'success' | 'warning' | 'error'

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | variantTypes
  isNotification?: boolean
}

const variantClass: Record<variantTypes, string> = {
  outline: 'bg-transparent border border-terciary/70',
  info: 'bg-sky-800',
  success: 'bg-emerald-700',
  warning: 'bg-amber-700',
  error: 'bg-red-800'
}

const Badge = ({
  variant = 'default',
  isNotification = false,
  children,
  className
}: BadgeProps) => {
  return isNotification ? (
    <div
      className={twMerge(
        `min-w-6 h-6 absolute px-1 -top-1 -right-3 text-sm flex justify-center 
        items-center text-terciary bg-button-secondary rounded-full pointer-events-none`,
        className
      )}
    >
      {children}
    </div>
  ) : (
    <div
      className={twMerge(
        `h-6 max-w-fit flex justify-center items-center gap-1 bg-button-secondary 
        px-2 rounded-md text-terciary pointer-events-none ${
          variant !== 'default' && variantClass[variant]
        }`,
        className
      )}
    >
      {children}
    </div>
  )
}

Badge.displayName = 'Badge'

export { Badge }
