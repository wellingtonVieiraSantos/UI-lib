import { X } from 'lucide-react'
import { ElementType, forwardRef, InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  type?: 'text' | 'number' | 'password' | 'email' | 'search'
  icon?: ElementType
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
            `${
              Icon ? 'px-10' : 'pl-2 pr-8'
            } w-full h-9 appearance-none border rounded border-secondary/50 dark:border-terciary/30 placeholder:text-sm
          outline-none no-spinner peer focus-within:ring-1 focus-within:ring-secondary/80 dark:focus-within:ring-terciary/80`,
            className
          )}
          {...props}
        />
        <X
          size={16}
          className={`absolute bottom-2.5 hidden peer-focus:block cursor-pointer right-2`}
          onMouseDown={handleDelete}
        />
        {Icon && (
          <Icon
            size={18}
            className={`absolute bottom-2.5 left-2  pointer-events-none`}
          />
        )}
      </div>
    )
  }
)

Input.displayName = 'input'

export { Input }
