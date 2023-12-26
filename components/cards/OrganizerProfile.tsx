import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import { UserPlus } from 'lucide-react';

interface props{
    id:string;
    imageUrl:string;
    name:string;
    description:string;
}

const OrganizerProfile = (
   { id, 
    imageUrl,
    name,
    description}:props) => {
  return (
    <div className='flex flex-col items-center justify-center' key={id}>
         <Image 
              src={imageUrl}
              alt={'Cover Photo'}
              width={270}
              height={270}
              className='rounded-full bg-neutral-800 border border-orange-600 mt-5'
         />
         <div className='flex flex-col items-center justify-between mt-5'>
              <h1 className='text-center font-bold text-2xl'>{name}</h1>
              <h3 className='text-center font-semibold text-xl'>About</h3>
              <p className='text-lg text-gray-500 text-justify'>{description}</p>
              <Button variant={'secondary'} size={'lg'} className='flex bg-orange-600'>Follow <span><UserPlus /></span></Button>
         </div>
         <div className='border-b border-gray-900'  />
      </div>
  )
}

export default OrganizerProfile
