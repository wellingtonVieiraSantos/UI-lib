'use client'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

import { useState } from 'react'
import { Plus, Minus, ArrowUpRight, LinkIcon, User, X } from 'lucide-react'
import Search from '@/components/ui/Search'
import Badge from '@/components/ui/Badge'
import Modal from '@/components/ui/Modal'

export default function Home() {
  const [showDescribe, setShowDescribe] = useState(false)
  const [count, setCount] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(true)
  }
  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <div className='w-dvw min-h-dvh p-2 bg-primary grid gap-1 relative'>
      <h1 className='p-4 w-40 rounded text-2xl'>UI Lib</h1>
      <div className={`w-full max-w-100 border border-zinc-700 p-4`}>
        <span
          className={`leading-relaxed  ${showDescribe ? '' : 'line-clamp-1'}`}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
          tempore veritatis soluta, unde temporibus laboriosam dolores aut nobis
          expedita ad maiores? Ad velit aliquid, aut magni tenetur libero iste
          ea!
        </span>
      </div>
      {/* Button Components example */}
      <Button
        text={showDescribe ? 'Ver menos' : 'Ver mais'}
        sizeButton='md'
        variantButton='border'
        icon={showDescribe ? Minus : Plus}
        onClick={() => setShowDescribe(!showDescribe)}
      />
      <Button
        text='show more'
        iconPosition='right'
        sizeButton='lg'
        icon={ArrowUpRight}
        onClick={() => setCount(prev => prev + 10)}
      />
      <Button
        text='link for inscription'
        sizeButton='sm'
        variantButton='ghost'
        icon={LinkIcon}
      />
      <Button onlyIcon icon={X} sizeButton='md' />
      {/* Input Components example */}
      <Input
        name='nome'
        holder='escreva aqui'
        type='password'
        icon={User}
        labelText='Nome'
      />
      {/* Search Components example */}
      <Search />
      {/* Badge Components example */}
      <span className='relative w-fit h-fit p-2 border border-terciary'>
        Teste
        <Badge text={count.toString()} isNotification />
      </span>
      <Badge text='Bagde Default' variant='default' />
      <Badge text='Informação' variant='info' />
      <Badge text='Sucesso' variant='success' />
      <Badge text='Ocorreu um erro' variant='error' />
      <Badge text='Aguardando resposta' variant='warning' />
      {/* Modal Component example */}
      <Modal.Root>
        <Modal.Trigger openModal={handleOpen}>
          <Button text='Open Modal' />
        </Modal.Trigger>
        <Modal.Content isOpen={isOpen} onClose={handleClose}>
          <Modal.Header>
            <Modal.Title>
              <h2>Titulo</h2>
            </Modal.Title>
            <Button
              variantButton='ghost'
              icon={X}
              onlyIcon
              sizeButton='lg'
              onClick={handleClose}
              className='absolute top-1 right-1'
            />
          </Modal.Header>
          <Modal.Description>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
              mollitia autem ratione numquam doloribus. Quibusdam.
            </p>
          </Modal.Description>
          <div>
            <Input
              name='name'
              labelText='Messagem'
              placeholder='Envie uma mensagem'
            />
          </div>
          <Modal.Footer>
            <Modal.Action>
              <Button
                text='Fechar'
                onClick={handleClose}
                sizeButton='md'
                icon={X}
                variantButton='border'
              />
            </Modal.Action>
            <Modal.Action>
              <Button text='Enviar' onClick={handleClose} sizeButton='md' />
            </Modal.Action>
          </Modal.Footer>
        </Modal.Content>
      </Modal.Root>
      {/* Radio Component example  */}
    </div>
  )
}
