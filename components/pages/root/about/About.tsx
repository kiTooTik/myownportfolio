"use client"
import React, { useRef} from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import images from '@/components/constants/images';


const About = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const leftInView = useInView(leftRef, { once: true });
  const rightInView = useInView(rightRef, { once: true });
  
  

  return (
    <div id='about' className='pt-2 md:pt-12 lg:pt-10 overflow-hidden  px-4 w-full lg:h-svh justify-around items-center lg:flex bg-gray-950 pb-1 md:pb-20 max-h-[1000px] z-1000'>

      {/* LEFT (text sliding from left) */}
      <motion.div
        ref={leftRef}
        initial={{ x: -100, opacity: 0 }}
        animate={leftInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 2 }}
        className='flex flex-col w-full lg:w-1/2 items-center justify-center gap-2 '
      >
      
      <div className='w-full flex justify-center items-center'>
                <div className='w-[300] lg:w-[500] h-[300] lg:h-[500] z-2  '>
                        <Image
                          draggable='false'
                          src={images.profile.profile}
                          alt='Profile'
                          title='Vince David'
                          width={500}
                          height={500}
                          className='select-none w-full h-full object-cover'
                        />
                </div>  
            </div>
      
        
      </motion.div>

      {/* RIGHT (placeholder content sliding from right) */}
      <motion.div
        ref={rightRef}
        initial={{ x: 100, opacity: 0 }}
        animate={rightInView ? { x: 0, opacity: 1 } : ""}
        transition={{ duration: 2}}
        className='w-full lg:w-1/2 flex justify-center items-center flex-col gap-4'
      >
        
        <div className='mt-12 mb-6 md:mb-12'>
            <h2 className='text-center teko font-bold text-3xl md:text-4xl lg:text-5xl text-gray-200 text-shadow-lg uppercase'>About me</h2>
      </div>
          <p className='text-center text-sm md:text-lg lg:text-xl text-gray-400 font-medium'>
          Computer Science student with hands-on experience in IT support, system administration, and fullstack development. Seeking an entry-level IT or software role where I can apply troubleshooting,
          system optimization, and development skills to deliver reliable and scalable solutions.
          </p>
          <p className='text-center text-sm md:text-xl lg:text-xl text-gray-400'>
            I’m always learning and exploring better ways to design and build. Whether it’s solving problems, collaborating with others, or experimenting with new features, I enjoy the process just as much as the result.
          </p>
          <p className='text-center text-sm md:text-xl lg:text-xl text-gray-400'>
            My goal is to create websites that not only function well but also leave a lasting impression. I care about the little details that make a big difference, and I’m always looking for ways to grow both creatively and technically.
          </p>
            
      </motion.div>

    </div>
  );
};

export default About;
