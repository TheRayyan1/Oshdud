import { motion, useAnimation, Variants } from 'framer-motion'
import { useEffect, useRef } from 'react'
export default function MotionInView({children,delay=0,y=20}:{children:React.ReactNode;delay?:number;y?:number}){
  const controls=useAnimation(); const ref=useRef<HTMLDivElement|null>(null)
  useEffect(()=>{const el=ref.current;if(!el) return; const obs=new IntersectionObserver((es)=>es.forEach(e=>{if(e.isIntersecting)controls.start('visible')}),{threshold:0.15});obs.observe(el);return()=>obs.disconnect()},[controls])
  const v:Variants={hidden:{opacity:0,y},visible:{opacity:1,y:0,transition:{duration:.6,delay}}}
  return <motion.div ref={ref} initial='hidden' animate={controls} variants={v}>{children}</motion.div>
}