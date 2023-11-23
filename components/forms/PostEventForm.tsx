'use client'
import { fetchApi } from '@/app/api/axios'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { postEventValidation } from '@/lib/validations/event'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import ClipLoader from 'react-spinners/ClipLoader'
import { z } from 'zod'

const PostEventForm = () => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    

    const form = useForm<z.infer<typeof postEventValidation>>({
        resolver: zodResolver(postEventValidation),
        defaultValues: {
            eventName:'',
            organizerName:'',
            genres:'',
            location:'',
            date: new Date(),
            time:'',
        }
    })

    const onSubmit = async(value: z.infer<typeof postEventValidation>) => {
        try {
          setLoading(true)
            const response = await fetchApi.post('event',{
                eventName: value.eventName || "",
                organizerName: value.organizerName || "",
                genres: value.genres || "",
                location: value.location || "",
                date: value.date || "",
                time: value.time || ""
            })
            console.log('Posted Event',response.data.json())
            
        } catch (error) {
            console.log("Error:", error)
        }finally{
          setLoading(false)
        }
    }

    return (
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="imageUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image</FormLabel>
              <FormControl>
                <Input type='file' placeholder="upload image" {...field}  />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="eventName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Event Name</FormLabel>
              <FormControl>
                <Input type='text' placeholder="Event Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="organizerName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Orgranizer Name</FormLabel>
              <FormControl>
                <Input type='text' placeholder="organizer Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="genres"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Genres</FormLabel>
              <FormControl>
                <Input type='text' placeholder="Genres" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Venue</FormLabel>
              <FormControl>
                <Input type='text' placeholder="Venue" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Event Time</FormLabel>
              <FormControl>
                {/* <Input type= 'datetime-local' placeholder="date" {...field} /> */}
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="time"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Event Time</FormLabel>
              <FormControl>
                <Input type='time' placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit" className='w-full'>

          {error && <h1 className='text-red-500 animate-bounce'>OOPS! Please Try Again</h1> }

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
          ) : "Post"}
        </Button>
      </form>
    </Form>
    )
}

export default PostEventForm