import {
  createContext,
  Dispatch,
  HTMLAttributes,
  ReactElement,
  useContext,
  useState
} from 'react'

interface RadioRootProps extends HTMLAttributes<HTMLDivElement> {
  defaultValue?: string
  groupName: string
  children: ReactElement[] | ReactElement
}

interface RadioContextType {
  valueDefault: string
  setValueDefault: Dispatch<React.SetStateAction<string>>
  groupName: string
}

export const radioContext = createContext<RadioContextType | undefined>(
  undefined
)

export default function RadioRoot({
  defaultValue = 'default',
  groupName,
  children,
  className
}: RadioRootProps) {
  const [valueDefault, setValueDefault] = useState(defaultValue)

  return (
    <radioContext.Provider value={{ valueDefault, setValueDefault, groupName }}>
      <div className={`${className}`}>{children}</div>
    </radioContext.Provider>
  )
}

export function useRadioContext() {
  const context = useContext(radioContext)
  if (!context)
    throw new Error('useRadioContext must be used within a <Radio.Root>')
  return context
}
