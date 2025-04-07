'use client'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

import { useState } from 'react'
import { Plus, Minus, ArrowUpRight, LinkIcon, User } from 'lucide-react'
import Search from '@/components/ui/Search'

export default function Home() {
  const [showDescribe, setShowDescribe] = useState(false)
  const [teste, setTeste] = useState('')

  return (
    <div className='p-2 bg-primary grid gap-2'>
      <h1 className='p-4 w-40 rounded text-2xl'>UI Lib</h1>
      <div className={`w-100 border border-zinc-700 p-4`}>
        <span
          className={`leading-relaxed  ${showDescribe ? '' : 'line-clamp-1'}`}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
          tempore veritatis soluta, unde temporibus laboriosam dolores aut nobis
          expedita ad maiores? Ad velit aliquid, aut magni tenetur libero iste
          ea!
        </span>
      </div>
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
      <Input
        name='nome'
        holder=''
        type='text'
        icon={User}
        iconPosition='right'
        onChange={e => setTeste(e.target.value)}
      />
      {<span>{teste}</span>}
      <Search />
    </div>
  )
}
