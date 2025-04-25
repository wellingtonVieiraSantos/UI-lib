import { X } from 'lucide-react'
import { ElementType, InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText?: string
  name: string
  type?: 'text' | 'number' | 'password' | 'email' | 'search'
  holder?: string /* mudar para valores especificos de holders */
  icon?: ElementType
  iconPosition?: 'left' | 'right'
  handleDelete?: () => void
  ref?: React.Ref<HTMLInputElement>
}

export default function Input({
  labelText,
  name,
  type = 'text',
  holder,
  icon: Icon,
  iconPosition = 'left',
  handleDelete,
  className,
  ref,
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
        ref={ref}
        className={twMerge(
          `${
            Icon ? 'px-10' : 'px-2'
          } appearance-none py-2 border rounded border-secondary/50 dark:border-terciary/30  
          outline-none no-spinner peer focus-within:ring-1 focus-within:ring-secondary/80 dark:focus-within:ring-terciary/80
           ${className}`
        )}
        {...props}
      />
      <X
        size={18}
        className={`absolute bottom-3 hidden peer-focus:block cursor-pointer ${
          iconPosition === 'left' ? 'right-2' : 'left-2'
        }`}
        onMouseDown={handleDelete}
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
