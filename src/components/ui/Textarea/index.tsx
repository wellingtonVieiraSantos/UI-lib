import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

const Textarea = forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<'textarea'>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={twMerge(
        `border border-secondary/30 dark:border-terciary/30 w-full max-w-lg px-4 py-2 
        resize-none scrollbar-custom rounded outline-none placeholder:text-secondary/60
        dark:placeholder:text-terciary/60 focus-visible:ring-1 ring-secondary/80 dark:ring-terciary/80`,
        className
      )}
      {...props}
    />
  )
})

Textarea.displayName = 'Textarea'

export { Textarea }
