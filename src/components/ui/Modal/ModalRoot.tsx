import { HTMLAttributes, ReactElement } from 'react'

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement[]
}
export default function ModalRoot({ children }: ModalProps) {
  return <div className='w-fit h-fit'>{children}</div>
}
