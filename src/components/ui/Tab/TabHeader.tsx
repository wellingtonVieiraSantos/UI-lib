import { HTMLAttributes, ReactElement } from 'react'
import { useTabContext } from './TabRoot'
import { twMerge } from 'tailwind-merge'

interface TabHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement[] | ReactElement
  id: string
}

export default function TabHeader({ id, children, className }: TabHeaderProps) {
  const { selectedTab, setSelectedTab } = useTabContext()
  const isActive = selectedTab === id
  return (
    <div
      className={twMerge(
        `flex-1 p-2 cursor-pointer ${
          isActive && 'border-b-3 border-button-secondary'
        } ${className}`
      )}
      onClick={() => setSelectedTab(id)}
    >
      {children}
    </div>
  )
}
