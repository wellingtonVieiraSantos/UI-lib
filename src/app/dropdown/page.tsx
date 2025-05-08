'use client'
import { Button } from '@/components/ui/Button'
import Dropdown from '@/components/ui/Dropdown'
import { ChevronDown, ChevronRight } from 'lucide-react'

export default function DropdownExample() {
  return (
    <div className='w-full min-h-full flex flex-col gap-4 py-10'>
      <h1 className='text-xl'>Dropdown menu example</h1>
      <Dropdown.Root>
        <Dropdown.Trigger>
          <Button
            variant='border'
            size='lg'
            icon={ChevronDown}
            iconPosition='right'
          >
            Button Dropdown
          </Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <div className='border-b border-terciary/40'>
            <h3>Jhon Doe</h3>
            <span className='text-sm text-terciary/50'>email@contato.com</span>
          </div>
          {/* <Dropdown.Item>
            <Button
              variantButton='ghost'
              text='Instagram'
              icon={ChevronRight}
              className='w-full justify-start'
            />
          </Dropdown.Item>
          <Dropdown.Item>
            <Button
              variantButton='ghost'
              text='TikTok'
              icon={ChevronRight}
              className='w-full justify-start'
            />
          </Dropdown.Item>
          <Dropdown.Item>
            <Button
              variantButton='ghost'
              text='Youtube'
              icon={ChevronRight}
              className='w-full justify-start'
            />
          </Dropdown.Item>
          <Dropdown.Item>
            <Button
              variantButton='ghost'
              text='Twitter'
              icon={ChevronRight}
              className='w-full justify-start'
            />
          </Dropdown.Item> */}
        </Dropdown.Content>
      </Dropdown.Root>
    </div>
  )
}
