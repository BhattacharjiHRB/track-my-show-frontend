'use client'
import { useEffect, useState } from "react"
import { fetchApi, getTokenToLocalStorage } from "../api/axios"
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
  const [event, setEvent] = useState<eventProps[]>([])
  const notLoggedIn =  getTokenToLocalStorage()


 

  const loadEvent =  async () => {
  
    try {
      setLoading(true)
      const response = await fetchApi().get('event')
      console.log(response.data.data)
      setEvent(response.data.data)

      if(response.status === 404){
        toast.error("404! Page Not Found")
      
      }
      if(response.status === 500){
        toast.error("Something Went Wrong")
      
      }
   
    } catch (error:any) {   
      console.log(`ERROR: ${error.message}`)
      toast.error("Something Went Wrong")
    }finally{
      setLoading(false)
    }
  }


  
 
  useEffect(()=>{
    loadEvent();
  },[])


  if(loading) return <Loading />


  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-evenly">
      <div className="flex flex-1 w-2/3 max-md:flex-col-reverse justify-between gap-10 mt-16 mb-10">
          <div className="flex flex-col items-start justify-center ">
              <h1 className="text-6xl max-md:text-3xl font-extrabold text-justify bg-gradient-to-l from-amber-400 to-orange-600 bg-clip-text text-transparent"> Never miss your <br /> favorite Shows!</h1>
              <p className="text-xl max-sm:text-xs text-justify">Find the best shows across Dhaka City <br /> Book your seats now</p>
          </div>
          <Image 
            src={'/assets/images/hero-image-1.svg'}
            alt="Photo"
            width={700}
            height={500}
            className=" object-fill bg-neutral-800 rounded-xl shadow-xl shadow-orange-800"
          />
      </div>
      <h1 className="text-3xl font-bold mt-10 ">Trending Shows</h1>
      {notLoggedIn ? (
        <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 justify-evenly mt-14 gap-4">
        {event? event.map((ev) => (
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
          <>
             <Image 
              src={"/assets/images/empty-tmg.svg"} 
              alt={"no show"}
              width={175}
              height={50}
              className="mt-10"            
            />
            <h1 className="text-center text-xl font-bold text-gray-300">No Shows Available </h1>
          </>
        )}
  
      </div>
        
        ):(
          <div className="mt-5 flex flex-col items-center justify-center">
            <Image 
              src={"/assets/images/empty-tmg.svg"} 
              alt={"no show"}
              width={175}
              height={50}
              className="mt-10"            
            />
            <h1 className=" flex text-center text-xl min-h-screen font-bold text-orange-300 mt-10">Please Log in to browse</h1>
          </div>
      )}

    <h1 className="text-3xl font-bold ">Upcoming Shows</h1>
    {notLoggedIn ? (
        <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 justify-evenly mt-14 gap-4">
        {event? event.map((ev) => (
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
          <>
             <Image 
              src={"/assets/images/empty-tmg.svg"} 
              alt={"no show"}
              width={175}
              height={50}
              className="mt-10"            
            />
            <h1 className="text-center text-xl font-bold text-gray-300">No Shows Available </h1>
          </>
        )}
  
      </div>
        
        ):(
          
          <div className="mt-5 flex flex-col items-center justify-center">
          <Image 
            src={"/assets/images/empty-tmg.svg"} 
            alt={"no show"}
            width={175}
            height={50}
            className="mt-10"            
          />
          <h1 className=" flex text-center text-xl min-h-screen font-bold text-orange-300 mt-10">Please Log in to browse</h1>
        </div>
      )} 
      
    </main>
  )
}
