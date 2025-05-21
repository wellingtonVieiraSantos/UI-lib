'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

export default function AccordionExample() {
  const [index, setIndex] = useState(0)
  const items = [
    'red',
    'blue',
    'green',
    'red',
    'blue',
    'green',
    'red',
    'blue',
    'green',
    'red',
    'green'
  ]
  const itemsPerView = 2
  const totalPages = Math.ceil(items.length / itemsPerView)
  return (
    <div className='w-full min-h-full flex flex-col gap-4 py-10 p-10'>
      <h1 className='text-xl'>Accordion component example</h1>
      {/* root */}
      <div className='relative w-[1200px] overflow-hidden group'>
        {/* content */}
        <div
          className='h-[200px] relative gap-2 flex transition-transform duration-300 '
          style={{
            transform: `translateX(-${index * (100 / totalPages)}% )`,
            width: `${(items.length / itemsPerView) * 100}%`
          }}
        >
          {items.map((item, i) => (
            /* item */
            <div
              className={`w-full  rounded-lg`}
              style={{
                backgroundColor: item,
                width: `${100 / items.length}%`
              }}
              key={i}
            ></div>
          ))}
        </div>

        <div className='absolute left-1 top-1/2 -translate-y-1/2 hidden group-hover:block'>
          <button onClick={() => setIndex(p => Math.max(p - 1, 0))}>
            <ChevronLeft className='size-10 cursor-pointer' />
          </button>
        </div>
        <div className='absolute right-1 top-1/2 -translate-y-1/2 hidden group-hover:block'>
          <button
            onClick={() => setIndex(p => Math.min(p + 1, totalPages - 1))}
          >
            <ChevronRight className='size-10 cursor-pointer' />
          </button>
        </div>
        <div
          className=' w-full h-10 absolute flex justify-center items-center gap-1 bottom-0
        bg-gradient-to-t from-secondary/50 to-transparent'
        >
          {Array.from({ length: totalPages }).map((items, i) => (
            <div
              key={i}
              className={`h-2 w-8 cursor-pointer ${
                index === i ? 'bg-terciary w-6' : 'bg-terciary/30'
              } rounded-full transition duration-300`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
