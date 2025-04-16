'use client'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

import { useState } from 'react'
import {
  Plus,
  Minus,
  ArrowUpRight,
  LinkIcon,
  User,
  X,
  Check,
  ChevronRight,
  ChevronDown,
  ArrowLeft
} from 'lucide-react'
import Search from '@/components/ui/Search'
import Badge from '@/components/ui/Badge'
import Modal from '@/components/ui/Modal'
import Radio from '@/components/ui/Radio'
import Dropdown from '@/components/ui/Dropdown'
import DropdownItem from '@/components/ui/Dropdown/DropdownItem'
/* import Select from '@/components/ui/Select'
 */ import Accordion from '@/components/ui/Accordion'
import Tab from '@/components/ui/Tab/'
import Drawer from '@/components/ui/Drawer'

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
    <div
      className={`w-full min-h-full overflow-hidden py-2 grid gap-4 px-2 relative`}
    >
      <h1 className='p-4 w-40 rounded text-2xl'>UI Lib</h1>
      <div className={`w-full max-w-100 border border-secondary/30 p-4`}>
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
      <span className='relative w-fit h-fit p-2 border border-secondary dark:border-terciary'>
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
          <Button text='Open Modal' sizeButton='lg' />
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
        className='border border-secondary/30 dark:border-terciary/30 w-[400px] py-2 px-4 gap-2 flex flex-col rounded'
      >
        <h2>Qual seu sexo?</h2>
        <div className='w-full flex gap-4 p-2 items-center justify-between border border-secondary/30 dark:border-terciary/30 rounded  sexo-label-radio'>
          <label htmlFor='m' className='block w-full'>
            <div className='flex flex-col'>
              Masculino
              <span className='text-[12px]'>Homem</span>
            </div>
          </label>
          <Radio.Item id='m' value='masculino' />
        </div>
        <div className='w-full flex gap-4 p-2 items-center justify-between border border-secondary/30 dark:border-terciary/30 rounded  sexo-label-radio'>
          <label htmlFor='f' className='block w-full'>
            <div className='flex flex-col'>
              Feminino
              <span className='text-[12px]'>Mulher</span>
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
            <span className='text-5xl font-bold'>
              19.90 <span className='text-sm font-medium'>R$/mes</span>
            </span>
            <p className='text-sm'>Pacote basico para projetos pequenos</p>
            <span className='text-sm'>Sem Suporte</span>
            <ul className='text-sm'>
              <li className='flex justify-center items-center gap-2'>
                <X size={16} className='text-red-500' />
                vantagem 1
              </li>
              <li className='flex justify-center items-center gap-2'>
                <X size={16} className='text-red-500' />
                vantagem 2
              </li>
              <li className='flex justify-center items-center gap-2'>
                <X size={16} className='text-red-500' />
                vantagem 3
              </li>
            </ul>
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
            <span className='text-5xl font-bold'>
              69.99 <span className='text-sm font-medium'>R$/mes</span>
            </span>
            <p className='text-sm'>Pacote custo benefício</p>
            <span className='text-sm'>
              Suporte <span className='text-xl'>8/5 h</span>
            </span>
            <ul className='text-sm list-none'>
              <li className='flex justify-center items-center gap-2'>
                <Check size={16} className='text-green-500' />
                vantagem 1
              </li>
              <li className='flex justify-center items-center gap-2'>
                <X size={16} className='text-red-500' />
                vantagem 2
              </li>
              <li className='flex justify-center items-center gap-2'>
                <X size={16} className='text-red-500' />
                vantagem 3
              </li>
            </ul>
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
            <span className='text-5xl font-bold'>
              100 <span className='text-sm font-medium'>R$/mes</span>
            </span>
            <p className='text-sm '>Pacote premium para sua empresa</p>
            <span className='text-sm'>
              Suporte <span className='text-xl'>12/6 h</span>
            </span>
            <ul className='text-sm list-none'>
              <li className='flex justify-center items-center gap-2'>
                <Check size={16} className='text-green-500' />
                vantagem 1
              </li>
              <li className='flex justify-center items-center gap-2'>
                <Check size={16} className='text-green-500' />
                vantagem 2
              </li>
              <li className='flex justify-center items-center gap-2'>
                <X size={16} className='text-red-500' />
                vantagem 3
              </li>
            </ul>
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
            <span className='text-5xl font-bold'>
              150 <span className='text-sm font-medium'>R$/mes</span>
            </span>
            <p className='text-sm '>
              Pacote profissional completo pelo menor preço
            </p>
            <span className='text-sm'>
              Suporte <span className='text-xl'>24/7 h</span>
            </span>
            <ul className='text-sm list-none'>
              <li className='flex justify-center items-center gap-2'>
                <Check size={16} className='text-green-500' />
                vantagem 1
              </li>
              <li className='flex justify-center items-center gap-2'>
                <Check size={16} className='text-green-500' />
                vantagem 2
              </li>
              <li className='flex justify-center items-center gap-2'>
                <Check size={16} className='text-green-500' />
                vantagem 3
              </li>
            </ul>
            <Button text='Assinar' sizeButton='md' className='w-full' />
          </div>
        </Radio.Item>
      </Radio.Root>
      {/* Dropdown menu example */}
      <Dropdown.Root>
        <Dropdown.Trigger>
          <Button
            variantButton='border'
            sizeButton='lg'
            text='Button Dropdown'
            icon={ChevronDown}
            iconPosition='right'
          />
        </Dropdown.Trigger>
        <Dropdown.Content>
          <div className='border-b border-secondary/40 dark:border-terciary/40'>
            <h3>Jhon Doe</h3>
            <span className='text-sm text-secondary/50 dark:text-terciary/50'>
              email@contato.com
            </span>
          </div>
          <DropdownItem>
            <Button
              variantButton='ghost'
              text='Instagram'
              icon={ChevronRight}
              className='w-full justify-start'
            />
          </DropdownItem>
          <DropdownItem>
            <Button
              variantButton='ghost'
              text='TikTok'
              icon={ChevronRight}
              className='w-full justify-start'
            />
          </DropdownItem>
          <DropdownItem>
            <Button
              variantButton='ghost'
              text='Youtube'
              icon={ChevronRight}
              className='w-full justify-start'
            />
          </DropdownItem>
          <DropdownItem>
            <Button
              variantButton='ghost'
              text='Twitter'
              icon={ChevronRight}
              className='w-full justify-start'
            />
          </DropdownItem>
        </Dropdown.Content>
      </Dropdown.Root>
      {/* Select input example */}
      {/*  <Select.Root>
        <Select.Item>Item 1</Select.Item>
        <Select.Item>Item 2</Select.Item>
        <Select.Item>Item 3</Select.Item>
      </Select.Root> */}
      {/* Accordion component example */}
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
              <span className='text-sm'>Description</span>
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
      {/*  Tab component example */}
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
      {/* Drawer component example */}
      <Drawer.Root>
        <Drawer.Trigger>
          <Button icon={Plus} text='Abrir Drawer' sizeButton='lg' />
        </Drawer.Trigger>
        <Drawer.Content>
          <div className='grid gap-8'>
            <h2 className='pt-10 text-xl'>Title</h2>
            <p className='text-sm'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, aut
              sapiente.
            </p>
            <div className='w-full h-80 border border-dashed dark:border-terciary grid place-items-center'>
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
      <div className='h-screen w-fit'></div>
    </div>
  )
}
