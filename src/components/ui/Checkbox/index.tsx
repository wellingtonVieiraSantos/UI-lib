import { Check } from 'lucide-react'
import { InputHTMLAttributes, useState } from 'react'

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  ref?: React.Ref<HTMLInputElement>
}
export default function Checkbox({
  id,
  checked,
  ref,
  ...props
}: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(checked)
  return (
    <div
      className={`size-5 border border-secondary/30 dark:border-terciary/30 rounded grid place-content-center cursor-pointer ${
        isChecked && 'bg-button-secondary'
      } transition-all duration-300`}
      onClick={() => setIsChecked(!isChecked)}
      id={id}
      ref={ref}
      {...props}
    >
      {isChecked && <Check size={18} className='text-terciary' />}
    </div>
  )
}
