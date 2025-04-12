import { ChevronsUpDown } from 'lucide-react'
import { HTMLAttributes, ReactElement } from 'react'

interface SelectRootProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement[]
}
export default function SelectRoot({ children }: SelectRootProps) {
  return (
    <div className='w-fit h-fit flex flex-col py-2 gap-2'>
      <label htmlFor='id'>{'Title Select'}</label>
      <div className='relative'>
        <select
          id='id'
          className='w-full h-full py-2 pl-2 pr-8 bg-primary border border-terciary/30 rounded appearance-none'
        >
          <option selected className='hover:bg-button-secondary'>
            Chose one option
          </option>
          {children}
        </select>
        <ChevronsUpDown size={20} className='absolute h-full top-0 right-2' />
      </div>
    </div>
  )
}
