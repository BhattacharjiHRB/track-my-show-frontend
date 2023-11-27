'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Button } from '../ui/button'
import { loginValidation } from '@/lib/validations/auth'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../ui/input'
import { authApi } from '@/app/api/axios'
import ClipLoader from 'react-spinners/ClipLoader'
import { useRouter } from 'next/navigation'

const LoginForm = () => {

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  
  const router = useRouter() 
    
    const form = useForm<z.infer<typeof loginValidation>>({
        resolver:zodResolver(loginValidation),
        defaultValues:{
         phone:'',
         password:''
        }
     })
 
     const onSubmit = async(value: z.infer<typeof loginValidation>) =>{
      try {
          setLoading(true)
          const response = await authApi.post('auth/login',
            {
                phone:value.phone || "",
                password:value.password || ""
            }
          )
          router.push('/')
          console.log(response.data)
      } catch (error) {
        setError(true)
        console.log('Error:', error)
      }
     }
      
  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
       <FormField
        control={form.control}
        name="phone"
        render={({ field }) => (
          <FormItem>
            {/* <FormLabel>Email</FormLabel> */}
            <FormControl>
              <Input type='phone' placeholder="Enter Your Phone Number" {...field} className='px-6 bg-transparent border-orange-600' />
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

      {error && <h1 className='text-red-500 font-bold text-center animate-bounce'>OOPS! Please Try Again</h1> }
      <Button type="submit" className='w-full mt-3'>
        {loading ? (
            <ClipLoader
            color={'#ffff'}
            loading={loading}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
        ) : 'Login'}
      </Button>
    </form>
  </Form>
  )
}

export default LoginForm;
