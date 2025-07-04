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
        `relative w-14 h-7 data-[state=checked]:bg-button rounded-full
         border transition-colors duration-300 cursor-pointer
         disabled:bg-disabled disabled:cursor-not-allowed data-[state=checked]:border-none`,
        className
      )}
    >
      <SwitchRadix.Thumb
        className='absolute size-5 grid place-content-center translate-x-1
       bg-foreground-secondary data-[state=checked]:translate-x-[30px] data-[state=checked]:bg-button-foreground
        top-1/2 -translate-y-1/2 transform transition duration-300 rounded-full'
      />
    </SwitchRadix.Root>
  )
})

Switch.displayName = SwitchRadix.Root.displayName

export { Switch }
