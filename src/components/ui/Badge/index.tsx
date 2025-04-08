import { ElementType, HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'
import {
  TriangleAlert,
  CircleAlert,
  Info,
  CircleCheck,
  LucideIcon
} from 'lucide-react'
type variant = 'info' | 'success' | 'warning' | 'error'

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | variant
  icon?: ElementType
  isNotification?: boolean
  text: string
}

const variantIcon: Record<variant, LucideIcon> = {
  info: Info,
  success: CircleCheck,
  warning: TriangleAlert,
  error: CircleAlert
}

const variantClass: Record<variant, string> = {
  info: 'border bg-transparent border-sky-500 text-sky-500',
  success: 'border bg-transparent border-emerald-500 text-emerald-500',
  warning: 'border bg-transparent border-amber-500 text-amber-500',
  error: 'border bg-transparent border-red-500 text-red-500'
}

export default function Badge({
  variant = 'default',
  icon: CustomIcon,
  isNotification = false,
  text,
  className
}: BadgeProps) {
  const DefaultIcon = variant !== 'default' ? variantIcon[variant] : null

  return isNotification ? (
    <div className='w-fit h-6 absolute -top-3 -right-3 text-sm flex justify-center items-center bg-button-secondary px-2 rounded-full'>
      <span>{text}</span>
    </div>
  ) : (
    <div
      className={twMerge(
        `w-fit h-fit flex justify-center items-center gap-1 bg-button-secondary px-2 rounded-full ${
          variant !== 'default' && variantClass[variant]
        } ${className}`
      )}
    >
      {CustomIcon ? (
        <CustomIcon size={16} />
      ) : (
        DefaultIcon && <DefaultIcon size={17} />
      )}
      <span className=' text-terciary'>{text}</span>
    </div>
  )
}
