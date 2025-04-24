import { HTMLAttributes, ReactElement } from 'react'

interface CardHeaderProps extends HTMLAttributes<HTMLElement> {
  children: ReactElement[] | ReactElement
}
export default function CardHeader({ children }: CardHeaderProps) {
  return <header className='text-lg'>{children}</header>
}
