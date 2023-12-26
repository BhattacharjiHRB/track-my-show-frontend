import { fetchApi } from '@/app/api/axios'
import { useRouter } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'

const page = ({params}:{params:{id:string}}) => {

  const router = useRouter()

  const userInfo = localStorage.getItem('token')



  if(userInfo){
    (async()=>{
      try {

        const res = await fetchApi().get(`user/${params.id}`)
        const data = res.data.data
        console.log(data)
        toast.success("You are logged in successfully")
      } catch (error) {
        console.log(error)
      }
    })()
  }else{

    toast.error("Please Login First")
    router.push('/login')
    
  }

  return (
    <section className='min-h-screen w-full flex flex-col justify-center items-center gap-5'>
      {userInfo && (
        <div className='w-full flex flex-col justify-center items-center gap-5'>

        </div>
      )}
    </section>
  )
}

export default page
