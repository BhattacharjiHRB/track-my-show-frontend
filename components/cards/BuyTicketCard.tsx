import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import Link from 'next/link'

const BuyTicketCard = () => {
  return (
    <Card className='w-[250px] h-[143px] border-none bg-[#1E1D1D] text-zinc-50'>
        <CardHeader>
            <CardTitle>
                Starts @500 BDT
            </CardTitle>
        </CardHeader>
        <CardContent>
            <Link href={'/seat-layout'}>
                <Button variant={'default'} size={'lg'} className='bg-orange-600 w-full' >
                    Buy Ticket
                </Button>
            </Link>
        </CardContent>
    </Card>
  )
}

export default BuyTicketCard
