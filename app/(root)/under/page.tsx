import React from 'react'
import Image from 'next/image'
import under from '@/public/assets/images/um.svg'

const page = () => {
  return (
    <div className=' min-h-screen flex flex-col items-center justify-center p-24'>
        
        <h1 className='text-center text-6xl font-bold text-orange-600 mb-10'>Sorry! </h1>
        <Image  
            src={under}
            alt='Under maintenance'
            width={700}
            height={350}
            className='object-contain  rounded-xl'
        />
        <h1 className='text-center text-6xl max-md:text-3xl max-sm:text-[30px] font-bold text-red-600 mt-10'>We're Under Maintenance </h1>
        <h6 className='text-center text-2xl max-md:text-xl max-sm:text-[15px] font-semibold text-red-50 mt-2'>We will come back soon</h6>
    </div>
  )
}

export default page
