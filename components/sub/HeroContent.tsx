"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop, } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import { TypeAnimation } from 'react-type-animation'
import Image from 'next/image'
import { GitHub_data } from '@/constants'

const HeroContent = () => {
    return (
        <motion.div
            initial='hidden'
            animate='visible'
            className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'>
            <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
                <motion.div
                    variants={slideInFromTop}
                    className="Welcome-box py-2 px-1 border border-[#7042f88b] opacity-90 sm:py-4 sm:px-6 md:py-6 md:px-6 lg:py-6 lg:px-8 xl:py-8 xl:px-6 w-full"
                >
                    <SparklesIcon className="text-[#b49bff] mr-2 h-6 w-10 sm:h-12 sm:w-12 sm:mr-4 md:h-14 md:w-14 md:mr-6 lg:h-16 lg:w-16 lg:mr-8 xl:h-20 xl:w-20 xl:mr-10" />
                    <h1 className="Welcome-text text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl w-full break-words">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                            Hello, I&apos;m{' '}
                        </span>
                        <br />
                        <div className="overflow-hidden">
                            <TypeAnimation
                                sequence={[
                                    'Joshua',
                                    1000,
                                    'a React Full-Stack Developer',
                                    1000,
                                    'a Web Developer',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                className="inline-block"
                                repeat={Infinity}
                            />
                        </div>
                    </h1>
                </motion.div>
                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className='flex flex-col gap-6 mt-6 text-2xl font-bold max-w-[600px] w-auto h-auto'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> Hey there! I&apos;m a junior developer who loves taking an idea or thought and building it from scratch. I enjoy tackling problems, finding creative solutions, and learning new technologies along the way. When I&apos;m not programming, you&apos;ll often find me immersed in my hobbies of playing video games, learning an instrument, consuming car content or simply leveling up myself.
                        <br /> <br />
                    </span>
                </motion.div>
                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className='flex flex-col gap-6 mt-6 text-2xl font-bold my-5 max-w-[600px] text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-purple-600'
                >
                    I&apos;m on a mission to find a role where I can combine my love for programming whilst continuing to learn and solve real world problems. If you&apos;d like to connect, please don&apos;t hesitate to reach out!
                </motion.p>
            </div>
            <motion.div
                variants={slideInFromRight(0.8)}
                className='w-full h-full flex justify-center items-center'>
                <div className="flex flex-wrap">
                    {GitHub_data.map((data, index) => {
                        return <div key={index} className="div flex">
                            <Image
                                src={data.Image}
                                alt={data.name}
                                height={450}
                                width={450}
                                className='rounded-full'
                            />
                        </div>
                    })}
                </div>
            </motion.div>
        </motion.div>
    )
}

export default HeroContent