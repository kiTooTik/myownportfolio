"use client"
import React, { useEffect, useState } from 'react'
import { ImArrowUp } from "react-icons/im";
import { useRouter } from 'next/navigation';
type Button = {
  defaultStyle?:boolean
}
const Button:React.FC<Button> = ({defaultStyle = true}) => {
const [showButton, setShowButton] = useState<boolean>(true)
const router = useRouter()




useEffect(() => {
    const handleScroll = () => {
        setShowButton(window.scrollY > -300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
},[]);

const scrollToTop = () => {
    window.scrollTo({top:0, behavior:'smooth'})
}
  return (
    <div>
        {showButton && (
        <button
        className={`${defaultStyle ? "bg-gray-800 hover:bg-gray-700 scale-95 active:scale-85 cursor-pointer py-2 md:py-4 px-2 md:px-4 fixed bottom-2 md:bottom-10 right-5 md:right-20  text-white text-lg md:text-3xl rounded-2xl shadow-lg transition-all z-50" : "cursor-pointer text-white text-xl w-full text-center pt-20 scale-95 active:scale-90 hover:scale-105"} `}
         type='button'
        aria-label="Scroll to top"
        onClick= {defaultStyle ? scrollToTop : () => router.push('/admin') }>
          {defaultStyle ? (<ImArrowUp />):('Logout')}
        
        </button>
        )}
        
    </div>
  )
}

export default Button