import { forwardRef } from 'react'
import * as RadioRadix from '@radix-ui/react-radio-group'
import { twMerge } from 'tailwind-merge'
import { Circle } from 'lucide-react'

const Radio = forwardRef<
  React.ComponentRef<typeof RadioRadix.Root>,
  React.ComponentPropsWithoutRef<typeof RadioRadix.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioRadix.Root
      ref={ref}
      {...props}
      className={twMerge(`flex flex-col justify-center gap-1`, className)}
    />
  )
})

Radio.displayName = RadioRadix.Root.displayName

const RadioItem = forwardRef<
  React.ComponentRef<typeof RadioRadix.Item>,
  React.ComponentPropsWithoutRef<typeof RadioRadix.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioRadix.Item
      ref={ref}
      {...props}
      className={twMerge(
        `size-4 border-2 rounded-full disabled:cursor-not-allowed disabled:border-border
         disabled:text-foreground-secondary transition duration-300
         disabled:bg-disabled cursor-pointer hover:border-foreground peer `,
        className
      )}
    >
      <RadioRadix.Indicator className='flex items-center justify-center'>
        <Circle className='size-3 fill-button' />
      </RadioRadix.Indicator>
    </RadioRadix.Item>
  )
})

RadioItem.displayName = RadioRadix.Item.displayName

export { Radio, RadioItem }
