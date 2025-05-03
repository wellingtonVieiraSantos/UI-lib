import {
  createContext,
  Dispatch,
  HTMLAttributes,
  ReactElement,
  useContext,
  useState
} from 'react'

interface ToastRootProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement[]
}

interface ToastElementProps {
  id?: number
  type: 'success' | 'error' | 'info'
  title: string
  message: string
}

interface ToastContextProps {
  toast: ToastElementProps | undefined
  setToast?: Dispatch<React.SetStateAction<ToastElementProps | undefined>>
  addToast: ({ type, title, message }: ToastElementProps) => void
}

export const ToastContext = createContext<ToastContextProps | undefined>(
  undefined
)

export default function ToastRoot({ children }: ToastRootProps) {
  const [toast, setToast] = useState<ToastElementProps | undefined>(undefined)

  const addToast = ({ type, title, message }: ToastElementProps) => {
    const id = Date.now()
    setToast({ id, type, title, message })
    setTimeout(() => {
      setToast(undefined)
    }, 2000)
  }

  return (
    <ToastContext.Provider value={{ toast, addToast }}>
      <div className='w-fit h-fit'>{children}</div>
    </ToastContext.Provider>
  )
}

export function useTabContext() {
  const context = useContext(ToastContext)
  if (!context)
    throw new Error(
      'useAccordionContext must be used within a <Accordion.Root>'
    )
  return context
}
