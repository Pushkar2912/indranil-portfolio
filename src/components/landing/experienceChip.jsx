import Image from 'next/image'
import React from 'react'


const ExperienceChip = ({ companyIcon, companyName, from, to, type }) => {
    return (
        <div className='border rounded-3xl p-3 flex items-center justify-between bg-white'>
            <Image
                src={companyIcon}
                height={30}
                width={30}
            />
            <div className='flex- flex-col'>
                <p className='text-sm'>{type}</p>
                <p className='text-sm font-semibold'>{companyName}</p>
            </div>
            <p className='text-sm text-slate-400'>{`${from} - ${to}`}</p>
        </div>
    )
}

export default ExperienceChip