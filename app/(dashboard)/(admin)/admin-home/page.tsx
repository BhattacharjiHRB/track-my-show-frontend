import CreateDistrict from '@/components/forms/CreateDistrict'
import EventList from '@/components/tables/Eventlist'
import UserTable from '@/components/tables/userTable'
import React from 'react'

function page() {
  return (
    <div className='flex flex-col items-center space-y-5 justify-center min-h-screen'>
      <UserTable />
      <EventList />
      <CreateDistrict />
    </div>
  )
}

export default page
