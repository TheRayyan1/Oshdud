import * as React from 'react'
import { cn } from './utils'
export function Card({ className, ...props }:React.HTMLAttributes<HTMLDivElement>){return <div className={cn('rounded-2xl glass border-neutral-800 shadow-sm',className)} {...props}/>}
export function CardHeader({ className, ...props }:React.HTMLAttributes<HTMLDivElement>){return <div className={cn('p-6 pb-2',className)} {...props}/>}
export function CardTitle({ className, ...props }:React.HTMLAttributes<HTMLHeadingElement>){return <h3 className={cn('text-xl font-semibold text-neutral-100',className)} {...props}/>}
export function CardContent({ className, ...props }:React.HTMLAttributes<HTMLDivElement>){return <div className={cn('p-6 pt-2',className)} {...props}/>}
