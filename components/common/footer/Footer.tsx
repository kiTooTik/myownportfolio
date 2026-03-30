import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full h-[250px] border-t border-gray-800'>
      <div className='lg:flex justify-between items-center h-full bg-gray-950'>
      <div className='w-full flex justify-center items-center text-[3rem] teko bg-gray-950'>
        <p className='text-gray-100'>Mark.Dev</p>
      </div>
        <div  className='flex justify-around w-full bg-gray-950 pt-8'>
          <div>
            <p className='font-bold text-3xl text-gray-400'>General</p>
            <ul className='flex flex-col'>
                <Link href={"#home"} className='text-white cursor-pointer scale-85 active:scale-80 hover:scale-90'>Home</Link>
                <Link href={"#about"} className='text-white cursor-pointer scale-85 active:scale-80 hover:scale-90'>About</Link>
                <Link href={"#projects"} className='text-white cursor-pointer scale-85 active:scale-80 hover:scale-90'>Project</Link>
                <Link href={"#skills"} className='text-white cursor-pointer scale-85 active:scale-80 hover:scale-90'>Skills</Link>
            </ul>
          </div>
            <div>
                <p className='font-bold text-3xl text-gray-400'>Contact Me</p>
                <ul>
                  <Link target='_blank' href={"https://github.com/kiTooTik"} className='text-white flex items-center gap-2 scale-85 active:scale-80 hover:scale-90'>Github:<FaGithub className=''/></Link>
                  <Link target='_blank'  href={"https://www.linkedin.com/in/mark-luis-salazar-016aa03b5/"} className='text-white flex items-center gap-2 scale-85 active:scale-80 hover:scale-90'>LinkedIn: <FaLinkedin/></Link>
                </ul>
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default Footer