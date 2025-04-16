import { HTMLAttributes, ReactElement } from 'react'
import { twMerge } from 'tailwind-merge'
import Button from '../Button'
import { X } from 'lucide-react'
import { useDrawerContext } from './DrawerRoot'

interface DrawerContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement[] | ReactElement
}
export default function DrawerContent({ children }: DrawerContentProps) {
  const { drawerRef, isOpen, isRight, setIsOpen } = useDrawerContext()

  return (
    <div
      className={twMerge(
        `w-screen h-screen bg-primary/20 z-9999 fixed bottom-0 right-0 backdrop-blur ${
          isOpen ? 'block' : 'hidden'
        }`
      )}
    >
      <div
        ref={drawerRef}
        className={`fixed flex flex-col w-max max-w-10/12 min-w-1/4 h-screen bg-secondary px-4 py-4 text-wrap ${
          isRight
            ? 'right-0 rounded-l-xl animate-fadeInRight'
            : 'left-0 rounded-r-xl animate-fadeInLeft'
        }
          `}
      >
        <Button
          icon={X}
          variantButton='ghost'
          sizeButton='md'
          onlyIcon
          className={`absolute top-1 ${isRight ? 'right-3' : 'left-3'}`}
          onClick={() => setIsOpen(false)}
        />
        {children}
      </div>
    </div>
  )
}
