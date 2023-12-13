import { fetchApi } from '@/app/api/axios';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import React from 'react'
import { Button } from '../ui/button';
import Link from 'next/link';


interface OrganizerListProps {
  id:string;
  name:string;
  imageUrl:string;
  slug:string;
}



const OrganizerList = (
  {
    id,
    name,
    imageUrl,
    slug
  }:OrganizerListProps
) => {
  
  return (
    <>
      <Card className='w-[500px] h-[173px] max-md:w-[350px] items-center justify-center bg-[#1E1D1D] '>
        <CardHeader className='flex-row justify-items-start gap-4 mt-2'>
          <Image 
            src={imageUrl}
            alt="Organizer"
            width={75}
            height={75}
            className='rounded-full object-cover bg-neutral-800 border border-orange-600'
          />
          <CardTitle className='py-5'>
              {slug}
          </CardTitle>
         
        </CardHeader>
        <CardDescription className=' w-full'>
          <Link href={`/organizer/${id}`}>
            <Button className='w-full bg-orange-700' >View</Button>
          </Link>
        </CardDescription>
      </Card>
    </>
  )
}

export default OrganizerList

