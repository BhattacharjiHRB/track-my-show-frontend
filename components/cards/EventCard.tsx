'use client'
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import Image from 'next/image'
import { Users2 } from 'lucide-react'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { Separator } from '../ui/separator'
import toast from 'react-hot-toast'

const EventCard = () => {

    const eventHandler = () => {
      
    
    }

  return (
    <Card className='w-[330px] h-[450px] flex flex-col bg-[#1E1D1D] border-none'>
        <CardHeader>
            <Image 
                src={''} 
                alt='' 
                width={300} 
                height={150}
                priority = {true} 
                className='object-cover aspect-3/4 bg-neutral-800 animate-pulse mb-3' 
            />
            <CardTitle className='text-white font-bold'>
                Event Name
            </CardTitle>
            <CardDescription className='flex flex-1 gap-1'>
                <Users2 className='h-5 w-5' /> 
                <span className='text-sm text-orange-600 font-semibold'>Organizer Name</span>
            </CardDescription>
            <CardDescription>
                <Badge variant={'outline'} className='text-gray-600 border-neutral-400'>
                    Genres
                </Badge>
            </CardDescription>
        </CardHeader>
        <CardContent>
            <Separator className='my-2'/>
            <div className='text-neutral-300'>Event Location</div>
            <div className='text-neutral-300'>Event Time</div>
            <Separator className='my-2'/>
        </CardContent>
        <CardFooter className='flex flex-1 items-center justify-between'>
            <div className=' text-neutral-300 '>Starts@500BDT</div>
            <Button variant={'secondary'} onClick={eventHandler} className='bg-orange-600 hover:bg-orange-700'>Buy Now</Button>
        </CardFooter>
    </Card>
  )
}

export default EventCard