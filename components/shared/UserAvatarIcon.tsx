import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import Link from 'next/link'
import { Heart, LogOut, Settings, Smile, Ticket } from 'lucide-react'
import { useRouter } from 'next/navigation'

const UserAvatarIcon = () => {
    const router = useRouter()

    const logOut = () => {
        localStorage.removeItem('token')
        window.location.reload()
        router.push('/login')
    
    }

  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Avatar>
                <AvatarImage src='' alt='userPic' />
                <AvatarFallback className='text-black'>UN</AvatarFallback>
            </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-48 bg-neutral-950 text-zinc-50'>
            <DropdownMenuLabel>
             <h6 className=''>My Acoount</h6>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
                <DropdownMenuItem>
                    <Link href={'/user-profile'}>
                        <h6 className='flex'>
                            <Ticket className='w-5 h-5 mr-2' />
                            <span>Tickets</span>
                        </h6>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href={'/user-profile'}>
                        <h6 className='flex'>
                            <Smile className='w-5 h-5 mr-2' />
                            <span>Interests</span>
                        </h6>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    
                    <Link href={'/user-profile'}>
                        <h6 className='flex'>
                            <Heart className='w-5 h-5 mr-2' />
                            <span>Wishlist</span>
                        </h6>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href={'/user-profile'}>
                        <h6 className='flex'>
                            <Settings className='w-5 h-5 mr-2' />
                            <span>Settings</span>
                        </h6>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                        <h6 className='flex text-red-600' onClick={logOut}>
                            <LogOut className='w-5 h-5 mr-2' />
                            <span>Logout</span>
                        </h6>
                </DropdownMenuItem>
            </DropdownMenuGroup>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserAvatarIcon
