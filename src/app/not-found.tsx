import { Button } from '@/components/ui/Button'
import { ArrowUpRight } from 'lucide-react'

export default function NotFound() {
  return (
    <div className='w-full h-[calc(100dvh-80px)] flex flex-col justify-center items-center gap-10'>
      <h1 className='text-4xl'>Page Not Found!</h1>
      <span className='text-terciary/70'>You Lost?</span>
      <Button variant='border' size='lg'>
        <span>Back</span>
        <ArrowUpRight />
      </Button>
    </div>
  )
}
