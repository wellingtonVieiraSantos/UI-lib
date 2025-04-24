import { HTMLAttributes, ReactElement } from 'react'

interface CardRootProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement[] | ReactElement
}
export default function CardRoot({ children }: CardRootProps) {
  return (
    <div className='w-fit max-w-90 grid gap-2 border border-secondary/30 dark:border-terciary/30 px-2 py-4 rounded'>
      {children}
    </div>
  )
}
