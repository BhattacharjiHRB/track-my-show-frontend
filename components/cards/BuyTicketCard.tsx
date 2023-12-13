'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { fetchApi } from '@/app/api/axios';
import { useRouter } from 'next/navigation';

interface props{
    id: string;
    price: string;
}

const BuyTicketCard = ({id, price}:props) => {

    const router = useRouter()

    const buyTicket = async () => {
        try {
            const res = await fetchApi().get('buy-ticket')
            console.log(res.data.data)

            if(res.status === 200){
                router.push(`seatLayout/${id}`)
            }

            } catch (error) {
                console.log(error)
                
        }
      }

  return (
    <Card className='w-[250px] h-[143px] border-none bg-[#1E1D1D] text-zinc-50'>
        <CardHeader>
            <CardTitle>
                Starts @{price} BDT
            </CardTitle>
        </CardHeader>
        <CardContent>
                <Button variant={'default'} size={'lg'} className='bg-orange-600 w-full' onClick={buyTicket} >
                    Buy Ticket
                </Button>
        </CardContent>
    </Card>
  )
}

export default BuyTicketCard
