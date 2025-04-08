import { HTMLAttributes, ReactElement } from 'react'

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement
}
export default function ModalTitle({ children }: ModalProps) {
  return <div className='text-2xl font-montserrat'>{children}</div>
}
