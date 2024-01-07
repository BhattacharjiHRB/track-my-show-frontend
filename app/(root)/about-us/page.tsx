import React from 'react'

function page(){
  return (
    <div className='min-h-screen flex flex-col items-center justify-center p-24 max-md:p-10 max-sm:p-0 m-5'>
      <h1 className='text-xl sm:text-4xl text-left font-extrabold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent'>
        <span className='text-zinc-50'>About</span> Track My Show
      </h1>
      <p className='text-lg sm:text-xl text-clip mt-10 text-neutral-300 p-0 sm:p-5'> A distinctive platform dedicated to promoting cult cultural events, such as theater plays, puppet shows, and more the types of shows often overlooked by mainstream media and audiences.We ensure convenience for our audiences,allowing them to easily stay updated on these valuable cult events and purchase tickets effortlessly with a preferred payment method.Our mission is to revolutionize the traditional theater ticketing experience by bringing it into the digital age while also promoting and celebrating the rich culture of Bangladesh.</p>
    </div>
  )
}

export default page
