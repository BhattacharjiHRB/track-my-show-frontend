'use client'
import { fetchApi } from '@/app/api/axios';
import ShowCard from '@/components/cards/EventByOrganizerCard';
import OrganizerProfile from '@/components/cards/OrganizerProfile';
import Loading from '@/components/shared/Loading';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';



const page = ({params}:{params:{slug:string}} ) => {

    
        const [loading, setLoading] = useState(false)
        const [error, setError] = useState(false)
        const [organizer, setOrganizer] = useState([])
        const [organizerEvent, setOrganizerEvent] = useState<any[]>([])

        const getOrganizer = async () => {
          try {
            setLoading(true)
              const response = await fetchApi().get(`organizer`)
              setOrganizer(response.data.data)
              console.log('organizerInfo',response.data.data)
          } catch (error) {
            console.log(error)
            setError(true)
          }finally{
            setError(false)
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
            getOrganizer()
            getData()
        },[])
        
        if(loading) return <Loading />
        if(error) return toast.error('Something Went Wrong')
        console.log(organizer)

      return (
          <div className='flex flex-col items-center justify-center'>
            {organizer.map((org:any) => (
              <OrganizerProfile 
                id={org.id}            
                imageUrl={org.cover}
                name={org.slug}
                description={org.description} 
              />

            ))}
            <h1 className='text-xl font-bold text-center'>Event organized by this Organizer </h1>
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
