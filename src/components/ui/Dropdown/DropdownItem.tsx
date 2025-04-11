import { LiHTMLAttributes, ReactElement } from 'react'
interface DropdownItemProps extends LiHTMLAttributes<HTMLLIElement> {
  children: ReactElement[] | ReactElement
}

export default function DropdownItem({ children }: DropdownItemProps) {
  return <li className='w-full justify-start'>{children}</li>
}
