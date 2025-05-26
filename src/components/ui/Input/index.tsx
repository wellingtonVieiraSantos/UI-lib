import { LucideIcon, X } from 'lucide-react'
import { forwardRef, InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  type?: 'text' | 'number' | 'password' | 'email' | 'search'
  icon?: LucideIcon
  handleDelete?: () => void
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { id, type = 'text', icon: Icon, handleDelete, className, ...props },
    ref
  ) => {
    return (
      <div className='relative w-full max-w-lg'>
        <input
          type={type}
          name={id}
          id={id}
          ref={ref}
          className={twMerge(
            `w-full h-8 text-sm appearance-none border rounded border-secondary/30 dark:border-terciary/30 placeholder:text-sm
          outline-none no-spinner peer focus-within:ring-1 focus-within:ring-secondary/80 dark:focus-within:ring-terciary/80 shadow
          disabled:bg-secondary/20 dark:disabled:bg-terciary/20 disabled:cursor-not-allowed disabled:text-secondary/50 dark:disabled:text-terciary/70`,
            Icon ? 'px-10' : 'pl-2 pr-8',
            className
          )}
          {...props}
        />
        <X
          className={`size-4 absolute bottom-2 hidden peer-focus:block cursor-pointer right-2`}
          onMouseDown={handleDelete}
        />
        {Icon && (
          <Icon
            className={`size-4.5 absolute bottom-2 left-2 pointer-events-none peer-disabled:text-secondary/50 dark:peer-disabled:text-terciary/50`}
          />
        )}
      </div>
    )
  }
)

Input.displayName = 'input'

export { Input }
