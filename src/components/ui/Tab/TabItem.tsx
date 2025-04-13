import { HTMLAttributes, ReactElement } from 'react'

interface TabItemProps extends HTMLAttributes<HTMLDivElement> {
  def: string
  children: ReactElement[]
}
export default function TabItem({
  id,
  children,
  activeItem,
  setActiveItem
}: TabItemProps) {
  return <div className={``}>{children}</div>
}
