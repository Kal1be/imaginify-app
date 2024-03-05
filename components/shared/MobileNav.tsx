"use client"
import { navLinks } from "@/constantes"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Link from 'next/link'
import Image from 'next/image'
import { SignedIn, UserButton,SignedOut } from '@clerk/nextjs'
import { Button } from "../ui/button"
import { usePathname } from "next/navigation"
  

function MobileNav() {
  const pathname=usePathname()
  return (
    <header className='header'>
        <Link href="/" className='flex items-center gap-2  md:py-2'>
            <Image src="/assets/images/logo-text.svg" alt='my image icon' width={180} height={28}/>
        </Link>
        <nav className='flex gap-2'>
<SignedIn>
    <UserButton afterSignOutUrl='/'/>
    <Sheet>
  <SheetTrigger>
    <Image src="/assets/icons/menu.svg" alt='my image' width={32} height={32} className='cursor-pointer'/>
  </SheetTrigger>
  <SheetContent className='sheet-content sm:w-72'>
    <>
    <Image src="/assets/images/logo-text.svg" alt='my logo image ' width={152} height={23}/>
    <ul className='header-nav_elements'>
      {navLinks.slice(0,6).map((link)=>{
        const isActive=link.route===pathname
        return(
<li key={link.route}
className={`${isActive && "gradient-text"} p-18 flex whitespace-nowrap text-dark`}
>
<Link 
className="sidebar-link"
 href={link.route}
 >
  <Image src={link.icon} alt='my image ' width={24} height={24} className={` ${isActive}`}/>
  {link.label}
</Link>
</li>
        )
      })}
      </ul>
    </>
  </SheetContent>
</Sheet>

</SignedIn>
<SignedOut>
    <Button asChild className='bg-purple-gradiant bg-cover'>
      <Link href="sign-in">
        Login
      </Link>
    </Button>
  </SignedOut>
        </nav>
    </header>
  )
}

export default MobileNav
