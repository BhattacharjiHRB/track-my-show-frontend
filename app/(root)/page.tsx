'use client'
import { useEffect, useState } from "react"
import { fetchApi } from "../api/axios"
import toast from "react-hot-toast"
import EventCard from "@/components/cards/EventCard";
import Loading from "@/components/shared/Loading";
import Image from "next/image";
 
interface eventProps{
  
    id:string;
    slug:string;
    cover:string;
    name:string;
    organizer_id:string;
    organizer_name:string;
    category_id:string;
    venue_id:string;
    scheduled_at:string;
    ticket_price:string;
}

export default function page() {

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [event, setEvent] = useState<eventProps[]>([])

  const loadEvent =  async () => {
  
    try {
      setLoading(true)
      const response = await fetchApi().get('event')
      console.log(response.data.data)
      setEvent(response.data.data)
    } catch (error:any) {
      setError(true)    
      console.log(`ERROR: ${error.message}`)
      toast.error("Please Sign In")
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
    <main className="flex w-full min-h-screen flex-col items-center justify-evenly">
      <div className="flex flex-1 w-2/3 max-md:flex-col-reverse justify-between gap-10 mt-16">
          <div className="flex flex-col items-start justify-center ">
              <h1 className="text-6xl max-md:text-3xl max-sm:text-xl font-bold text-justify"> Never miss your <br /> Favorite Shows</h1>
              <p className="text-xl text-gray-400 text-justify">Find the best shows across Dhaka City <br /> Book your seats now</p>
          </div>
          <Image 
            src={''}
            alt="Photo"
            width={700}
            height={500}
            className=" object-fill bg-neutral-800 rounded-xl"
          />
      </div>

      <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 justify-evenly mt-14 gap-4">
      {event ?event.map((ev:eventProps) => (
        <EventCard 
          id={ev.id} 
          slug={ev.slug} 
          imageUrl={ev.cover} 
          eventName={ev.name} 
          organizer={{
            slug: ev.organizer_id,
            name: ev.organizer_name,
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
