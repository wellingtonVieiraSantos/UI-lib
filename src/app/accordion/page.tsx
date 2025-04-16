'use client'
import Accordion from '@/components/ui/Accordion'
import Button from '@/components/ui/Button'
import { ChevronDown } from 'lucide-react'

export default function AccordionExample() {
  return (
    <div className='w-full min-h-full flex flex-col gap-4 py-10'>
      <h1 className='text-xl'>Accordion component example</h1>
      <Accordion.Root className=''>
        <Accordion.Item value='item-1'>
          <Accordion.Header>
            <span>Item 1</span>
          </Accordion.Header>
          <Accordion.Content>
            <span className='p-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              id saepe quisquam ex nemo repellendus hic, quibusdam itaque atque
              explicabo iste quasi vel dolore. Facilis sint obcaecati sit saepe
              aliquam?
            </span>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value='item-2'>
          <Accordion.Header>
            <span>Item 2</span>
          </Accordion.Header>
          <Accordion.Content>
            <ul>
              <li>
                <Button
                  variantButton='ghost'
                  sizeButton='md'
                  text='Button 1'
                  icon={ChevronDown}
                  className='w-full justify-start'
                />
              </li>
              <li>
                <Button
                  variantButton='ghost'
                  sizeButton='md'
                  text='Button 2'
                  icon={ChevronDown}
                  className='w-full justify-start'
                />
              </li>
              <li>
                <Button
                  variantButton='ghost'
                  sizeButton='md'
                  text='Button 3'
                  icon={ChevronDown}
                  className='w-full justify-start'
                />
              </li>
            </ul>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value='item-3'>
          <Accordion.Header>
            <span>Item 3</span>
          </Accordion.Header>
          <Accordion.Content>
            <div className='p-2'>
              <span className='text-sm text-terciary/50'>Description</span>
              <span className='block'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam odio sunt eaque cum quas asperiores quidem.
              </span>
              <ul className='list-disc list-inside pl-3'>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
              </ul>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  )
}
