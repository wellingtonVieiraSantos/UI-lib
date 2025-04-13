import { HTMLAttributes, ReactElement } from 'react'
import { useTabContext } from './TabRoot'

interface TabHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement[] | ReactElement
  id: string
}

export default function TabHeader({ id, children }: TabHeaderProps) {
  const { selectedTab, setSelectedTab } = useTabContext()
  const isActive = selectedTab === id
  return (
    <div
      className={`flex-1 ${isActive && 'border-b-3 border-button-secondary'}`}
      onClick={() => setSelectedTab(id)}
    >
      {children}
    </div>
  )
}
