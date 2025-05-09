import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'
import Link from 'next/link'
import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

const Pagination = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div className={twMerge(``, className)} {...props} />
}

Pagination.displayName = 'Pagination'

const PaginationContent = forwardRef<
  HTMLUListElement,
  React.ComponentProps<'ul'>
>(({ className, ...props }, ref) => {
  return (
    <ul
      className={twMerge(
        `flex flex-row justify-center items-center gap-2`,
        className
      )}
      ref={ref}
      {...props}
    ></ul>
  )
})

PaginationContent.displayName = 'PaginationContent'

const PaginationItem = forwardRef<HTMLLIElement, React.ComponentProps<'li'>>(
  ({ className, ...props }, ref) => {
    return (
      <li
        className={twMerge(
          `min-w-10 h-10 flex items-center justify-center`,
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

PaginationItem.displayName = 'PaginationItem'

interface PaginationLinkProps extends React.ComponentProps<typeof Link> {
  isActive?: boolean
}

const PaginationLink = ({
  isActive,
  className,
  ...props
}: PaginationLinkProps) => {
  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      className={twMerge(
        `h-full flex-1 grid place-items-center rounded border-terciary/30 transition duration-300 hover:bg-terciary/30`,
        isActive && 'border',
        className
      )}
      {...props}
    />
  )
}

PaginationLink.displayName = 'PaginationLink'

const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => {
  return (
    <PaginationLink {...props}>
      <div className={twMerge(`flex px-4`, className)}>
        <span>Next</span>
        <ChevronRight />
      </div>
    </PaginationLink>
  )
}

PaginationNext.displayName = PaginationNext

const PaginationPrev = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => {
  return (
    <PaginationLink {...props}>
      <div className={twMerge(`flex px-4`, className)}>
        <ChevronLeft />
        <span>Prev</span>
      </div>
    </PaginationLink>
  )
}

PaginationPrev.displayName = 'PaginationPrev'

const PaginationElipse = ({
  className,
  ...props
}: React.ComponentProps<'span'>) => {
  return (
    <span className={twMerge(``, className)} {...props}>
      <MoreHorizontal />
      <span className='sr-only'>More pages</span>
    </span>
  )
}

PaginationElipse.displayName = 'PaginationElipse'

export {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrev,
  PaginationNext,
  PaginationElipse
}
