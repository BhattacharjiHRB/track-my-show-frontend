'use client'
import React, { useState } from 'react'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { Key, KeyIcon, KeyRound, LockIcon, LogIn, MenuIcon, Search, User } from 'lucide-react'
import { navRoutes } from '@/lib/constants'
import { Button } from '../ui/button'
import Link from 'next/link'
import Image from 'next/image'
import UserAvatarIcon from './UserAvatarIcon'
import ToggleTheme from './ToggleTheme'
import { useTheme } from 'next-themes'
import Searchbar from './Searchbar'
import { getTokenToLocalStorage } from '@/app/api/axios'

const Navbar = () => {
    const {theme} = useTheme()
    const isDark = theme === 'dark'

    
  return (
    <header className=' sm:flex sm:items-center sm:justify-center border-b border-neutral-800 gap-14'>
        <div className='relative px-4 sm:px-6 lg:px-8 flex h-20 items-center justify-evenly w-full z-10'>
        {/* Mobile resposive navigation tabs */}
            <div className='flex w-10 items-center m-5 '>
                <Sheet>
                    <SheetTrigger>
                        <MenuIcon className='w-6 h-6 flex md:hidden' />
                    </SheetTrigger>
                    <SheetContent 
                        className='w-[350px] sm:w-[550px] bg-black text-white' 
                        side={'left'}
                    >
                        <nav className='flex flex-col gap-5 mt-10'>
                            {navRoutes.map((route)=>(
                                <Link 
                                    href={route.href} 
                                    key={route.label}
                                    className='block px-2 py-1 text-lg hover:text-orange-600' 
                                >
                                    {route.label}
                                </Link>
                            ))}
                            
                        </nav>
                        <div className='border-b mt-10 my-10 py-10' />
                        <div className='flex flex-col items-center justify-evenly mt-14 gap-5'>
            
                           <Searchbar />
                            <Button className='bg-orange-600 text-sm'>
                                <p className='flex flex-1 items-center justify-between'>
                                <span>
                                    <LogIn className='w-6 h-6 mr-2' />
                                </span>
                                Login
                                </p>
                            </Button>
                        <Button 
                            className='text-sm hover:bg-orange-300/10 hover:text-orange-600' 
                            variant={'ghost'}
                        >
                            <p className='flex flex-1 items-center justify-between'>
                            <span>
                                <KeyRound className='w-6 h-6 mr-2' />
                            </span>
                            Sign Up
                            </p>
                        </Button>
                                
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
            {/* Navigattion left side tabs */}
            <nav className='flex items-start justify-start space-x-4 lg:space-x-6 max-md:hidden mr-16'>
                {navRoutes.map((route)=>(
                    <Button 
                        asChild 
                        key={route.label}
                        variant={'ghost'} 
                        className={'hover:bg-orange-300/10'}
                    >
                        <Link 
                            href={route.href}
                            className='text-md font-medium transition-colors hover:text-orange-600' 
                        >
                            {route.label}
                        </Link>
                    </Button>
                ))}
            </nav>
            {/* Track My show Logo */}
            
                    <Link 
                        href={'/'} 
                        key={'Home'} 
                        className='px-10 ml-0 mr-20 md:ml-5 md:mr-5 sm:ml-10 sm:mr-10 '
                        
                    >
                        {isDark ? (<Image 
                            src={'/assets/logos/tms-logo.svg'} 
                            alt={'logo'} 
                            width={65} 
                            height={65} 
                            className='object-contain' 
                            priority={true}
                        />):(  <Image 
                            src={'/assets/logos/tms-logo-dark.svg'} 
                            alt={'logo'} 
                            width={65} 
                            height={65} 
                            className='object-contain' 
                            priority={true}
                        />)}
                      

                    </Link>
            {/* Navigation right side buttons */}
            <div className='flex items-center ml-16 gap-2 max-sm:hidden mr-28'>
                    
                   <Searchbar />
                   {getTokenToLocalStorage() ? (
                     
                       <UserAvatarIcon />
                   ) : (
                    <><Link href={'/login'}>
                    <Button className='bg-orange-600 text-sm'>
                        <p className='flex flex-1 items-center justify-between'>
                            <span>
                                <LogIn className='w-6 h-6 mr-2' />
                            </span>
                            Login
                        </p>
                    </Button>
                </Link><Link href={'/sign-up'}>
                        <Button
                            className='text-sm hover:bg-orange-300/10 hover:text-orange-600'
                            variant={'ghost'}
                        >
                            <p className='flex flex-1 items-center justify-between'>
                                <span>
                                    <KeyRound className='w-6 h-6 mr-2' />
                                </span>
                                Sign Up
                            </p>
                        </Button>
                    </Link></>    
                   )}
                          
                    <ToggleTheme />
                </div>
        </div>
    </header>
  )
}

export default Navbar
