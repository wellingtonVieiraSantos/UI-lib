import { AlertTriangle, X } from 'lucide-react'
import { HTMLAttributes, ReactElement } from 'react'
import Button from '../Button'

interface ToastContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement[] | ReactElement
}
export default function ToastContent({ children }: ToastContentProps) {
  return (
    <div
      className='fixed top-8 right-2 w-max max-w-[360px] flex justify-between items-center gap-8 border border-terciary/30 p-2 rounded
      after:absolute after:w-2 after:h-full after:-left-2 after:rounded-l after:bg-button-secondary'
    >
      <AlertTriangle size={24} />
      <div className='flex-1'>{children}</div>
      <Button variantButton='ghost' icon={X} onlyIcon />
    </div>
  )
}
