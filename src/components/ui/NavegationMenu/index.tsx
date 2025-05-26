import * as NavigationMenuRadix from '@radix-ui/react-navigation-menu'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

const NavigationItem = NavigationMenuRadix.Item

const navigationTriggerStyle =
  'group inline-flex h-8 w-max items-center justify-center gap-2 px-4 py-2 hover:bg-secondary/20 dark:hover:bg-terciary/20 cursor-pointer data-disabled:cursor-not-allowed data-disabled:text-secondary/50 dark:data-disabled:text-terciary/50 transition duration-300 rounded'

const NavigationMenu = forwardRef<
  React.ComponentRef<typeof NavigationMenuRadix.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuRadix.Root>
>(({ className, children, ...props }, ref) => {
  return (
    <NavigationMenuRadix.Root
      className={twMerge(
        `relative flex max-w-max flex-1 justify-center items-center`,
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
      <NavigationViewport />
    </NavigationMenuRadix.Root>
  )
})

NavigationMenu.displayName = NavigationMenuRadix.Root.displayName

const NavigationLink = forwardRef<
  React.ComponentRef<typeof NavigationMenuRadix.Link>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuRadix.Link> & {
    href: string
  }
>(({ className, href, ...props }, ref) => {
  return (
    <Link href={href} legacyBehavior passHref>
      <NavigationMenuRadix.Link
        className={twMerge(navigationTriggerStyle, className)}
        ref={ref}
        {...props}
      />
    </Link>
  )
})

NavigationLink.displayName = NavigationMenuRadix.Link.displayName

const NavigationList = forwardRef<
  React.ComponentRef<typeof NavigationMenuRadix.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuRadix.List>
>(({ className, ...props }, ref) => {
  return (
    <NavigationMenuRadix.List
      className={twMerge(
        `group flex flex-1 list-none justify-center items-center space-x-1`,
        className
      )}
      ref={ref}
      {...props}
    />
  )
})

NavigationList.displayName = NavigationMenuRadix.List.displayName

const NavigationTrigger = forwardRef<
  React.ComponentRef<typeof NavigationMenuRadix.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuRadix.Trigger>
>(({ className, children, ...props }, ref) => {
  return (
    <NavigationMenuRadix.Trigger
      className={twMerge(navigationTriggerStyle, `group`, className)}
      ref={ref}
      {...props}
    >
      {children}
      <ChevronDown className='size-4 group-data-[state=open]:rotate-180 transition duration-300' />
    </NavigationMenuRadix.Trigger>
  )
})

NavigationTrigger.displayName = NavigationMenuRadix.Trigger.displayName

const NavigationContent = forwardRef<
  React.ComponentRef<typeof NavigationMenuRadix.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuRadix.Content>
>(({ className, ...props }, ref) => {
  return (
    <NavigationMenuRadix.Content
      className={twMerge(`inset-0 w-full md:absolute md:size-fit`, className)}
      ref={ref}
      {...props}
    />
  )
})

NavigationContent.displayName = NavigationMenuRadix.Content.displayName

const NavigationViewport = forwardRef<
  React.ComponentRef<typeof NavigationMenuRadix.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuRadix.Viewport>
>(({ className, ...props }, ref) => {
  return (
    <div className='absolute left-0 top-full flex justify-center z-10'>
      <NavigationMenuRadix.Viewport
        className={twMerge(
          `origin-top-left relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] bg-terciary dark:bg-secondary
           w-full overflow-hidden border border-secondary/20 dark:border-terciary/20 rounded md:w-[var(--radix-navigation-menu-viewport-width)]`,
          className
        )}
        ref={ref}
        {...props}
      />
    </div>
  )
})

NavigationViewport.displayName = NavigationMenuRadix.Viewport.displayName

const NavigationIndicator = forwardRef<
  React.ComponentRef<typeof NavigationMenuRadix.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuRadix.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuRadix.Indicator
    ref={ref}
    className={twMerge(
      'top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden bg-terciary dark:bg-primary',
      className
    )}
    {...props}
  >
    <div className='relative top-[60%] size-2 rotate-45 bg-secondary/30 dark:bg-terciary/30' />
  </NavigationMenuRadix.Indicator>
))
NavigationIndicator.displayName = NavigationMenuRadix.Indicator.displayName

export {
  navigationTriggerStyle,
  NavigationMenu,
  NavigationList,
  NavigationItem,
  NavigationTrigger,
  NavigationContent,
  NavigationLink,
  NavigationViewport,
  NavigationIndicator
}
