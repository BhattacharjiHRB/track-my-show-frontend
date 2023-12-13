'use client'
import React, {  useEffect, useState } from 'react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import FindByDate from '@/components/shared/FindByDate'
import FindByPlace from '@/components/shared/FindByPlace'
import EventCard from '@/components/cards/EventCard'
import { fetchApi } from '@/app/api/axios'



interface showProps{
    id:string;
    slug:string;
    cover:string;
    name:string;
    organizer_id:string;
    organizer_name:string;
    category:string;
    location:string;
    time:string;
    price:string;
}

const page = () => {
    const [show, setShow] = useState<showProps[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const fetchShow = async() => {
        try {
            setLoading(true)
            const response = await fetchApi().get('event')
            console.log('shows',response.data.data)
            setShow(response.data.data)
        } catch (error:any) {
            console.log(error.response.data)
            setError(true)
        }finally{
            setLoading(false)
        }
      
    }

    useEffect(()=>{
        fetchShow()
    })
    console.log(show)
  return (
   <section className='flex flex-col items-center justify-center p-5'>
        <Image 
            src={''}
            alt='Banner Photo'
            width={1850}
            height={500}
            className='object-fill bg-neutral-800 rounded-xl'
        />
        
        <div className='flex flex-col w-full items-center justify-center mt-10 border-b border-x-neutral-800'>
            <div className='flex flex-col items-center w-full justify-evenly mb-5 gap-4'>
                <h1 className='text-4xl font-bold text-justify'>Popular Category</h1>
                <Link href={'/'}>
                    <Badge variant={'outline'} className=' outline-orange-600 mt-3'>
                        categories
                    </Badge>    
                </Link>
            </div>
                <h1 className='text-3xl font-bold text-justify'>Looking for something specific ?</h1>
            <div className='flex flex-1 max-md:flex-col items-center justify-center mt-5 mb-5 gap-5'>
                    <FindByDate />
                    <FindByPlace />
            </div>
        </div> 
        <div className='grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 justify-evenly mt-10 gap-5'>
        {/* {loading && (
            <div className='text-center text-orange-600 animate-pulse'>
                Loading....
            </div>
        )} */}
            {show.length === 0 ? (
                <h1 className='text-xl text-center text-gray-600 font-bold mt-5'>
                    No Show available
                </h1>
            ):(
                <>
                    {show.map((show)=>(
                        <EventCard 
                            id={show.id} 
                            slug={show.slug} 
                            imageUrl={show.cover} 
                            eventName={show.name} 
                            organizer={{
                                slug:show.organizer_id,
                                name:show.organizer_name,
                            }} 
                            genres={show.category} 
                            location={show.location} 
                            time={show.time} 
                            price={show.price}            
                        />

                    ))}
                </>
            )}
        </div>
   </section>
  )
}

export default page