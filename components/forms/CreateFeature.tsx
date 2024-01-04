import { Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import React, {  } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { fetchApi } from '@/app/api/axios'
import { Button } from '@/components/ui/button'
import { venueFeatureValidation } from '@/lib/validations/event'


const CreateFeture = () => {
    const form = useForm<z.infer<typeof venueFeatureValidation>>({
        resolver: zodResolver(venueFeatureValidation),
        defaultValues:{
            featureName:'',
        }
    })
    const onSubmit = async(value: z.infer<typeof venueFeatureValidation>) => {
        try {
           const res = await fetchApi().post('category',{
            featureName: value.featureName || ""
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
        name="featureName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Venue Feature</FormLabel>
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

export default CreateFeture;
