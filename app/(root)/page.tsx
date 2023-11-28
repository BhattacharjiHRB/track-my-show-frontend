'use client'
import { useEffect, useState } from "react"
import { fetchApi } from "../api/axios"
import toast from "react-hot-toast"
import EventCard from "@/components/cards/EventCard";
import Loading from "@/components/shared/Loading";


export default function page() {

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [event, setEvent] = useState([])

  const loadEvent =  async () => {
    console.log('start event')

    try {
      setLoading(true)
      const response = await fetchApi().get('event')
      setEvent(response.data)
      setLoading(false);
    } catch (error:any) {
      setLoading(false)    
      console.log(`ERROR: ${error.message}`)
    }
  }

  
 
  useEffect(()=>{
    console.log('start event ee')


    loadEvent();

    // return () => {
    //   setEvent([])
    // }
    
  },[])


  if(loading) return <Loading />
  if(error) return toast.error('someting went wrong try again')

  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-10 p-24">

    {/* {event && event.posts.length === 0?(
      <h1 className="text-center text-xl font-bold text-orange-300">No Shows Available </h1>
    ):(
      <>
      
      <div className="grid grid-flow-row grid-col-1 lg:grid-col-2 md:grid-col-4 sm:grid-col-3 items-center justify-between">
        {event && event.posts.map((post) => (
          <EventCard 
            id={post.id}
            imageUrl={post.imageUrl}
            slug={post.slug}
            eventName={post.eventName}
            organizer={post.organizer.name}        
            genres={post.genres}
            location={post.location}
            time={post.time} 
          />
            ))}      
       </div>
            
      </>
    )} */}
    
     
    </main>
  )
}
