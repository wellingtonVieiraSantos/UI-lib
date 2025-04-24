import { HTMLAttributes, ReactElement } from 'react'

interface ToastTitleProps extends HTMLAttributes<HTMLElement> {
  children: ReactElement
}
export default function ToastTitle({ children }: ToastTitleProps) {
  return <header>{children}</header>
}
