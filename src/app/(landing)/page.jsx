import Navbar from '@/components/common/navbar'
import '../../../src/app/globals.css'
import React from 'react'
import Introduction from '@/components/landing/introduction'
import PersonalInfo from '@/components/landing/personalInfo'


const Landing = () => {
  return (
    <div className={'bg-[#fffbf5] h-screen flex flex-col gap-10'}>
        <Navbar />
        <div className='flex app-container'>
            <Introduction />
            <PersonalInfo />
        </div>
    </div>
  )
}

export default Landing