import PostEventForm from '@/components/forms/PostEventForm'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const page = () => {

  return (
    <div>
        <PostEventForm />
    </div>
  )
}

export default page
