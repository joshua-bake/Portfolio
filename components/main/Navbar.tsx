'use client'
import React from "react";
import { RxGithubLogo, RxLinkedinLogo } from 'react-icons/rx'
import { MdOutlineMail } from "react-icons/md";

const FROM_EMAIL = (process.env.FROM_EMAIL);

const Navbar = () => {

    return (
        <div className="w-full h-[65px] md:grid-cols-2 fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
            <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
                <a href="#about-me" className="h-auto w-auto flex flex-row items-center">
                    {/* <Image
                        src="/NavLogo.png"
                        alt="logo"
                        width={70}
                        height={70}
                        className="cursor-pointer hover:animate-slowspin"
                    /> */}
                    <span className="font-bold ml-[10px] hidden md:block text-gray-300">
                        Joshua Baker
                    </span>
                </a>

                <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
                    <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
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

                <div className="flex flex-row gap-5">
                    {/* {Socials.map((social) => (
                        <Image
                            src={social.src}
                            alt={social.name}
                            key={social.name}
                            width={35}
                            height={35}
                        />
                    ))} */}
                    <a target="_blank" href="https://github.com/joshua-bake" rel="noopener noreferrer" className='flex text-white flex-row items-center my-[15px] '><RxGithubLogo /><span className='text-[15px] ml-[6px]'>GitHub</span></a>
                    <a target="_blank" href="https://linkedin.com/in/joshuaj-baker" rel="noopener noreferrer" className='flex text-white flex-row items-center my-[15px] '><RxLinkedinLogo /><span className='text-[15px] ml-[6px]'>LinkedIn</span></a>
                    <a target="_blank" href={`mailto:${FROM_EMAIL}`} rel="noopener noreferrer" className='flex text-white flex-row items-center my-[15px] '><MdOutlineMail /><span className='text-[15px] ml-[6px]'>Email Me</span></a>


                </div>
            </div>
        </div>
    );
};

export default Navbar;