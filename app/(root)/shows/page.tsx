import React from 'react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import FindByDate from '@/components/shared/FindByDate'
import FindByPlace from '@/components/shared/FindByPlace'


const page = () => {
  return (
   <section className='flex flex-col items-center justify-center p-5'>
        <Image 
            src={''}
            alt='Banner Photo'
            width={1850}
            height={500}
            className='object-fill bg-neutral-800 rounded-xl'
        />
        
        <div className='flex flex-col items-center justify-center mt-10'>
            <div className='flex flex-col items-start w-full justify-evenly mb-5 gap-4'>
                <h1 className='text-4xl font-bold text-justify'>Popular Category</h1>
                <Link href={'/'}>
                    <Badge variant={'outline'} className=' outline-orange-600 mt-3'>
                        categories
                    </Badge>    
                </Link>
            </div>
                <h1 className='text-3xl font-bold text-justify'>Looking for something specific ?</h1>
            <div className='flex flex-1 max-md:flex-col items-center justify-center mt-5 gap-5'>
                    <FindByDate />
                    <FindByPlace />
            </div>
        </div>  
   </section>
  )
}

export default page
