'use client'
import { fetchApi } from '@/app/api/axios';
import ShowCard from '@/components/cards/EventByOrganizerCard';
import OrganizerProfile from '@/components/cards/OrganizerProfile';
import Loading from '@/components/shared/Loading';
import { Button } from '@/components/ui/button';
import { set } from 'date-fns';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';





const page = () => {
    
        const [loading, setLoading] = useState(false)
        const [error, setError] = useState(false)
        const [organizer, setOrganizer] = useState([])
        const [organizerEvent, setOrganizerEvent] = useState<any[]>([])

        const getOrganizer = async () => {
          try {
            setLoading(true)
              const response = await fetchApi().get(`organizer`)
              setOrganizer(response.data.data)
              console.log(response.data.data)
          } catch (error) {
            console.log(error)
            setError(true)
          }finally{
            setError(false)
          }
        }


        // const getData = async() =>{
        //   console.log("getevent")
        //     try {
        //         setLoading(true)
        //         const response = await fetchApi().get(`event-by-organization`,)
        //         setOrganizerEvent(response.data.data)
        //         console.log(response.data.data)
                
        //     } catch (error) {
        //         console.log(error)
        //         setError(true)
        //     }finally{
        //         setLoading(false)
        //     }
        // }

        if(!getOrganizer){
          return (
            <h1>No Organizer Here</h1>
          )
        }
        useEffect(()=>{
            getOrganizer()
        },[])
        
        if(loading) return <Loading />
        if(error) return toast.error('Something Went Wrong')
        

      return (
          <div className='flex flex-col items-center justify-center'>
            <OrganizerProfile 
              id={''}            
              imageUrl={''}
              name={''}
              description={''} 
            />
            <h1 className='text-xl font-bold text-center'>Event By {'name'}</h1>
              <div className='grid grid-flow-row grid-cols-1 lg:grid-cols-2 md:grid-cols-4 sm:grid-cols-3 gap-4 mt-4 mb-4 w-full px-4 justify-center items-center  '>
                {organizerEvent && organizerEvent.length === 0 ? 
                <h1 className='text-gray-500 text-center text-xl font-bold'>No Events Found</h1> 
                : (
                  <>
                      {organizerEvent.map((orgEv)=>(
                          <ShowCard 
                              id={orgEv.id} 
                              slug={orgEv.slug} 
                              imageUrl={orgEv.cover} 
                              eventName={orgEv.name} 
                              organizer={{
                                id: orgEv.organization_id,
                                name: orgEv.organization_id,
                              }} 
                              genres={orgEv.category_id} 
                              location={orgEv.venue_id} 
                              time={orgEv.scheduled_at}                    
                          />
                      ))}
                  </>
                )}
              </div>
          </div>
      
    )
  
}
export default page