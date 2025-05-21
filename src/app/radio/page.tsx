'use client'
import { useRef } from 'react'
import { Button } from '@/components/ui/Button'
import { RadioRoot, RadioItem } from '@/components/ui/Radio'
import { Check, ChevronLeft, ChevronRight, X } from 'lucide-react'

export default function RadioExample() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -500 : 500
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }
  return (
    <div className='w-full min-h-full flex flex-col gap-4 py-10 ml-10'>
      <h1 className='text-xl'>Radio Component example</h1>
      <div className='relative w-full max-w-2xl scrollbar-custom'>
        <button
          onClick={() => scroll('left')}
          className='absolute left-0 z-10 top-1/2 -translate-y-1/2 size-10 px-2'
        >
          <ChevronLeft />
        </button>

        <div ref={scrollRef} className='flex w-2xl overflow-x-auto space-x-4'>
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className='min-w-[200px] h-40 bg-blue-300 flex items-center justify-center rounded'
            >
              Item {i + 1}
            </div>
          ))}
        </div>
        <button
          onClick={() => scroll('right')}
          className='absolute right-0 z-10 top-1/2 -translate-y-1/2 px-2'
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}
