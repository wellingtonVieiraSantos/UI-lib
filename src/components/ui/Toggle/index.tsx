import * as ToggleRadix from '@radix-ui/react-toggle'
import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

const Toggle = forwardRef<
  React.ComponentRef<typeof ToggleRadix.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleRadix.Root>
>(({ children, className, ...props }, ref) => {
  return (
    <ToggleRadix.Root
      ref={ref}
      {...props}
      className={twMerge(
        `inline-flex items-center justify-center gap-2 rounded h-9 w-fit px-2 
        min-w-9 data-[state=on]:bg-button-secondary hover:bg-terciary/30 
        cursor-pointer transition duration-300 disabled:cursor-not-allowed disabled:bg-terciary/20 disabled:text-terciary/60`,
        className
      )}
    >
      {children}
    </ToggleRadix.Root>
  )
})

Toggle.displayName = ToggleRadix.Root.displayName

export default Toggle
