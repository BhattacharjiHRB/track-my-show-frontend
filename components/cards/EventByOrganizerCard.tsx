'use client'
import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import Image from 'next/image'
import { Heart, MapPin } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'

interface props {

    id: string; 
    slug: string;
    imageUrl : string;
    eventName: string;
    organizer: {
        id: string;
        name: string;
    };
    genres: string;
    location: string;
    time: string
}


const EventByOrganizerCard = (
    { 
    id,
    slug,
    imageUrl,
    eventName,
    location,
}:props) => {
    const [liked , setLiked] = useState(false)
    
  return (
    <Link href={`/eventpage/${slug}`}>
    <Card className='w-[330px] h-[330px] bg-[#1E1D1D] border-none' key={id}>
        <CardHeader>
            <Image 
                src={imageUrl} 
                alt='Event Photo' 
                width={300} 
                height={150}
                priority={true} 
                className=' object-cover aspect-3/4 bg-neutral-800 animate-pulse' 
                />
            <CardTitle className='flex items-end justify-end'>
                <Button 
                    variant={'secondary'} 
                    size={'sm'}
                    onClick={()=> setLiked(true)} 
                    className='rounded-full w-10 h-10 bg-[#1E1D1D] hover:bg-transparent'
                    >
                    <Heart color='#F75D25' className={`w-10 h-10 ${liked ? 'fill-orange-600':'fill-transparent'}`}/>
                </Button>
        </CardTitle>
        </CardHeader>
        <CardContent>
            <p>
                <div className='text-xl font-bold text-white mb-2 '>
                    {eventName}
                </div>
            </p>
            <p>
                <div className='text-md flex flex-1 text-neutral-500'>
                    <span><MapPin className='w-5 h-5 mr-2'  /></span>
                    {location}
                </div>
            </p>
        </CardContent>
    </Card>
    </Link>
  )
}

export default EventByOrganizerCard
