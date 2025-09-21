import * as React from 'react'
import { cn } from './utils'
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { variant?: 'primary'|'secondary'|'outlineGold' }
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant='primary', ...props }, ref) => (
  <button ref={ref} className={cn(
    'inline-flex items-center justify-center rounded-xl text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-amber-500/40 disabled:opacity-50 disabled:pointer-events-none h-12 px-6 shadow-sm',
    variant==='primary' ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-black hover:from-amber-400 hover:to-yellow-400 shadow-[0_10px_30px_rgba(251,191,36,0.25)]' :
    variant==='outlineGold' ? 'border border-amber-400/80 text-amber-300 bg-transparent hover:bg-amber-500/10' :
    'border border-neutral-700 bg-neutral-900/80 text-neutral-100 hover:bg-neutral-800/80',
    className)} {...props} />
))
Button.displayName='Button'