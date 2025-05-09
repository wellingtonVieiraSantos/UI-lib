'use client'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

import { useEffect, useRef, useState } from 'react'
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
  ArrowLeft,
  Share2,
  SearchIcon,
  Mail,
  FileJson,
  Send,
  Calculator
} from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import Dropdown from '@/components/ui/Dropdown'
import DropdownItem from '@/components/ui/Dropdown/DropdownItem'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from '@/components/ui/Accordion'
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerTitle,
  DrawerDescription,
  DrawerHeader,
  DrawerActions
} from '@/components/ui/Drawer'
import { Switch } from '@/components/ui/Switch'
import Skeleton from '@/components/ui/Skeleton'
import { Checkbox } from '@/components/ui/Checkbox'
import { Textarea } from '@/components/ui/Textarea'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { Divider } from '@/components/ui/Divider'
import { Toggle } from '@/components/ui/Toggle'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/ToogleGroup'
import { RadioRoot, RadioItem } from '@/components/ui/Radio'
import { TabContent, TabList, Tabs, TabTrigger } from '@/components/ui/Tab'
import {
  Modal,
  ModalTrigger,
  ModalContent,
  ModalTitle,
  ModalDescription,
  ModalActions,
  ModalHeader
} from '@/components/ui/Modal'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/Tooltip'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar'

export default function Home() {
  const [showDescribe, setShowDescribe] = useState(false)
  const [count, setCount] = useState(0)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const progress = setInterval(() => {
      setValue(prev => {
        if (value >= 100) {
          clearInterval(progress)
          return 100
        } else {
          return prev + 1
        }
      })
    }, 20)
    return () => clearInterval(progress)
  }, [value])

  const inputRef = useRef<HTMLInputElement | null>(null)
  const handleDelete = () => {
    console.log(inputRef.current)

    if (!inputRef.current) return
    inputRef.current.value = ''
  }

  return (
    <div
      className={`w-full min-h-full overflow-hidden py-2 grid gap-4 px-2 relative`}
    >
      <h1 className='p-4 w-40 rounded text-2xl'>UI Lib</h1>
      <div
        className={`w-full max-w-100 border border-secondary/30 dark:border-terciary/30 p-4`}
      >
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
        size='md'
        variant='border'
        icon={showDescribe ? Minus : Plus}
        onClick={() => setShowDescribe(!showDescribe)}
      >
        <span>{showDescribe ? 'Ver menos' : 'Ver mais'}</span>
      </Button>
      <Button
        iconPosition='right'
        size='lg'
        icon={ArrowUpRight}
        onClick={() => setCount(prev => prev + 10)}
      >
        <span>show more</span>
      </Button>
      <Button size='sm' variant='ghost' icon={LinkIcon}>
        <span>link for inscription</span>
      </Button>
      <Button icon={X} size='icon' />
      {/* Input Components example */}
      <Input id='nome' placeholder='escreva aqui' type='password' icon={User} />
      <Input
        id='nome'
        placeholder='Quanto é 2 + 3'
        type='number'
        icon={Calculator}
      />
      <Input
        id='busca'
        placeholder='Pesquisar...'
        type='search'
        icon={SearchIcon}
      />
      {/* Badge Components example */}
      <span className='relative w-fit h-fit p-2 border border-secondary dark:border-terciary'>
        Teste
        <Badge isNotification>{count.toString()}</Badge>
      </span>
      <Badge>Badge Default</Badge>
      <Badge variant='outline'>
        <Mail size={16} /> Badge Default Border
      </Badge>
      <Badge variant='info'>Informação</Badge>
      <Badge variant='success'>Sucesso</Badge>
      <Badge variant='error'>Ocorreu um erro</Badge>
      <Badge variant='warning'>Aguardando resposta</Badge>
      {/* Modal Component example */}
      <Modal>
        <ModalTrigger asChild>
          <Button size='lg'>
            <span>Open Modal</span>
          </Button>
        </ModalTrigger>
        <ModalContent>
          <ModalHeader>
            <ModalTitle asChild>
              <h2 className='text-xl'>Titulo</h2>
            </ModalTitle>
            <ModalDescription asChild>
              <p className='text-terciary/80 text-sm text-justify'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
                mollitia autem ratione numquam doloribus. Quibusdam.
              </p>
            </ModalDescription>
          </ModalHeader>
          <div>
            <Input id='name' placeholder='Envie uma mensagem' />
          </div>
          <ModalActions>
            <Button size='md' icon={Send} className='w-full sm:w-fit'>
              <span>Enviar Menssagem</span>
            </Button>
          </ModalActions>
        </ModalContent>
      </Modal>
      {/* Radio Component example  */}
      <RadioRoot
        defaultValue='masculino'
        className='w-sm max-w-md border border-terciary/30 rounded px-4 py-2'
      >
        <h2 className='py-2'>Qual seu sexo?</h2>
        <div className='flex flex-row-reverse justify-between items-center gap-2 border border-terciary/30 p-2 rounded cursor-pointer'>
          <RadioItem value='masculino' id='masculino' disabled />
          <label
            htmlFor='masculino'
            className='flex flex-col peer-disabled:cursor-not-allowed'
          >
            Masculino
            <span className='text-[12px] text-terciary/50'>Homem</span>
          </label>
        </div>
        <div className='flex flex-row-reverse justify-between items-center gap-2 border border-terciary/30 p-2 rounded cursor-pointer'>
          <RadioItem value='feminino' id='feminino' />
          <label htmlFor='feminino' className='flex flex-col'>
            Feminino{' '}
            <span className='text-[12px] text-terciary/50'>Mulher</span>
          </label>
        </div>
      </RadioRoot>
      {/* Dropdown menu example */}
      <Dropdown.Root>
        <Dropdown.Trigger>
          <Button
            variant='border'
            size='icon'
            icon={Share2}
            className='size-13'
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
              variant='ghost'
              icon={ChevronRight}
              className='w-full justify-start'
            >
              <span>Instagram</span>
            </Button>
          </DropdownItem>
          <DropdownItem>
            <Button
              variant='ghost'
              icon={ChevronRight}
              className='w-full justify-start'
            >
              <span>TikTok</span>
            </Button>
          </DropdownItem>
          <DropdownItem>
            <Button
              variant='ghost'
              icon={ChevronRight}
              className='w-full justify-start'
            >
              <span>Youtube</span>
            </Button>
          </DropdownItem>
          <DropdownItem>
            <Button
              variant='ghost'
              icon={ChevronRight}
              className='w-full justify-start'
            >
              <span>Twitter</span>
            </Button>
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
      <Accordion
        type='multiple'
        className='border max-w-md border-terciary/30 rounded divide-y-1 divide-terciary/30'
      >
        <AccordionItem value='item-1' disabled>
          <AccordionTrigger>
            <span>Item 1</span>
          </AccordionTrigger>
          <AccordionContent>
            <span className='p-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              id saepe quisquam ex nemo repellendus hic, quibusdam itaque atque
              explicabo iste quasi vel dolore. Facilis sint obcaecati sit saepe
              aliquam?
            </span>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2'>
          <AccordionTrigger>
            <span>Item 2</span>
          </AccordionTrigger>
          <AccordionContent>
            <ul>
              <li>
                <Button
                  variant='ghost'
                  size='md'
                  icon={ChevronDown}
                  className='w-full justify-start'
                >
                  <span>Button 1</span>
                </Button>
              </li>
              <li>
                <Button
                  variant='ghost'
                  size='md'
                  icon={ChevronDown}
                  className='w-full justify-start'
                >
                  <span>Button 2</span>
                </Button>
              </li>
              <li>
                <Button
                  variant='ghost'
                  size='md'
                  icon={ChevronDown}
                  className='w-full justify-start'
                >
                  <span>Button 3</span>
                </Button>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-3'>
          <AccordionTrigger>
            <span>Item 3</span>
          </AccordionTrigger>
          <AccordionContent>
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
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      {/*  Tab component example */}
      <Tabs
        defaultValue='item-1'
        className='max-w-sm border border-terciary/30 rounded data-[orientation=vertical]:flex'
      >
        <TabList>
          <TabTrigger value='item-1'>Item 1</TabTrigger>
          <TabTrigger value='item-2'>Item 2</TabTrigger>
          <TabTrigger value='item-3' disabled>
            Item 3
          </TabTrigger>
        </TabList>
        <TabContent value='item-1'>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
            sed officiis, accusantium tempora vero placeat ipsam. Id, esse atque
            inventore, aperiam impedit dolores vero sit commodi accusamus nam
            nisi itaque!
          </p>
        </TabContent>
        <TabContent value='item-2'>
          <p>Content 2</p>
        </TabContent>
        <TabContent value='item-3'>
          <p>Content 3</p>
        </TabContent>
      </Tabs>
      {/* Drawer component example */}
      <Drawer>
        <DrawerTrigger>
          <Button icon={Plus} size='lg'>
            <span>Abrir Drawer</span>
          </Button>
        </DrawerTrigger>
        <DrawerContent orientation='left'>
          <div className='max-w-lg m-auto grid gap-8 mt-8'>
            <DrawerHeader>
              <DrawerTitle className='text-2xl'>Title</DrawerTitle>
              <DrawerDescription className='text-sm text-terciary/70'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At,
                aut sapiente.
              </DrawerDescription>
            </DrawerHeader>
            <div className='w-full h-80 border border-dashed dark:border-terciary grid place-items-center'>
              product
            </div>
            <DrawerActions>
              <Button
                icon={ArrowLeft}
                variant='border'
                size='md'
                className='w-full sm:w-auto'
              >
                <span>Back</span>
              </Button>
              <Button
                icon={Check}
                size='md'
                iconPosition='right'
                className='w-full sm:w-auto'
              >
                <span>Confirm</span>
              </Button>
            </DrawerActions>
          </div>
        </DrawerContent>
      </Drawer>
      {/* Switch Component example */}
      <div className='flex gap-5 items-center'>
        <p>Ativar Vantagens premium</p>
        <Switch />
        <Switch disabled />
      </div>
      {/* Skeleton component example */}
      <div className='flex items-center gap-2 border border-secondary/30 dark:border-terciary/30 w-fit p-2 rounded '>
        <Skeleton className='w-14 h-14 rounded-full' />
        <div className='grid gap-1'>
          <Skeleton className='w-70 h-5' />
          <Skeleton className='w-40 h-5' />
        </div>
      </div>
      {/* Checkbox component example */}
      <div className='grid place-content-center gap-4 border border-terciary/30 max-w-90 py-4 rounded'>
        <div className='flex items-center gap-2'>
          <Checkbox id='check-1' />
          <label
            htmlFor='check-1'
            className='peer-disabled:cursor-not-allowed peer-disabled:text-terciary/50 cursor-pointer'
          >
            Checkbox 1
          </label>
        </div>
        <div className='flex items-center gap-2'>
          <Checkbox id='check-2' disabled />
          <label
            htmlFor='check-2'
            className='peer-disabled:cursor-not-allowed peer-disabled:text-terciary/50 cursor-pointer'
          >
            Checkbox 2
          </label>
        </div>
        <div className='flex items-center gap-2'>
          <Checkbox id='check-3' defaultChecked />
          <label
            htmlFor='check-3'
            className='peer-disabled:cursor-not-allowed peer-disabled:text-terciary/50 cursor-pointer'
          >
            Checkbox 3
          </label>
        </div>
      </div>

      {/* Textarea component example */}
      <Textarea placeholder='Escreva a menssagem' rows={4} />
      <Input
        id='email'
        handleDelete={handleDelete}
        ref={inputRef}
        icon={Mail}
        placeholder='exemplo@email.com'
      />
      {/* ProgressBar component example */}
      <div className='max-w-lg py-2 px-6 text-sm grid gap-2 border border-terciary/30'>
        <p className='text-terciary/70'>In progress...</p>
        <ProgressBar value={value} />
      </div>
      {/* Avatar component example */}
      <Avatar>
        <AvatarImage src={'/perfil.png'} alt='foto perfil' />
        <AvatarFallback>WV</AvatarFallback>
      </Avatar>
      {/* Tooltip Component example */}
      <div className='m-auto flex gap-4'>
        <TooltipProvider>
          <Tooltip delayDuration={0}>
            <TooltipTrigger>
              <Button variant='border'>Tooltip hover</Button>
            </TooltipTrigger>
            <TooltipContent side='left'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
              dignissimos explicabo aut, exercitationem deserunt incidunt
              praesentium nesciunt porro, odit delectus nemo dolorum doloremque
              inventore voluptatibus ducimus tempore excepturi unde tenetur.
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip delayDuration={0}>
            <TooltipTrigger className=''>
              <Avatar className='size-20'>
                <AvatarImage src={'/rperfil.png'} alt='foto perfil' />
                <AvatarFallback>WV</AvatarFallback>
              </Avatar>
            </TooltipTrigger>
            <TooltipContent>Foto de perfil do Ton!</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      {/* Toggle Component example */}
      <div className='border border-terciary/30 w-full max-w-90 p-2 flex gap-4'>
        <h2 className='grid place-content-center flex-1'>Toggle Buttons </h2>
        <div className='grid gap-2 flex-1'>
          <Toggle disabled className='w-full'>
            <FileJson />
            <span>JavaScript</span>
          </Toggle>
          <Toggle className='w-full'>
            <FileJson />
            <span>CSS</span>
          </Toggle>
          <Toggle className='w-full'>
            <FileJson />
            <span>HTML</span>
          </Toggle>
        </div>
      </div>
      {/* Divider Componente Example */}
      <div className='size-90 flex border border-terciary/30 items-center'>
        <Divider className='w-1/2 flex-none' />
        <Divider orientation='vertical' />
      </div>
      <Button icon={LinkIcon} variant='link'>
        <span>go to destination</span>
      </Button>
      <div className='flex gap-2'>
        <Button icon={X} variant='border' size='icon' />
        <Button icon={X} variant='ghost' size='icon' />
        <Button icon={X} size='icon' />
      </div>
      <ToggleGroup type='multiple' disabled>
        <ToggleGroupItem value='1'>html</ToggleGroupItem>
        <ToggleGroupItem value='2'>css</ToggleGroupItem>
        <ToggleGroupItem value='3'>javascript</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup type='single'>
        <ToggleGroupItem value='4'>html</ToggleGroupItem>
        <ToggleGroupItem value='5' disabled>
          css
        </ToggleGroupItem>
        <ToggleGroupItem value='6'>javascript</ToggleGroupItem>
      </ToggleGroup>
      <div className='h-screen w-md'></div>
    </div>
  )
}
