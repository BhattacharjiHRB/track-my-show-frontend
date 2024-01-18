
import { Facebook, Linkedin, Youtube } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import tmsLogo from '@/public/assets/logos/tms-logo.svg'

const Footer = () => {

    
  return (
    <>
    <footer className='grid grid-flow-row grid-cols-4 items-center justify-evenly p-10 w-full border-b max-md:grid-cols-2 max-sm:grid-cols-1'>
        <div className='flex flex-col gap-5 items-start justify-start '>
                        <Image 
                            src={tmsLogo} 
                            alt={'logo'} 
                            width={100} 
                            height={100} 
                            className='object-contain' 
                            priority={true}
                        />
                <div>
                    <h6 className='text-sm text-gray-400'> Address: House-4, Block-L, Road-2/1 <br /> Banani, Dhaka-1213 <br />Email: trackmyshow2023@gmail.com <br /> Mobile: +880123456789</h6>
                </div>
        </div>
        <div className='grid grid-flow-row grid-cols-1 gap-3 max-md:mt-5'>
            <span className='text-lg font-bold mb-3'>Company</span>
            <a href="" className='text-sm text-gray-400 hover:text-orange-600 hover:underline'>About</a>
            <a href="" className='text-sm text-gray-400 hover:text-orange-600 hover:underline'>Contact</a>
            <a href="" className='text-sm text-gray-400 hover:text-orange-600 hover:underline'>Trending Shows</a>
            <a href="" className='text-sm text-gray-400 hover:text-orange-600 hover:underline'>List your show</a>
        </div>
        <div className='grid grid-flow-row grid-cols-1 gap-3 max-md:mt-5'>
            <span className='text-lg font-bold mb-3'>Useful Links</span>
            <a href="" className='text-sm text-gray-400 hover:text-orange-600 hover:underline'>FAQs</a>
            <a href="" className='text-sm text-gray-400 hover:text-orange-600 hover:underline'>Privacy & Policy</a>
            <a href="" className='text-sm text-gray-400 hover:text-orange-600 hover:underline'>Terms & conditions</a>
            <a href="" className='text-sm text-gray-400 hover:text-orange-600 hover:underline'>Return Policy</a>
        </div>
        <div className='flex flex-1 items-center justify-evenly'>
            <a href="https://www.facebook.com/">
                <Facebook className='h-8 w-8 text-orange-600'/>
            </a>
            <a href="https://www.youtube.com/">
                <Youtube className='h-8 w-8 text-orange-600'/>
            </a>
            <a href="https://www.linkedin.com/">
                <Linkedin className='h-8 w-8 text-orange-600'/>
            </a>

        </div>
    </footer>
    <footer className=' container mx-auto px-4 py-4 items-center justify-center'>
       <p className='text-center'>&copy; {new Date().getFullYear()} - All Rights Reserved by Track My Show</p>
    </footer>
   </>
  )
}

export default Footer
