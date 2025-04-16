import { LiHTMLAttributes, ReactElement } from 'react'
import { useDropdownContext } from './DropdownRoot'
interface DropdownContentProps extends LiHTMLAttributes<HTMLLIElement> {
  children: ReactElement[] | ReactElement
}

export default function DropdownContent({ children }: DropdownContentProps) {
  const { isOpen, isAbove, isRight, dropdownRef } = useDropdownContext()

  return (
    <ul
      ref={dropdownRef}
      className={`${
        isOpen ? 'flex' : 'hidden'
      } flex-col z-9999 w-full gap-2 p-2 border border-secondary/30 dark:border-terciary/30 bg-terciary dark:bg-secondary absolute rounded
        ${
          isAbove
            ? 'bottom-full mb-1 animate-fadeInDown'
            : 'top-full mt-1 animate-fadeInUp'
        }
        ${isRight ? 'right-0' : 'left-0'}
          `}
    >
      {children}
    </ul>
  )
}
