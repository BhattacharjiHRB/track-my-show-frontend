'use client'

import { fetchApi } from '@/app/api/axios'
import BuyTicketCard from '@/components/cards/BuyTicketCard'
import ShowDateCard from '@/components/cards/ShowDateCard'
import PicCarousel from '@/components/shared/PicCarousel'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

interface eventProfileProps{
  name:string;
  cover:string;
  slug:string;
  organizer_id:string;
  story:string;
  ticket_price:string;
  venue_id:string;
  category_id:string;
  scheduled_at: string;
}

const page = ({params}:{params:{id:string}}) => {

    const [eventDetails, setEventDetails] = useState<eventProfileProps[]>([])

     const getEventDetails = async(id:string) => {
      console.log(id)
      try {
        const res = await fetchApi().get(`event/${id}`)
        const data =  res.data.data
        setEventDetails(data)
        console.log(data)
      } catch (error:any) {
        console.log(error.message)
      }
    }

    useEffect(()=>{
      getEventDetails(params.id)
    },[])


  return (
    <section className='flex flex-col items-center justify-center p-10 w-full min-h-screen' >
        {eventDetails.map((event)=>(
          <>
          <Image
            src={`/${event.cover}`}
            alt='Event Photo'
            width={1200}
            height={400}
            priority={true}
            className=' object-fill bg-neutral-800 mt-5 mb-10 rounded-lg' /><div className=' w-2/3 flex flex-1 max-lg:flex-col items-center justify-between mt-10 gap-10'>
              <div className='flex-col items-start justify-center mr-10'>
                <h1 className='text-center text-3xl font-bold'>{event.name}</h1>
                <p className='text-center text-gray-600'>An event by {event.organizer_id}</p>
              </div>
              <div className='flex items-end'>
                <BuyTicketCard
                  id={event.slug}
                  price={event.ticket_price} />
              </div>
            </div><div className=' w-2/3 flex flex-col space-x-4 space-y-2 items-center justify-between m-10'>
              <h1 className='text-start text-3xl max-lg:text-xl max-md:text-lg font-bold mb-2'>Event Date and Time</h1>
              <ShowDateCard 
                schedule={event.scheduled_at} 
              />
            </div><div className=' w-2/3 border border-neutral-800 mb-10' /><div className='flex flex-1 w-2/3 max-lg:flex-col gap-5 items-center justify-evenly'>
              <div className="flex-col items-center text-justify">
                <h1 className='text-3xl font-semibold max-md:text-xl '> About The Show</h1>
                <ol>
                  <li>{event.scheduled_at}</li>
                  <li>Duration hours</li>
                </ol>
              </div>
              <div className="flex-col items-center text-justify">
                <h1 className='text-3xl font-semibold '>Story</h1>
                <p className='text-lg text-gray-500 text-justify'> {event.story} </p>
              </div>
            </div><div className=' w-2/3 max-md:w-full items-center m-5'>
              <PicCarousel />
            </div><div className=' w-2/3 flex flex-1 max-lg:flex-col items-center justify-between mt-10 gap-10'>
              <div className='flex flex-col items-center justify-center'>
                <h1 className='text-start text-3xl font-bold mb-2'>Venue</h1>
                <p className='text-gray-500 text-xl max-md:text-sm'> {event.venue_id} </p>
                <Button variant={'link'} className='text-orange-500 text-xl max-md:text-sm'>Get Direction</Button>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h1 className='text-start text-3xl font-bold mb-2'>Features</h1>
                <ol>
                  <li>{event.category_id}</li>
                </ol>
              </div>

            </div>
            </>

          ))}
      </section>
  )
}

export default page
