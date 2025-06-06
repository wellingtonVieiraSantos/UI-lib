import * as ToggleGroupRadix from '@radix-ui/react-toggle-group'
import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

const ToggleGroup = forwardRef<
  React.ComponentRef<typeof ToggleGroupRadix.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupRadix.Root>
>(({ className, ...props }, ref) => {
  return (
    <ToggleGroupRadix.Root
      {...props}
      ref={ref}
      className={twMerge(`inline-flex gap-2`, className)}
    />
  )
})

ToggleGroup.displayName = ToggleGroupRadix.Root.displayName

const ToggleGroupItem = forwardRef<
  React.ComponentRef<typeof ToggleGroupRadix.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupRadix.Item>
>(({ className, ...props }, ref) => {
  return (
    <ToggleGroupRadix.Item
      ref={ref}
      {...props}
      className={twMerge(
        `inline-flex items-center justify-center gap-2 rounded h-8 w-fit px-2 min-w-8 data-[state=on]:bg-button data-[state=on]:text-button-foreground
        hover:bg-hover cursor-pointer transition duration-300 disabled:cursor-not-allowed
        disabled:bg-disabled disabled:text-foreground-secondary`,
        className
      )}
    />
  )
})

ToggleGroupItem.displayName = ToggleGroupRadix.Item.displayName

export { ToggleGroup, ToggleGroupItem }
