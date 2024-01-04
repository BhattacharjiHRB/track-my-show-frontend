'use client'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import ClipLoader from 'react-spinners/ClipLoader'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { userValidation } from '@/lib/validations/auth'
import { Check, X } from 'lucide-react'
import Image from 'next/image'






const UserForm = () => {

    const [loading, setLoading ] = useState(false)
    const [error, setError] = useState(false)


    const form = useForm<z.infer<typeof userValidation>>({
        resolver: zodResolver(userValidation),
        defaultValues:{
            imageUrl: '',
            firstName: '',
            lastName: '',
            email: '',
            address: '',
            pAdress: '',
            city: '',
            postalCode: 0,
            division: '',
            country: '',
        }
    }) 

    const onSubmit = async() => {
        console.log('user submit')
    }


  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
    <FormField
        control={form.control}
        name="imageUrl"
        render={({ field }) => (
          <FormItem>
            <FormLabel className='flex h-32 w-32 items-center justify-center rounded-full'>
              <Image
                 src = ""  
                 alt = "Profile Photo"
                 width={100}
                 height = {100}
                 priority
                 className="object-contain rounded-full bg-neutral-700"
              />
            </FormLabel>
            <FormControl>
              <Input type='file' placeholder='Upload Image' {...field} className=' w-56 h-10 bg-neutral-300 text-black ' />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className='grid grid-cols-2 w-full gap-3 '>
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input type='text' placeholder="Your First Name" {...field}  className=' bg-[#272626] '  />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input type='text' placeholder="Your Last Name" {...field}  className=' bg-[#272626] ' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

      </div>
        <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
            <Input type='email' placeholder="Type your Email" {...field}  className=' bg-[#272626] ' /> 
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <h1 className='text-3xl font-bold mt-8'>Address</h1>
        <FormField
        control={form.control}
        name="address"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Address Line 1</FormLabel>
            <FormControl>
            <Input type='text' placeholder="Write your address" {...field}  className=' bg-[#272626] ' />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
       
         <FormField
        control={form.control}
        name="pAdress"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Address Line 2</FormLabel>
            <FormControl>
              <Input type='text' placeholder="Write your address" {...field}  className=' bg-[#272626] ' />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className='grid grid-cols-2 w-full gap-5'>
          <FormField
        control={form.control}
        name="city"
        render={({ field }) => (
          <FormItem>
            <FormLabel>City</FormLabel>
            <FormControl>
              <Input type='text' placeholder="" {...field}  className=' bg-[#272626] ' />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
          <FormField
        control={form.control}
        name="division"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Division</FormLabel>
            <FormControl>
              <Input type='text' placeholder="" {...field}  className=' bg-[#272626] ' />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
          <FormField
        control={form.control}
        name="postalCode"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Postal Code</FormLabel>
            <FormControl>
              <Input type='number' placeholder="" {...field}  className=' bg-[#272626] ' />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
          <FormField
        control={form.control}
        name="country"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Country</FormLabel>
            <FormControl>
              <Input type='text' placeholder="" {...field} className=' bg-[#272626] '  />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      </div>
        {error && <h1 className='text-red-500 font-bold text-center  animate-bounce'>OOPS! Please Try Again</h1> }
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

export default UserForm
