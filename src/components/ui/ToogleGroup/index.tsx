import * as ToggleGroupRadix from '@radix-ui/react-toggle-group'
import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

const ToggleGroup = forwardRef<
  React.ComponentRef<typeof ToggleGroupRadix.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupRadix.Root>
>(({ children, className, ...props }, ref) => {
  return (
    <ToggleGroupRadix.Root
      {...props}
      ref={ref}
      className={twMerge(`inline-flex gap-2 ${className}`)}
    >
      {children}
    </ToggleGroupRadix.Root>
  )
})

ToggleGroup.displayName = ToggleGroupRadix.Root.displayName

const ToggleGroupItem = forwardRef<
  React.ComponentRef<typeof ToggleGroupRadix.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupRadix.Item>
>(({ children, className, ...props }, ref) => {
  return (
    <ToggleGroupRadix.Item
      ref={ref}
      {...props}
      className={twMerge(`inline-flex items-center justify-center gap-2 rounded h-9 w-fit px-2 
        min-w-9 data-[state=on]:bg-button-secondary hover:bg-slate-100/30 
        cursor-pointer transition duration-300 data-disabled:bg-terciary/30 data-disabled:text-terciary/60  ${className}`)}
    >
      {children}
    </ToggleGroupRadix.Item>
  )
})

ToggleGroupItem.displayName = ToggleGroupRadix.Item.displayName

export { ToggleGroup, ToggleGroupItem }
