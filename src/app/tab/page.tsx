'use client'

import Button from '@/components/ui/Button'
import Tab from '@/components/ui/Tab'

export default function TabExample() {
  return (
    <div className='w-full min-h-full flex flex-col gap-4 py-10'>
      <h1 className='text-xl'>Tab component example</h1>
      <Tab.Root defaultValue='item-1'>
        <Tab.Nav>
          <Tab.Header id='item-1'>
            <Button
              variantButton='ghost'
              sizeButton='md'
              text='Item 1'
              className='w-full'
            />
          </Tab.Header>
          <Tab.Header id='item-2'>
            <Button
              variantButton='ghost'
              sizeButton='md'
              text='Item 2'
              className='w-full'
            />
          </Tab.Header>
          <Tab.Header id='item-3'>
            <Button
              variantButton='ghost'
              sizeButton='md'
              text='Item 3'
              className='w-full'
            />
          </Tab.Header>
        </Tab.Nav>
        <Tab.Content id='item-1'>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
            sed officiis, accusantium tempora vero placeat ipsam. Id, esse atque
            inventore, aperiam impedit dolores vero sit commodi accusamus nam
            nisi itaque!
          </p>
        </Tab.Content>
        <Tab.Content id='item-2'>
          <p>Content 2</p>
        </Tab.Content>
        <Tab.Content id='item-3'>
          <p>Content 3</p>
        </Tab.Content>
      </Tab.Root>
    </div>
  )
}
