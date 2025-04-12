import { LiHTMLAttributes, ReactElement } from 'react'
import { useDropdownContext } from './DropdownRoot'
interface DropdownTriggerProps extends LiHTMLAttributes<HTMLLIElement> {
  children: ReactElement[] | ReactElement
}

export default function DropdownTrigger({ children }: DropdownTriggerProps) {
  const { isOpen, setIsOpen } = useDropdownContext()

  return (
    <div className='w-full justify-start' onClick={() => setIsOpen(!isOpen)}>
      {children}
    </div>
  )
}
