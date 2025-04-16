import { ElementType, InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText?: string
  name: string
  type?: 'text' | 'number' | 'password' | 'email'
  holder?: string /* mudar para valores especificos de holders */
  icon?: ElementType
  iconPosition?: 'left' | 'right'
}

export default function Input({
  labelText,
  name,
  type = 'text',
  holder,
  icon: Icon,
  iconPosition = 'left',
  className,
  ...props
}: InputProps) {
  return (
    <label htmlFor={name} className='w-fit grid gap-2 relative'>
      {labelText && <span>{labelText}</span>}
      <input
        type={type}
        name={name}
        id={name}
        placeholder={holder}
        className={twMerge(
          `px-10 py-2 border rounded border-secondary/50 dark:border-terciary/50  outline-none no-spinner ${className}`
        )}
        {...props}
      />
      {Icon && (
        <Icon
          size={24}
          className={`absolute bottom-3 ${
            iconPosition === 'left' ? 'left-2' : 'right-2'
          }`}
        />
      )}
    </label>
  )
}
