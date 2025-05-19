'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export default function AccordionExample() {
  const [index, setIndex] = useState(0)
  const items = ['/cadeira.webp', '/tv.webp', '/rtx4060ti.jpg']
  return (
    <div className='w-full min-h-full flex flex-col gap-4 py-10 p-10'>
      <h1 className='text-xl'>Accordion component example</h1>
      {/* root */}
      <div
        className='relative w-[300px] overflow-hidden after:pointer-events-none after:absolute after:left-0 after:top-0 after:w-8 after:h-full
      after:bg-gradient-to-r after:from-secondary/70 after:to-transparent before:absolute before:right-0 before:h-full before:pointer-events-none
       before:top-0 before:w-8 before:bg-gradient-to-l before:from-secondary/70 before:to-transparent before:z-10'
      >
        {/* content */}
        <div
          className='relative flex ml-[7%] gap-2 transition-transform duration-300'
          style={{
            transform: `translateX(calc(-${index * 93.5}% )`
          }}
        >
          {items.map((item, i) => (
            /* item */
            <div className='flex-shrink-0 object-cover aspect-square' key={i}>
              <Image
                width={200}
                height={200}
                src={item}
                alt='teste'
                className='size-full rounded-lg'
              />
            </div>
          ))}
        </div>

        <div className='flex justify-between items-center mt-4 p-2 rounded'>
          <button
            onClick={() => setIndex(i => (i > 0 ? i - 1 : items.length - 1))}
          >
            <ChevronLeft />
          </button>
          <div className='flex gap-1'>
            {items.map((items, i) => (
              <div
                key={i}
                className={`size-2  ${
                  index === i ? 'bg-terciary w-4' : 'bg-terciary/30'
                } rounded-full transition duration-300`}
              />
            ))}
          </div>
          <button onClick={() => setIndex(i => (i + 1) % items.length)}>
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  )
}
