import {
  createContext,
  Dispatch,
  HTMLAttributes,
  ReactElement,
  useContext,
  useState
} from 'react'
import { twMerge } from 'tailwind-merge'

interface AccordionRootProps extends HTMLAttributes<HTMLDivElement> {
  defaultValue?: string | ''
  children: ReactElement[] | ReactElement
}
interface AccordionContextType {
  itemOpen: string | undefined
  setItemOpen: Dispatch<React.SetStateAction<string | undefined>>
}

export const accordionContext = createContext<AccordionContextType | undefined>(
  undefined
)

export default function AccordionRoot({
  defaultValue,
  children,
  className
}: AccordionRootProps) {
  const [itemOpen, setItemOpen] = useState(defaultValue)

  return (
    <accordionContext.Provider value={{ itemOpen, setItemOpen }}>
      <div
        className={twMerge(
          `w-full max-w-90 h-fit border border-terciary/30 rounded ${className}`
        )}
      >
        <ul>{children}</ul>
      </div>
    </accordionContext.Provider>
  )
}

export function useAccordionContext() {
  const context = useContext(accordionContext)
  if (!context)
    throw new Error(
      'useAccordionContext must be used within a <Accordion.Root>'
    )
  return context
}
