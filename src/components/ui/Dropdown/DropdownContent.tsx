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
      } flex-col w-max min-w-full gap-2 p-2 border border-terciary/30 absolute  bg-primary rounded
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
