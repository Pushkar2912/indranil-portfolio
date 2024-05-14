import Card from '@/components/projects/card'
import React from 'react'

const Projects = () => {
    return (
            <div className='h-screen  flex flex-col gap-10'>
                <div className='flex flex-col gap-16'>
                    <Card
                        titile={"Lesics Inhouse Projects"}
                        duration={"14 Months"}
                        description={
                            `As a 3D Animator and Lighting & FX artist at LESICS ENGINEER Pvt Ltd, Pune, I have contributed significantly to various animation projects such as Underwater construction, Weir, Panama Canal, Hoover Dam, and WTC"
            My work on 3D Animation videos for these projects has garnered over 2 million views each on YouTube
            Proficient in Blender, Maya, Photoshop, 3D Animation,Modelling, Lighting, Teturing, Rendering and Video Editing, I am seeking opportunities to further enhance my skills and contribute to innovative projects.`}
                    />

                    <Card
                        titile={"The Last Piece"}
                        duration={"06 Months"}
                        description={
                            `Conceptualized and developed a 3D Animation short film aimed at promoting positive societal impact, drawing inspiration from daily observations during travel to the studio and events in the surrounding environment
                    Collaborated with Sharkfinn studios to produce a heartwarming narrative portraying the beautiful relationship between mother and child, also emphasizing acts of kindness and selflessness Conducted thorough research to inform decision-making, involving the creation of storyboards, character variants, model sheets and animatics
                    Executed 3D Modelling, Texturing, Animation and Lighting using Blender Software, ensuring high-quality output and visual appeal`}
                    />

                    <Card
                        titile={"A Man Search for Meaning"}
                        duration={"06 Months"}
                        description={
                            `Researched, developed Mood boards, and created Storyboards for a compelling narrative centering on a resilient young boy facing bullying
                    Utilized TVPaint Animation Software to develop an impactful animatic, ensuring seamless storytelling and visual coherence Leveraged Autodesk Maya to expertly execute 3D Modelling, Texturing, Lighting, and Animation, enhancing the visual appeal and engagement of the project`}
                    />
                </div>
            </div>
    )
}

export default Projects