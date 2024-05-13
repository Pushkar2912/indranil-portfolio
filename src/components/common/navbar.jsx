"use client"

import Link from 'next/link'
import React from 'react'
import { activelink } from '@/lib/activeLink'

const Navbar = () => {
    return (
        <div className='app-container flex justify-between items-center p-2 bg-[#fffbf5] h-20'>
            <div className='flex gap-20 items-center'>
                <p className='text-2xl'>Indranil</p>
                <div className='flex gap-2 text-slate-600'>
                    <Link className={`link ${activelink('/')}`} href={'/'}>Home</Link>
                    <Link className={`link ${activelink('/about')}`} href={'/about'}>About</Link>
                    <Link className={`link ${activelink('/projects')}`} href={'/projects'}>Projects</Link>
                </div>
            </div>
            <button className='border rounded-full py-2 px-4 text-slate-600'>
                See my work
            </button>
        </div>
    )
}

export default Navbar