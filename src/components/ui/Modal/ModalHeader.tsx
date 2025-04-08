import { HTMLAttributes, ReactElement } from 'react'

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement[]
}
export default function ModalHeader({ children }: ModalProps) {
  return <div className='flex justify-between items-center'>{children}</div>
}
