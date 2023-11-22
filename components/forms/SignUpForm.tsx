'use client'
import React, { useState } from 'react'
import { set, useForm } from 'react-hook-form'
import { Form, FormControl, FormDescription, FormField, FormItem, FormMessage } from '../ui/form'
import { Button } from '../ui/button'
import { signUpValidation } from '@/lib/validations'
import * as z from 'zod'
import ClipLoader from "react-spinners/ClipLoader";
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../ui/input'
import { apiFetcher } from '@/hooks/apiFetcher'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { fetchApi } from '@/app/api/axios'


const SignUpForm = () => {

  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSeccess] = useState(false)

  const router = useRouter()
  // const token = localStorage.setItem('token', )

    const form = useForm<z.infer<typeof signUpValidation>>({
       resolver:zodResolver(signUpValidation),
       defaultValues:{
        name:'',
        phone:'',
        password:''
       }
    })

    const onSubmit = async(value: z.infer<typeof signUpValidation>) =>{
     
      try {
        setLoading(true)
        const response = await fetchApi.post('auth/register',{
          name: value.name || "",
          phone: value.phone || "",
          password: value.password || ""
        })


        console.log('Signed Up',response.data.json())
        setSeccess(true)
       
      }
      catch (error:any) {
        setError(true)
       console.log(`Error: ${error.message}`)
      }finally{
        setLoading(false)
      }
  }
  
     
      if(error){
        toast.error('Sorry Something went wrong')
      }

      if(success){
        toast.success('Successfully signed up')
        router.push('/login')
      
      }
  return (
    
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            {/* <FormLabel>Name</FormLabel> */}
            <FormControl>
              <Input type='name' placeholder="Name" {...field} className='px-6 bg-transparent border-orange-600' />
            </FormControl>
            <FormDescription>
            </FormDescription>
            <FormMessage />
          </FormItem>
          
        )}
      />
       <FormField
        control={form.control}
        name="phone"
        render={({ field }) => (
          <FormItem>
            {/* <FormLabel>Email</FormLabel> */}
            <FormControl>
              <Input type='phone' placeholder="Phone Number" {...field} className='px-6 bg-transparent border-orange-600' />
            </FormControl>
            <FormDescription>
            </FormDescription>
            <FormMessage />
          </FormItem>
          
        )}
      />
       <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            {/* <FormLabel>Password</FormLabel> */}
            <FormControl>
              <Input type='password' placeholder="Password" {...field} className='px-6 bg-transparent border-orange-600' />
            </FormControl>
            <FormDescription>
            </FormDescription>
            <FormMessage />
          </FormItem>
          
        )}
      />

      <Button type="submit" className='w-full mt-3'>
          {loading ? (
            <>
               <ClipLoader
                  color={'#ffff'}
                  loading={loading}
                  size={30}
                  aria-label="Loading Spinner"
                  data-testid="loader"
              />
            </>
          ) : 'Sign Up'}

      </Button>
    </form>
  </Form>
  )
}

export default SignUpForm;