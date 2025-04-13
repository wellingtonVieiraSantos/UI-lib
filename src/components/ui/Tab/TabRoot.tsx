import {
  createContext,
  Dispatch,
  HTMLAttributes,
  ReactElement,
  useContext,
  useState
} from 'react'

interface TabProps extends HTMLAttributes<HTMLDivElement> {
  defaultValue: string
  children: ReactElement[]
}

interface AccordionContextType {
  selectedTab: string
  setSelectedTab: Dispatch<React.SetStateAction<string>>
}

export const TabContext = createContext<AccordionContextType | undefined>(
  undefined
)

export default function TabRoot({ defaultValue, children }: TabProps) {
  const [selectedTab, setSelectedTab] = useState(defaultValue)

  return (
    <TabContext.Provider value={{ selectedTab, setSelectedTab }}>
      <div className='w-fit h-fit max-w-90 border border-terciary/30 rounded'>
        {children}
      </div>
    </TabContext.Provider>
  )
}

export function useTabContext() {
  const context = useContext(TabContext)
  if (!context)
    throw new Error(
      'useAccordionContext must be used within a <Accordion.Root>'
    )
  return context
}
