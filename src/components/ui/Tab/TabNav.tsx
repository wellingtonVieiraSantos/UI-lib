import { HTMLAttributes, ReactElement } from 'react'

interface TabNavProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement[] | ReactElement
}
export default function TabNav({ children }: TabNavProps) {
  return (
    <div className='flex items-center text-center border-b border-secondary/30 dark:border-terciary/30'>
      {children}
    </div>
  )
}
