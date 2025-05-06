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
        `flex data-[orientation=vertical]:flex-col justify-center items-center text-terciary/50 border-b data-[orientation=vertical]:border-r border-terciary/30 `,
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
        `flex-1 text-nowrap data-[state=active]:border-b-2 data-[state=active]:border-b-button-secondary data-[state=active]:text-terciary transition duration-300`,
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
