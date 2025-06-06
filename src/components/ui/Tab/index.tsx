import { forwardRef } from 'react'
import * as TabsRadix from '@radix-ui/react-tabs'
import { twMerge } from 'tailwind-merge'

const Tabs = TabsRadix.Root

const TabList = forwardRef<
  React.ComponentRef<typeof TabsRadix.List>,
  React.ComponentPropsWithoutRef<typeof TabsRadix.List>
>(({ className, ...props }, ref) => {
  return (
    <TabsRadix.List
      ref={ref}
      {...props}
      className={twMerge(
        `flex data-[orientation=vertical]:flex-col data-[orientation=vertical]:justify-evenly
         items-center text-foreground-secondary border-b data-[orientation=vertical]:border-r`,
        className
      )}
    />
  )
})

TabList.displayName = TabsRadix.List.displayName

const TabTrigger = forwardRef<
  React.ComponentRef<typeof TabsRadix.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsRadix.Trigger>
>(({ className, ...props }, ref) => {
  return (
    <TabsRadix.Trigger
      ref={ref}
      {...props}
      className={twMerge(
        `data-[orientation=horizontal]:flex-1 h-11 px-3 flex justify-center items-center text-nowrap data-[state=active]:border-b-2
         data-[state=active]:border-b-button data-[state=active]:text-foreground
         transition duration-300 cursor-pointer hover:bg-hover disabled:bg-disabled disabled:cursor-not-allowed`,
        className
      )}
    />
  )
})

TabTrigger.displayName = TabsRadix.Trigger.displayName

const TabContent = forwardRef<
  React.ComponentRef<typeof TabsRadix.Content>,
  React.ComponentPropsWithoutRef<typeof TabsRadix.Content>
>(({ className, ...props }, ref) => {
  return (
    <TabsRadix.Content
      ref={ref}
      {...props}
      className={twMerge(
        `p-2 flex flex-col justify-center text-justify`,
        className
      )}
    />
  )
})

TabContent.displayName = TabsRadix.Content.displayName

export { Tabs, TabList, TabTrigger, TabContent }
