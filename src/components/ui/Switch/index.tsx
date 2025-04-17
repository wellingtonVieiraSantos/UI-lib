import { HTMLAttributes, useState } from 'react'
import { twMerge } from 'tailwind-merge'

interface SwitchProps extends HTMLAttributes<HTMLDivElement> {
  disabled?: boolean
}

export default function Switch({ disabled = false }: SwitchProps) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div
      className={`relative w-14 h-7 rounded-full border transition-colors duration-300 ${
        isOpen && 'bg-button-secondary'
      } border-secondary/40 dark:border-terciary/40 cursor-pointer ${
        disabled && 'bg-secondary/30 dark:bg-terciary/20 '
      }`}
      onClick={() => !disabled && setIsOpen(!isOpen)}
    >
      <div
        className={twMerge(
          `absolute grid place-content-center top-1/2 -translate-y-1/2 transform transition-transform duration-300 ${
            disabled ? 'bg-secondary/60' : 'bg-secondary dark:bg-terciary'
          } ${
            isOpen ? 'translate-x-8 bg-terciary' : 'translate-x-1'
          } w-5 aspect-square border border-terciary/60 rounded-full `
        )}
      ></div>
    </div>
  )
}
