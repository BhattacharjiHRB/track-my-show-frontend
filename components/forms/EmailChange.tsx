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
import { fetchApi } from '@/app/api/axios'
import { Button } from '@/components/ui/button'
import { emailVerfication } from '@/lib/validations/auth'



const EmailChange = () => {
    const [loading, setLoading ] = useState(false)
    const [error, setError] = useState(false)


    const form = useForm<z.infer<typeof emailVerfication>>({
        resolver: zodResolver(emailVerfication),
        defaultValues:{
            email:'',
            cEmail:'',
            password:'',
        }
    }) 

    const onSubmit = async() => {
        console.log('user submit')
    }
  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input type='email' placeholder="Write your emaIL" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="cEmail"
        render={({ field }) => (
          <FormItem>
            <FormLabel>First Name</FormLabel>
            <FormControl>
              <Input type='email' placeholder="Re-write your email" {...field}  />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
        <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input type='password' placeholder="Enter your password" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button type="submit" size={'sm'} className='w-full'>save</Button>
      <Button type="submit" size={'sm'} className='w-full'>cancel</Button>
     </form>
  </Form>
  )
}

export default EmailChange
