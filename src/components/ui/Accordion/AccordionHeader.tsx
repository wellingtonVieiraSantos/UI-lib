import { ChevronDown, ChevronUp } from 'lucide-react'
import { HTMLAttributes, ReactElement } from 'react'
import { useAccordionContext } from './AccordionRoot'

interface AccordionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  value?: string
  isOpen?: boolean
  children: ReactElement
}
export default function AccordionHeader({
  isOpen,
  value,
  children
}: AccordionHeaderProps) {
  const { setItemOpen } = useAccordionContext()

  return (
    <div
      className='flex justify-between items-center py-2'
      onClick={() => setItemOpen(isOpen ? '' : value)}
    >
      {children}
      {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
    </div>
  )
}
