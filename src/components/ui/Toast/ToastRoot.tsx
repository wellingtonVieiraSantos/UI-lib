import { HTMLAttributes, ReactElement } from 'react'

interface ToastRootProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement[]
}
export default function ToastRoot({ children }: ToastRootProps) {
  return <div className='w-fit h-fit'>{children}</div>
}
