'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Button } from '../ui/button'
import { loginValidation } from '@/lib/validations'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../ui/input'

const LoginForm = () => {
    
    const form = useForm<z.infer<typeof loginValidation>>({
        resolver:zodResolver(loginValidation),
        defaultValues:{
         email:'',
         password:''
        }
     })
 
     const onSubmit = () =>{
        
     }
      
  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
       <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            {/* <FormLabel>Email</FormLabel> */}
            <FormControl>
              <Input type='email' placeholder="email@gmail.com" {...field} className='px-6 bg-transparent border-orange-600' />
            </FormControl>
            <FormDescription>
            </FormDescription>
            <FormMessage />
          </FormItem>
          
        )}
      />
       <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            {/* <FormLabel>Password</FormLabel> */}
            <FormControl>
              <Input type='password' placeholder="Password" {...field} className='px-6 bg-transparent border-orange-600' />
            </FormControl>
            <FormDescription>
            </FormDescription>
            <FormMessage />
          </FormItem>
          
        )}
      />

      <Button type="submit" className='w-full mt-3'>Submit</Button>
    </form>
  </Form>
  )
}

export default LoginForm;
