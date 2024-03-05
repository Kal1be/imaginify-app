"use client"
import { navLinks } from '@/constantes'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Button } from '../ui/button'

function Sidebar() {
  const pathname =usePathname()
  return (
    
    <aside className='sidebar'>
  <div className='flex size-full flex-col gap-4'>
<Link href="/" className='sidebar-logo'>
    <Image src="/assets/images/logo-text.svg" alt='my image' width={180} height={28}/>
</Link>

  <nav className='sidebar-nav'>
  <SignedIn>
    <ul className='sidebar-nav_elements'>
      {navLinks.slice(0,6).map((link)=>{
        const isActive=link.route===pathname
        return(
<li key={link.route} className={`sidebar-nav_element group ${isActive? "bg-[#6352fa] text-white":"text-gray-700"}`}>
<Link className="sidebar-link" href={link.route}>
  <Image src={link.icon} alt='my image ' width={24} height={24} className={` ${isActive && "brightness-200"}`}/>
  {link.label}
</Link>
</li>
        )
      })}
      </ul>
      <ul className='sidebar-nav_elements'>
      {navLinks.slice(6).map((link)=>{
        const isActive=link.route===pathname
        return(
<li key={link.route} className={`sidebar-nav_element group ${isActive? "bg-[#6352fa] text-white":"text-gray-700"}`}>
<Link className="sidebar-link" href={link.route}>
  <Image src={link.icon} alt='my image ' width={24} height={24} className={` ${isActive && "brightness-200"}`}/>
  {link.label}
</Link>
</li>
        )
      })}
      <li className='flex text-center gap-2 cursor-pointer p-4'>
<UserButton afterSignOutUrl='/' showName/>
      </li>
    </ul>
  </SignedIn>
  <SignedOut>
    <Button asChild className='bg-purple-gradiant bg-cover'>
      <Link href="sign-in">
        Login
      </Link>
    </Button>
  </SignedOut>
  </nav>

  </div>
    </aside>
  )
}

export default Sidebar
