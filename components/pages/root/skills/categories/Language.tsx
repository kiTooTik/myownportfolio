import React from 'react'
import {Python, JavaScript, TypeScript, HTML5, CSS3} from "developer-icons"

const Language = () => {
  return (
    <ul className='flex gap-5'>
        <li title='HTML5'><HTML5  className='w-[30px] md:w-[60px] lg:w-[100px]'/></li>
        <li title='CSS3'><CSS3  className='w-[30px] md:w-[60px] lg:w-[100px]'/></li>
        <li title='Javascript'><JavaScript className='w-[30px] md:w-[60px] lg:w-[100px]' /></li>
        <li title='Typescript'><TypeScript className='w-[30px] md:w-[60px] lg:w-[100px]' /></li>
        <li title='Python'><Python className='w-[40px] md:w-[60px] lg:w-[100px]' /></li>
    </ul>
  )
}

export default Language