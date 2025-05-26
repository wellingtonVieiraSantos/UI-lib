import { Check, X } from 'lucide-react'
import { ButtonHTMLAttributes, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

const sizeClasses = {
  sm: 'h-8 px-3 text-sm gap-2 [&>svg]:size-4',
  md: 'h-11 px-6 gap-2 [&>svg]:size-5',
  lg: 'h-13 px-9 gap-2 [&>svg]:size-6',
  icon: 'size-8 [&>svg]:size-5'
}

const variantClasses = {
  default: 'bg-button-secondary text-terciary hover:bg-button-secondary/70',
  border:
    'border border-secondary/30 dark:border-terciary/30 hover:border-secondary dark:hover:border-terciary',
  ghost: 'hover:bg-secondary/30 dark:hover:bg-terciary/30',
  link: 'after:absolute after:bottom-1 after:w-0 after:h-[1px] after:bg-secondary/50 dark:after:bg-terciary/50 hover:after:w-full after:transition-all after:duration-300',
  loading: 'bg-button-secondary/80 cursor-wait text-terciary',
  success: 'bg-emerald-600 pointer-events-none animate-shake text-terciary',
  error: 'bg-red-800 pointer-events-none animate-shake text-terciary'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: keyof typeof sizeClasses
  variant?: keyof typeof variantClasses
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { size = 'sm', variant = 'default', className, children, ...props },
    ref
  ) => {
    return (
      <button
        className={twMerge(
          `w-max relative flex items-center justify-center rounded cursor-pointer transition-color duration-300
           disabled:bg-secondary/20 dark:disabled:bg-terciary/20 disabled:cursor-not-allowed disabled disabled:text-secondary/50 dark:disabled:text-terciary/70`,
          sizeClasses[size],
          variantClasses[variant],
          variant === 'link' &&
            'disabled:bg-transparent disabled:pointer-events-none',
          className
        )}
        ref={ref}
        {...props}
      >
        {variant === 'loading' && (
          <div className='size-4 border-1 border-b-transparent rounded-full animate-spin' />
        )}
        {variant === 'success' && <Check />}
        {variant === 'error' && <X />}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
