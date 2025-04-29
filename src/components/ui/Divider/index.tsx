import { HTMLAttributes, ReactElement } from 'react'
import { twMerge } from 'tailwind-merge'

interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  direction?: 'horizontal' | 'vertical'
  children?: ReactElement
}
export default function Divider({
  direction = 'horizontal',
  children,
  className
}: DividerProps) {
  return (
    <div
      className={twMerge(
        `flex h-full ${direction === 'vertical' && 'flex-col'} items-center ${
          children && 'gap-2'
        } ${className}`
      )}
    >
      <div
        className={`flex-1 bg-terciary/30 ${
          direction === 'vertical' ? 'w-[1px]' : 'h-[1px]'
        }`}
      />
      {children}
      <div
        className={`flex-1 bg-terciary/30 ${
          direction === 'vertical' ? 'w-[1px]' : 'h-[1px]'
        }`}
      />
    </div>
  )
}
