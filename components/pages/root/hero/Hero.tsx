"use client"
import React from 'react'
import 'animate.css';
import { TextGenerateEffect } from '@/components/ui/texteffect/TextEffect';
import { motion } from 'framer-motion';
import { BackgroundBeams } from '@/components/ui/backgroundbeams/Background-Beams';

const text = "f u l l  - s t a c k"
const text2 = "d e v e l o p e r"
const Hero = () => {
  return (
    <div id='home' className=' flex w-full h-[300px] sm:h-[400px] md:h-[750px] relative  bg-gray-950 px-6 z-1000 -mt-15'>
        <div  className=' flex flex-col w-full justify-center z-1 gap-10 md:gap-35 md:-mt-30'>
        <motion.div
        initial={{ x: -150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full flex justify-start"
      >      
          <div className=''>
            <TextGenerateEffect direction='left' words={text} className='text-nowrap text-effect tracking-[-10px] md:tracking-[-30px] lg:tracking-[-40px] hover:tracking-[-5px] md:hover:tracking-[-10px] lg:hover:tracking-[-20px] transition-all duration-700  '>
            </TextGenerateEffect>
          </div>
          </motion.div>
          
            <motion.div
            initial={{ x: 150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full flex justify-end"
>
            <div className=' text-end -mt-12 xl:-mt-34 md:mr-12 z-3'>
                <TextGenerateEffect direction='right' words={text2} className='text-nowrap text-effect tracking-[-10px] md:tracking-[-30px] lg:tracking-[-40px] hover:tracking-[-5px] md:hover:tracking-[-10px] lg:hover:tracking-[-20px] transition-all duration-700'></TextGenerateEffect>
            </div>
            </motion.div>
        </div>
        <BackgroundBeams/>
    </div>
  )
}

export default Hero