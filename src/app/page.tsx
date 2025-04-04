'use client'
import Button from '@/components/ui/Button'
import { useState } from 'react'
import { Plus, Minus, ArrowUpRight, LinkIcon } from 'lucide-react'

export default function Home() {
  const [showDescribe, setShowDescribe] = useState(false)

  return (
    <div className='p-2 bg-primary grid gap-2'>
      <h1 className='p-4 w-40 rounded text-2xl'>UI Lib</h1>
      <p
        className={`leading-relaxed w-100 ${
          showDescribe ? '' : 'line-clamp-1'
        } border border-zinc-700 py-1 px-4`}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
        tempore veritatis soluta, unde temporibus laboriosam dolores aut nobis
        expedita ad maiores? Ad velit aliquid, aut magni tenetur libero iste ea!
      </p>
      <Button
        text={showDescribe ? 'Ver menos' : 'Ver mais'}
        sizeButton='sm'
        variantButton='border'
        icon={showDescribe ? Minus : Plus}
        onClick={() => setShowDescribe(!showDescribe)}
      />
      <Button
        text='show more'
        iconPosition='right'
        sizeButton='lg'
        icon={ArrowUpRight}
      />
      <Button
        text='link for inscription'
        sizeButton='sm'
        variantButton='ghost'
        icon={LinkIcon}
      />
    </div>
  )
}
