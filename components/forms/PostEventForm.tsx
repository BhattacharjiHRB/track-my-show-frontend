'use client'
import { fetchApi } from '@/app/api/axios'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { postEventValidation } from '@/lib/validations/event'
import { zodResolver } from '@hookform/resolvers/zod'
import { Calendar } from '@/components/ui/calendar'
import React, { ChangeEvent, useState } from 'react'
import { useForm } from 'react-hook-form'
import ClipLoader from 'react-spinners/ClipLoader'
import { z } from 'zod'
import { Textarea } from '../ui/textarea'
import { isBase64Image } from '@/lib/utils'

const PostEventForm = () => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [date, setDate] = useState<Date | undefined >(new Date())
    const [files, setFiles] = useState<File[]>([])
    

    const form = useForm<z.infer<typeof postEventValidation>>({
        resolver: zodResolver(postEventValidation),
        defaultValues: {
            cover:'',
            imageUrl:'',
            eventName:'',
            organizerName:'',
            genres:'',
            location:'',
            date: new Date(),
            time:'',
            about:'',
            story: '',
            
        }
    })

    const handleImage = (
      e: ChangeEvent<HTMLInputElement>,
      fieldChange: (value: string) => void
    ) =>{
       e.preventDefault()
       
       const fileReader = new FileReader()

       if(e.target.files && e.target.files.length > 0){

          const file = e.target.files[0]
          setFiles(Array.from(e.target.files))

          if(!file.type.includes('image')) return null;

          fileReader.onload = async(event) =>{

            const imageDataUrl = event.target?.result?.toString() || '';
            fieldChange(imageDataUrl)
          }
          fileReader.readAsDataURL(file)
       }

    }

    const onSubmit = async(value: z.infer<typeof postEventValidation>) => {

        const blob = value.imageUrl;

        const imageChange = isBase64Image(blob)

        try {
          setLoading(true)
            const response = await fetchApi().post('event',{
                cover: value.cover || "",
                imageUrl: value.imageUrl || "",
                eventName: value.eventName || "",
                organizerName: value.organizerName || "",
                genres: value.genres || "",
                location: value.location || "",
                date: value.date || "",
                time: value.time || "",
                about : value.about || '',
                story : value.story || '',
                
            })
            console.log('Posted Event',response.data.data)
            setDate(response.data.data)
            
        } catch (error) {
            console.log("Error:", error)
            setError(true)
        }finally{
          setLoading(false)
        }
    }

    return (
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="cover"
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
          name="eventName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Event slug</FormLabel>
              <FormControl>
                <Input type='text' placeholder="Event Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="story"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Event Description</FormLabel>
              <FormControl>
                <Textarea 
                  rows={5}
                  placeholder="A story about the event" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="imageUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gallery Image</FormLabel>
              <FormControl>
                <Input type='file' placeholder="Event Cover" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="about"
          render={({ field }) => (
            <FormItem>
              <FormLabel>About</FormLabel>
              <FormControl>
                <Textarea 
                  rows={5} 
                  placeholder="About Event" 
                  {...field}
                />
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
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Venue Feature</FormLabel>
              <FormControl>
                <Input type='text' placeholder="Features" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className=''>

        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Event Date</FormLabel>
              <FormControl>
                <Calendar 
                  mode='single'
                  selected={date}
                  onSelect={setDate}
                />
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
          </div>
        {error && <h1 className='text-red-500 font-bold text-center animate-bounce'>OOPS! Please Try Again</h1> }
        <Button type="submit" className='w-full'>
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
