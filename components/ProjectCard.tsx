"use client"
import  { useState } from 'react';
import {motion} from 'framer-motion';

interface Props {
    image: string;
    title: string;
    text: string;
    g_link?: string;
    l_link?:string;
    
}

const ProjectCard = ({ image, title, text, g_link,l_link}: Props) => {
    const [isFlipped, setIsFlipped] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)

    function handleFlip() {
        if(!isAnimating) {
            setIsFlipped(!isFlipped)
            setIsAnimating(true)
        }
    }
  return (
    <div
    onClick={handleFlip}
    className='w-[450px] h-[280px] rounded-md cursor-pointer'>
        <motion.div
        className='flip-card-inner w-full h-full'
        initial={false}
        animate={{rotateY: isFlipped ? 180 : 360}}
        transition={{ duration: 0.6, animationDirection: 'normal'}}
        onAnimationComplete={() => setIsAnimating(false)}
        >
            <div
            style={{backgroundImage: `url(${image})`}}
            className='w-full h-full group relative flip-card-front bg-cover bg-center text-white rounded-lg p-4'>
                    <div  className='absolute inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-40'/>
                    <div className='absolute inset-0 w-full h-full text-[20px] pb-10 hidden group-hover:flex items-center z-[20] justify-center'>
                     Details
                    </div>
            </div>
            <div
            style={{backgroundImage: `url(${image})`}}
            className='w-full h-full group relative flip-card-back bg-cover bg-center text-white rounded-lg p-4'>
                    <div  className='absolute inset-0 w-full h-full rounded-md bg-black opacity-50 z-[-1]'/>
                  <div className='flex flex-col gap-6  z-[30]'>
                    <h1 className='text-white text-2xl font-semibold'>{title}</h1>
                    <p className='text-gray-200 text-[18px]'>
                        {text}
                    </p>

                    <div className="absolute bottom-2 left-4 flex gap-2">
                    {g_link && (
                      <a href={g_link} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-2 py-1 rounded-md">
                          Source
                      </a>
                    )}

                    {l_link && (
                      <a href={l_link} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-2 py-1 rounded-md">
                          Demo
                      </a>
                    )}
                    </div>
                  </div>
            </div>
        </motion.div>
    </div>
  )
}

export default ProjectCard;