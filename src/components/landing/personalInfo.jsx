import React from 'react'
import ExperienceChip from './experienceChip'
import { playFairDisplay } from '@/lib/fonts'

const PersonalInfo = () => {
    return (
        <div className='min-h-[100vh] flex md:w-[50%] lg:w-[50%] h-screen mb-40'>
            <div className='flex flex-col gap-5'>
                <div className='flex flex-col gap-10'>
                    <p className={`text-3xl ${playFairDisplay.className}`}>
                        Animator Film Designer who is eager to take on new challenges and work in different domains. Being creative and innovative keeps me happy and makes me a valuable addition to the team.
                    </p>
                    <div className='flex gap-5'>
                        <button className='border rounded-full py-2 px-4 text-slate-300 text-sm bg-black'>
                            See my work
                        </button>
                        <button className='border rounded-full py-2 px-4 text-slate-600 text-sm bg-white'>
                            Contact me
                        </button>
                    </div>
                </div>

                <div className="border mt-10"></div>

                <div className='flex flex-col gap-5'>
                    <p className={`${playFairDisplay.className} text-lg`}>Working Experience</p>
                    <ExperienceChip companyIcon={'/assets/lesi-icon.jpeg'} companyName={'Lesics Engineers Pvt Ltd'} type={'Full-time'} from={'Jan 2023'} to={'Present'} />
                </div>

                <div className="border mt-10"></div>

                <div className='flex flex-col gap-5'>
                    <p className={`${playFairDisplay.className} text-lg`}>Internships</p>
                    <ExperienceChip companyIcon={'/assets/sharkin-icon.webp'} companyName={'Sharkfinn Studios'} type={'Full-time'} from={'Jan 2022'} to={'Jun 2022'} />
                    <ExperienceChip companyIcon={'/assets/syn-icon.png'} companyName={'SYU Design Studio'} type={'Full-time'} from={'Jun 2021'} to={'Jul 2021'} />
                </div>
            </div>
        </div>
    )
}

export default PersonalInfo