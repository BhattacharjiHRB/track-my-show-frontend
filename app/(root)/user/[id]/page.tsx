import { useRouter } from 'next/navigation'
import React from 'react'

const page = ({params}:{params:{id:string}}) => {

  const router = useRouter()

  const userInfo = localStorage.getItem('token')
  if(!userInfo){
    router.push('/login')
  }
  return (
    <section className='min-h-screen w-full flex flex-col justify-center items-center gap-5'>
      
    </section>
  )
}

export default page
