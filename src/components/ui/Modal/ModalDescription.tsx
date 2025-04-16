import { HTMLAttributes, ReactElement } from 'react'

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement
}
export default function ModalDescription({ children }: ModalProps) {
  return <div className='text-sm'>{children}</div>
}
