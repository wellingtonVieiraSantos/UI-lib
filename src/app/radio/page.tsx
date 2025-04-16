'use client'
import Button from '@/components/ui/Button'
import Radio from '@/components/ui/Radio'
import { Check, X } from 'lucide-react'

export default function RadioExample() {
  return (
    <div className='w-full min-h-full flex flex-col gap-4 py-10'>
      <h1 className='text-xl'>Radio Component example</h1>
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
            <span className='text-5xl font-bold'>
              19.90 <span className='text-sm font-medium'>R$/mes</span>
            </span>
            <p className='text-sm text-terciary/80'>
              Pacote basico para projetos pequenos
            </p>
            <span className='text-sm'>Sem Suporte</span>
            <ul className='text-sm text-terciary/80'>
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
            <p className='text-sm text-terciary/80'>Pacote custo benefício</p>
            <span className='text-sm'>
              Suporte <span className='text-xl'>8/5 h</span>
            </span>
            <ul className='text-sm text-terciary/80 list-none'>
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
            <p className='text-sm text-terciary/80'>
              Pacote premium para sua empresa
            </p>
            <span className='text-sm'>
              Suporte <span className='text-xl'>12/6 h</span>
            </span>
            <ul className='text-sm text-terciary/80 list-none'>
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
            <p className='text-sm text-terciary/80'>
              Pacote profissional completo pelo menor preço
            </p>
            <span className='text-sm'>
              Suporte <span className='text-xl'>24/7 h</span>
            </span>
            <ul className='text-sm text-terciary/80 list-none'>
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
    </div>
  )
}
