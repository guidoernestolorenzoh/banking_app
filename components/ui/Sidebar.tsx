'use client'
import  Image from 'next/image'
import  Link from 'next/link'
import React from 'react'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import Footer from './Footer'

const Sidebar = ({ user }: SiderbarProps) => {
    const pathname = usePathname();
  return (
    <section className='sidebar'>
        <nav className='flex flex-col gap-4'>
            <Link href='/' className='mb-16 cursor-pointer items-center gap-2 flex'>
                <Image className='size-[24px] max-xl:size-14' src="/icons/titanium_logo.png" width={34} height={34} alt="Titanium logo" />
                <h1 className='sidebar-logo'>Titanium</h1>
            </Link>

            {sidebarLinks.map((link) => {
                const isActive = pathname === link.route || pathname.startsWith(`${link.route}/`) 
                return (
                    <Link href={link.route} className={cn('sidebar-link', {'bg-bank-gradient': isActive})} key={link.label}>
                        <div className='relative size-6'>
                            <Image src={link.imgURL} fill alt={link.label} className={cn({'brightness-[3] invert-0': isActive})} />
                        </div>
                        <p className={cn('sidebar-label', {'!text-white': isActive})}>{link.label}
                        </p>
                    </Link>
                )
            })}
            USER
        </nav>
        <Footer user={user} />
    </section>
  )
}

export default Sidebar