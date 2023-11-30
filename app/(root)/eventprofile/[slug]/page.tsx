import BuyTicketCard from '@/components/cards/BuyTicketCard'
import ShowDateCard from '@/components/cards/ShowDateCard'
import PicCarousel from '@/components/shared/PicCarousel'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const page = ({params}:{params:{slug:string}}) => {


  return (
    <section className='flex flex-col items-center justify-center p-10 w-full min-h-screen' >
        <Image 
          src={''}
          alt='Event Photo'
          width= {1200}
          height= {400}
          priority= {true}
          className=' object-fill bg-neutral-800 mt-5 mb-10 rounded-lg'
        />
        <div className=' w-2/3 flex flex-1 max-lg:flex-col items-center justify-between mt-10 gap-10'>
          <div className='flex-col items-start justify-center mr-10'>
            <h1 className='text-center text-3xl font-bold'>{params.slug}</h1>
            <p className='text-center text-gray-600'>An event by {params.slug}</p>
          </div>
          <div className='flex items-end'>
            <BuyTicketCard 
              id={''} 
              price={''}            
            />
          </div>
        </div>
        <div className=' w-2/3 flex flex-col space-x-4 space-y-2 items-center justify-between m-10'>
          <h1 className='text-start text-3xl font-bold mb-2'>Event Date and Time</h1>
           <ShowDateCard />
        </div>
        <div className=' w-2/3 border border-neutral-800 mb-10' />
        <div className='flex flex-1 w-2/3 max-lg:flex-col gap-5 items-center justify-evenly'>
            <div className="flex-col items-center text-justify">
               <h1 className='text-3xl font-semibold max-md:text-xl '> About The Show</h1>
               <ol>
                <li>Duration hours</li>
                <li>Duration hours</li>
               </ol>
            </div>
            <div className="flex-col items-center text-justify">
               <h1 className='text-3xl font-semibold '>Story</h1>
                <p className='text-lg text-gray-500 text-justify'>story</p>
            </div>
        </div>
        <div className=' w-2/3 max-md:w-full items-center m-5'>
          <PicCarousel />
        </div>
        <div className=' w-2/3 flex flex-1 max-lg:flex-col items-center justify-between mt-10 gap-10'>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-start text-3xl font-bold mb-2'>Venue</h1>
              <p className='text-gray-500 text-xl max-md:text-sm'>Location</p>
              <Button variant={'link'} className='text-orange-500 text-xl max-md:text-sm' >Get Direction</Button > 
          </div>
          <div className='flex flex-col items-center justify-center'>
              <h1 className='text-start text-3xl font-bold mb-2'>Features</h1>
              <ol>
                <li>Some Featuures</li>
              </ol>
          </div>
        </div>
    </section>
  )
}

export default page
