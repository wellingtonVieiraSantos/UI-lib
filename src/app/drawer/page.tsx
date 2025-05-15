export default async function DrawerExample() {
  await new Promise(res => setTimeout(res, 5000))
  return (
    <div className='w-full h-[calc(100dvh-80px)] flex'>
      <h1 className='text-xl pt-10'>Drawer component example</h1>
    </div>
  )
}
