import { HTMLAttributes, ReactElement } from 'react'

interface ToastMessageProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement[] | ReactElement
}
export default function ToastMessage({ children }: ToastMessageProps) {
  return <div className='text-sm text-terciary/70'>{children}</div>
}
