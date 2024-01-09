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
        id: string;
        name: string;
    };
    genres: string;
    location: string;
    time: string;
    price:string;
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
        price
    }:props) => {




  return (


    <Card className='w-[350px] h-[480px] flex flex-col bg-[#1E1D1D] border-none overflow-hidden mb-3' >
        <CardHeader>
            <Image 
                src={imageUrl} 
                alt='Event Photo' 
                width={300} 
                height={120}
                priority = {true}
                className='object-cover bg-neutral-700 max-w-[300px] max-h-[120px]' 
            />
            <CardTitle className='text-white font-bold mt-8'>
                {eventName}
            </CardTitle>
            <CardDescription className='flex flex-row'>
                <Link href={`/organizer/${organizer.id}`} className='flex flex-1 gap-2'>
                    <Users2 className='h-5 w-5' /> 
                    <span className='text-sm text-orange-600 font-semibold'>{organizer.name}</span>
                </Link>
            </CardDescription>
            <CardDescription>
                <Badge variant={'outline'} className='text-gray-600 border-neutral-400 mt-2' >
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
        <CardFooter className='flex flex-1 items-center justify-between mt-5'>
            <div className=' text-neutral-300 '>Starts@{price}</div>
            <Link href={`/eventprofile/${id}`}>
                <Button variant={'secondary'} className='bg-orange-600 hover:bg-orange-700'>Buy Now</Button>
            </Link>
        </CardFooter>
    </Card>
  )
}

export default EventCard