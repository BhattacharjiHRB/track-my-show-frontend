'use client'

import { Form,
     FormControl,
     FormField,
     FormItem,
     FormLabel,
     FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import ClipLoader from 'react-spinners/ClipLoader'
import { z } from 'zod'
import { authApi, fetchApi } from '@/app/api/axios'
import { Button } from '@/components/ui/button'
import { passwordReset } from '@/lib/validations/auth'
import { Check, X } from 'lucide-react'



const ResetPass = () => {

    const [loading, setLoading ] = useState(false)
    const [error, setError] = useState(false)


    const form = useForm<z.infer<typeof passwordReset>>({
        resolver: zodResolver(passwordReset),
        defaultValues:{
            password:'',
            newPassword:'',
            confirmPassword:'',
        }
    }) 

    const onSubmit = async(value: z.infer<typeof passwordReset>) => {
        try {
          setLoading(true)
          const res = await fetchApi().post('auth/reset-password',{
            password: value.password || "",
            newPassword: value.newPassword || "",
            confirmPassword: value.confirmPassword || ""

          })
          const data = res.data.data
          console.log(data)
        } catch (error) {
          setError(true)
          setLoading(false)
          console.log(error)
        }finally{
          setLoading(false)
        }
    }
  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className=" w-full space-y-5">
          <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Current password</FormLabel>
            <FormControl>
              <Input type='password' placeholder="Enter your current Password" {...field} className='bg-[#272626] ' />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="newPassword"
        render={({ field }) => (
          <FormItem>
            <FormLabel>New Password</FormLabel>
            <FormControl>
              <Input type='password' placeholder="Write your new password" {...field}  className='bg-[#272626] ' />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
        <FormField
        control={form.control}
        name="confirmPassword"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Confirm Password</FormLabel>
            <FormControl>
              <Input type='password' placeholder="Re-write your new passowrd" {...field} className='bg-[#272626] ' />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      {error && <p className=' animate-bounce text-red-500'>Something went wrong</p>}
      <div className='flex items-center justify-evenly gap-8 mt-4'>
        <Button type="reset" size={'sm'} variant={'destructive'} > Cancel<span className='ml-2'><X className='h-5 w-5' /> </span> </Button>
          <Button type="submit" size={'sm'} >
            {loading ? (
              <div className='flex items-center'>
                <ClipLoader
                    color={'#ffff'}
                    loading={loading}
                    size={30}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                    />
                <h1 className=' animate-pulse'>Loading..</h1>
              </div>
            ) : (
              <div className='flex items-center gap-2'>
                <h1>Save</h1>
                <Check className='h-5 w-5' />
              </div>
            )}
          </Button>
      </div>
     </form>
  </Form>
  )
}

export default ResetPass