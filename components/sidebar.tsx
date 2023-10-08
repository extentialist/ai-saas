import Link from 'next/link'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'

import { cn } from '@/lib/utils'
import { LayoutDashboard } from 'lucide-react'


const montserrat = Montserrat ({
  weight: "600",
  subsets: ["latin"]
 })

 const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
 ]

 const Sidebar = () => {
  return (
    <div className='flex flex-col space-y-4 py-4 h-full bg-[#111827] text-white'>
      <div className='flex-1 px-3 py-2'>
        <Link href="/dashboard" className='flex items-center pl-3 mb-14'>
          <div className='relative w-8 h-8 mr-4'>
            <Image 
             fill
             alt="logo"
             src="/images/logo.png"
            />
          </div>
          <div className={cn('text-2xl font-bold', montserrat.className)}>
            Genius
          </div>
        </Link>
        <div className='space-y-1'>
           {routes.map((route)=>(
             <Link
               href={route.href}
               key={route.href}
               className='text-xs flex group p-3 w-full justify-start cursor-pointer
                hover:text-white hover:bg-white/10 rounded-xl transition'
             >
             <div className='flex items-center flex-1'>
                 <route.icon className={cn("h-5 w-5 mr-3", route.color)}/>
                 {route.label}
             </div>
             </Link>
           ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar