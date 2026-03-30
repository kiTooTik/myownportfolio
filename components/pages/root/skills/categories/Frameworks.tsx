import React from 'react'
import { NextJs, React as ReactIcon, Django, TailwindCSS } from 'developer-icons'
const Frameworks = () => {
  return (
    <ul className='flex gap-5'>
        <li title='ReactJs'><ReactIcon className='w-[30px] md:w-[60px] lg:w-[100px]' /></li>
        <li title='NextJs'><NextJs className='w-[30px] md:w-[60px] lg:w-[100px]' /></li>
        <li title='Django'><Django className='w-[40px] md:w-[60px] lg:w-[100px]' /></li>
        <li title='TailwindCSS'><TailwindCSS className='w-[30px] md:w-[60px] lg:w-[100px]' /></li>
    </ul>
  )
}

export default Frameworks