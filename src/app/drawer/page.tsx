'use client'

import Button from '@/components/ui/Button'
import Drawer from '@/components/ui/Drawer'
import { ArrowLeft, Check, Plus } from 'lucide-react'

export default function DrawerExample() {
  return (
    <div className='w-full min-h-full flex flex-col gap-4 py-10'>
      <h1 className='text-xl'>Drawer component example</h1>
      <Drawer.Root isRight>
        <Drawer.Trigger>
          <Button icon={Plus} text='Abrir Drawer' sizeButton='lg' />
        </Drawer.Trigger>
        <Drawer.Content>
          <div className='grid gap-8'>
            <h2 className='pt-10 text-xl'>Title</h2>
            <p className='text-sm text-terciary/80'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, aut
              sapiente.
            </p>
            <div className='w-full h-80 border border-dashed border-terciary grid place-items-center'>
              product
            </div>
            <div className='flex gap-2 justify-end'>
              <Button
                text='Back'
                icon={ArrowLeft}
                variantButton='border'
                sizeButton='md'
              />
              <Button
                text='Confirm'
                icon={Check}
                sizeButton='md'
                iconPosition='right'
              />
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Root>
    </div>
  )
}
