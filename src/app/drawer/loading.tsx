import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from '@/components/ui/Card'
import Skeleton from '@/components/ui/Skeleton'

export default function Loading() {
  return (
    <div className='w-full m-auto max-w-7xl min-h-[calc(100dvh-80px)] grid grid-cols-3 p-1 gap-2 items-center justify-center'>
      {Array.from({ length: 6 }).map((_, i) => (
        <Card className='w-sm h-[600px] flex flex-col' key={i}>
          <div className='flex-2 relative'>
            <Skeleton className='size-full' />
          </div>
          <div className='relative flex-1 border-secondary/30 dark:border-terciary/30 bg-terciary dark:bg-secondary'>
            <CardHeader>
              <CardTitle>
                <Skeleton className='h-6 w-30' />
              </CardTitle>
              <CardDescription>
                <Skeleton className='h-14 w-full' />
              </CardDescription>
            </CardHeader>
            <CardContent className='text-3xl font-montserrat'>
              <Skeleton className='h-8 w-22' />
            </CardContent>
            <CardFooter>
              <Skeleton className='h-10 w-36' />
              <Skeleton className='h-10 w-20' />
            </CardFooter>
          </div>
        </Card>
      ))}
    </div>
  )
}
