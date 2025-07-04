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

export default async function DrawerExample() {
  await new Promise(res => setTimeout(res, 5000))
  return (
    <div className='w-full m-auto max-w-7xl grid grid-cols-3 p-1 gap-2 items-center justify-center'>
      {/* <h1 className='text-xl pt-10'>Drawer component example</h1> */}
      {Array.from({ length: 6 }).map((_, i) => (
        <Card className='w-sm h-[600px] flex flex-col' key={i}>
          <div className='flex-2 relative'>
            <Image
              src={'/rtx4060ti.jpg'}
              alt='cadeira image'
              fill
              className='aspect-square object-cover'
            />
          </div>
          <div className='relative flex-1 '>
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
      ))}
    </div>
  )
}
