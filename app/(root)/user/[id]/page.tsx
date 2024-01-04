'use client'

import React, { useEffect } from 'react'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { fetchApi, getTokenToLocalStorage } from '@/app/api/axios'
import UserProfile from '@/components/cards/UserProfile'

const page = ({params}:{params:{id:string}}) => {

  const router = useRouter()

  const userInfo = getTokenToLocalStorage()


  const user = async(id:string)=>{
    try {

      const res = await fetchApi().get(`user/${id}`)
      const data = res.data.data
      console.log(data)
      toast.success("You are logged in successfully")
    } catch (error) {
      console.log(error)
    }
  }
useEffect(() =>{
  user(params.id)
},[userInfo])

  return (
    <section className='min-h-screen w-full flex flex-col justify-center items-center gap-5'>
      {userInfo && (
        <>
          <div className='w-full flex flex-col justify-center items-center gap-5'>
              <UserProfile 
                id={params.id} 
                imageUrl={'/assets/images/error.svg'} 
                name={"Hrittik Bhattacharjee"} 
                location={'Dhaka, Bangladesh'} 
                watchedShows={'15'} 
                following={'30'}            
                />
          </div>
          <div className=' w-full border-b border-neutral-800' />

          {/* Ticket Buying History */}
          <div className='p-96' />
          

        </>
      )}
    </section>
  )
}

export default page
