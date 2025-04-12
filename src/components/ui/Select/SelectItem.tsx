import { HTMLAttributes } from 'react'

interface SelectItemProps extends HTMLAttributes<HTMLDivElement> {
  children: string
}
export default function SelectItem({ children }: SelectItemProps) {
  return (
    <option className='w-fit h-fit py-2 px-4 select-none hover:bg-button-secondary'>
      {children}
    </option>
  )
}
