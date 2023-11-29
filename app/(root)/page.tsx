'use client'
import { useEffect, useState } from "react"
import { fetchApi } from "../api/axios"
import toast from "react-hot-toast"
import EventCard from "@/components/cards/EventCard";
import Loading from "@/components/shared/Loading";


export default function page() {

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [event, setEvent] = useState<[]>([])

  const loadEvent =  async () => {
    console.log('start event')

    try {
      setLoading(true)
      const response = await fetchApi().get('event')
      console.log(response.data.data)
      setEvent(response.data.data)
      
    } catch (error:any) {
      setError(true)    
      console.log(`ERROR: ${error.message}`)
      toast.error("Data is not fetching")
    }finally{
      setLoading(false)
    }
  }

  
 
  useEffect(()=>{
    loadEvent();
  },[])


  if(loading) return <Loading />
  if(error) return toast.error('someting went wrong try again')

  return (
    <main className="grid w-full min-h-screen grid-flow-row items-center justify-evenly">
      <div className="grid grid-flow-col grid-col-1 lg:grid-col-2 md:grid-col-2 sm:grid-col-3 items-center justify-evenly gap-4">
      {event ?event.map((ev:any) => (
        <EventCard 
          id={ev.id} 
          slug={ev.slug} 
          imageUrl={ev.cover} 
          eventName={ev.name} 
          organizer={{
            id: ev.organizer_id,
            name: ev.organizer_id,
          }} 
          genres={ev.category_id} 
          location={ev.venue_id} 
          time={ev.scheduled_at} 
          price={ev.ticket_price}     
        />
      )):(
        <h1 className="text-center text-xl font-bold text-orange-300">No Shows Available </h1>
      )}

    </div>
    
     
    </main>
  )
}
