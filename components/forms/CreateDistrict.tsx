'use client'
import React from 'react'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from '../ui/button'
import { districtvalidation } from '@/lib/validations/event'
import { fetchApi } from '@/app/api/axios'

const CreateDistrict = () => {

    const form = useForm<z.infer<typeof districtvalidation>>({
        resolver: zodResolver(districtvalidation),
        defaultValues: {
        
            district:""
        }
    })

    const onSubmit = async(value:z.infer<typeof districtvalidation>) =>{

        try {
            const res = await fetchApi().post('district',{
                district: value.district || ""
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
          name="district"
          render={({ field }) => (
            <FormItem>
              <FormLabel>District</FormLabel>
              <FormControl>
                <Input placeholder="Name of district" {...field} />
              </FormControl>
              <FormDescription>
                Write The name of the district
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default CreateDistrict
