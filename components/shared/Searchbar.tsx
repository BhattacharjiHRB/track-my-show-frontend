'use state'

import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from '../ui/button'
import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'

const Searchbar = () => {

    const [text, setText] = useState('')

    const router = useRouter()

    useEffect(()=>{
        // router.push(`/event?search=${text}`)
    },[text, router])    

  return (
    <Dialog>
        <DialogTrigger>
                <Button
                    variant={'ghost'} 
                    className='text-sm hover:bg-orange-300/10 hover:text-orange-600 rounded-full'
                    >
                            <Search className='w-6 h-6' />
                            <span className='sr-only'>Search</span>
                    </Button>
        </DialogTrigger>
        <DialogContent className='max-sm:w-[370px] '>
            <DialogHeader>
                <DialogTitle>Search Event</DialogTitle>
            </DialogHeader>
            <div className='items-center'>
                <div className='mb-5'>
                    <Input 
                        id="search" 
                        value={text}
                        onChange={(e) => setText(e.target.value)} 
                        placeholder="Search..." 
                        className='outline-none' 
                        />
                </div>
                <Button className='w-full'>
                    <Search className='w-6 h-6' /> 
                    <span className='text-lg'>Search</span> 
                </Button>
            </div>
        </DialogContent>
    </Dialog>
  )
}

export default Searchbar
