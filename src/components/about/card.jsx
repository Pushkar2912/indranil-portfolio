import React from 'react'

const Card = ({ institute, standard, year, location, medium }) => {
    return (
        <div className='border min-h-35 max-w-xl w-full rounded-md p-2 flex flex-col gap-10 bg-white'>
            <div className='flex justify-between items-center'>
                <p className='font-medium text-slate-600'>{institute},{location}</p>
                <p className='text-slate-500 text-sm'>{standard}</p>
            </div>
            <div className='flex gap-10 items-center justify-between'>
                <p className='text-slate-500 text-sm'>{year}</p>
                <p className='text-slate-500 text-sm'>{medium}</p>
            </div>
        </div>
    )
}

export default Card