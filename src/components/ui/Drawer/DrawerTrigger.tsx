import { HTMLAttributes, ReactElement } from 'react'
import { useDrawerContext } from './DrawerRoot'

interface DrawerTriggerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement[] | ReactElement
}
export default function DrawerTrigger({ children }: DrawerTriggerProps) {
  const { setIsOpen } = useDrawerContext()
  return (
    <div className='w-fit h-fit' onClick={() => setIsOpen(true)}>
      {children}
    </div>
  )
}
