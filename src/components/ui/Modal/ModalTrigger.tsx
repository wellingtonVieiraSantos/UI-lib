import { HTMLAttributes, ReactElement } from 'react'

interface ModalTriggerProps extends HTMLAttributes<HTMLDivElement> {
  openModal: () => void
  children?: ReactElement
}
export default function ModalTrigger({
  openModal,
  children
}: ModalTriggerProps) {
  return (
    <div onClick={openModal} className='cursor-pointer'>
      {children}
    </div>
  )
}
