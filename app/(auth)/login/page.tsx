'use client'
import React from 'react'
import Image from 'next/image'
import LoginForm from '@/components/forms/LoginForm'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useTheme } from 'next-themes'

const page = () => {
    const {theme} = useTheme()
    const isDark = theme === 'dark'

    
  return (
    <div>
       <div className='min-h-screen flex flex-col items-center justify-center'>
      <div className='w-[350px] h-[450px] bg-orange-500/20 dark:bg-[#1E1D1D] sm:w-[630px] sm:h-[630px] items-center justify-center flex flex-col rounded-lg'>
            {isDark ? (  <Image 
                src='/assets/logos/tms-logo.svg' 
                alt='Tms Logo' 
                height={50} 
                width={50} 
                className=' object-cover'     
            />):(  <Image 
                src='/assets/logos/tms-logo-dark.svg' 
                alt='Tms Logo' 
                height={50} 
                width={50} 
                className=' object-cover'     
            />)}
          
        <h1 className='mt-5 font-bold text-3xl text-center'>Login</h1>
        <p className='text-sm font-normal text-orange-700 dark:text-orange-300 mt-2'>Login here to Book Tickets</p>
        <div className='mt-10'>
            <LoginForm />
        </div>
        <Link href={'/reset-pass'}>
            <Button variant={'link'} className='text-orange-700 '>
                Forgot Password ?
            </Button>
        </Link>
            <p className='text-md'> dont have account ?
                <span className='text-orange-700'>
                    <Link href={'/sign-up'} className='hover:underline ml-2'> 
                            Signup
                    </Link>
                </span>
            </p>
      </div>
    </div>
    </div>
  )
}

export default page
