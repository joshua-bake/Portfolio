import React from 'react'
import { FaYoutube } from 'react-icons/fa'
import { RxDiscordLogo, RxGithubLogo, RxInstagramLogo, RxLinkedinLogo, RxTwitterLogo } from 'react-icons/rx'

const Footer = () => {
    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items center justify-around flex-wrap">
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <a target="_blank" href="https://github.com/joshua-bake" rel="noopener noreferrer" className='flex text-white flex-row items-center my-[15px] '><RxGithubLogo /><span className='text-xl ml-[6px]'>GitHub</span></a>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <a target="_blank" href="https://linkedin.com/in/joshuaj-baker" rel="noopener noreferrer" className='flex text-white flex-row items-center my-[15px] '><RxLinkedinLogo /><span className='text-xl ml-[6px]'>LinkedIn</span></a>
                    </div>
                </div>
                <div className='mb-[20px] text-[15px] text-center'>
                    &copy;  ItsJoshuaBaker. All rights reserved
                </div>
            </div>
        </div>

    )
}

export default Footer