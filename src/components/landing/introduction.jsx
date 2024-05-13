import Image from 'next/image'
import React from 'react'
import IndranilImg from '../../../public/assets/Indranil-image.jpeg'

const Introduction = () => {
    return (
        <div className='min-h-[100vh-80px] w-[50%] h-full flex flex-col gap-16  '>
            <Image
                className='rounded-3xl'
                src={IndranilImg}
                alt='Image of Author'
                width={200}
                height={200}
            />
            <div className='flex flex-col gap-5'>
                <p className='w-full text-5xl'>
                    I'm Indranil Joshi
                </p>
                <p className='w-full text-xl'>
                    Animator Film Designer based in Pune, India
                </p>
            </div>
        </div>
    )
}

export default Introduction