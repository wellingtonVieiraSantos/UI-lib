import * as ScrollAreaRadix from '@radix-ui/react-scroll-area'
import { forwardRef, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { Button } from '../Button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const ScrollArea = forwardRef<
  React.ComponentRef<typeof ScrollAreaRadix.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaRadix.Root> & {
    orientation?: 'vertical' | 'horizontal'
  }
>(({ className, children, orientation = 'horizontal', ...props }, ref) => {
  const [start, setIsStart] = useState(true)
  const [end, setIsEnd] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget
    const start = el.scrollLeft === 0
    const end = el.scrollLeft + el.clientWidth >= el.scrollWidth

    setIsStart(start)
    setIsEnd(end)
  }

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <ScrollAreaRadix.Root
      className={twMerge(`relative overflow-hidden group`, className)}
      ref={ref}
      {...props}
    >
      <ScrollAreaRadix.Viewport
        className='size-full'
        ref={scrollRef}
        onScroll={e => handleScroll(e)}
      >
        {children}
      </ScrollAreaRadix.Viewport>
      {orientation === 'horizontal' && (
        <Button
          variant='border'
          size='icon'
          onClick={() => scroll('left')}
          className={twMerge(
            `justify-center items-center border-none
           size-10 absolute left-1 top-1/2 -translate-y-1/2 [&>svg]:size-10 disabled:[&>svg]:text-terciary-30`,
            start && 'hidden'
          )}
        >
          <ChevronLeft size={30} />
        </Button>
      )}
      {orientation === 'horizontal' && (
        <Button
          variant='border'
          size='icon'
          onClick={() => scroll('right')}
          className={twMerge(
            `justify-center items-center border-none
            size-10 absolute right-1 top-1/2 -translate-y-1/2 [&>svg]:size-10 disabled:[&>svg]:text-terciary-30
         `,
            end && 'hidden'
          )}
        >
          <ChevronRight />
        </Button>
      )}
      <Scrollbar />
      <ScrollAreaRadix.Corner />
    </ScrollAreaRadix.Root>
  )
})

ScrollArea.displayName = ScrollAreaRadix.Root.displayName

const Scrollbar = forwardRef<
  React.ComponentRef<typeof ScrollAreaRadix.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaRadix.ScrollAreaScrollbar>
>(({ className, orientation = 'horizontal', ...props }, ref) => {
  return (
    <ScrollAreaRadix.Scrollbar
      orientation={orientation}
      className={twMerge(
        `flex touch-none select-none transition-colors group`,
        orientation === 'vertical' &&
          'h-[var(--scrollbar-size)] w-3 flex-col p-px border-l border-l-transparent',
        orientation === 'horizontal' &&
          'w-[var(--scrollbar-size)] h-3 border-t border-t-transparent p-px',
        className
      )}
      ref={ref}
      {...props}
    >
      <ScrollAreaRadix.Thumb className='relative flex-1 rounded-full bg-terciary-30 group:data-[orientation=vertical]:bg-red-400' />
    </ScrollAreaRadix.Scrollbar>
  )
})

Scrollbar.displayName = ScrollAreaRadix.ScrollAreaScrollbar.displayName

export { ScrollArea, Scrollbar }
