import React, { useEffect, useMemo, useState } from 'react'
import { Globe, Mail, MapPin, Phone, ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import MotionInView from '@/components/interactive/MotionInView'

export default function App(){
  const [lang,setLang]=useState<'ar'|'en'>('ar'); const isAR=lang==='ar'
  useEffect(()=>{ document.documentElement.setAttribute('dir', isAR?'rtl':'ltr'); document.documentElement.setAttribute('lang', isAR?'ar':'en') },[isAR])
  const t = useMemo(()=> ({
  ar:{brand:'OSHDUD',nav:{home:'الرئيسية',about:'عن الشركة',services:'خدماتنا',strategy:'الاستراتيجية',values:'قيمنا',contact:'تواصل معنا'},
        hero:{tag:'شريكك في الاستثمار وتطوير الأعمال',cta1:'ابدأ استثمارك معنا',cta2:'تعرّف على خدماتنا'},
        presence:{stats:[{label:'مشروع ناجح',value:200},{label:'سنة خبرة',value:15},{label:'حجم الاستثمارات',value:50,unit:'$M+'}]},
        about:{title:'عن الشركة',p1:'تم تأسيس شركات المجموعة بواسطة خبراء مهنيين ومحترفين...',p2:'تمتلك المجموعة مقارّ رئيسية في القاهرة وبرلين والرياض...'},
        edge:{title:'ما يميزنا',points:['شبكة مقارّ دولية...','تنوع استثماري...','خبرات تنفيذية...']},
        services:{title:'خدماتنا',list:['تكنولوجيا المعلومات والتحول الرقمي','الخدمات اللوجستية والنقل','السيارات الخفيفة والثقيلة','الاستثمار والتطوير العقاري','الخدمات الفندقية وإدارة الاحتفالات','مجالات الغذاء والتموين']},
        values:{title:'قيمنا',list:[{title:'الابتكار المستدام',desc:'تبني أحدث تقنيات التحول الرقمي.'},{title:'الشراكة والثقة',desc:'علاقات طويلة المدى قائمة على المصداقية.'},{title:'التنوع والمرونة',desc:'العمل عبر قطاعات متعددة.'},{title:'المسؤولية المجتمعية',desc:'دعم التنمية الاقتصادية والبيئية.'}]},
        contact:{title:'تواصل معنا',subtitle:'يسعدنا تواصلك لبدء شراكة ناجحة.',name:'الاسم',email:'البريد الإلكتروني',phone:'رقم الجوال',company:'الشركة',message:'اكتب رسالتك...',submit:'إرسال الطلب',alt:{email:'راسلنا',call:'اتصل بنا',hq:'مقارّنا'}}},
    en:{brand:'OSHDUD',nav:{home:'Home',about:'About Us',services:'Our Services',strategy:'Strategy',values:'Core Values',contact:'Contact Us'},
        hero:{tag:'Your partner in investment & growth',cta1:'Start Investing',cta2:'Explore Our Services'},
        presence:{stats:[{label:'Projects',value:200},{label:'Years Experience',value:15},{label:'Investments',value:50,unit:'$M+'}]},
        about:{title:'About Us',p1:'Founded by seasoned professionals...',p2:'Headquartered in Cairo, Berlin, and Riyadh...'},
        edge:{title:'What Sets Us Apart',points:['International presence...','Diversified investments...','Elite execution team...']},
        services:{title:'Our Services',list:['Information Technology & Digital Transformation','Logistics & Transportation','Light & Heavy Vehicles','Real Estate Development & Investment','Hospitality & Event Management','Food & Catering Services']},
        values:{title:'Core Values',list:[{title:'Sustainable Innovation',desc:'Cutting-edge digital transformation.'},{title:'Trust & Partnership',desc:'Long-term credible relationships.'},{title:'Diversity & Agility',desc:'Operate across sectors.'},{title:'Social Responsibility',desc:'Support economic & environmental initiatives.'}]},
        contact:{title:'Contact Us',subtitle:'We’d love to start a winning partnership.',name:'Full Name',email:'Email',phone:'Phone',company:'Company',message:'Write your message...',submit:'Send Request',alt:{email:'Email Us',call:'Call Us',hq:'Headquarters'}}}
  })[lang],[lang])

  const Section:React.FC<{id:string;title?:string;children:React.ReactNode;className?:string}> = ({id,title,children,className=''}) => (
    <section id={id} className={'py-20 '+className}><div className='container mx-auto px-4 max-w-7xl text-center'>
  {title && <h2 className='text-3xl md:text-4xl font-bold tracking-tight mb-8 text-amber-300' style={{fontFamily:'Calibri, Arial, sans-serif'}}>{title}</h2>}{children}
    </div></section>
  )
  const go=(id:string)=>document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'})

  return (
    <div className='min-h-screen text-neutral-200 relative' style={{ backgroundColor: '#345a5b', backgroundImage: "url('/adam-borkowski-RW0JyW6htlA-unsplash.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/80 z-0 pointer-events-none"></div>
      <div className="relative z-10">
        {/* Navbar */}
        <header className='sticky top-0 z-50 bg-black border-b border-neutral-800'>
          <div className={'max-w-7xl mx-auto px-4 h-16 flex items-center gap-8 bg-black '+(isAR ? 'flex-row-reverse' : 'flex-row')}> 
            <div className='flex-shrink-0'>
              <img src='/WhatsApp Image 2025-09-16 at 12.28.21 AM.jpeg' alt='OSHDUD logo' className='h-16 w-16 object-contain'/>
            </div>
            <div className='flex-1 flex justify-center'>
              <nav className='flex items-center gap-1'>
                {[{id:'home',label:t.nav.home},{id:'about',label:t.nav.about},{id:'strategy',label:t.nav.strategy},{id:'services',label:t.nav.services},{id:'values',label:t.nav.values},{id:'contact',label:t.nav.contact}]
                  .map(i=>(
                    <button key={i.id} onClick={()=>go(i.id)} className='px-3 py-2 rounded-md text-sm hover:text-amber-300 hover:bg-neutral-800/60 transition-colors'>{i.label}</button>
                  ))}
              </nav>
            </div>
            <Button variant='secondary' onClick={()=>setLang(isAR?'en':'ar')} className='h-9 px-3 border border-neutral-700 bg-neutral-800 text-neutral-100 hover:bg-neutral-700 ml-4'>
              <Globe className='h-4 w-4 mx-1'/>{isAR?'EN':'AR'}
            </Button>
          </div>
        </header>


    {/* Hero */}
    <section id='home' className='relative overflow-hidden'>
      {/* Removed extra background image for clarity and readability */}
        <div className='max-w-7xl mx-auto px-4 pt-10 md:pt-20 pb-24 md:pb-36'>
        <div className='max-w-3xl mx-auto text-center'>
            {/* Logo removed from hero section as requested */}
          {/* Logo removed from hero, as in reference image */}
          <p className='mt-5 text-amber-300 text-2xl md:text-3xl font-bold' style={{fontFamily:'Calibri, Arial, sans-serif'}}>{t.hero.tag}</p>
          <p className='mt-5 text-neutral-300 text-lg md:text-xl centered-copy'>
            {isAR ? 'نحن نقدّم حلول استثمارية متطورة ونساعد الشركات على النمو والتطور من خلال خبرة عميقة وفهم شامل لأسواق المنطقة.'
                  : 'We provide advanced investment solutions and help companies grow through deep expertise and regional market insight.'}
          </p>
          <div className='mt-8 flex gap-3 justify-center'>
            <Button>{t.hero.cta1}<ArrowRight className={'h-4 w-4 ml-2 '+(isAR?'rotate-180':'')}/></Button>
            <Button variant='outlineGold' onClick={()=>go('services')}>{t.hero.cta2}</Button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className='border-t border-neutral-800 bg-neutral-900/60 backdrop-blur'>
        <div className='max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center'>
          {t.presence.stats.map((s:any,i:number)=>(
            <div key={i}>
              <div className='text-3xl md:text-4xl font-bold text-amber-300'>{s.unit ? (s.unit === '$M+' ? `$${s.value}M+` : `${s.value}${s.unit}`) : `${s.value}+`}</div>
              <div className='text-neutral-300 mt-2'>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* About */}
    <Section id='about' title={t.about.title}>
      <div className={`grid md:grid-cols-2 gap-8 mt-10 ${isAR ? 'text-right' : 'text-left'}`}>
        <Card className='bg-neutral-900/70 shadow-lg border-0'>
          <CardContent className='flex flex-col items-center md:items-start gap-4 py-8'>
            <div className='flex items-center gap-3'>
              <CheckCircle className='h-7 w-7 text-amber-400'/>
              <span className='text-lg text-neutral-200 font-semibold'>{isAR ? 'تأسست بواسطة خبراء مهنيين ومحترفين...' : 'Founded by seasoned professionals...'}</span>
            </div>
            <p className='text-neutral-300 text-base md:text-lg leading-7 max-w-md'>{isAR ? 'تم تأسيس شركات المجموعة بواسطة خبراء مهنيين ومحترفين يمتلكون خبرة عميقة في الاستثمار وتطوير الأعمال.' : 'Founded by seasoned professionals with deep expertise in investment and business development.'}</p>
          </CardContent>
        </Card>
        <Card className='bg-neutral-900/70 shadow-lg border-0'>
          <CardContent className='flex flex-col items-center md:items-start gap-4 py-8'>
            <div className='flex items-center gap-3'>
              <CheckCircle className='h-7 w-7 text-amber-400'/>
              <span className='text-lg text-neutral-200 font-semibold'>{isAR ? 'مقارّ رئيسية في القاهرة وبرلين والرياض...' : 'Headquartered in Cairo, Berlin, and Riyadh...'}</span>
            </div>
            <p className='text-neutral-300 text-base md:text-lg leading-7 max-w-md'>{isAR ? 'تمتلك المجموعة مقارّ رئيسية في القاهرة وبرلين والرياض، وتعمل عبر أسواق متنوعة.' : 'The group is headquartered in Cairo, Berlin, and Riyadh, operating across diverse markets.'}</p>
          </CardContent>
        </Card>
      </div>
      <div className='mt-12'>
        <h3 className='text-2xl font-semibold mb-6 text-amber-300'>{t.edge.title}</h3>
        <div className='grid md:grid-cols-3 gap-6'>
          {t.edge.points.map((p:string,i:number)=>(<Card key={i} className='hover:border-amber-700/40'><CardContent className='pt-6'>
            <div className='flex items-start gap-3 justify-center'><CheckCircle className='h-5 w-5 text-amber-400 mt-1'/><p className='text-neutral-300 leading-7 text-center'>{p}</p></div>
          </CardContent></Card>))}
        </div>
      </div>
    </Section>


    {/* Strategy */}
  <Section id='strategy' title={t.nav.strategy}>
  <div className={`max-w-4xl mx-auto grid md:grid-cols-2 gap-6 ${isAR ? 'text-right' : 'text-left'}`}>
        {(isAR
          ? [
              'توسيع الشراكات الدولية والإقليمية في أوروبا، الخليج، وشمال أفريقيا.',
              'استثمار الفرص الواعدة في قطاعات الخدمات والتقنية والضيافة.',
              'التحول الرقمي: اعتماد أنظمة ذكية لأتمتة العمليات وتحسين الكفاءة التشغيلية.',
              'تنمية رأس المال البشري: استقطاب الكفاءات والخبرات العالمية.',
              'تعزيز الهوية العالمية عبر تواجد فاعل في الأسواق الاستراتيجية.'
            ]
          : [
              'Expand international and regional partnerships in Europe, the Gulf, and North Africa.',
              'Invest in promising opportunities in services, technology, and hospitality sectors.',
              'Digital transformation: adopt smart systems to automate operations and improve efficiency.',
              'Develop human capital: attract global talent and expertise.',
              'Strengthen global identity through active presence in strategic markets.'
            ]
        ).map((text, i) => (
          <div key={i} className='bg-neutral-800/80 rounded-xl shadow-lg p-6 flex items-start gap-4 hover:shadow-amber-400/10 transition-shadow'>
            <div className='mt-1'><CheckCircle className='h-7 w-7 text-amber-400'/></div>
            <div className='text-lg font-medium text-neutral-100'>{text}</div>
          </div>
        ))}
      </div>
    </Section>


  {/* Services */}
  <Section id='services' title={t.nav.services}>
  <div className={`max-w-4xl mx-auto grid md:grid-cols-2 gap-6 ${isAR ? 'text-right' : 'text-left'}`}> 
        {(isAR
          ? [
              'تكنولوجيا المعلومات والتحول الرقمي',
              'الخدمات اللوجستية والنقل',
              'السيارات الخفيفة والثقيلة',
              'الاستثمار والتطوير العقاري',
              'الخدمات الفندقية وخدمات الضيافة وإدارة الاحتفالات',
              'مجالات الغذاء والتموين'
            ]
          : [
              'Information Technology & Digital Transformation',
              'Logistics & Transportation',
              'Light & Heavy Vehicles',
              'Real Estate Development & Investment',
              'Hospitality & Event Management',
              'Food & Catering Services'
            ]
        ).map((service, i) => (
          <div key={i} className='bg-neutral-800/80 rounded-xl shadow-lg p-6 flex items-start gap-4 hover:shadow-amber-400/10 transition-shadow'>
            <CheckCircle className='h-7 w-7 text-amber-400 mt-1'/>
            <div className='text-lg font-medium text-neutral-100'>{service}</div>
          </div>
        ))}
      </div>
    </Section>

  {/* Values */}
  <Section id='values' title={t.nav.values}>
  <div className={`max-w-4xl mx-auto grid md:grid-cols-2 gap-6 ${isAR ? 'text-right' : 'text-left'}`}>
        {(isAR
          ? [
              {title:'الابتكار المستدام',desc:'تبني أحدث تقنيات تكنولوجيا المعلومات والتحول الرقمي.'},
              {title:'الشراكة والثقة',desc:'بناء علاقات طويلة المدى قائمة على المصداقية.'},
              {title:'التنوع والمرونة',desc:'التوسع في قطاعات وأسواق متعددة.'},
              {title:'المسؤولية المجتمعية',desc:'دعم مبادرات التنمية الاقتصادية والبيئية.'}
            ]
          : [
              {title:'Sustainable Innovation',desc:'Adopting the latest in IT and digital transformation.'},
              {title:'Partnership & Trust',desc:'Building long-term relationships based on credibility.'},
              {title:'Diversity & Agility',desc:'Expanding across multiple sectors and markets.'},
              {title:'Social Responsibility',desc:'Supporting economic and environmental initiatives.'}
            ]
        ).map((item, i) => (
          <div key={i} className='bg-neutral-800/80 rounded-xl shadow-lg p-6 flex items-start gap-4 hover:shadow-amber-400/10 transition-shadow'>
            <CheckCircle className='h-7 w-7 text-amber-400 mt-1'/>
            <div>
              <div className='text-lg font-medium mb-1 text-amber-300'>{item.title}</div>
              <div className='text-neutral-300'>{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
    <Section id='contact' title={t.contact.title}>
      <div className='grid lg:grid-cols-3 gap-8'>
  <Card className='lg:col-span-2'><CardHeader><CardTitle className='text-amber-300'>{t.contact.subtitle}</CardTitle></CardHeader>
          <CardContent>
            <form onSubmit={(e)=>{e.preventDefault(); alert(isAR?'تم استلام طلبك—سنتواصل قريبًا.':'Request received — we will contact you.')}} className='grid sm:grid-cols-2 gap-4'>
              <div><label className='text-sm text-neutral-400'>{t.contact.name}</label><Input name='name' className='mt-1' placeholder={t.contact.name}/></div>
              <div><label className='text-sm text-neutral-400'>{t.contact.email}</label><Input type='email' name='email' className='mt-1' placeholder={t.contact.email}/></div>
              <div><label className='text-sm text-neutral-400'>{t.contact.phone}</label><Input name='phone' className='mt-1' placeholder={t.contact.phone}/></div>
              <div><label className='text-sm text-neutral-400'>{t.contact.company}</label><Input name='company' className='mt-1' placeholder={t.contact.company}/></div>
              <div className='sm:col-span-2'><label className='text-sm text-neutral-400'>{t.contact.message}</label><Textarea name='message' className='mt-1 min-h-[140px]' placeholder={t.contact.message}/></div>
              <div className='sm:col-span-2 flex justify-center'><Button type='submit'>{t.contact.submit}<ArrowRight className={'h-4 w-4 ml-2 '+(isAR?'rotate-180':'')}/></Button></div>
            </form>
          </CardContent>
        </Card>
        <div className='space-y-4'>
          <Card><CardContent className='pt-6 flex items-start gap-3'><Mail className='h-5 w-5 text-amber-400 mt-1'/><div><h4 className='font-medium text-amber-300'>{t.contact.alt.email}</h4><p className='text-neutral-400 text-sm'>info@oshdud.com</p></div></CardContent></Card>
          <Card><CardContent className='pt-6 flex items-start gap-3'><Phone className='h-5 w-5 text-amber-400 mt-1'/><div><h4 className='font-medium text-amber-300'>{t.contact.alt.call}</h4><p className='text-neutral-400 text-sm'>01011080908</p></div></CardContent></Card>
          <Card><CardContent className='pt-6 flex items-start gap-3'><MapPin className='h-5 w-5 text-amber-400 mt-1'/><div><h4 className='font-medium text-amber-300'>{t.contact.alt.hq}</h4><p className='text-neutral-400 text-sm'>Cairo • Berlin • Riyadh</p></div></CardContent></Card>
        </div>
      </div>
    </Section>

    <footer className='border-t border-neutral-800 bg-neutral-900/60'>
      <div className='max-w-7xl mx-auto px-4 py-10 text-sm text-neutral-400 flex flex-col md:flex-row gap-3 items-center justify-between'>
        <p>OSHDUD © {new Date().getFullYear()}. {isAR?'جميع الحقوق محفوظة.':'All rights reserved.'}</p>
        <div className='flex items-center gap-4'><a href='#' className='hover:text-amber-300'>LinkedIn</a><a href='#' className='hover:text-amber-300'>X</a><a href='#' className='hover:text-amber-300'>Instagram</a></div>
      </div>
    </footer>
      </div>
    </div>
  )
}
