"use client"

import Link from 'next/link'
import React from 'react'
import { activelink } from '@/lib/activeLink'
import { inter } from '@/lib/fonts'

const Navbar = () => {
    return (
        <div className='app-container flex justify-between items-center p-2 bg-[#fffbf5] h-20'>
            <div className='flex gap-20 items-center'>
                <p className={`text-2xl ${inter.className}`}>Indranil</p>
                <div className='flex gap-10 text-slate-600'>
                    <Link className={`link ${activelink('/')} ${inter.className} text-sm`} href={'/'}>Home</Link>
                    <Link className={`link ${activelink('/about')} ${inter.className} text-sm`} href={'/about'}>About</Link>
                    <Link className={`link ${activelink('/projects')} ${inter.className} text-sm`} href={'/projects'}>Projects</Link>
                </div>
            </div>
            <button className='border rounded-full py-2 px-4 text-slate-600 text-sm'>
                See my work
            </button>
        </div>
    )
}

export default Navbar