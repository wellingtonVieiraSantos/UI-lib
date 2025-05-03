import { AlertTriangle, X } from 'lucide-react'
import { HTMLAttributes, ReactElement } from 'react'
import Button from '../Button'

interface ToastContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement[] | ReactElement
}
export default function ToastContent({ children }: ToastContentProps) {
  return (
    <div
      className='z-100 fixed bottom-10 right-2 w-[300px] flex items-center bg-secondary border gap-4 border-terciary/30 p-2 rounded
      after:absolute after:w-2 after:h-full after:-left-2 after:rounded-l after:bg-red-500'
    >
      <AlertTriangle size={20} className='text-red-500' />
      <div className='flex-1'>{children}</div>
      <Button variantButton='ghost' icon={X} onlyIcon />
    </div>
  )
}
