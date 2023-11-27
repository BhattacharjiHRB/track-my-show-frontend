'use client'
import { fetchApi } from '@/app/api/axios';
import ShowCard from '@/components/cards/ShowCard';
import Loading from '@/components/shared/Loading';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

interface props{
   name:string;
   cover:string;
   description:string;

}

const page = ({params}:{params:{id:string}},
    {name, cover, description}:props
    ) => {

    
        const [loading, setLoading] = useState(false)
        const [error, setError] = useState(false)
        const [data, setData] = useState([])

        const getOrganizer = async () => {
          try {
              const response = await fetchApi.get('organizer')
              const data = response.data
              console.log(data)
          } catch (error) {
            console.log(error)
          }
        }


        const getData = async() =>{

            try {
                setLoading(true)
                const response = await fetchApi.get('event-by-organization',)
                const data = response.data
                setData(data.event)
                console.log(data)
            } catch (error) {
                console.log(error)
                setError(true)
            }finally{
                setLoading(false)
            }
            
        }


        useEffect(()=>{
            getOrganizer()
            getData()
        },[])
        
        if(loading) return <Loading />
        if(error) return toast.error('Something Went Wrong')
     
  return (
    <div className='flex flex-col items-center justify-center' key={params.id}>
       <Image 
            src={cover}
            alt={'Cover Photo'}
            width={270}
            height={270}
            className='rounded-full'
       />
       <div className='flex flex-col items-center justify-between'>
            <h1 className='text-center font-bold text-white text-2xl'>{name}</h1>
            <h3 className='text-center font-semibold text-white text-xl'>About</h3>
            <p className='text-lg text-gray-500 text-justify'>{description}</p>
            <Button variant={'secondary'} size={'lg'}>Follow+</Button>
       </div>
       <div className='border-b border-gray-900'  />
       <h1 className='text-xl font-bold text-center'>Event By {name}</h1>
        <div className='grid grid-flow-row grid-cols-1 lg:grid-cols-2 md:grid-cols-4 sm:grid-cols-3 gap-4 mt-4 mb-4 w-full px-4 justify-center items-center  '>
          {data && data.length === 0 ? 
          <h1 className='text-gray-500 text-center text-xl font-bold'>No Events Found</h1> 
          : (
            <>
                {data.forEach(()=>(
                    <ShowCard 
                        id={''} 
                        slug={''} 
                        imageUrl={''} 
                        eventName={''} 
                        organizerName={''} 
                        genres={''} 
                        location={''} 
                        time={''}                    
                    />
                ))}
            </>
          )}
        </div>
    </div>
  )
}

export default page
