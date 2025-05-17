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
        `inline-flex items-center justify-center gap-2 rounded h-8 w-fit px-2 min-w-8 data-[state=on]:bg-button-secondary data-[state=on]:text-terciary
        hover:bg-secondary/30 dark:hover:bg-terciary/30 cursor-pointer transition duration-300 disabled:cursor-not-allowed
        disabled:bg-secondary/20 dark:disabled:bg-terciary/20 disabled:text-secondary/50 dark:disabled:text-terciary/60`,
        className
      )}
    />
  )
})

Toggle.displayName = ToggleRadix.Root.displayName

export { Toggle }
