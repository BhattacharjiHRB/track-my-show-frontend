'use client'
import { fetchApi } from '@/app/api/axios'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import ClipLoader from 'react-spinners/ClipLoader'
import { z } from 'zod'
import { Textarea } from '../ui/textarea'
import { organizerValidation } from '@/lib/validations/auth'


const CreateOrganizer = () => {
    
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const form = useForm<z.infer<typeof organizerValidation>>({
        resolver: zodResolver(organizerValidation),
        defaultValues:{
            name:'',
            slug:'',
            description:'',
            about:'',
            cover:'',
            gallery:'',
        }
    })

    const onSubmit = async(value: z.infer<typeof organizerValidation>) =>{
      try {
        setLoading(true)
          const response = await fetchApi.post('organizer',{
              name:value.name || "",
              slug:value.slug || "",
              description:value.description || "",
              about:value.about || "",
              cover:value.cover || "",
              gallery:value.gallery || ""
          }) 
          console.log(response.data.Json())
      } catch (error) {
        console.log(error)
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
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input type='text' placeholder="Name" {...field}  />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="slug"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Slug</FormLabel>
              <FormControl>
                <Input type='text' placeholder="Username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea 
                  rows={5}
                  placeholder="Organizer Bio" 
                  {...field} 
                /> 
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
                  placeholder="About the organization" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="gallery"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gallery Image</FormLabel>
              <FormControl>
                <Input type='file' placeholder="organizer Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
           <FormField
          control={form.control}
          name="cover"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cover Photo</FormLabel>
              <FormControl>
                <Input type='file' placeholder="organizer Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
          {error && <h1 className='text-red-500 font-bold text-center  animate-bounce'>OOPS! Please Try Again</h1> }
        
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

export default CreateOrganizer
