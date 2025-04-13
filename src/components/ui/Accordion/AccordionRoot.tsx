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

export const AccordionContext = createContext<AccordionContextType | undefined>(
  undefined
)

export default function AccordionRoot({
  defaultValue,
  children,
  className
}: AccordionRootProps) {
  const [itemOpen, setItemOpen] = useState(defaultValue)

  return (
    <AccordionContext.Provider value={{ itemOpen, setItemOpen }}>
      <div
        className={twMerge(
          `w-full max-w-90 h-fit border border-terciary/30 rounded ${className}`
        )}
      >
        <ul className='divide-y'>{children}</ul>
      </div>
    </AccordionContext.Provider>
  )
}

export function useAccordionContext() {
  const context = useContext(AccordionContext)
  if (!context)
    throw new Error(
      'useAccordionContext must be used within a <Accordion.Root>'
    )
  return context
}
