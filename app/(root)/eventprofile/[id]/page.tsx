'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { fetchApi } from '@/app/api/axios'
import BuyTicketCard from '@/components/cards/BuyTicketCard'
import ShowDateCard from '@/components/cards/ShowDateCard'
import Loading from '@/components/shared/Loading'
import PicCarousel from '@/components/shared/PicCarousel'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface eventProfileProps{
  name:string;
  cover:string;
  slug:string;
  description:string;
  about:string;
  organizer_id:string;
  story:string;
  ticket_price:string;
  venue_id:string;
  category_id:string;
  scheduled_at: string;
}


function page({params}:{params:{id:string}}) {

    const [event, setEvent] = useState<eventProfileProps | null>(null)


     const getEventDetails = async(id:string) => {
      console.log(id)
      try {
        const res = await fetchApi().get(`event/${id}`)
        const data =  res.data.data
        setEvent(data)
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
        {event ? (
          <>
          <Image
            src={event.cover}
            alt='Event Photo'
            width={1250}
            height={400}
            className=' object-fill bg-neutral-800 mt-5 mb-10 rounded-lg' 
          />
            <div className=' w-2/3 flex flex-1 max-lg:flex-col items-center justify-between mt-10 gap-10'>
              <div className='flex-col items-start justify-center mr-10'>
                <h1 className='text-center text-3xl font-bold'>{event.name}</h1>
                <p className='text-center w-[300px] mt-3 text-gray-600'>{event.description} </p>
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
            </div>
            <div className=' w-2/3 border border-neutral-800 mb-10' />
            <div className='flex flex-1 w-2/3 max-lg:flex-col gap-5 items-center justify-evenly'>
              <div className="flex-col w-1/2 items-center text-justify">
                <h1 className='text-3xl font-semibold max-md:text-xl '> About The Show</h1>
                <ol className='mt-5'>
                  <li className='text-gray-500' >Show Duration: {event.about} </li>
                </ol>
              </div>
              <div className="flex-col w-1/2 items-center text-justify">
                <h1 className='text-3xl font-semibold mb-5 '>Story</h1>
                <p className='text-lg text-gray-500 text-justify'> {event.story} </p>
              </div>
            </div>
            <div className=' w-full max-md:w-full items-center m-5'>
              <PicCarousel />
            </div>
            <div className=' w-2/3 flex flex-1 max-lg:flex-col items-center justify-between border-b border-neutral-600 mt-10 '>
              <div className='flex flex-col items-center justify-center'>
                <h1 className='text-start text-3xl font-bold mb-2'>Venue</h1>
                <p className='text-gray-500 text-xl max-md:text-sm'> {event.venue_id} </p>
                <Button variant={'link'} className='text-orange-500 text-lg max-md:text-sm'>Get Direction</Button>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h1 className='text-start text-3xl font-bold mb-2'>Features</h1>
                <ol>
                  <li>{event.category_id}</li>
                </ol>
              </div>
            </div>
              <div className='flex flex-col items-start w-2/3 justify-between p-5'>
                <h1 className='text-3xl font-bold text-start'>Organizer</h1>
                <div className='flex flex-1 gap-3 mt-5'>
                  <Image 
                    src={event.organizer_id} 
                    alt='Organizer Photo'
                    width={30}
                    height={30}
                    className='rounded-full bg-neutral-800'
                  />
                  <p className='font-bold text-xl'> {event.organizer_id} </p>
                </div>
                  <Link href={`/organizer/${event.organizer_id}`}
                    className='mt-4' 
                  >
                      <p className='text-lg text-orange-600 underline'>Visit Profile</p>
                  </Link>
              </div>
            </>

          ):(
            <Loading />
          )}
      </section>
  )
}

export default page
