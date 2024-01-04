'use client'
import React from 'react'
import Image from 'next/image'
import SignUpForm from '@/components/forms/SignUpForm'
import TmsLogo from '@/public/assets/logos/tms-logo.svg'
import { useTheme } from 'next-themes'

const page = () => {
  const {theme} = useTheme()
    const isDark = theme === 'dark'
  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
      <div className='w-[350px] h-[430px] bg-orange-500/20 dark:bg-[#1E1D1D] sm:w-[630px] sm:h-[630px] items-center justify-center flex flex-col rounded-lg'>
              <Image 
                src={TmsLogo} 
                alt='Tms Logo' 
                height={50} 
                width={50} 
                className=' object-cover'     
            />
        <h1 className='mt-5 font-bold text-3xl text-center'>SignUp</h1>
        <p className='text-sm font-normal text-orange-300 mt-2'>Get the best experience </p>
        <div className='mt-10'>
            <SignUpForm />
        </div>
      </div>
    </div>
  )
}

export default page
