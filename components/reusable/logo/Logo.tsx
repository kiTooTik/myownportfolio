import Link from 'next/link'
import React from 'react'

type Props = {
    defaultStyle?: boolean
}

const Logo:React.FC<Props> = ({defaultStyle = true}) => {
  return (
     <Link href={"#home"} type="button" className="items center group font-bold text-gray-200 teko relative text-shadow-lg overflow-hidden">
            <span className={`${defaultStyle ? "text-2xl md:text-[2rem] lg:text-[3rem] transition-all duration-700 group-hover:pr-26 md:group-hover:pr-32 lg:group-hover:pr-65 group-hover:pl-2" : "text-2xl md:text-[2rem] lg:text-[3rem] transition-all duration-700 group-hover:pr-26 md:group-hover:pr-32 lg:group-hover:pr-65 group-hover:pl-2 ml-12"} `}>{'<'}</span>
            <h1 className="absolute top-1 md:top-2 lg:top-3 right-12 lg:right-15 transition-all duration-700 delay-500 opacity-0   group-hover:block hidden group-hover:opacity-100 scale-95 group-hover:scale-85 uppercase text-lg md:text-2xl lg:text-5xl ">Mark.Dev</h1>
            <span className="text-2xl md:text-[2rem] lg:text-[3rem] transition-all duration-700 group-hover:pl-4 group-hover:pr-4"> {'/>'}</span>
        </Link>
  )
}

export default Logo