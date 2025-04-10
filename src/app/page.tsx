'use client'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

import { useState } from 'react'
import { Plus, Minus, ArrowUpRight, LinkIcon, User, X } from 'lucide-react'
import Search from '@/components/ui/Search'
import Badge from '@/components/ui/Badge'
import Modal from '@/components/ui/Modal'
import Radio from '@/components/ui/Radio'

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
    <div className='w-dvw min-h-dvh p-2 bg-primary grid gap-4 relative'>
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
      <Radio.Root
        defaultValue='masculino'
        groupName='sexo'
        className='border border-terciary/30 w-[400px] py-2 px-4 gap-2 flex flex-col rounded'
      >
        <h2>Qual seu sexo?</h2>
        <div className='w-full flex gap-4 p-2 items-center justify-between border border-terciary/30 rounded  sexo-label-radio'>
          <label htmlFor='m' className='block w-full'>
            <div className='flex flex-col'>
              Masculino
              <span className='text-[12px] text-terciary/50'>Homem</span>
            </div>
          </label>
          <Radio.Item id='m' value='masculino' />
        </div>
        <div className='w-full flex gap-4 p-2 items-center justify-between border border-terciary/30 rounded  sexo-label-radio'>
          <label htmlFor='f' className='block w-full'>
            <div className='flex flex-col'>
              Feminino
              <span className='text-[12px] text-terciary/50'>Mulher</span>
            </div>
          </label>
          <Radio.Item id='f' value='feminino' />
        </div>
      </Radio.Root>
      {/* radio Component card exemple */}
      <Radio.Root groupName='planos' className='flex gap-2'>
        <Radio.Item
          id='basico'
          value='basico'
          isHidden
          cardLabelCustom
          className='w-[300px] h-[400px]'
        >
          <div className='w-full flex flex-col justify-evenly gap-4 py-6 px-4 text-center'>
            <h3 className='text-2xl text-left'>Básico</h3>
            <span className='text-4xl'>
              19.90 <span className='text-sm'>R$/mes</span>
            </span>
            <p className='text-sm text-terciary/80'>
              Pacote basico para projetos pequenos
            </p>
            <span className='text-sm'>Sem Suporte</span>
            <Button text='Assinar' sizeButton='md' className='w-full' />
          </div>
        </Radio.Item>
        <Radio.Item
          id='normal'
          value='normal'
          isHidden
          cardLabelCustom
          className='w-[300px] h-[400px]'
        >
          <div className='w-full flex flex-col justify-evenly gap-4 py-6 px-4 text-center'>
            <h3 className='text-2xl text-left'>Normal</h3>
            <span className='text-4xl'>
              69.99 <span className='text-sm'>R$/mes</span>
            </span>
            <p className='text-sm text-terciary/80'>Pacote custo benefício</p>
            <span className='text-sm'>
              Suporte <span className='text-xl'>8/5 h</span>
            </span>
            <Button text='Assinar' sizeButton='md' className='w-full' />
          </div>
        </Radio.Item>
        <Radio.Item
          id='premium'
          value='premium'
          isHidden
          cardLabelCustom
          className='w-[300px] h-[400px]'
        >
          <div className='w-full flex flex-col justify-evenly gap-4 py-6 px-4 text-center'>
            <h3 className='text-2xl text-left'>Premium</h3>
            <span className='text-4xl'>
              100 <span className='text-sm'>R$/mes</span>
            </span>
            <p className='text-sm text-terciary/80'>
              Pacote premium para sua empresa
            </p>
            <span className='text-sm'>
              Suporte <span className='text-xl'>12/6 h</span>
            </span>
            <Button text='Assinar' sizeButton='md' className='w-full' />
          </div>
        </Radio.Item>
        <Radio.Item
          id='extra-premium'
          value='extraPremium'
          isHidden
          cardLabelCustom
          className='w-[300px] h-[400px]'
        >
          <div className='w-full flex flex-col justify-evenly gap-4 py-6 px-4 text-center'>
            <h3 className='text-2xl text-left'>Profissional</h3>
            <span className='text-4xl'>
              150 <span className='text-sm'>R$/mes</span>
            </span>
            <p className='text-sm text-terciary/80'>
              Pacote profissional completo pelo menor preço
            </p>
            <span className='text-sm'>
              Suporte <span className='text-xl'>24/7 h</span>
            </span>
            <Button text='Assinar' sizeButton='md' className='w-full' />
          </div>
        </Radio.Item>
      </Radio.Root>
    </div>
  )
}
