import { Check } from 'lucide-react'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

const Checkbox = forwardRef<
  React.ComponentRef<typeof CheckboxRadix.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxRadix.Root>
>(({ className, ...props }, ref) => {
  return (
    <CheckboxRadix.Root
      className={twMerge(
        `relative cursor-pointer size-5 border border-secondary/30 dark:border-terciary/30 rounded
         data-[state=checked]:bg-button-secondary data-[state=checked]:text-terciary
        disabled:bg-secondary/20 dark:disabled:bg-terciary/20 disabled:cursor-not-allowed peer`,
        className
      )}
      ref={ref}
      {...props}
    >
      <CheckboxRadix.Indicator>
        <Check className={`size-4.5 absolute inset-0 pointer-events-none`} />
      </CheckboxRadix.Indicator>
    </CheckboxRadix.Root>
  )
})

Checkbox.displayName = CheckboxRadix.Root.displayName

export { Checkbox }
