import { ButtonHTMLAttributes, ElementType } from 'react'
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
    'border border-terciary/30 hover:border-terciary transition-color duration-300',
  ghost:
    'after:absolute after:inset-y-full after:bg-terciary after:w-0 after:h-[1px] hover:after:w-full transition after:duration-300'
}

export default function Button({
  sizeButton = 'sm',
  variantButton = 'default',
  text,
  iconPosition = 'left',
  icon: Icon,
  onlyIcon = false,
  className,
  ...props
}: ButtonProps) {
  const iconSize = sizeButton === 'sm' ? 16 : sizeButton === 'md' ? 20 : 24
  const widthOnlyIcon =
    sizeButton === 'sm' ? 'w-8' : sizeButton === 'md' ? 'w-11' : 'w-13'

  return (
    <button
      className={twMerge(
        `w-fit relative flex items-center justify-center text-terciary rounded cursor-pointer ${
          sizeClasses[sizeButton]
        } ${variantClasses[variantButton]} ${onlyIcon && widthOnlyIcon} ${
          onlyIcon && 'px-0'
        } ${className}`
      )}
      {...props}
    >
      {iconPosition === 'left' ? (
        <>
          {Icon && <Icon size={iconSize} />}
          {!onlyIcon && text}
        </>
      ) : (
        <>
          {!onlyIcon && text}
          {Icon && <Icon size={iconSize} />}
        </>
      )}
    </button>
  )
}
