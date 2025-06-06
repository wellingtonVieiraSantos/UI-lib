import * as ToggleRadix from '@radix-ui/react-toggle'
import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

const Toggle = forwardRef<
  React.ComponentRef<typeof ToggleRadix.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleRadix.Root>
>(({ className, ...props }, ref) => {
  return (
    <ToggleRadix.Root
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

Toggle.displayName = ToggleRadix.Root.displayName

export { Toggle }
