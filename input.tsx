import * as React from 'react'
import { cn } from './utils'
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{}
export const Input = React.forwardRef<HTMLInputElement,InputProps>(({className,...p},ref)=>(
  <input ref={ref} className={cn('w-full h-10 rounded-xl bg-neutral-800 border border-neutral-700 text-neutral-100 px-3 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-500/40',className)} {...p}/>
))
Input.displayName='Input'