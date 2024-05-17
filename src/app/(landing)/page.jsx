import React from 'react'
import Introduction from '@/components/landing/introduction'
import PersonalInfo from '@/components/landing/personalInfo'


const Landing = () => {
    return (
        <div className='lg:flex-row md:flex-row flex flex-col'>
            <Introduction />
            <PersonalInfo />
        </div>
    )
}

export default Landing