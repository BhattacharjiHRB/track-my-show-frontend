import React from 'react'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from '../ui/button'
import { Search } from 'lucide-react'

const Searchbar = () => {
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
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Search Event</DialogTitle>
            </DialogHeader>
            <div className='items-center'>
                <div className='mb-5'>
                    <Input id="search" placeholder="Search..." className='outline-none' />
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
