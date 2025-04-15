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

interface DrawerRootProps extends HTMLAttributes<HTMLDivElement> {
  isRight?: boolean
  children: ReactElement[]
}

interface DrawerContextType {
  isOpen: boolean
  isRight: boolean
  setIsOpen: Dispatch<React.SetStateAction<boolean>>
  drawerRef: RefObject<HTMLDivElement | null>
}

export const DrawerContext = createContext<DrawerContextType | undefined>(
  undefined
)

export default function DrawerRoot({
  isRight = false,
  children
}: DrawerRootProps) {
  const [isOpen, setIsOpen] = useState(false)
  const drawerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const closeDropdown = function (e: MouseEvent) {
      if (
        drawerRef.current &&
        isOpen &&
        !drawerRef.current.contains(e.target as Node)
      )
        setIsOpen(!isOpen)
    }
    document.addEventListener('click', closeDropdown)

    return () => {
      document.removeEventListener('click', closeDropdown)
    }
  }, [isOpen])

  return (
    <DrawerContext value={{ isOpen, isRight, setIsOpen, drawerRef }}>
      <div className={`w-fit h-fit`}>{children}</div>
    </DrawerContext>
  )
}

export function useDrawerContext() {
  const context = useContext(DrawerContext)
  if (!context)
    throw new Error('useDrawerContext must be used within a <Drawer.Root>')
  return context
}
