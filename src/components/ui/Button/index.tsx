import { ButtonHTMLAttributes, ElementType, ReactElement } from 'react'
import { twMerge } from 'tailwind-merge'

type sizeButton = 'sm' | 'md' | 'lg' | 'icon'
type variantButton = 'default' | 'border' | 'ghost' | 'link'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  sizeButton?: sizeButton
  variantButton?: variantButton
  iconPosition?: 'left' | 'right'
  icon?: ElementType
  children?: ReactElement[] | ReactElement | string
}

const SIZE_ICON_BUTTON: Record<sizeButton, number> = {
  sm: 16,
  md: 20,
  lg: 24,
  icon: 16
}

const sizeClasses: Record<sizeButton, string> = {
  sm: 'h-8 px-3 text-sm gap-1',
  md: 'h-11 px-6 gap-2',
  lg: 'h-13 px-9 gap-2',
  icon: 'size-8'
}
const variantClasses: Record<variantButton, string> = {
  default:
    'bg-button-secondary text-terciary hover:bg-button-secondary/70 transition-color duration-300',
  border:
    'border border-secondary/30 dark:border-terciary/30 hover:border-secondary dark:hover:border-terciary transition-color duration-300',
  ghost:
    'hover:bg-secondary/10 dark:hover:bg-terciary/20 transition duration-300',
  link: 'after:absolute after:bottom-1 after:w-0 after:h-[1px] after:bg-terciary/50 hover:after:w-full after:transition-all after:duration-300'
}

export default function Button({
  sizeButton = 'sm',
  variantButton = 'default',
  iconPosition = 'left',
  icon: Icon,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        `w-fit relative flex ${
          iconPosition === 'right' && 'flex-row-reverse'
        } items-center justify-center rounded cursor-pointer ${
          sizeClasses[sizeButton]
        } ${variantClasses[variantButton]} ${className}`
      )}
      {...props}
    >
      {Icon && <Icon size={SIZE_ICON_BUTTON[sizeButton]} />}
      {children}
    </button>
  )
}
