import { HTMLAttributes, ReactElement } from 'react'

interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement[] | ReactElement
}
export default function CardContent({ children }: CardContentProps) {
  return <div className='flex flex-col justify-center'>{children}</div>
}
