import * as React from 'react'
import { cn } from './utils'
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>{}
export const Textarea = React.forwardRef<HTMLTextAreaElement,TextareaProps>(({className,...p},ref)=>(
  <textarea ref={ref} className={cn('w-full rounded-xl bg-neutral-800 border border-neutral-700 text-neutral-100 px-3 py-2 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-500/40',className)} {...p}/>
))
Textarea.displayName='Textarea'