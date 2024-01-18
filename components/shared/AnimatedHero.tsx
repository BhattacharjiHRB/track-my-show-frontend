import React from 'react'
import Image from 'next/image'

const imageUrls = [
  "image.png",
  "image-1.png",
  "image-3.png",
  "image-4.png",
  "image-5.jpg",
  "image-6.jpg",
  
]

export default function AnimatedHero() {
  return (
      <div>
        <div className=' h-[175vh] flex flex-col p-5 box-border gap-5 '>
          <Column image={[imageUrls[0], imageUrls[1], imageUrls[2]]} />
          <Column image={[imageUrls[3], imageUrls[4], imageUrls[5]]} />
        </div>
      </div>
    
  )
}


interface props{
  image:string[]
}

const Column = ({image}:props) =>{
  return (
    <div className='w-1/2 relative flex-col min-w-[250px] gap-5 whitespace-nowrap '>
      {imageUrls.map((image, index) => (
        <Image 
          key={index}
          src={`/assets/images/${image}`}
          alt='Hero Images'
          fill
        />
      ))}
      
    </div>
  )
}
