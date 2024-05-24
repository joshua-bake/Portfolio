'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
    return (
        <div className="h-full w-full flex flex-col items-center justify-center">
            <motion.div
                variants={slideInFromTop}
                className='Welcome-box py-[8px] px-[7px] border border-[#5f30ee8b] opacity-[0.9]'>
                <SparklesIcon className='text-[#ccc0f3] mr-[10px] h-5 w-5' />
                <h1 className='Welcome-text text-2xl'>Tech Stack Skills</h1>
            </motion.div>
            <motion.div
                variants={slideInFromLeft(0.5)}
                className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'>
                Transforming projects with modern technologies
            </motion.div>
        </div>
    )
}

export default SkillText