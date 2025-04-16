import { cloneElement, HTMLAttributes, ReactElement } from 'react'
import { useAccordionContext } from './AccordionRoot'
import { twMerge } from 'tailwind-merge'

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

  const enhancedChildren = children.map((child, index) =>
    cloneElement(child as ReactElement<childProps>, {
      isOpen,
      value,
      key: index
    })
  )

  return (
    <li
      className={twMerge(
        `h-full flex flex-col py-2 px-3 cursor-pointer ${
          isOpen && 'border border-button-secondary '
        }`
      )}
    >
      {enhancedChildren}
    </li>
  )
}
