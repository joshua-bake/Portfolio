import React from 'react'
import { MdOutlineMail } from 'react-icons/md';
import { RxGithubLogo, RxLinkedinLogo } from 'react-icons/rx'

const Footer = () => {

    const FROM_EMAIL = (process.env.FROM_EMAIL);
    const TO_LINKEDIN = (process.env.TO_LINKEDIN)
    const TO_GITHUB = (process.env.TO_GITHUB)

    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items center justify-around flex-wrap">
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <a target="_blank" href={TO_GITHUB} rel="noopener noreferrer" className='flex text-white text-xl flex-row items-center my-[15px] '><RxGithubLogo /><span className='text-[15px] ml-[6px]'>GitHub</span></a>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <a target="_blank" href={`mailto:${FROM_EMAIL}`} rel="noopener noreferrer" className='flex text-white text-xl flex-row items-center my-[15px] '><MdOutlineMail /><span className='text-[15px] ml-[6px]'>Email Me</span></a>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <a target="_blank" href={TO_LINKEDIN} rel="noopener noreferrer" className='flex text-white text-xl flex-row items-center my-[15px] '><RxLinkedinLogo /><span className='text-[15px] ml-[6px]'>LinkedIn</span></a>
                    </div>
                </div>
                <div className='mb-[20px] mt-2 text-[15px] text-center'>
                    &copy;  ItsJoshuaBaker. All rights reserved
                </div>
            </div>
        </div>

    )
}

export default Footer