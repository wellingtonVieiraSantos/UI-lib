import { forwardRef } from 'react'
import * as SwitchRadix from '@radix-ui/react-switch'
import { twMerge } from 'tailwind-merge'

const Switch = forwardRef<
  React.ComponentRef<typeof SwitchRadix.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchRadix.Root>
>(({ className, ...props }, ref) => {
  return (
    <SwitchRadix.Root
      ref={ref}
      {...props}
      className={twMerge(
        `relative w-14 h-7 dark:bg-secondary data-[state=checked]:bg-button-secondary rounded-full
         border border-secondary/30 dark:border-terciary/30 transition-colors duration-300 cursor-pointer
         disabled:bg-secondary/30 dark:disabled:bg-terciary/30 disabled:cursor-not-allowed data-[state=checked]:border-none`,
        className
      )}
    >
      <SwitchRadix.Thumb
        className='absolute size-5 grid place-content-center translate-x-1
       bg-secondary/70 dark:bg-terciary/80 data-[state=checked]:translate-x-[30px] data-[state=checked]:bg-terciary
        top-1/2 -translate-y-1/2 transform transition duration-300 rounded-full
        data-[disabled]:bg-terciary/60'
      />
    </SwitchRadix.Root>
  )
})

Switch.displayName = SwitchRadix.Root.displayName

export { Switch }
