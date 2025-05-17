import { forwardRef } from 'react'
import * as ProgressRadix from '@radix-ui/react-progress'
import { twMerge } from 'tailwind-merge'

const ProgressBar = forwardRef<
  React.ComponentRef<typeof ProgressRadix.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressRadix.Root>
>(({ className, value, ...props }, ref) => {
  return (
    <div className='relative w-full mt-6'>
      <ProgressRadix.Root
        className={twMerge(
          `relative w-full h-3 bg-secondary/20 dark:bg-terciary/20 rounded-full overflow-hidden`,
          className
        )}
        ref={ref}
        {...props}
      >
        <ProgressRadix.Indicator
          className='w-full h-full flex-1 bg-button-secondary dark:bg-terciary rounded-full transition-transform duration-[20] ease-in-out'
          style={{
            transform: `translateX(-${100 - (value || 0)}%)`
          }}
        />
      </ProgressRadix.Root>
      <div
        className={twMerge(`absolute -top-8 transform -translate-x-1/2 w-10 bg-button-secondary dark:bg-terciary text-terciary dark:text-primary h-5 rounded grid place-content-center
              after:absolute after:left-1/2 after:top-full after:size-0 after:transform after:-translate-x-1/2 after:border-l-4 after:border-l-transparent
              after:border-r-4 after:border-r-transparent after:border-t-8 after:border-t-button-secondary dark:after:border-t-terciary transition-[left] duration-[20] ease-in-out`)}
        style={{ left: `${value || 0}%` }}
      >
        <span>{value}%</span>
      </div>
    </div>
  )
})

ProgressBar.displayName = ProgressRadix.Root.displayName

export { ProgressBar }
