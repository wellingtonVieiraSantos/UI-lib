import { HTMLAttributes, ReactElement } from 'react'

interface AccordionContentProps extends HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean
  children: ReactElement
}
export default function AccordionContent({
  isOpen,
  children
}: AccordionContentProps) {
  return (
    <div
      className={`flex-wrap text-justify overflow-hidden cursor-auto ${
        isOpen ? 'h-fit' : 'h-0'
      }`}
    >
      {children}
    </div>
  )
}
