"use client"
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
const Content = () => {
  const [clientLoaded, setClientLoaded] = React.useState(false);

  useEffect(() => {
    setClientLoaded(true);
  }, []);


    const router = useRouter()
  return (
    <div className='matrix-body'>
        <div className='matrix-container relative flex flex-col justify-center items-center h-svh z-2'>
            <p className='matrix-text teko' data-text="404">404</p>
            <p className='matrix-text uppercase teko' data-text="page not found"> page not found</p>

        {clientLoaded && (
        <button
        onClick={() => router.back()}
        className='scale-95 active:scale-85 mt-12 rounded-md text-white py-2 md:py-3 lg:py-4 border border-white px-4 md:px-8 lg:px-12 cursor-pointer text-md md:text-xl lg:text-2xl'>Go back</button>
        )}
        </div>
    </div>
  )
}

export default Content