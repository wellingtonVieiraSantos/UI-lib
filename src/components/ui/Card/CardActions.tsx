import { HTMLAttributes, ReactElement } from 'react'

interface CardActionsProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement[] | ReactElement
}
export default function CardActions({ children }: CardActionsProps) {
  return <div className='w-full flex gap-2 justify-end'>{children}</div>
}
