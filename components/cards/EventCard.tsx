'use client'
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import Image from 'next/image'
import { Users2 } from 'lucide-react'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { Separator } from '../ui/separator'
import Link from 'next/link'

interface props {

    id: string; 
    slug: string;
    imageUrl : string;
    eventName: string;
    organizer:{
        name: string;
    };
    genres: string;
    location: string;
    time: string
}


const EventCard = (
    {
        id,
        slug,
        imageUrl,
        eventName,
        organizer,
        genres,
        location,
        time,
    }:props) => {



  return (
    <Card className='w-[330px] h-[450px] flex flex-col bg-[#1E1D1D] border-none' key={id} >
        <CardHeader>
            <Image 
                src={imageUrl} 
                alt='Event Photo' 
                width={300} 
                height={150}
                priority = {true} 
                className='object-cover aspect-3/4 bg-neutral-800 animate-pulse mb-3' 
            />
            <CardTitle className='text-white font-bold'>
                {eventName}
            </CardTitle>
            <CardDescription className='flex flex-1 gap-1'>
                <Users2 className='h-5 w-5' /> 
                <span className='text-sm text-orange-600 font-semibold'>{organizer.name}</span>
            </CardDescription>
            <CardDescription>
                <Badge variant={'outline'} className='text-gray-600 border-neutral-400'>
                    {genres}
                </Badge>
            </CardDescription>
        </CardHeader>
        <CardContent>
            <Separator className='my-2'/>
            <div className='text-neutral-300'> {location} </div>
            <div className='text-neutral-300'> {time} </div>
            <Separator className='my-2'/>
        </CardContent>
        <CardFooter className='flex flex-1 items-center justify-between'>
            <div className=' text-neutral-300 '>Starts@500BDT</div>
            <Link href={`/event/${slug}`}>
                <Button variant={'secondary'} className='bg-orange-600 hover:bg-orange-700'>Buy Now</Button>
            </Link>
        </CardFooter>
    </Card>
  )
}

export default EventCard