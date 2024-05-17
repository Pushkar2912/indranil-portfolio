"use client"

import { activelink } from '@/lib/activeLink'
import { inter } from '@/lib/fonts'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { IoHomeOutline, IoInformation } from "react-icons/io5";
import { GoProjectRoadmap } from "react-icons/go";

const NavbarSm = () => {

    const pathname = usePathname();
    return (
        <div className='md:hidden fixed flex justify-between items-center bg-[#fffbf5] h-20 top-0 left-0 w-full z-10'>
            <div className='flex gap-20 items-center'>
                <Link href={'/'}>
                    <p className={`text-xl ${inter.className}`}>Indranil</p>
                </Link>
                <div className='flex gap-10 text-slate-600'>
                    <Link className={`link ${activelink(pathname, '/')} ${inter.className} text-sm`} href={'/'}>
                        <IoHomeOutline />
                    </Link>
                    <Link className={`link ${activelink(pathname, '/about')} ${inter.className} text-sm`} href={'/about'}>
                        <IoInformation />
                    </Link>
                    <Link className={`link ${activelink(pathname, '/projects')} ${inter.className} text-sm`} href={'/projects'}>
                        <GoProjectRoadmap />
                    </Link>
                </div>
            </div>
            <Link href={'https://www.behance.net/indraniljoshi'}>
                <button className='border rounded-full py-1 px-3 text-slate-600 text-sm bg-white'>
                    Behance
                </button>
            </Link>
        </div>
    )
}

export default NavbarSm