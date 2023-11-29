import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'

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
              className='rounded-full'
         />
         <div className='flex flex-col items-center justify-between'>
              <h1 className='text-center font-bold text-2xl'>{name}</h1>
              <h3 className='text-center font-semibold text-xl'>About</h3>
              <p className='text-lg text-gray-500 text-justify'>{description}</p>
              <Button variant={'secondary'} size={'lg'}>Follow+</Button>
         </div>
         <div className='border-b border-gray-900'  />
      </div>
  )
}

export default OrganizerProfile
