'use client'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

import { useRef, useState } from 'react'
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
  Send
} from 'lucide-react'
import Badge from '@/components/ui/Badge'
import Dropdown from '@/components/ui/Dropdown'
import DropdownItem from '@/components/ui/Dropdown/DropdownItem'
import Accordion from '@/components/ui/Accordion'
import Drawer from '@/components/ui/Drawer'
import { Switch } from '@/components/ui/Switch'
import Toast from '@/components/ui/Toast'
import Skeleton from '@/components/ui/Skeleton'
import Checkbox from '@/components/ui/Checkbox'
import Textarea from '@/components/ui/Textarea'
import ProgressBar from '@/components/ui/ProgressBar'
import Divider from '@/components/ui/Divider'
import Toggle from '@/components/ui/Toggle'
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

export default function Home() {
  const [showDescribe, setShowDescribe] = useState(false)
  const [count, setCount] = useState(0)

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
        sizeButton='md'
        variantButton='border'
        icon={showDescribe ? Minus : Plus}
        onClick={() => setShowDescribe(!showDescribe)}
      >
        <span>{showDescribe ? 'Ver menos' : 'Ver mais'}</span>
      </Button>
      <Button
        iconPosition='right'
        sizeButton='lg'
        icon={ArrowUpRight}
        onClick={() => setCount(prev => prev + 10)}
      >
        <span>show more</span>
      </Button>
      <Button sizeButton='sm' variantButton='ghost' icon={LinkIcon}>
        <span>link for inscription</span>
      </Button>
      <Button icon={X} sizeButton='icon' />
      {/* Input Components example */}
      <Input
        name='nome'
        holder='escreva aqui'
        type='password'
        icon={User}
        labelText='Nome'
        className='max-w-sm'
      />
      <Input
        name='busca'
        holder='Pesquisar...'
        type='search'
        icon={SearchIcon}
        className='max-w-sm'
      />
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
      <Modal>
        <ModalTrigger>
          <Button sizeButton='lg'>
            <span>Open Modal</span>
          </Button>
        </ModalTrigger>
        <ModalContent>
          <ModalHeader>
            <ModalTitle>
              <h2 className='text-xl'>Titulo</h2>
            </ModalTitle>
            <ModalDescription>
              <p className='text-terciary/80 text-sm text-justify'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
                mollitia autem ratione numquam doloribus. Quibusdam.
              </p>
            </ModalDescription>
          </ModalHeader>
          <div>
            <Input
              name='name'
              labelText='Messagem'
              placeholder='Envie uma mensagem'
            />
          </div>
          <ModalActions>
            <Button sizeButton='md' icon={Send} className='w-full sm:w-fit'>
              <span>Enviar Menssagem</span>
            </Button>
          </ModalActions>
        </ModalContent>
      </Modal>
      {/* Radio Component example  */}
      <RadioRoot
        defaultValue='masculino'
        className='max-w-md border border-terciary/30 rounded px-4 py-2'
      >
        <h2 className='py-2'>Qual seu sexo?</h2>
        <label
          htmlFor='masculino'
          className='flex flex-row-reverse items-center justify-between gap-2 border border-terciary/30 p-2 rounded cursor-pointer'
        >
          <RadioItem value='masculino' id='masculino' disabled />
          <div className='flex flex-col'>
            Masculino
            <span className='text-[12px] text-terciary/50'>Homem</span>
          </div>
        </label>
        <label
          htmlFor='feminino'
          className='flex flex-row-reverse items-center justify-between gap-2 border border-terciary/30 p-2 rounded cursor-pointer'
        >
          <RadioItem value='feminino' id='feminino' />
          <div className='flex flex-col'>
            Feminino{' '}
            <span className='text-[12px] text-terciary/50'>Mulher</span>
          </div>
        </label>
      </RadioRoot>
      {/* Dropdown menu example */}
      <Dropdown.Root>
        <Dropdown.Trigger>
          <Button
            variantButton='border'
            sizeButton='icon'
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
              variantButton='ghost'
              icon={ChevronRight}
              className='w-full justify-start'
            >
              <span>Instagram</span>
            </Button>
          </DropdownItem>
          <DropdownItem>
            <Button
              variantButton='ghost'
              icon={ChevronRight}
              className='w-full justify-start'
            >
              <span>TikTok</span>
            </Button>
          </DropdownItem>
          <DropdownItem>
            <Button
              variantButton='ghost'
              icon={ChevronRight}
              className='w-full justify-start'
            >
              <span>Youtube</span>
            </Button>
          </DropdownItem>
          <DropdownItem>
            <Button
              variantButton='ghost'
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
                  icon={ChevronDown}
                  className='w-full justify-start'
                >
                  <span>Button 1</span>
                </Button>
              </li>
              <li>
                <Button
                  variantButton='ghost'
                  sizeButton='md'
                  icon={ChevronDown}
                  className='w-full justify-start'
                >
                  <span>Button 2</span>
                </Button>
              </li>
              <li>
                <Button
                  variantButton='ghost'
                  sizeButton='md'
                  icon={ChevronDown}
                  className='w-full justify-start'
                >
                  <span>Button 3</span>
                </Button>
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
      <Drawer.Root isRight>
        <Drawer.Trigger>
          <Button icon={Plus} sizeButton='lg'>
            <span>Abrir Drawer</span>
          </Button>
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
              <Button icon={ArrowLeft} variantButton='border' sizeButton='md'>
                <span>Back</span>
              </Button>
              <Button icon={Check} sizeButton='md' iconPosition='right'>
                <span>Confirm</span>
              </Button>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Root>
      {/* Switch Component example */}
      <div className='flex gap-5 items-center'>
        <p>Ativar Vantagens premium</p>
        <Switch />
        <Switch disabled />
      </div>
      {/* Toast Component example */}
      <Toast.Root>
        <Toast.Trigger>
          <Button variantButton='border'>
            <span>Toast</span>
          </Button>
        </Toast.Trigger>
        <Toast.Content>
          <Toast.Title>
            <h1>Title</h1>
          </Toast.Title>
          <Toast.Message>
            <p>message for toast.</p>
          </Toast.Message>
        </Toast.Content>
      </Toast.Root>
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
        <Checkbox id='check-1' defaultChecked>
          <span>Checkbox 1</span>
        </Checkbox>
        <Checkbox id='check-2'>
          <span>Checkbox 2</span>
        </Checkbox>
        <Checkbox id='check-3' defaultChecked>
          <span>Checkbox 3</span>
        </Checkbox>
      </div>

      {/* Textarea component example */}
      <Textarea placeholder='Escreva a menssagem' rows={4} />
      <Input
        name='email'
        handleDelete={handleDelete}
        ref={inputRef}
        icon={Mail}
        labelText='Email'
        holder='exemplo@email.com'
        className='max-w-sm'
      />
      {/* ProgressBar component example */}
      <div className='max-w-90 p-2 pb-10 text-sm grid gap-2 border border-terciary/30'>
        <p className='text-terciary/70'>In progress...</p>
        <ProgressBar id='progress' textProgress='Buscando dados...' />
      </div>
      {/* Toggle Component example */}
      <div className='border border-terciary/30 w-full max-w-90 p-2 flex gap-4'>
        <h2 className='grid place-content-center flex-1'>Toggle Buttons </h2>
        <div className='grid gap-2 flex-1'>
          <Checkbox
            id='html'
            isToggle
            className='py-2 px-4 border border-terciary/30 peer-checked:bg-button-secondary'
          >
            <span>HTML</span>
          </Checkbox>
          <Checkbox
            id='css'
            isToggle
            className='py-2 px-4 border border-terciary/30 peer-checked:bg-button-secondary'
          >
            <span>CSS</span>
          </Checkbox>
          <Checkbox
            id='js'
            isToggle
            className='py-2 px-4 border border-terciary/30 peer-checked:bg-button-secondary'
          >
            <span>JS</span>
          </Checkbox>
          <Toggle disabled>
            <FileJson />
            <span>JavaScript</span>
          </Toggle>
        </div>
      </div>

      {/* Divider Componente Example */}
      <div className='size-90 flex border border-terciary/30 p-2'>
        <Divider className='flex-1' direction='vertical'>
          <span>Texto</span>
        </Divider>
        <Divider className='flex-1'>
          <span>Texto</span>
        </Divider>
      </div>
      <Button icon={LinkIcon} variantButton='link'>
        <span>go to destination</span>
      </Button>
      <div className='flex gap-2'>
        <Button icon={X} variantButton='border' sizeButton='icon' />
        <Button icon={X} variantButton='ghost' sizeButton='icon' />
        <Button icon={X} sizeButton='icon' />
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
