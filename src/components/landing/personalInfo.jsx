import React from 'react'
import ExperienceChip from './experienceChip'
import lesiIcon from '../../../public/assets/lesi-icon.jpeg'

const PersonalInfo = () => {
    return (
        <div className='min-h-[100vh-80px] w-[50%] h-full'>
            <div className='flex flex-col gap-5'>
                <div className='flex flex-col gap-10'>
                    <p className='text-3xl'>
                        Animator Film Designer who is eager to take on new challenges and work in different domains. Being creative and innovative keeps me happy and makes me a valuable addition to the team.
                    </p>
                    <div className='flex gap-5'>
                        <button className='border rounded-full py-2 px-3 text-slate-300 text-sm bg-black'>
                            See my work
                        </button>
                        <button className='border rounded-full py-2 px-3 text-slate-600 text-sm'>
                            Contact me
                        </button>
                    </div>
                </div>

                <div className="border mt-10"></div>

                <div className='flex flex-col gap-5'>
                    <p>Working Experience</p>
                    <ExperienceChip companyIcon={lesiIcon} companyName={'Lesics Engineers Pvt Ltd'} type={'Full-time'} from={'Jan 2023'} to={'Present'} />
                </div>
            </div>
        </div>
    )
}

export default PersonalInfo