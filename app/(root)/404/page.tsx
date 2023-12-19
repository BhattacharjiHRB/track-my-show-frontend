import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const page = () => {
  return (
    <div className=' min-h-screen flex flex-col items-center justify-center p-10'>
        
    <h1 className='text-center text-6xl max-md:3xl max-sm:text-xl font-bold mt-5'>OOPS! <br /> Page Not Found </h1>
    <h6 className='text-center text-2xl max-md:xl max-sm:text-sm font-semibold text-red-50 mt-2'>Sorry, Couldn't find the page you are looking for </h6>
    
    <Link href={'/'} >
        <Button variant={'outline'} size={'lg'} className=' mt-10 max-md:mt-5 max-sm:mt-2'>Go Back</Button>
    </Link>
  

    <Image  
        src={'/assets/images/error.svg'}
        alt='Under maintenance'
        width={700}
        height={350}
        className='object-contain rounded-xl'
    />
</div>
  )
}

export default page
