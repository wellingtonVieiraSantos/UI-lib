'use client'
import {
  createContext,
  Dispatch,
  HTMLAttributes,
  ReactElement,
  RefObject,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react'

interface DropdownRootProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement[] | ReactElement
}

interface DropdownContextType {
  isOpen: boolean
  isAbove: boolean
  isRight: boolean
  setIsOpen: Dispatch<React.SetStateAction<boolean>>
  dropdownRef: RefObject<HTMLUListElement | null>
}

export const dropdownContext = createContext<DropdownContextType | undefined>(
  undefined
)

export default function DropdownRoot({ children }: DropdownRootProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isAbove, setIsAbove] = useState(false)
  const [isRight, setIsRight] = useState(false)
  const dropdownRef = useRef<HTMLUListElement | null>(null)

  useEffect(() => {
    if (dropdownRef.current && isOpen) {
      const dropdownRect = dropdownRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const viewportWidth = window.innerWidth
      setIsAbove(dropdownRect.bottom > viewportHeight)
      setIsRight(dropdownRect.right > viewportWidth)
    }
    const closeDropdown = function (e: MouseEvent) {
      if (
        dropdownRef.current &&
        isOpen &&
        !dropdownRef.current.contains(e.target as Node)
      )
        setIsOpen(!isOpen)
    }
    document.addEventListener('click', closeDropdown)

    return () => {
      setIsAbove(false)
      setIsRight(false)
      document.removeEventListener('click', closeDropdown)
    }
  }, [isOpen])

  return (
    <dropdownContext.Provider
      value={{ isOpen, setIsOpen, isAbove, isRight, dropdownRef }}
    >
      <div className='relative w-max h-fit rounded'>{children}</div>
    </dropdownContext.Provider>
  )
}

export function useDropdownContext() {
  const context = useContext(dropdownContext)
  if (!context)
    throw new Error('useDropdownContext must be used within a <Dropdown.Root>')
  return context
}
