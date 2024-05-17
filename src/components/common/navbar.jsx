"use client"

import Link from 'next/link'
import React from 'react'
import { activelink } from '@/lib/activeLink'
import { inter } from '@/lib/fonts'
import { usePathname } from 'next/navigation'

const Navbar = () => {

    const pathname = usePathname();
    return (
        <div className='md:hidden sticky lg:flex justify-between items-center bg-[#fffbf5] h-20 top-0 left-0 w-full lg:z-10'>
            <div className='flex gap-20 items-center'>
                <Link href={'/'}>
                    <p className={`text-2xl ${inter.className}`}>Indranil</p>
                </Link>
                <div className='flex gap-10 text-slate-600'>
                    <Link className={`link ${activelink(pathname, '/')} ${inter.className} text-sm`} href={'/'}>Home</Link>
                    <Link className={`link ${activelink(pathname,'/about')} ${inter.className} text-sm`} href={'/about'}>About</Link>
                    <Link className={`link ${activelink(pathname, '/projects')} ${inter.className} text-sm`} href={'/projects'}>Projects</Link>
                </div>
            </div>
            <Link href={'https://www.behance.net/indraniljoshi'}>
                <button className='border rounded-full py-2 px-4 text-slate-600 text-sm bg-white'>
                    Behance
                </button>
            </Link>
        </div>
    )
}

export default Navbar