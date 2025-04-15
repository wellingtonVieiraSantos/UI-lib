import Button from '../Button'
import { SearchIcon } from 'lucide-react'
import Input from '../Input'

export default function Search() {
  return (
    <div className='w-fit relative group flex items-center'>
      <Input
        name='search'
        className='max-w-0 opacity-0 mr-2 px-0 group-focus-within:max-w-[250px] group-focus-within:px-4 group-focus-within:opacity-100 transition-all duration-300 ease-in-out'
      />
      <Button
        variantButton='border'
        icon={SearchIcon}
        sizeButton='md'
        onlyIcon
      />
    </div>
  )
}
