'use client'
import { Button } from '@/components/ui/Button'
import { Checkbox } from '@/components/ui/Checkbox'
import { Divider } from '@/components/ui/Divider'
import Input from '@/components/ui/Input'
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
    <main className='size-full grid place-content-center'>
      <Tabs
        defaultValue='login'
        className='w-full max-w-lg border border-terciary/30 rounded data-[orientation=vertical]:flex'
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
            <div className='text-sm text-center text-terciary/70 py-2 grid gap-2'>
              <div className='w-full flex items-center gap-2'>
                <Divider />
                <p>login com</p>
                <Divider />
              </div>
              <div className='flex gap-1'>
                <Button variant='border' icon={Github} className='flex-1 gap-2'>
                  <span>Github</span>
                </Button>
                <Button
                  variant='border'
                  icon={Facebook}
                  className='flex-1 gap-2'
                >
                  <span>Facebook</span>
                </Button>
              </div>
              <div className='w-full flex items-center gap-2'>
                <Divider />
                <p>ou continue com e-mail</p>
                <Divider />
              </div>
            </div>
            <Input
              name='email'
              type='email'
              placeholder='example@email.com'
              labelText='E-mail'
              icon={Mail}
            />
            <Input
              name='password'
              type='password'
              placeholder='*********'
              labelText='Senha'
              icon={KeyRound}
            />
            <div className='flex items-center justify-between text-sm py-2 gap-2'>
              <div className='flex gap-2'>
                <Checkbox id='termos' className='' />
                <label htmlFor='termos' className='cursor-pointer'>
                  Lembrar senha
                </label>
              </div>
              <a href='#'>
                <Button variant='link'>
                  <span>Esqueceu a senha?</span>
                </Button>
              </a>
            </div>
            <Button
              type='submit'
              iconPosition='right'
              icon={ChevronRight}
              className='w-full'
            >
              <span>Login</span>
            </Button>
          </form>
        </TabContent>
        <TabContent value='register'>
          <form className='grid p-2 gap-2'>
            <Input
              name='nome'
              placeholder='Escreva nome e sobrenome'
              labelText='Nome'
              icon={User}
              className='w-full'
            />
            <Input
              name='email'
              type='email'
              placeholder='example@email.com'
              labelText='E-mail'
              icon={Mail}
              className='w-full'
            />
            <Input
              name='password'
              type='password'
              placeholder='*********'
              labelText='Senha'
              icon={KeyRound}
            />
            <Input
              name='password'
              type='password'
              placeholder='*********'
              labelText='Confirmar Senha'
              icon={KeyRound}
            />
            <div className='flex py-2 gap-2'>
              <Checkbox id='termos' />
              <label htmlFor='termos' className='text-sm cursor-pointer'>
                Aceito as Politicas de Privacidade
              </label>
            </div>
            <Button
              type='submit'
              iconPosition='right'
              icon={ChevronRight}
              className='w-full'
            >
              <span>Registrar</span>
            </Button>
          </form>
        </TabContent>
      </Tabs>
    </main>
  )
}
