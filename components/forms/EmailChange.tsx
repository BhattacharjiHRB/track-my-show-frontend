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
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { emailVerfication } from '@/lib/validations/auth'
import { Check, X } from 'lucide-react'



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
    <form onSubmit={form.handleSubmit(onSubmit)} className=" w-full space-y-5">
          <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input type='email' placeholder="Write your email" {...field} className=' bg-[#272626] ' />
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
            <FormLabel>Confirm Email</FormLabel>
            <FormControl>
              <Input type='email' placeholder="Re-write your email" {...field}  className=' bg-[#272626] ' />
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
              <Input type='password' placeholder="Enter your password" {...field} className=' bg-[#272626] ' />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className="flex items-center justify-evenly gap-8 mt-4">
        <Button type="reset" size={'sm'} variant={'destructive'}>cancel <span className='ml-2'><X className='h-5 w-5' /> </span></Button>
        <Button type="submit" size={'sm'}> <div className='flex items-center gap-2'>
              <h1>Save</h1>
              <Check className='h-5 w-5' />
            </div></Button>
      </div>
     </form>
  </Form>
  )
}

export default EmailChange
