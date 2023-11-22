'use client'
import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import Link from 'next/link'

const ShowDateCard = () => {
  const weekDay = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const now = new Date()
  
  return (
    <Card className='w-[156px] h-[156px] border-none bg-[#1E1D1D] text-zinc-50'>
        <CardHeader>
            <CardTitle>
                {months[now.getMonth()]}, {now.getDate()}
            </CardTitle>
            <CardDescription className='text-gray-400'>
                {weekDay[now.getDay()]}
            </CardDescription>
        </CardHeader>
        <CardContent>
                <Button variant={'default'} size={'lg'} className='bg-orange-600 w-full' >
                    {now.getHours()%12}:{now.getMinutes()} {now.getHours()>=12 ? 'PM' : 'AM'}
                </Button>
        </CardContent>
    </Card>
  )
}

export default ShowDateCard
