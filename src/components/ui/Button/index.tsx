import { ButtonHTMLAttributes, ElementType, ReactElement } from 'react'
import { twMerge } from 'tailwind-merge'

type sizeButton = 'sm' | 'md' | 'lg'
type variantButton = 'default' | 'border' | 'ghost'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  sizeButton?: sizeButton
  variantButton?: variantButton
  iconPosition?: 'left' | 'right'
  icon?: ElementType
  text?: string
  onlyIcon?: boolean
  children?: ReactElement
}

const SIZE_ICON_BUTTON: Record<sizeButton, number> = {
  sm: 16,
  md: 20,
  lg: 24
}
const WIDTH_ONLY_ICON: Record<sizeButton, string> = {
  sm: 'w-8',
  md: 'w-11',
  lg: 'w-13'
}

const sizeClasses: Record<sizeButton, string> = {
  sm: 'h-8 px-4 text-sm gap-1',
  md: 'h-11 px-6 gap-2',
  lg: 'h-13 px-8 gap-2'
}
const variantClasses: Record<variantButton, string> = {
  default:
    'bg-button-secondary text-terciary hover:bg-button-secondary/70 transition-color duration-300',
  border:
    'border border-secondary/30 dark:border-terciary/30 hover:border-secondary dark:hover:border-terciary transition-color duration-300',
  ghost:
    'hover:bg-secondary/10 dark:hover:bg-terciary/20 transition duration-300'
}

export default function Button({
  sizeButton = 'sm',
  variantButton = 'default',
  text,
  iconPosition = 'left',
  icon: Icon,
  onlyIcon = false,
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
        } ${variantClasses[variantButton]} ${
          onlyIcon && WIDTH_ONLY_ICON[sizeButton]
        } ${onlyIcon && 'px-0 grid place-content-center-safe'} ${className}`
      )}
      {...props}
    >
      {Icon && <Icon size={SIZE_ICON_BUTTON[sizeButton]} />}
      {!onlyIcon && text}
      {children}
    </button>
  )
}
