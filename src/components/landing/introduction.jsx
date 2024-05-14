import Image from 'next/image'
import React from 'react'
import IndranilImg from '../../../public/assets/Indranil-image.jpeg'
import { inter, playFairDisplay } from '@/lib/fonts'

const Introduction = () => {
    return (
        <div className='min-h-[100vh] w-[50%] h-screen flex flex-col gap-16  '>
            <Image
                className='rounded-3xl'
                src={IndranilImg}
                alt='Image of Author'
                width={200}
                height={200}
            />
            <div className='flex flex-col gap-5'>
                <p className={`${playFairDisplay.className} w-full text-5xl`}>
                    I'm Indranil Joshi
                </p>
                <p className={`w-full text-xl ${inter.className}`}>
                    3D Animator and Graphic Designer based in Pune, India
                </p>
            </div>
        </div>
    )
}

export default Introduction