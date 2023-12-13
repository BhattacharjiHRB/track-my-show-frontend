import EventList from '@/components/tables/Eventlist'
import UserTable from '@/components/tables/userTable'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <UserTable />
      <EventList />
    </div>
  )
}

export default page
