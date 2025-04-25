import { Check } from 'lucide-react'
import { InputHTMLAttributes, useState } from 'react'

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  ref?: React.Ref<HTMLInputElement>
  defaultChecked?: boolean
}
export default function Checkbox({
  id,
  defaultChecked = false,
  ref,
  ...props
}: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(defaultChecked)
  return (
    <div className={`relative size-fit cursor-pointer`}>
      <input
        type='checkbox'
        className={`appearance-none size-5 border border-secondary/30 dark:border-terciary/30 rounded grid place-content-center cursor-pointer ${
          isChecked && 'bg-button-secondary'
        } transition-all duration-300`}
        id={id}
        checked={isChecked}
        onChange={e => setIsChecked(e.target.checked)}
        ref={ref}
        {...props}
      />
      {isChecked && (
        <Check size={20} className='text-terciary absolute inset-0' />
      )}
    </div>
  )
}
