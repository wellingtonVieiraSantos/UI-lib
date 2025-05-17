'use client'
import { Button } from '@/components/ui/Button'
import { Checkbox } from '@/components/ui/Checkbox'
import { Divider } from '@/components/ui/Divider'
import { Input } from '@/components/ui/Input'
import { Label } from '@/components/ui/Label'
import { Tabs, TabList, TabTrigger, TabContent } from '@/components/ui/Tab'
import {
  ChevronRight,
  KeyRound,
  Mail,
  User,
  Facebook,
  Github
} from 'lucide-react'

export default function Login() {
  return (
    <main className='w-full h-[calc(100dvh-80px)] grid place-content-center'>
      <Tabs
        defaultValue='login'
        className='w-full max-w-lg border border-secondary/30 dark:border-terciary/30 rounded data-[orientation=vertical]:flex'
      >
        <TabList>
          <TabTrigger value='login'>
            <span>Login</span>
          </TabTrigger>
          <TabTrigger value='register'>
            <span>Register</span>
          </TabTrigger>
        </TabList>
        <TabContent value='login'>
          <form className='grid p-2 gap-2'>
            <div className='text-sm text-center text-secondary dark:text-terciary/70 py-2 grid gap-2'>
              <div className='w-full flex items-center gap-2'>
                <Divider />
                <p>login com</p>
                <Divider />
              </div>
              <div className='flex gap-1'>
                <Button variant='border' className='flex-1 gap-2'>
                  <Github />
                  <span>Github</span>
                </Button>
                <Button variant='border' className='flex-1 gap-2'>
                  <Facebook />
                  <span>Facebook</span>
                </Button>
              </div>
              <div className='w-full flex items-center gap-2'>
                <Divider />
                <p>ou continue com e-mail</p>
                <Divider />
              </div>
            </div>
            <Label htmlFor='email'>Email</Label>
            <Input
              id='email'
              type='email'
              placeholder='example@email.com'
              icon={Mail}
            />
            <Label htmlFor='password'>Senha</Label>
            <Input
              id='password'
              type='password'
              placeholder='*********'
              icon={KeyRound}
            />
            <div className='flex items-center justify-between text-sm py-2 gap-2'>
              <div className='flex gap-2'>
                <Checkbox id='termos' className='' />
                <Label htmlFor='termos' className='cursor-pointer'>
                  Lembrar senha
                </Label>
              </div>
              <a href='#'>
                <Button variant='link'>
                  <span>Esqueceu a senha?</span>
                </Button>
              </a>
            </div>
            <Button type='submit' className='w-full'>
              <span>Login</span>
              <ChevronRight />
            </Button>
          </form>
        </TabContent>
        <TabContent value='register'>
          <form className='grid p-2 gap-2'>
            <Label htmlFor='nome'>Nome</Label>
            <Input
              id='nome'
              placeholder='Escreva nome e sobrenome'
              icon={User}
              className='w-full'
            />
            <Label htmlFor='email'>Email</Label>
            <Input
              id='email'
              type='email'
              placeholder='example@email.com'
              icon={Mail}
              className='w-full'
            />
            <Label htmlFor='password'>Password</Label>
            <Input
              id='password'
              type='password'
              placeholder='*********'
              icon={KeyRound}
            />
            <Label htmlFor='confirmPassword'>Confirmar Password</Label>
            <Input
              id='confirmPassword'
              type='password'
              placeholder='*********'
              icon={KeyRound}
            />
            <div className='flex py-2 gap-2'>
              <Checkbox id='termos' />
              <Label htmlFor='termos' className='text-sm cursor-pointer'>
                Aceito as Politicas de Privacidade
              </Label>
            </div>
            <Button type='submit' className='w-full'>
              <span>Registrar</span>
              <ChevronRight />
            </Button>
          </form>
        </TabContent>
      </Tabs>
    </main>
  )
}
