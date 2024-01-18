import React from 'react'

function page(){
  return (
    <div className='min-h-screen flex flex-col items-center justify-center p-24 max-md:p-10 max-sm:p-0 m-5'>
      <h1 className='text-xl sm:text-4xl text-left font-extrabold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent'>
        <span className='text-zinc-50'>About</span> Track My Show
      </h1>
      <p className='text-lg sm:text-xl text-justify border border-orange-600 text-clip mt-10 text-neutral-300 p-0 sm:p-5'>Track My Show, a pioneering product of CYCAF, is a distinctive platform dedicated to promoting cult cultural events, such as theater plays, puppet shows, and more the types of shows often overlooked by mainstream media and audiences. We ensure convenience for our audiences, allowing them to easily stay updated on these valuable cult events and purchase tickets effortlessly with a preferred payment method. </p>
    </div>
  )
}

export default page
