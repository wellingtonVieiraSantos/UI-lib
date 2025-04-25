import { TextareaHTMLAttributes } from 'react'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  defaultText?: string
  resize?: boolean
}
export default function Textarea({
  defaultText,
  resize = false,
  ...props
}: TextareaProps) {
  return (
    <textarea
      className={`border border-secondary/30 dark:border-terciary/30 w-full max-w-90 px-4 py-2 ${
        !resize && 'resize-none'
      } scrollbar-custom rounded outline-none placeholder:text-secondary/60 dark:placeholder:text-terciary/60 focus-within:ring-1 ring-secondary/80 dark:ring-terciary/80`}
      {...props}
    >
      {defaultText}
    </textarea>
  )
}
