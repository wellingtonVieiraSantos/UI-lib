import { HTMLAttributes, ReactElement } from 'react'

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement | ReactElement[]
}
export default function ModalFooter({ children }: ModalProps) {
  return <div className='flex gap-4 justify-end'>{children}</div>
}
