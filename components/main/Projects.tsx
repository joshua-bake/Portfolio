'use client'
import React, { useRef } from 'react'
import ProjectCard from '../sub/ProjectCard'
import { RxGithubLogo } from 'react-icons/rx'
import { projectsData } from '@/constants'
import { motion, useInView } from 'framer-motion'
import SkillDataProvider from '../sub/SkillDataProvider'

//? Add repo link and deployed link

const Projects = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    }

    return (
        <div id='projects' className="flex flex-col items-center justify-center py-20 ">
            <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>My Projects</h1>
            <div className="h-full w-full flex-col md:flex-row px-10">
                {/* {projectsData.map((project, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                    >
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.imgUrl}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                            src={''}
                            tags={[]}
                            skill_name={''}
                            skill_img={''}
                        />

                    </motion.li>
                ))} */}
                {/* <a target="_blank" href="https://github.com/joshua-bake" rel="noopener noreferrer" className='flex text-white flex-row items-center my-[15px] '><RxGithubLogo /><span className='text-[15px] ml-[6px]'>GitHub</span></a>
                <ProjectCard
                    src='/SongSaga.png'
                    title='Interactive Website Cards'
                    description='Sweet danish tiramisu ice cream pastry bonbon. Donut soufflé pastry biscuit donut biscuit cake.'
                />
                <ProjectCard
                    src='/BodyBlitzers.png'
                    title='Space Themed Website'
                    description='Sweet danish tiramisu ice cream pastry bonbon. Donut soufflé pastry biscuit donut biscuit cake.'
                />
                <ProjectCard
                    src='/LabRunner.png'
                    title='Frogger Themed Game'
                    description='Sweet danish tiramisu ice cream pastry bonbon. Donut soufflé pastry biscuit donut biscuit cake.'
                /> */}
            </div>
            {/* <main className='flex container mx-auto py-20'>
                <section className='grid grid-cols-3 gap-4'>
                    <div className='p-4 border border-purple-600 rounded-[12px] flex flex-col gap-1 col-span-1'>
                        <ProjectCard
                            src='/BrainBites.png'
                            title='Modern Next.js Portfolio'
                            description='Sweet danish tiramisu ice cream pastry bonbon. Donut soufflé pastry biscuit donut biscuit cake.'
                        />
                        <span className='text-white text-[28px] font-bold'>Project 1</span>
                        <span className='text-white text-[16px]'>Repo Link</span>
                        <span className='text-white text-[16px]'>Deployed Link</span>
                    </div>
                    <div className='p-4 border border-purple-600 rounded-[12px] flex flex-col gap-1 col-span-1'>
                        <ProjectCard
                            src='/SongSaga.png'
                            title='Interactive Website Cards'
                            description='Sweet danish tiramisu ice cream pastry bonbon. Donut soufflé pastry biscuit donut biscuit cake.'
                        />
                        <span className='text-white text-[28px] font-bold'>Project 2</span>
                        <span className='text-white text-[16px]'>Repo Link</span>
                        <span className='text-white text-[16px]'>Deployed Link</span>
                    </div>
                    <div className='p-4 border border-purple-600 rounded-[12px] flex flex-col gap-1 col-span-1'>
                        <ProjectCard
                            src='/BodyBlitzers.png'
                            title='Space Themed Website'
                            description='Sweet danish tiramisu ice cream pastry bonbon. Donut soufflé pastry biscuit donut biscuit cake.'
                        />
                        <span className='text-white text-[28px] font-bold'>Project 3</span>
                        <span className='text-white text-[16px]'>Repo Link</span>
                        <span className='text-white text-[16px]'>Deployed Link</span>
                    </div>
                    <div className='p-4 border border-purple-600 rounded-[12px] flex flex-col gap-1 col-span-2'>
                        <ProjectCard
                            src='/LabRunner.png'
                            title='Space Themed Website'
                            description='Sweet danish tiramisu ice cream pastry bonbon. Donut soufflé pastry biscuit donut biscuit cake.'
                        />
                        <span className='text-white text-[28px] font-bold'>Project 4</span>
                        <span className='text-white text-[16px]'>Repo Link</span>
                        <span className='text-white text-[16px]'>Deployed Link</span>
                    </div>
                </section>
            </main> */}
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12 px-10 h-full w-full">
                {projectsData.map((project, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                    >
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.imgUrl}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        src={''}
                        tags={[]}
                        skill_name={''}
                        skill_img={''}
                        />
                    </motion.li>
                ))}
                {/* {projectsData.map((projects, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                    >
                        <ProjectCard
                            key={projects.id}
                            width='70'
                            height='70'
                            // skill_name={projects.skill_name}
                            src={projects.skill_img}
                        />

                    </motion.li>
                ))} */}

            </ul>
        </div>

    )
}

export default Projects