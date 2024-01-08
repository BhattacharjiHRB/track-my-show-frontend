import React from 'react'
import Image from 'next/image'
import tmsLogo from '@/public/assets/logos/tms-logo.svg'

const Loading = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center p-8">
      <Image 
        src={tmsLogo}
        alt="tms-logo"
        width={200}
        height={200}
        className=" object-cover rounded-lg animate-bounce"
      />
      <h1 className='text-xl md:2xl sm:6xl mt-20 text-orange-600 text-center font-bold'>Loading...</h1>
    </div>
  )
}

export default Loading
