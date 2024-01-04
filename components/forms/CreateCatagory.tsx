import { Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { use, useState } from 'react'
import { useForm } from 'react-hook-form'
import ClipLoader from 'react-spinners/ClipLoader'
import { z } from 'zod'
import { authApi, fetchApi } from '@/app/api/axios'
import { Button } from '@/components/ui/button'
import { passwordReset } from '@/lib/validations/auth'
import { eventCatagoryValidation } from '@/lib/validations/event'
import { ca } from 'date-fns/locale'


const CreateCatagory = () => {
    const form = useForm<z.infer<typeof eventCatagoryValidation>>({
        resolver: zodResolver(eventCatagoryValidation),
        defaultValues:{
            catagory:'',
        }
    })
    const onSubmit = async(value: z.infer<typeof eventCatagoryValidation>) => {
        try {
           const res = await fetchApi().post('category',{
            catagory: value.catagory || ""
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
        name="catagory"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Show Category</FormLabel>
            <FormControl>
              <Input type='text' placeholder="Write the category" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button type="submit" size={'sm'} className='w-full'>confirm</Button>
      </form>
      </Form>
  )
}

export default CreateCatagory
