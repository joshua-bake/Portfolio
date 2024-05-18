"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop, } from '@/utils/motion'
import Image from 'next/image'
import { SparklesIcon } from '@heroicons/react/24/solid'
import { TypeAnimation } from 'react-type-animation'

const HeroContent = () => {
    return (
        <motion.div
            initial='hidden'
            animate='visible'
            className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'>
            <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
                <motion.div
                    variants={slideInFromTop}
                    className='Welcome-box py-[8px] px-[4px] border border-[#7042f88b] opacity-[0.9]'>
                    <SparklesIcon className='text-[#b49bff] mr-[10px] h-20 w-20' />
                    <h1 className='Welcome-text text-white text-6xl'><span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Hello, I&apos;m{' '}</span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Joshua',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Software Developer',
                                1000,
                                'Web Developer',
                                1000,
                                'Full Stack Engineer',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}

                            repeat={Infinity}
                        /></h1>
                </motion.div>

                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className='flex flex-col gap-6 mt-6 text-5xl font-bold text-white max-w-[600px] w-auto h-auto'
                >
                    <span>
                        Providing
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> the best </span>
                        project experience
                    </span>
                </motion.div>
                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className='text-lg text-gray-400 my-5 max-w-[600px]'
                >
                    I&apos;m a Full Stack Software Engineer with experience in Website, Mobile, and Software Development. Check out my projects and skills.
                </motion.p>
                <motion.a
                    variants={slideInFromLeft(1)}
                    className='py-3 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]'
                >
                    Learn More!
                </motion.a>
            </div>
            <motion.div
                variants={slideInFromRight(0.8)}
                className='w-full h-full flex justify-center items-center'>
                <Image
                    src='/mainIconsdark.svg' // ? Update image to something more revelant
                    alt='work icons'
                    height={650}
                    width={650}
                />
            </motion.div>
        </motion.div>
    )
}

export default HeroContent