import * as DropdownRadix from '@radix-ui/react-dropdown-menu'
import { Check, Circle } from 'lucide-react'
import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

const Dropdown = DropdownRadix.Root
const DropdownTrigger = DropdownRadix.Trigger
const DropdownPortal = DropdownRadix.Portal
const DropdownLabel = DropdownRadix.Label
const DropdownRadioGroup = DropdownRadix.RadioGroup
const DropdownSub = DropdownRadix.Sub

const DropdownContent = forwardRef<
  React.ComponentRef<typeof DropdownRadix.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownRadix.Content>
>(({ className, sideOffset = 4, ...props }, ref) => {
  return (
    <DropdownPortal>
      <DropdownRadix.Content
        className={twMerge(
          ` bg-secondary border border-terciary/30 rounded py-1`,
          className
        )}
        ref={ref}
        sideOffset={sideOffset}
        {...props}
      />
    </DropdownPortal>
  )
})

DropdownContent.displayName = DropdownRadix.Content.displayName

const DropdownSubContent = forwardRef<
  React.ComponentRef<typeof DropdownRadix.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownRadix.SubContent>
>(({ className, sideOffset = 4, ...props }, ref) => {
  return (
    <DropdownPortal>
      <DropdownRadix.SubContent
        className={twMerge(
          ` bg-secondary border border-terciary/30 rounded py-1`,
          className
        )}
        ref={ref}
        sideOffset={sideOffset}
        {...props}
      />
    </DropdownPortal>
  )
})

DropdownSubContent.displayName = DropdownRadix.SubContent.displayName

const DropdownSubTrigger = forwardRef<
  React.ComponentRef<typeof DropdownRadix.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownRadix.SubTrigger>
>(({ className, ...props }, ref) => {
  return (
    <DropdownRadix.SubTrigger
      className={twMerge(
        `w-full h-8 flex justify-between select-none px-3 items-center text-sm outline-none focus:bg-terciary/20 [&>svg]:size-4
        hover:bg-terciary/20 cursor-default data-disabled:cursor-not-allowed data-disabled:text-terciary/50 transition duration-300`,
        className
      )}
      ref={ref}
      {...props}
    />
  )
})

DropdownSubTrigger.displayName = DropdownRadix.SubTrigger.displayName

const DropdownItem = forwardRef<
  React.ComponentRef<typeof DropdownRadix.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownRadix.Item>
>(({ className, ...props }, ref) => {
  return (
    <DropdownRadix.Item
      className={twMerge(
        `w-full h-8 flex justify-between select-none px-3 items-center text-sm outline-none focus:bg-terciary/20 [&>svg]:size-4
        hover:bg-terciary/20 cursor-default data-disabled:cursor-not-allowed data-disabled:text-terciary/50 transition duration-300`,
        className
      )}
      ref={ref}
      {...props}
    />
  )
})

DropdownItem.displayName = DropdownRadix.Item.displayName

const DropdownCheckboxItem = forwardRef<
  React.ComponentRef<typeof DropdownRadix.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownRadix.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => {
  return (
    <DropdownRadix.CheckboxItem
      className={twMerge(
        `relative h-8 flex cursor-default select-none items-center text-sm px-3 pl-8 rounded hover:bg-terciary/20
         data-disabled:cursor-not-allowed data-disabled:text-terciary/50 outline-none focus:bg-terciary/20 transition duration-300`,
        className
      )}
      ref={ref}
      checked={checked}
      {...props}
    >
      <span className='absolute left-2 flex items-center justify-center size-3.5'>
        <DropdownRadix.ItemIndicator>
          <Check className={`size-4`} />
        </DropdownRadix.ItemIndicator>
      </span>
      {children}
    </DropdownRadix.CheckboxItem>
  )
})

DropdownCheckboxItem.displayName = DropdownRadix.CheckboxItem.displayName

const DropdownRadioItem = forwardRef<
  React.ComponentRef<typeof DropdownRadix.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownRadix.RadioItem>
>(({ className, children, ...props }, ref) => {
  return (
    <DropdownRadix.RadioItem
      className={twMerge(
        `relative flex cursor-default select-none items-center text-sm p-1.5 pl-8 rounded hover:bg-terciary/20
         data-disabled:cursor-not-allowed data-disabled:text-terciary/50 outline-none focus:bg-terciary/20 transition duration-300`,
        className
      )}
      ref={ref}
      {...props}
    >
      <span className='absolute left-2 flex items-center justify-center size-3.5'>
        <DropdownRadix.ItemIndicator>
          <Circle className={`size-2 fill-terciary`} />
        </DropdownRadix.ItemIndicator>
      </span>
      {children}
    </DropdownRadix.RadioItem>
  )
})

DropdownRadioItem.displayName = DropdownRadix.RadioItem.displayName

const DropdownSeparator = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof DropdownRadix.Separator>) => {
  return (
    <DropdownRadix.Separator
      className={twMerge(
        `w-full h-[1px] bg-primary dark:bg-terciary/30`,
        className
      )}
      {...props}
    />
  )
}

DropdownSeparator.displayName = DropdownRadix.Separator.displayName

export {
  Dropdown,
  DropdownTrigger,
  DropdownPortal,
  DropdownContent,
  DropdownLabel,
  DropdownItem,
  DropdownSeparator,
  DropdownCheckboxItem,
  DropdownRadioGroup,
  DropdownRadioItem,
  DropdownSub,
  DropdownSubTrigger,
  DropdownSubContent
}
