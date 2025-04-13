import { HTMLAttributes, ReactElement } from 'react'
import { useTabContext } from './TabRoot'

interface TabContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement[] | ReactElement
  id: string
}
export default function TabContent({ id, children }: TabContentProps) {
  const { selectedTab } = useTabContext()
  const isActive = selectedTab === id
  return (
    <div className={`min-w-90 p-2 ${isActive ? 'block' : 'hidden'}`}>
      {children}
    </div>
  )
}
