'use client'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import ClipLoader from 'react-spinners/ClipLoader'
import { z } from 'zod'
import { Textarea } from '../ui/textarea'
import { fetchApi } from '@/app/api/axios'
import { Button } from '@/components/ui/button'
import { userValidation } from '@/lib/validations/auth'






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
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
    <FormField
        control={form.control}
        name="imageUrl"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Gallery Image</FormLabel>
            <FormControl>
              <Input type='file' placeholder="" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="firstName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>First Name</FormLabel>
            <FormControl>
              <Input type='text' placeholder="Your First Name" {...field}  />
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
              <Input type='text' placeholder="Your Last Name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
        <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
            <Input type='email' placeholder="Type your Email" {...field} /> 
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
        <FormField
        control={form.control}
        name="address"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Address Line 1</FormLabel>
            <FormControl>
            <Input type='text' placeholder="Write your address" {...field} />
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
              <Input type='text' placeholder="Write your address" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
          <FormField
        control={form.control}
        name="city"
        render={({ field }) => (
          <FormItem>
            <FormLabel>City</FormLabel>
            <FormControl>
              <Input type='text' placeholder="" {...field} />
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
              <Input type='text' placeholder="" {...field} />
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
              <Input type='number' placeholder="" {...field} />
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
            <FormLabel></FormLabel>
            <FormControl>
              <Input type='text' placeholder="" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
        {error && <h1 className='text-red-500 font-bold text-center  animate-bounce'>OOPS! Please Try Again</h1> }
      
      <Button type="submit" size={'sm'} className='w-full'>
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
        ) : "Save"}
      </Button>
      <Button type="reset" size={'sm'} className='w-full'> Cancel </Button>
    </form>
  </Form>
  )
}

export default UserForm
