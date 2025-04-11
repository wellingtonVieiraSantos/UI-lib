'use client'
import {
  HTMLAttributes,
  ReactElement,
  useEffect,
  useRef,
  useState
} from 'react'
import Button from '../Button'
import { ChevronDown } from 'lucide-react'
interface DropdownRootProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement[] | ReactElement
}

export default function DropdownRoot({ children }: DropdownRootProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isAbove, setIsAbove] = useState(false)
  const dropdowRef = useRef<HTMLUListElement | null>(null)

  useEffect(() => {
    if (dropdowRef.current && isOpen) {
      const dropdownRect = dropdowRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      setIsAbove(dropdownRect.bottom > viewportHeight)
    }

    return () => {
      setIsAbove(false)
    }
  }, [isOpen])

  return (
    <div className='relative w-fit h-fit rounded'>
      <Button
        variantButton='border'
        text='Dropdown Button'
        icon={ChevronDown}
        sizeButton='md'
        iconPosition='right'
        onClick={() => setIsOpen(!isOpen)}
      />
      <ul
        ref={dropdowRef}
        className={`${
          isOpen ? 'flex' : 'hidden'
        } w-full flex-col gap-2 p-2 border border-terciary/30 absolute left-0 bg-primary rounded
        ${
          isAbove
            ? 'bottom-full mb-1 animate-fadeInDown'
            : 'top-full mt-1 animate-fadeInUp'
        }`}
      >
        {children}
      </ul>
    </div>
  )
}
