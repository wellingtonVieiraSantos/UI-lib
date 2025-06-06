export default async function RadioExample() {
  await new Promise(res => setTimeout(res, 5000))
  return (
    <div className='min-h-full flex flex-col gap-4 py-10 ml-10'>
      <h1 className='text-xl'>Radio Component example</h1>
    </div>
  )
}
