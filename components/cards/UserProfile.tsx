import React from 'react'
import Image from 'next/image';
import { Button } from '../ui/button';



interface props{
    id:string;
    imageUrl:string;
    name:string;
    location:string;
    watchedShows:string;
    following:string;
}


const UserProfile = ({
    id, imageUrl, name, location, watchedShows,
    following
}:props) => {
  return (
    <div>
       <div className='flex flex-col items-center justify-center' key={id}>
         <Image 
              src={imageUrl}
              alt={'User Photo'}
              width={270}
              height={270}
              className='rounded-full border border-zinc-300 bg-neutral-800 mt-5'
         />
         <div className='flex flex-col items-center justify-between mt-5'>
              <h1 className='text-center font-bold text-3xl'>{name}</h1>
              <p className='text-lg text-gray-500 text-justify'>{location}</p>
             <div className='flex flex-1 items-center justify-between gap-4 mt-5'>
                <Button variant={'ghost'} size={'icon'} className='text-lg' > {watchedShows} </Button>
                <Button variant={'ghost'} size={'icon'} className='text-lg' > {following} </Button>
             </div>

         </div>
         <div className='border-b border-gray-900'  />
      </div>
    </div>
  )
}

export default UserProfile
