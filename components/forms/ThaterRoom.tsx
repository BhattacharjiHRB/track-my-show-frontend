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
import { theaterValidation } from '@/lib/validations/event'


const ThaterRoom = () => {

    const form = useForm<z.infer<typeof theaterValidation>>({
        resolver: zodResolver(theaterValidation),
        defaultValues:{
            theater:'',
            vanue:'',
            seatCapacity:0,
            seatLayout:'',
        }

    })

    const onSubmit = async(value: z.infer<typeof theaterValidation>) => {
        try {
          const res = await fetchApi().post('event/theater',{
            theater: value.theater || "",
            vanue: value.vanue || "",
            seatCapacity: value.seatCapacity || 0,
            seatLayout: value.seatLayout || "",
          })
          const data = res.data.data
          console.log(data)
        } catch (error) {
          console.log(error)
        }

    }

  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
        control={form.control}
        name="theater"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Theater Name</FormLabel>
            <FormControl>
              <Input type='text' placeholder="Theater Name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="vanue"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Venue Name</FormLabel>
            <FormControl>
              <Input type='text' placeholder="Enter venue name" {...field}  />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
        <FormField
        control={form.control}
        name="seatCapacity"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Seat Capacity</FormLabel>
            <FormControl>
              <Input type='number' placeholder="Enter number of seat" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
        <FormField
        control={form.control}
        name="seatLayout"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Seat Layout</FormLabel>
            <FormControl>
              <Input type='text' placeholder="Enter Seat Layout Name" {...field} />
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

export default ThaterRoom
