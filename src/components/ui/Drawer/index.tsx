import * as DialogRadix from '@radix-ui/react-dialog'
import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { X } from 'lucide-react'
import useIsMobile from './useIsMobile'
import { DrawerContext, useDrawer } from './drawerContext'

const orientationClasses = {
  left: 'left-0 top-0 h-full data-[state=open]:animate-DrawerLeftInitial data-[state=closed]:animate-DrawerLeftFinal border-r',
  right:
    'right-0 top-0 h-full data-[state=open]:animate-DrawerRightInitial data-[state=closed]:animate-DrawerRightFinal border-l',
  bottom:
    'bottom-0 w-full data-[state=open]:animate-DrawerBottomInitial data-[state=closed]:animate-DrawerBottomFinal rounded-t-3xl border-t'
}

export interface DrawerContentProps {
  orientation?: keyof typeof orientationClasses
}

const DrawerTrigger = DialogRadix.Trigger
const DrawerPortal = DialogRadix.Portal
const DrawerTitle = DialogRadix.Title
const DrawerDescription = DialogRadix.Description
const DrawerClose = DialogRadix.Close

const Drawer = ({
  orientation = 'right',
  ...props
}: DrawerContentProps &
  React.ComponentPropsWithoutRef<typeof DialogRadix.Root>) => {
  return (
    <DrawerContext.Provider value={{ orientation }}>
      <DialogRadix.Root {...props} />
    </DrawerContext.Provider>
  )
}

Drawer.displayName = DialogRadix.Root.displayName

const DrawerOverlay = forwardRef<
  React.ComponentRef<typeof DialogRadix.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogRadix.Overlay>
>(({ className, ...props }, ref) => {
  return (
    <DialogRadix.Overlay
      ref={ref}
      {...props}
      className={twMerge(
        `bg-primary/20 fixed inset-0 backdrop-blur grid place-content-center z-20`,
        className
      )}
    />
  )
})

DrawerOverlay.displayName = DialogRadix.Overlay.displayName

const DrawerContent = forwardRef<
  React.ComponentRef<typeof DialogRadix.Content>,
  React.ComponentPropsWithoutRef<typeof DialogRadix.Content> &
    DrawerContentProps
>(({ children, className, ...props }, ref) => {
  const isMobile = useIsMobile()
  const { orientation } = useDrawer()
  const finalOrientation = isMobile
    ? 'bottom'
    : !orientation
    ? 'right'
    : orientation

  return (
    <DrawerPortal>
      <DrawerOverlay />
      <DialogRadix.Content
        ref={ref}
        {...props}
        className={twMerge(
          `fixed size-auto bg-terciary dark:bg-primary p-6 rounded z-20 shadow border-secondary-30 dark:border-terciary-30`,
          orientationClasses[finalOrientation],
          className
        )}
      >
        {children}
        <DrawerClose
          className='text-secondary/50 dark:text-terciary/50 hover:text-secondary dark:hover:text-terciary
         absolute top-2 right-2 cursor-pointer transition duration-300'
        >
          <X className='size-5' />
        </DrawerClose>
      </DialogRadix.Content>
    </DrawerPortal>
  )
})

DrawerContent.displayName = DialogRadix.Content.displayName

const DrawerHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={twMerge(`grid text-center space-y-2 sm:text-left`, className)}
    />
  )
}

DrawerHeader.displayName = 'DrawerHeader'

const DrawerActions = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={twMerge(
        `flex flex-col sm:flex-row gap-2 sm:justify-end items-center`,
        className
      )}
    />
  )
}

DrawerActions.displayName = 'DrawerActions'

export {
  Drawer,
  DrawerTrigger,
  DrawerPortal,
  DrawerOverlay,
  DrawerContent,
  DrawerTitle,
  DrawerDescription,
  DrawerHeader,
  DrawerActions,
  DrawerClose
}
