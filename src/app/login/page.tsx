'use client'
import Button from '@/components/ui/Button'
import Checkbox from '@/components/ui/Checkbox'
import Divider from '@/components/ui/Divider'
import Input from '@/components/ui/Input'
import Tab from '@/components/ui/Tab'
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
    <main className='h-full grid place-content-center'>
      <Tab.Root defaultValue='teste_1'>
        <Tab.Nav>
          <Tab.Header id='teste_1' className='p-4'>
            <span>Login</span>
          </Tab.Header>
          <Tab.Header id='teste_2' className='p-4'>
            <span>Register</span>
          </Tab.Header>
        </Tab.Nav>
        <Tab.Content id='teste_1'>
          <form className='grid p-2 gap-2'>
            <div className='text-sm text-center text-terciary/70 py-2 grid gap-2'>
              <Divider>
                <p>login com</p>
              </Divider>
              <div className='flex gap-1'>
                <Button
                  text='Github'
                  variantButton='border'
                  icon={Github}
                  className='flex-1'
                />
                <Button
                  text='Facebook'
                  variantButton='border'
                  icon={Facebook}
                  className='flex-1'
                />
              </div>
              <Divider>
                <p>ou continue com e-mail</p>
              </Divider>
            </div>
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
            <div className='flex items-center justify-between text-sm py-2'>
              <Checkbox id='termos' className=''>
                <span>Lembrar senha</span>
              </Checkbox>
              <a href='#'>
                <Button variantButton='link' text='Esqueceu a senha?' />
              </a>
            </div>
            <Button
              type='submit'
              text='Login'
              iconPosition='right'
              icon={ChevronRight}
              className='w-full mt-2'
            />
          </form>
        </Tab.Content>
        <Tab.Content id='teste_2'>
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
            <div className='py-2'>
              <Checkbox id='termos'>
                <span className='text-sm'>
                  Aceito as Politicas de Privacidade
                </span>
              </Checkbox>
            </div>
            <Button
              type='submit'
              text='Registrar'
              iconPosition='right'
              icon={ChevronRight}
              className='w-full mt-4'
            />
          </form>
        </Tab.Content>
      </Tab.Root>
    </main>
  )
}
