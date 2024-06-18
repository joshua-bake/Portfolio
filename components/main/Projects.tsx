'use client'
import React, { useRef } from 'react'
import ProjectCard from '../sub/ProjectCard'
import { projectsData } from '@/constants'
import { motion, useInView } from 'framer-motion'

const Projects = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    }

    return (
        <div id='projects' className="flex flex-col items-center justify-center py-2">
            <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>My Projects</h1>
            {/* <div className="h-full w-full flex-col md:flex-row px-10">
            </div> */}
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
                            {...project}
                        />
                    </motion.li>
                ))}
            </ul>
        </div>

    )
}

export default Projects