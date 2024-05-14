import Image from 'next/image'
import React from 'react'


const ExperienceChip = ({ companyIcon, companyName, from, to, type }) => {
    return (
        <div className='border p-3 flex items-center justify-between bg-white rounded-r-full rounded-l-full'>
            <div className='flex gap-2'>
                <div className='bg-[#fffbf5] h-10 w-10 rounded-full flex items-center justify-center'>
                    <Image
                        src={companyIcon}
                        height={30}
                        width={30}
                        alt='company icon'
                    />
                </div>
                <div className='flex- flex-col'>
                    <p className='text-sm'>{type}</p>
                    <p className='text-sm font-semibold'>{companyName}</p>
                </div>
            </div>
            <p className='text-sm text-slate-400'>{`${from} - ${to}`}</p>
        </div>
    )
}

export default ExperienceChip