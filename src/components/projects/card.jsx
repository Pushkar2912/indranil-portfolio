import React from 'react'

const Card = ({titile, duration, description}) => {
  return (
    <div className='flex flex-col gap-6 border rounded-md p-4 bg-white'>
        <div className=''>
            <p className='font-semibold text-slate-600'>{titile}</p>
            <p className='text-xs text-slate-500'>{duration}</p>
        </div>
        <p className='text-sm text-slate-500 text-justify'>{description}</p>
    </div>
  )
}

export default Card