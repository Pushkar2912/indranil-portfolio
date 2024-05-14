import React from 'react'
import Card from '@/components/about/card'
import { inter } from '@/lib/fonts'

const About = () => {
    return (
            <div className='h-full flex flex-col gap-10'>
                <div className='flex flex-col gap-16'>
                    <p className={`text-xl ${inter.className}`}>Skills</p>
                    <div className='flex flex-col gap-2'>
                        <div className='flex'>
                            <div className='flex gap-2 text-slate-700 text-sm'>
                                <p>3D Animation</p> <p>|</p> <p>Maya</p> <p>|</p> <p>3D Modeler</p> <p>|</p> <p>Animation</p> <p>|</p> <p className='mr-1'>Photoshop</p> <p>|</p>
                            </div>
                            <div className='flex gap-2 text-slate-700 text-sm'>
                                <p className='ml-1'>Aaftereffects</p> <p>|</p> <p>Video Editing</p> <p>|</p> <p>Lightning</p> <p>|</p> <p>Blender</p> <p>|</p> <p>TV Paint</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='flex gap-2 text-slate-700 text-sm'>
                                <p>Storyboarding</p> <p>|</p> <p>Story Writing</p> <p>|</p> <p>Research And Development</p> <p>|</p> <p>Canva</p> <p>|</p> <p className='mr-1'>iMoive</p> |
                            </div>
                            <div className='flex gap-2 text-slate-700 text-sm'>
                                <p className='ml-1'>Animaker</p> <p>|</p> <p>Adobe Pemiere Pro</p> <p>|</p> <p>Z-brush</p> <p>|</p> <p>Indesign</p> <p>|</p> <p>Krita</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-16'>
                    <p className={`text-xl ${inter.className}`}>Education</p>
                    <div className='grid grid-cols-2 gap-5'>
                        <Card institute={"MIT Institute Of Design"} standard={"M.des(Animation & Film Design)"} location={"Pune"} medium={"English"} year={"2022"} />
                        <Card institute={"Sandip Foundation (SITRC)"} standard={"Engineering"} location={"Nashik"} medium={"English"} year={"2019"} />
                        <Card institute={"K.K.Wagh Ploytechnic"} standard={"Diploma"} location={"Nashik"} medium={"English"} year={"2016"} />
                        <Card institute={"St. Francis"} standard={"10th"} location={"Nashik"} medium={"English"} year={"2013"} />
                    </div>
                </div>

                <div className='flex flex-col gap-16'>
                    <p className={`text-xl ${inter.className}`}>Certifications</p>
                    <div className='flex gap-5 mb-20 items-center'>
                        <p className='text-slate-500 text-sm'>Elementary Drawing Examination</p>
                        <p>|</p>
                        <p className='text-slate-500 text-sm'>Intermediate Drawing Examination</p>
                    </div>
                </div>
            </div>
    )
}

export default About