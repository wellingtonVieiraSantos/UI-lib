import { Button } from '@/components/ui/Button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/Card'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'

export default function DrawerExample() {
  /* await new Promise(res => setTimeout(res, 5000)) */
  return (
    <div className='w-full min-h-[calc(100dvh-80px)] flex flex-col p-1 items-center justify-center'>
      {/* <h1 className='text-xl pt-10'>Drawer component example</h1> */}
      <Card className='w-sm h-[600px] flex flex-col'>
        <div className='flex-2 relative'>
          <Image
            src={'/rtx4060ti.jpg'}
            alt='cadeira image'
            fill
            className='aspect-square object-cover'
          />
        </div>
        <div className='relative flex-1 border-secondary/30 dark:border-terciary/30 bg-terciary dark:bg-secondary'>
          <CardHeader>
            <CardTitle>RTX 4060 TI</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
              unde aliquam rem fugit facere illum, quis modi.
            </CardDescription>
          </CardHeader>
          <CardContent className='text-3xl font-montserrat'>$299</CardContent>
          <CardFooter>
            <Button variant='border' size='md'>
              <ShoppingCart />
              Add Cart
            </Button>
            <Button size='md'>Buy</Button>
          </CardFooter>
        </div>
      </Card>
    </div>
  )
}
