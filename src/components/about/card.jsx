import React from 'react'

const Card = ({institute, standard, year,location, medium}) => {
  return (
    <div className='border min-h-40 max-w-2xl w-full rounded-md p-2 flex flex-col gap-2'>
        <div className='flex justify-between items-center'>
            <p className='font-medium text-slate-600'>{institute}</p>
            <p className='text-slate-500 text-sm'>{standard}</p>
        </div>
        <p className='text-slate-500 text-sm'>{year}</p>
        <p className='text-slate-500 text-sm'>{location}</p>
        <p className='text-slate-500 text-sm'>{medium}</p>
    </div>
  )
}

export default Card