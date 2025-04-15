import { HTMLAttributes, ReactElement, useEffect, useRef } from 'react'

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean
  children: ReactElement[]
  onClose: () => void
}
export default function ModalContent({
  isOpen = false,
  onClose,
  children
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function closeModal(e: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose()
      }
    }

    document.addEventListener('click', closeModal)
    return () => document.removeEventListener('click', closeModal)
  }, [onClose])

  return (
    isOpen && (
      <div className='w-screen h-screen bg-primary/20 z-9999 fixed bottom-0 top-0 right-0 backdrop-blur grid place-content-center'>
        <div
          ref={modalRef}
          className='w-fit max-w-[600px] bg-primary border border-terciary/20 rounded px-8 py-4 grid gap-4 animate-fadeIn relative mx-1'
        >
          {children}
        </div>
      </div>
    )
  )
}
