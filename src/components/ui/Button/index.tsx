import { Check, X } from 'lucide-react'
import { ButtonHTMLAttributes, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

type size = 'sm' | 'md' | 'lg' | 'icon'
type variant =
  | 'default'
  | 'border'
  | 'ghost'
  | 'link'
  | 'loading'
  | 'success'
  | 'error'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: size
  variant?: variant
}

const sizeClasses: Record<size, string> = {
  sm: 'h-8 px-3 text-sm gap-2 [&>svg]:size-4',
  md: 'h-11 px-6 gap-2 [&>svg]:size-5',
  lg: 'h-13 px-9 gap-2 [&>svg]:size-6',
  icon: 'size-8 [&>svg]:size-5'
}
const variantClasses: Record<variant, string> = {
  default: 'bg-button-secondary text-terciary hover:bg-button-secondary/70',
  border:
    'border border-secondary/30 dark:border-terciary/30 hover:border-secondary dark:hover:border-terciary',
  ghost: 'hover:bg-secondary/10 dark:hover:bg-terciary/20',
  link: 'after:absolute after:bottom-1 after:w-0 after:h-[1px] after:bg-terciary/50 hover:after:w-full after:transition-all after:duration-300',
  loading: 'bg-button-secondary/80 cursor-wait ',
  success: 'bg-emerald-600 pointer-events-none animate-shake',
  error: 'bg-red-800 pointer-events-none animate-shake'
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
           disabled:bg-terciary/20 disabled:cursor-not-allowed disabled disabled:text-terciary/70`,
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
