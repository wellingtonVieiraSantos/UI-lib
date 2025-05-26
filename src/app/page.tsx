'use client'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

import { FormEvent, useEffect, useRef, useState } from 'react'
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
  Calculator,
  ChevronsUpDown,
  SendHorizonal,
  Lock,
  Plane
} from 'lucide-react'
import { Badge } from '@/components/ui/Badge'

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
import { Radio, RadioItem } from '@/components/ui/Radio'
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
import { Label } from '@/components/ui/Label'
import {
  Pagination,
  PaginationContent,
  PaginationElipse,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrev
} from '@/components/ui/Pagination'
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownLabel,
  DropdownSeparator,
  DropdownCheckboxItem,
  DropdownRadioGroup,
  DropdownRadioItem,
  DropdownSub,
  DropdownSubContent,
  DropdownSubTrigger
} from '@/components/ui/Dropdown'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue
} from '@/components/ui/Select'
import {
  NavigationContent,
  NavigationIndicator,
  NavigationItem,
  NavigationLink,
  NavigationList,
  NavigationMenu,
  NavigationTrigger,
  NavigationViewport
} from '@/components/ui/NavegationMenu'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@/components/ui/Collapsible'
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
  FormSubmit,
  FormSubmitError
} from '@/components/ui/Form'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/Card'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselControlLeft,
  CarouselControlMiniature,
  CarouselControlRight,
  CarouselItem
} from '@/components/ui/Carousel'
import { ScrollArea, Scrollbar } from '@/components/ui/ScrollArea'

export default function Home() {
  const [showDescribe, setShowDescribe] = useState(false)
  const [count, setCount] = useState(0)
  const [value, setValue] = useState(0)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [errorPaswword, setErrorPaswword] = useState<string | null>(null)

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
  const inputPasswordRef = useRef<HTMLInputElement | null>(null)
  const handleDelete = () => {
    console.log(inputRef.current)

    if (!inputRef.current) return
    inputRef.current.value = ''
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      if (inputPasswordRef.current?.value !== 'teste') {
        setErrorPaswword('Incorrect username or password.')
        setError(true)
        return
      } else {
        setSuccess(true)
        console.log('connected')
      }
    }, 3000)
    setErrorPaswword(null)
    setTimeout(() => {
      setSuccess(false)
      setError(false)
    }, 4000)
    console.log(success)
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
        onClick={() => setShowDescribe(!showDescribe)}
      >
        {showDescribe ? <Minus /> : <Plus />}
        <span>{showDescribe ? 'Ver menos' : 'Ver mais'}</span>
      </Button>
      <Button size='lg' onClick={() => setCount(prev => prev + 10)}>
        <span>show more</span>
        <ArrowUpRight />
      </Button>
      <Button variant='ghost'>
        <LinkIcon />
        <span>link for inscription</span>
      </Button>
      <div className='max-w-sm border dark:border-terciary/30 rounded p-4 grid gap-2'>
        <span>Buttons variants</span>
        <Button>
          <span>Default</span>
        </Button>
        <Button variant='border'>
          <span>Border</span>
        </Button>
        <Button variant='ghost'>
          <span>Ghost</span>
        </Button>
        <Button variant='link'>
          <span>Link</span>
        </Button>
        <Button disabled>
          <span>Disabled</span>
        </Button>
        <Button variant='loading'>
          <span>Loading</span>
        </Button>
        <Button variant='success'>
          <span>Success</span>
        </Button>
        <Button variant='error'>
          <span>Error</span>
        </Button>
      </div>
      <Button size='icon'>
        <X />
      </Button>
      {/* Input Components example */}
      <Input id='nome' placeholder='escreva aqui' type='password' icon={User} />
      <Input
        id='nome'
        placeholder='Quanto é 2 + 3'
        type='number'
        icon={Calculator}
        disabled
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
        <Badge variant='notification'>{count.toString()}</Badge>
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
        F
        <ModalContent>
          <ModalHeader>
            <ModalTitle asChild>
              <h2 className='text-xl'>Titulo</h2>
            </ModalTitle>
            <ModalDescription asChild>
              <p className='text-sm text-justify'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
                mollitia autem ratione numquam doloribus. Quibusdam.
              </p>
            </ModalDescription>
          </ModalHeader>
          <div>
            <Input id='name' placeholder='Envie uma mensagem' />
          </div>
          <ModalActions>
            <Button className='w-full sm:w-fit'>
              <Send />
              <span>Enviar Menssagem</span>
            </Button>
          </ModalActions>
        </ModalContent>
      </Modal>
      {/* Radio Component example  */}
      <Radio
        defaultValue='masculino'
        className='max-w-md border dark:border-terciary/30 rounded px-4 py-2 shadow-md'
      >
        <h2 className='py-2'>Qual seu sexo?</h2>
        <div className='flex flex-row-reverse justify-between items-center gap-2 border dark:border-terciary/30 p-2 rounded cursor-pointer '>
          <RadioItem value='masculino' id='masculino' disabled />
          <Label htmlFor='masculino'>
            Masculino
            <span className='text-[12px] dark:text-terciary/50'>Homem</span>
          </Label>
        </div>
        <div className='flex flex-row-reverse justify-between items-center gap-2 border dark:border-terciary/30 p-2 rounded cursor-pointer'>
          <RadioItem value='feminino' id='feminino' />
          <Label htmlFor='feminino'>
            Feminino{' '}
            <span className='text-[12px] dark:text-terciary/50'>Mulher</span>
          </Label>
        </div>
      </Radio>
      {/* Dropdown menu example */}
      <Dropdown>
        <DropdownTrigger asChild>
          <Button variant='border' size='icon' className='size-13'>
            <Share2 />
          </Button>
        </DropdownTrigger>
        <DropdownContent sideOffset={4}>
          <DropdownLabel className='p-2 text-sm'>
            <h3>Jhon Doe</h3>
            <span className='text-sm text-secondary/50 dark:text-terciary/50'>
              email@contato.com
            </span>
          </DropdownLabel>
          <DropdownSeparator />
          <DropdownItem>
            <Button variant='ghost' className='w-full justify-start'>
              <ChevronDown />
              <span>Instagram</span>
            </Button>
          </DropdownItem>
          <DropdownItem>
            <Button variant='ghost' className='w-full justify-start'>
              <ChevronDown />
              <span>TikTok</span>
            </Button>
          </DropdownItem>
          <DropdownItem>
            <Button variant='ghost' className='w-full justify-start'>
              <ChevronDown />
              <span>Youtube</span>
            </Button>
          </DropdownItem>
          <DropdownItem>
            <Button variant='ghost' className='w-full justify-start'>
              <ChevronDown />
              <span>Twitter</span>
            </Button>
          </DropdownItem>
          <DropdownLabel className='p-2 text-sm'>Sub Menu</DropdownLabel>
          <DropdownSeparator />
          <DropdownSub>
            <DropdownSubTrigger asChild>
              <Button variant='ghost' className='w-full justify-between'>
                <span>More Links</span>
                <ChevronRight />
              </Button>
            </DropdownSubTrigger>
            <DropdownSubContent>
              <DropdownLabel className='text-sm p-2'>
                Sub Menu Options
              </DropdownLabel>
              <DropdownSeparator />
              <DropdownItem>
                <Button variant='ghost' className='w-full justify-start'>
                  <ChevronDown />
                  <span>Discord</span>
                </Button>
              </DropdownItem>
              <DropdownItem>
                <Button variant='ghost' className='w-full justify-start'>
                  <ChevronDown />
                  <span>Github</span>
                </Button>
              </DropdownItem>
              <DropdownItem>
                <Button variant='ghost' className='w-full justify-start'>
                  <ChevronDown />
                  <span>Twitch</span>
                </Button>
              </DropdownItem>
              <DropdownItem>
                <Button variant='ghost' className='w-full justify-start'>
                  <span>More...</span>
                </Button>
              </DropdownItem>
            </DropdownSubContent>
          </DropdownSub>
          <DropdownLabel className='p-2 text-sm'>Checkbox Item</DropdownLabel>
          <DropdownSeparator />
          <DropdownCheckboxItem checked>Teste</DropdownCheckboxItem>
          <DropdownLabel className='p-2 text-sm'>Radio Group</DropdownLabel>
          <DropdownSeparator />
          <DropdownRadioGroup value='3'>
            <DropdownRadioItem value='1'>Item 1</DropdownRadioItem>
            <DropdownRadioItem value='2'>Item 2</DropdownRadioItem>
            <DropdownRadioItem value='3'>Item 3</DropdownRadioItem>
          </DropdownRadioGroup>
        </DropdownContent>
      </Dropdown>
      {/* Select input example */}
      <Select>
        <SelectTrigger className='w-[180px]'>
          <SelectValue placeholder='Select language' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Front-End</SelectLabel>
            <SelectItem value='text-1'>HTML</SelectItem>
            <SelectItem value='text-2'>CSS</SelectItem>
            <SelectItem value='text-3'>JavaScript</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Frameworks</SelectLabel>
            <SelectItem value='text-4'>React</SelectItem>
            <SelectItem value='text-5'>Vue</SelectItem>
            <SelectItem value='text-6' disabled>
              Angular
            </SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Back-End</SelectLabel>
            <SelectItem value='text-7'>Java</SelectItem>
            <SelectItem value='text-8'>Node</SelectItem>
            <SelectItem value='text-9' disabled>
              PHP
            </SelectItem>
            <SelectItem value='text-10'>Python</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Databases</SelectLabel>
            <SelectItem value='text-11'>MySql</SelectItem>
            <SelectItem value='text-12'>MongoDB</SelectItem>
            <SelectItem value='text-13' disabled>
              MariaDB
            </SelectItem>
            <SelectItem value='text-14'>PostgreSql</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      {/* Accordion component example */}
      <Accordion
        type='multiple'
        className='border max-w-md border-secondary/30 dark:border-terciary/30 rounded divide-y-1 divide-secondary/30 dark:divide-terciary/30'
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
                  className='w-full justify-start'
                >
                  <ChevronDown />
                  <span>Button 1</span>
                </Button>
              </li>
              <li>
                <Button
                  variant='ghost'
                  size='md'
                  className='w-full justify-start'
                >
                  <ChevronDown />
                  <span>Button 2</span>
                </Button>
              </li>
              <li>
                <Button
                  variant='ghost'
                  size='md'
                  className='w-full justify-start'
                >
                  <ChevronDown />
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
        className='max-w-sm border border-secondary/30 dark:border-terciary/30 rounded data-[orientation=vertical]:flex'
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
        <DrawerTrigger asChild>
          <Button size='lg'>
            <Plus />
            <span>Abrir Drawer</span>
          </Button>
        </DrawerTrigger>
        <DrawerContent orientation='right'>
          <div className='max-w-lg m-auto grid gap-8 mt-8'>
            <DrawerHeader>
              <DrawerTitle className='text-2xl'>Title</DrawerTitle>
              <DrawerDescription className='text-sm text-secondary/70 dark:text-terciary/70'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At,
                aut sapiente.
              </DrawerDescription>
            </DrawerHeader>
            <div className='w-full h-80 border border-dashed dark:border-terciary grid place-items-center'>
              product
            </div>
            <DrawerActions>
              <Button variant='border' size='md' className='w-full sm:w-auto'>
                <ArrowLeft />
                <span>Back</span>
              </Button>
              <Button size='md' className='w-full sm:w-auto'>
                <span>Confirm</span>
                <Check />
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
      <div className='grid place-content-center gap-4 border border-secondary/30 dark:border-terciary/30 max-w-90 py-4 rounded'>
        <div className='flex items-center gap-2'>
          <Checkbox id='check-1' />
          <Label htmlFor='check-1'>Checkbox 1</Label>
        </div>
        <div className='flex items-center gap-2'>
          <Checkbox id='check-2' disabled />
          <Label htmlFor='check-2'>Checkbox 2</Label>
        </div>
        <div className='flex items-center gap-2'>
          <Checkbox id='check-3' defaultChecked />
          <Label htmlFor='check-3'>Checkbox 3</Label>
        </div>
      </div>

      {/* Textarea component example */}
      <Textarea
        placeholder='Escreva a menssagem'
        rows={4}
        className='max-w-lg'
      />
      <Input
        id='email'
        handleDelete={handleDelete}
        ref={inputRef}
        icon={Mail}
        placeholder='exemplo@email.com'
      />
      {/* ProgressBar component example */}
      <div className='max-w-sm py-2 px-6 text-sm grid gap-2 border border-terciary/30'>
        <p className='text-terciary/70'>
          {value < 100 ? 'Loading...' : 'Completed!'}
        </p>
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
            <TooltipTrigger asChild>
              <Button variant='border'>Tooltip hover</Button>
            </TooltipTrigger>
            <TooltipContent side='bottom'>
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
                <AvatarImage alt='foto perfil' />
                <AvatarFallback>WV</AvatarFallback>
              </Avatar>
            </TooltipTrigger>
            <TooltipContent>Foto de perfil do Ton!</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      {/* Toggle Component example */}
      <div className='border border-secondary/30 dark:border-terciary/30 w-full max-w-90 p-2 flex gap-4'>
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
      <div className='size-90 flex border border-secondary/30 dark:border-terciary/30 items-center'>
        <Divider className='w-1/2 flex-none' />
        <Divider orientation='vertical' />
      </div>
      <Button variant='link'>
        <LinkIcon />
        <span>go to destination</span>
      </Button>
      <div className='flex gap-2'>
        <Button variant='border' size='icon'>
          <X />
        </Button>
        <Button variant='ghost' size='icon'>
          <X />
        </Button>
        <Button size='icon'>
          <X />
        </Button>
      </div>
      {/* ToggleGroup component example */}
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
      {/* Pagination component example */}
      <Pagination className='place-content-start'>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrev href={''} disabled />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href={'#'} isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href={'#'}>2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href={'#'}>3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationElipse />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href={'#'}>10</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href={'#'} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      {/* NavigationMenu Component example */}
      <NavigationMenu className='w-md'>
        <NavigationList>
          <NavigationItem>
            <NavigationTrigger>Products</NavigationTrigger>
            <NavigationContent>
              <div className='w-[200px] flex flex-col'>
                <NavigationLink className='w-full' href='#'>
                  Link 1
                </NavigationLink>
                <NavigationLink href='/drawer' className='w-full'>
                  Link 2
                </NavigationLink>
              </div>
            </NavigationContent>
          </NavigationItem>
          <NavigationItem>
            <NavigationTrigger>About</NavigationTrigger>
            <NavigationContent>
              <div className='w-[400px] flex flex-col'>
                <NavigationLink href='/' className='w-full'>
                  Link 1
                </NavigationLink>
                <NavigationLink href='/dropdown' className='w-full'>
                  Link 2
                </NavigationLink>
                <NavigationLink href='/login' className='w-full'>
                  Link 3
                </NavigationLink>
              </div>
            </NavigationContent>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink href='/teste'>Perfil</NavigationLink>
          </NavigationItem>
          <NavigationIndicator />
        </NavigationList>
        <NavigationViewport />
      </NavigationMenu>
      {/* Collapsible component example */}
      <Collapsible className='max-w-sm p-2 flex flex-col gap-3'>
        <div className='flex items-center gap-4 text-sm'>
          <span>@Peduarte starred 3 repositiories</span>
          <CollapsibleTrigger asChild>
            <Button size='icon' variant='border'>
              <ChevronsUpDown />
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className='border border-secondary/30 dark:border-terciary/30 rounded py-1 px-2 text-sm w-2/3'>
          <span>@radix-ui/primitives</span>
        </div>
        <CollapsibleContent>
          <div className='flex flex-col gap-3'>
            <span className='border border-secondary/30 dark:border-terciary/30 rounded py-1 px-2 text-sm w-2/3'>
              @radix-ui/colors
            </span>
            <span className='border border-secondary/30 dark:border-terciary/30 rounded py-1 px-2 text-sm w-2/3'>
              @stitches/react
            </span>
          </div>
        </CollapsibleContent>
      </Collapsible>
      {/* Form component example */}
      <Form
        className='border border-secondary/30 dark:border-terciary/30 max-w-sm p-4 flex flex-col gap-4 rounded'
        onSubmit={e => handleSubmit(e)}
      >
        <h1 className=' text-center'>Login</h1>

        <FormField name='email'>
          <FormLabel>Email</FormLabel>
          <FormControl asChild>
            <Input
              id='emailform'
              type='email'
              icon={Mail}
              required
              placeholder='Email'
              className='data-[invalid]:border-red-500 data-[invalid]:focus:ring-0'
            />
          </FormControl>
          <FormMessage match='typeMismatch'>Incorrect email</FormMessage>
          <FormMessage match='valueMissing'>Required email</FormMessage>
        </FormField>
        <FormField name='senha'>
          <FormLabel>Senha</FormLabel>
          <FormControl asChild ref={inputPasswordRef}>
            <Input
              id='senhaform'
              type='password'
              icon={Lock}
              placeholder='Password'
              required
              className='data-[invalid]:border-red-500 data-[invalid]:focus:ring-0'
            />
          </FormControl>
          <FormMessage match='valueMissing'>Required password</FormMessage>
        </FormField>
        {errorPaswword && <FormSubmitError>{errorPaswword}</FormSubmitError>}
        <FormSubmit asChild>
          <Button
            className='w-full'
            type='submit'
            variant={
              loading
                ? 'loading'
                : error
                ? 'error'
                : success
                ? 'success'
                : 'default'
            }
          >
            {loading ? (
              'Connecting...'
            ) : error ? (
              'Error'
            ) : success ? (
              'Conected!'
            ) : (
              <span className='flex items-center justify-center gap-2'>
                <SendHorizonal />
                Send
              </span>
            )}
          </Button>
        </FormSubmit>
      </Form>
      {/* Card component example */}
      <Card className='w-[300] group'>
        <Image
          width={1500}
          height={1500}
          src={'/cadeira.webp'}
          alt='cadeira image'
          className='w-full object-cover'
        />
        <div className='relative rounded-t-xl -mt-[10px]  bg-secondary '>
          <CardHeader>
            <CardTitle className='text-sm'>Product Title</CardTitle>
            <CardDescription>Lorem ipsum dolor</CardDescription>
          </CardHeader>
          <CardContent>$200</CardContent>
          <CardFooter>
            <Button>Buy</Button>
          </CardFooter>
        </div>
      </Card>
      {/* Carousel component example */}
      <Carousel className='w-full max-w-5xl h-[400px] border border-terciary/30 rounded focus:border'>
        <CarouselContent className='focus:border'>
          <CarouselItem className='relative grid place-content-center text-secondary group'>
            <div className='absolute inset-0 bg-[url(/praia.jpg)] bg-cover bg-center group-hover:blur transition duration-300' />
            <div className='hidden group-hover:flex z-10 max-w-sm flex-col items-center text-justify gap-4'>
              <h1 className='text-2xl'>Title</h1>
              <span className='text-lg'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur distinctio tempora molestias? Necessitatibus
                aspernatur in deserunt aliquid illum nesciunt dolores nisi enim
                ipsam, consectetur odit rerum corrupti? Magni, ut cupiditate?
              </span>
              <Button className='self-end px-10'>
                Travel <Plane />
              </Button>
            </div>
          </CarouselItem>
          {[
            'bg-green-500',
            'bg-blue-500',
            'bg-yellow-500',
            'bg-purple-500',
            'bg-red-500',
            'bg-pink-500'
          ].map((text, i) => (
            <CarouselItem key={i} className={`${text}`} />
          ))}
          <CarouselItem className='grid place-content-center'>Fim</CarouselItem>
        </CarouselContent>
        <CarouselControlMiniature />
        <CarouselControlLeft />
        <CarouselControlRight />
      </Carousel>

      <ScrollArea
        orientation='vertical'
        className='w-2xl h-80 whitespace-nowrap rounded border border-terciary-30 p-2'
      >
        <div className='w-full space-y-2 pr-2'>
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              className='h-40 grid place-content-center border border-terciary-30'
              key={i}
            >
              {i + 1}
            </div>
          ))}
        </div>
        <Scrollbar orientation='vertical' />
      </ScrollArea>

      <ScrollArea className='w-2xl whitespace-nowrap rounded border border-terciary-30 p-2'>
        <div className='w-full flex space-x-2 pb-2'>
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              className='size-40 grid place-content-center border border-terciary-30'
              key={i}
            >
              {i + 1}
            </div>
          ))}
        </div>
        <Scrollbar />
      </ScrollArea>

      <div className='h-screen w-md'></div>
    </div>
  )
}
