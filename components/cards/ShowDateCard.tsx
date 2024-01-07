'use client'
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'

interface ShowDateCardProps {
    schedule: string
 
    
}

const ShowDateCard = (
    {  schedule,
        
    }:ShowDateCardProps) => {

  const weekDay = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const now = new Date()
  
  const [dateString, timeString] = schedule.split('T')

  return (
    <Card className='w-[156px] h-[156px] border-none bg-[#1E1D1D] text-zinc-50'>
        <CardHeader>
            <CardTitle className='text-sm'>
                {dateString}
            </CardTitle>
            <CardDescription className='text-gray-400'>
                {dateString}
            </CardDescription>
        </CardHeader>
        <CardContent className=' overflow-hidden'>
                <Button variant={'default'} size={'lg'} className='bg-orange-600 w-full' >
                    {timeString}
                </Button>
        </CardContent>
    </Card>
  )
}

export default ShowDateCard
