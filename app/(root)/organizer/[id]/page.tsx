'use client'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { fetchApi } from '@/app/api/axios';
import ShowCard from '@/components/cards/EventByOrganizerCard';
import OrganizerProfile from '@/components/cards/OrganizerProfile';
import Loading from '@/components/shared/Loading';

interface organizerEventProp{
  id: string; 
  slug: string; 
  cover: string; 
  name: string; 
  organization_id: any; 
  category_id: string; 
  venue_id: string; 
  scheduled_at: string; 

}

function page ({params}:{params:{id:string}}) {
  console.log('params',params)
  
  
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [organizerEvent, setOrganizerEvent] = useState<organizerEventProp[]>([])
  
    
        const getOrganizer = async(id:string) => {
          try {
              setLoading(true)
              const response = await fetchApi().get(`organizer/${id}`)
              console.log(response.data.data)
          } catch (error:any) {
            console.log(error.response.data)
            setError(true)
          }finally{
              setLoading(false)
          
          }
        }
        const getData = async() =>{
          console.log("getevent")
            try {
                setLoading(true)
                const response = await fetchApi().get(`event-by-organization`,)
                setOrganizerEvent(response.data.data)
                console.log(response.data.data)
            } catch (error) {
                console.log(error)
                setError(true)
            }finally{
                setLoading(false)
            }
        }

        useEffect(()=>{
         getOrganizer(params.id)
          getData()
        },[])
        

       
        
        if(loading) return <Loading />
        if(error) return toast.error('Something Went Wrong')
      

      return (
          <div className='flex flex-col items-center justify-center'> 
               <OrganizerProfile 
                  id={'1'} 
                  imageUrl={''} 
                  name={'Tarua'} 
                  description={'Something so long and good about the drama organization team name Tarua. we were astonished by watching adam surat that was organized by Tarua. and we loved that '}                
               />
            <div className='w-full h-[1px] bg-gray-800 my-4' />
            <h1 className='text-xl font-bold text-center'>Event organized by this Organizer </h1>
              <div className='grid grid-flow-row grid-cols-1 lg:grid-cols-2 md:grid-cols-4 sm:grid-cols-3 gap-4 mt-4 mb-4 w-full px-4 justify-center items-center  '>
                {!!organizerEvent && organizerEvent.length === 0 ? 
                <h1 className='text-gray-500 text-center text-xl font-bold'>No Events Found</h1> 
                : (
                  <>
                      {organizerEvent.map((orgEv)=>(
                          <ShowCard 
                              key={orgEv.id}
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
