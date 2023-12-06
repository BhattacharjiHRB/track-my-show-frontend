'use client'

import { fetchApi } from "@/app/api/axios";
import OrganizerList from "@/components/cards/OrganizerList";
import Loading from "@/components/shared/Loading";
import { useEffect, useState } from "react";




interface OrganizerListProps {
    id:string;
    name:string;
    slug:string
    cover:string;
  }


export default function page() {
    const [org, setOrg] = useState<OrganizerListProps[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    async function getOrganizers() {
    
        try {
            setLoading(true)
          const res = await fetchApi().get('organizer');
          const data = await res.data.data;
          setOrg(data)
        } catch (error) {
         console.log(error)
         setError(true)
        }finally{
            setLoading(false)
        }
     
     }
    useEffect(()=>{
        getOrganizers()
    })

    if(loading) return <Loading />
    if(error) return <Loading />
    
  
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
      <h1 className="text-6xl text-orange-600 font-bold ">Organizers</h1>
      <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-4 justify-evenly items-center">
        {org.map((organizer) => (
            <OrganizerList 
                id={organizer.id}
                name={organizer.name}
                slug={organizer.slug}
                imageUrl={organizer.cover}            
            />
        ))}
      </div>
      {org.length === 0 && (
        <h1 className="text-xl text-gray-600 font-bold mt-5">
            No Organizer available
        </h1>
      )}

    </div>
  )
}

