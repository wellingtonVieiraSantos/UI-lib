import { InputHTMLAttributes, ReactElement } from 'react'
import { useRadioContext } from './RadioRoot'
import { twMerge } from 'tailwind-merge'
import { Check } from 'lucide-react'

interface RadioItemProps extends InputHTMLAttributes<HTMLInputElement> {
  isHidden?: boolean
  cardLabelCustom?: boolean
  children?: ReactElement | string
}
export default function RadioItem({
  id,
  value,
  isHidden = false,
  cardLabelCustom = false,
  children,
  className
}: RadioItemProps) {
  const { valueDefault, setValueDefault, groupName } = useRadioContext()

  return (
    <div>
      <input
        type='radio'
        name={groupName}
        id={id}
        value={value}
        className={twMerge(
          `${isHidden && 'hidden'} peer appearance-none w-5 h-5 rounded-full
          text-button-secondary border-2 focus:ring-button-secondary focus:ring-2 border-secondary dark:border-terciary checked:bg-button-secondary
          `
        )}
        checked={value == valueDefault}
        onChange={e => setValueDefault(e.target.value)}
      />
      {cardLabelCustom && (
        <label
          htmlFor={id}
          className={twMerge(
            `relative border border-secondary/30 dark:border-terciary/30 rounded flex peer-checked:border-secondary dark:peer-checked:border-terciary peer-not-checked:scale-95 transition duration-300 ${className}`
          )}
        >
          <Check
            size={24}
            className={`absolute top-1 right-1 ${
              value === valueDefault ? 'block' : 'hidden'
            } text-green-500`}
          />
          {children}
        </label>
      )}
    </div>
  )
}
