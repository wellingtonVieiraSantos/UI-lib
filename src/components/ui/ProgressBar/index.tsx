import { InputHTMLAttributes, useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

interface ProgressBarProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  ref?: React.Ref<HTMLInputElement>
}

export default function ProgressBar({ id, ref }: ProgressBarProps) {
  const [value, setValue] = useState(0)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    /* error mock */
    if (value > 70) {
      const error2 = new Error('error')
      setError(error2)
      return
    }
    /* success mock */
    const progressInterval = setInterval(() => {
      setValue(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return prev
        }
        return prev + 1
      })
    }, 50)
    return () => clearInterval(progressInterval)
  }, [value])

  return (
    <div className='w-full max-w-90 p-4'>
      <div className='relative w-full h-3 bg-terciary/40 rounded-full'>
        <div
          className={`absolute inset-0 bg-button-secondary rounded-full ${
            value === 100 && 'bg-green-700'
          } ${error && 'bg-red-500'}`}
          style={{ width: `${value}%` }}
        />
        <div
          className={twMerge(`absolute top-5 transform -translate-x-1/2 w-10 h-5 bg-button-secondary text-terciary rounded grid place-content-center
          after:absolute after:left-1/2 after:bottom-full after:size-0 after:transform after:-translate-x-1/2 after:border-l-4 after:border-l-transparent
          after:border-r-4 after:border-r-transparent after:border-b-8 after:border-b-button-secondary ${
            value === 100 && 'bg-green-700 after:border-b-green-700'
          } ${error && 'bg-red-500 after:border-b-red-500'}`)}
          style={{ left: `${value}%` }}
        >
          {value}%
        </div>
      </div>
      <input
        type='range'
        name={id}
        id={id}
        className='hidden'
        value={value}
        ref={ref}
        onChange={e => setValue(e.target.valueAsNumber)}
      />
      {value === 100 && (
        <p className='pt-2 text-green-400 text-base'>Sucesso</p>
      )}
      {error && <p className='pt-2 text-red-400 text-base'>Ocorreu um erro.</p>}
    </div>
  )
}
