import React from 'react'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
import UserForm from '@/components/forms/UserForm'
import ResetPass from '@/components/forms/ResetPass'
import EmailChange from '@/components/forms/EmailChange'

export default function page() {
  return (
    <section className='min-h-screen flex flex-col items-center justify-center p-8'>
      <div className='flex w-2/3 items-center justify-center bg-[#232222] p-8 rounded-xl '>
      <Tabs defaultValue="personal" className="w-full">
          <TabsList className="grid w-full gap-5 grid-cols-4">
            <TabsTrigger value="personal">Personal info</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="email">Email Preferences</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>
          <TabsContent value="personal">
            <UserForm />
          </TabsContent>
          <TabsContent value="notifications">
          <div className='flex min-h-screen'>
            Notifications
          </div>
          </TabsContent>
          <TabsContent value="email">
          <div className='flex flex-col items-center justify-center min-h-screen'>
          <h1 className='text-2xl'>Change Email</h1>
            <EmailChange />
          </div>
          </TabsContent>
          <TabsContent value="security">
          <div className='flex flex-col min-h-screen items-center justify-center'>
            <h1 className='text-2xl'>Reset Password</h1>
            <ResetPass />
          </div>
          </TabsContent>
        </Tabs>

      </div>
    </section>
  )
}
