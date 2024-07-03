import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'

interface IProjectCard {
    title: string,
    description: string,
    imgUrl: string,
    tags: string[],
    gitUrl: string,
    previewUrl: string,
    techStack: { name: string, img: string }[],
}

const ProjectCard = ({ title, description, imgUrl, gitUrl, previewUrl, techStack }: IProjectCard) => {
    return (
        <div className='group relative inline-block overflow-hidden rounded  px-12 py-3 text-sm font-medium text-slate-800'>

            <div
                className="h-52 md:h-72 rounded-t-xl relative group"
                style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
            >
                <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
                    <a
                        href={gitUrl}
                        target="_blank"
                        className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                    >
                        <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
                    </a>
                    <a
                        href={previewUrl}
                        target="_blank"
                        className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                    >
                        <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
                    </a>
                </div>
            </div>
            <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
                <h5 className="text-xl font-semibold mb-2">{title}</h5>
                <p className="text-[#ADB7BE]">{description}</p>
                <div className="flex flex-wrap">
                    {techStack?.map((tech, index) => {
                        return <div key={index} className="flex items-center mr-4 mb-2 mt-4">
                            <Image
                                src={tech.img}
                                alt={tech.name}
                                width={50}
                                height={50}
                                className='mr-2'
                            />
                            <br />
                            <p className='text-[#ADB7BE]'>{tech.name}</p>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard