import { HTMLAttributes, ReactElement } from 'react'

interface ToastTriggerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement[] | ReactElement
}
export default function ToastTrigger({ children }: ToastTriggerProps) {
  return <div className='w-fit h-fit'>{children}</div>
}
