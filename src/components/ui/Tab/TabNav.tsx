import { HTMLAttributes, ReactElement } from 'react'

interface TabNavProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement[] | ReactElement
}
export default function TabNav({ children }: TabNavProps) {
  return <div className='flex border-b border-terciary/30'>{children}</div>
}
