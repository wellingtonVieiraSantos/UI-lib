import { Check } from 'lucide-react'
import { InputHTMLAttributes, ReactElement, useState } from 'react'
import { twMerge } from 'tailwind-merge'

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  ref?: React.Ref<HTMLInputElement>
  defaultChecked?: boolean
  isToggle?: boolean
  children?: ReactElement[] | ReactElement
}

export default function Checkbox({
  id,
  defaultChecked = false,
  ref,
  isToggle = false,
  className,
  children,
  ...props
}: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(defaultChecked)

  return (
    <div className={`relative w-fit cursor-pointer flex items-center gap-4 `}>
      <input
        type='checkbox'
        className={`appearance-none size-5 border border-secondary/30 dark:border-terciary/30 rounded grid place-content-center cursor-pointer ${
          isChecked && 'bg-button-secondary'
        } ${isToggle ? 'hidden' : 'block'} transition-all duration-300 peer `}
        id={id}
        checked={isChecked}
        onChange={e => setIsChecked(e.target.checked)}
        ref={ref}
        {...props}
      />
      <label
        htmlFor={id}
        className={twMerge(
          `grid place-content-center w-fit transition duration-300 rounded cursor-pointer select-none ${className}`
        )}
      >
        {children}
      </label>
      {isChecked && (
        <Check
          size={20}
          className={`text-terciary absolute inset-0 pointer-events-none ${
            isToggle ? 'hidden' : 'block'
          }`}
        />
      )}
    </div>
  )
}
