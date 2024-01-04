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
    <div className='flex flex-col items-center justify-center mb-5' key={id}>
         <Image 
              src={imageUrl}
              alt={'Cover Photo'}
              width={270}
              height={270}
              className='rounded-full bg-neutral-800 border border-orange-600 mt-5'
         />
         <div className='flex flex-col items-center justify-between mt-5'>
              <h1 className='text-center font-bold text-2xl mb-5'>{name}</h1>
              <h3 className='text-center font-semibold text-xl'>About</h3>
              <p className='text-lg w-[500px] mt-2 text-gray-500 text-ellipsis text-justify'>{description}</p>
              <Button variant={'secondary'} size={'lg'} className='flex bg-orange-600 mt-6'>Follow <span><UserPlus className='h-6 w-6 ml-2' /></span></Button>
         </div>
         <div className='border-b border-gray-900'  />
      </div>
  )
}

export default OrganizerProfile
