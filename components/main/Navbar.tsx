'use client'
import React, { useState } from "react"
import { RxGithubLogo, RxLinkedinLogo } from 'react-icons/rx'
import { MdOutlineMail } from "react-icons/md"
import Image from 'next/image'

const FROM_EMAIL = (process.env.FROM_EMAIL);
const TO_LINKEDIN = (process.env.TO_LINKEDIN)
const TO_GITHUB = (process.env.TO_GITHUB)

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full h-[75px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-2">
            <div className="h-full flex flex-row items-center justify-between m-auto px-[10px]">
                <a href="#about-me" className="h-auto w-auto flex flex-row items-center">
                    <Image
                        src="/NavLogo.svg"
                        alt="logo"
                        width={70}
                        height={70}
                        className="cursor-pointer hover:animate-slowspin"
                    />
                    <span className="font-bold ml-[10px] hidden md:block text-gray-300">
                        Joshua Baker
                    </span>
                </a>
                <div className="hidden md:flex w-[700px] h-full flex-row items-center justify-between">
                    <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-5 px-[20px] py-[10px] rounded-full text-gray-200">
                        <a href="#about-me" className="cursor-pointer">
                            About Me
                        </a>
                        <a href="#skills" className="cursor-pointer">
                            Skills
                        </a>
                        <a href="#projects" className="cursor-pointer">
                            Projects
                        </a>
                    </div>
                </div>
                <div className="hidden md:flex w-[400px] h-full flex-row items-center justify-end">
                    <div className="flex justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-2 px-[20px] py-[10px] rounded-full text-gray-200">
                        <a target="_blank" href={TO_GITHUB} rel="noopener noreferrer" className='flex flex-row items-center'><RxGithubLogo /><span className='ml-[6px]'>GitHub</span></a>
                        <a target="_blank" href={TO_LINKEDIN} rel="noopener noreferrer" className='flex flex-row items-center'><RxLinkedinLogo /><span className='ml-[6px]'>LinkedIn</span></a>
                        <a target="_blank" href={`mailto:${FROM_EMAIL}`} rel="noopener noreferrer" className='flex flex-row items-center'><MdOutlineMail /><span className='ml-[6px]'>Email Me</span></a>
                    </div>
                </div>
                <div className="md:hidden">
                    <button className="text-gray-200 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-[#03001417] backdrop-blur-md px-2`}>
                <a href="#about-me" className="block py-2 text-gray-200 hover:text-white">
                    About Me
                </a>
                <a href="#skills" className="block py-2 text-gray-200 hover:text-white">
                    Skills
                </a>
                <a href="#projects" className="block py-2 text-gray-200 hover:text-white">
                    Projects
                </a>
                <a target="_blank" href={TO_GITHUB} rel="noopener noreferrer" className="py-2 flex items-center text-gray-200 hover:text-white">
                    <RxGithubLogo /><span className="ml-1">GitHub</span>
                </a>
                <a target="_blank" href={TO_LINKEDIN} rel="noopener noreferrer" className="py-2 flex items-center text-gray-200 hover:text-white">
                    <RxLinkedinLogo /><span className="ml-1">LinkedIn</span>
                </a>
                <a target="_blank" href={`mailto:${FROM_EMAIL}`} rel="noopener noreferrer" className="py-2 flex items-center text-gray-200 hover:text-white">
                    <MdOutlineMail /><span className="ml-1">Email Me</span>
                </a>
            </div>
        </div>
    );
};

export default Navbar;