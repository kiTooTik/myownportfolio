"use client"
import React, {  useEffect, useState } from 'react'

const RandomQuote = () => {
const [quote, setQuote] =useState<string>('')
const [author, setAuthor] =useState<string>('')
const [isLoading, setIsLoading] = useState<boolean>(false) 

   const fetchQuotes = async () => {
    setIsLoading(true)
    try {
        const res = await fetch('https://api.api-ninjas.com/v1/quotes',{
            headers:{
                'X-Api-Key' : 'iYJ/q+oI/1MKgFd3Wzjzmw==XU8y0uDSx6mbJVro'
            }
        })
        if(!res.ok){
            console.log('Failed to fetch data');
            setIsLoading(false)
            return
        }
        const data = await res.json()
        setQuote(data[0].quote)
        setAuthor(data[0].author)
    }catch(error){
        console.log(error);
        console.log('Something Went Wrong');
    }finally{
        setIsLoading(false)
    }
   }

   useEffect(() => {
    fetchQuotes()
   },[])

  return (
    <div className='bg-gray-950 h-[350px] md:h-[250px] px-6 flex flex-col justify-center items-center py-40'>
            <p className='text-gray-300 teko text-center text-3xl mb-6  '>Daily Quotes</p>
        <div className='flex flex-col items-center mb-6 '>
            <blockquote className='text-gray-400'>&quot;{quote}&quot;</blockquote>
        </div>
        <div className='text-center'>
            <p className='text-gray-400'> &quot;{author}&quot;</p>
        </div>
        <div className='mt-2'>
          <button disabled={isLoading} onClick={fetchQuotes} className={`${isLoading ? "cursor-not-allowed opacity-50" : "hover:bg-gray-900 cursor-pointer scale:85 active:scale-95"} text-sm md:text-md lg:text-lg text-gray-300 py-2 px-2 md:px-3 lg:px-4 rounded-md   border border-gray-300 `}>{isLoading ? "Generating Quote..." : "Generate Quote"}</button>
        </div>
    </div>
  )
}

export default RandomQuote