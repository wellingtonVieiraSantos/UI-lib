export default function Loading() {
  return (
    <div className='w-full h-[calc(100dvh-5rem)] grid place-content-center'>
      <div className='flex flex-col gap-4 justify-center items-center'>
        <div className='size-15 border-6 border-b-foreground rounded-full animate-spin' />
        <h1 className='text-lg'>Loading...</h1>
      </div>
    </div>
  )
}
