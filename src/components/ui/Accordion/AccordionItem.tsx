import { cloneElement, HTMLAttributes, ReactElement } from 'react'
import { useAccordionContext } from './AccordionRoot'

interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
  value: string
  children: ReactElement[]
}

type childProps = {
  isOpen: boolean
  value: string
}

export default function AccordionItem({ value, children }: AccordionItemProps) {
  const { itemOpen } = useAccordionContext()
  const isOpen = value === itemOpen

  const enhancedChildren = children.map(child =>
    cloneElement(child as ReactElement<childProps>, { isOpen, value })
  )

  return (
    <li className='h-full flex flex-col py-2 px-3 first:border-none border-t border-terciary/30 cursor-pointer'>
      {enhancedChildren}
    </li>
  )
}
