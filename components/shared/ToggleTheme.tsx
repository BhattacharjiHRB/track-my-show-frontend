"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"


export default function ToggleTheme() {
  const { theme ,setTheme } = useTheme()

  return (
        <Button 
            variant='ghost'
            size='icon'
            className='mr-2 hover:bg-orange-300/10 hover:text-orange-600'
            aria-label='Shopping Cart'
            onClick={() => setTheme( theme === "dark" ? "light" : "dark")}
            
        >
            <Sun className='h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
            <Moon className='absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
            <span className='sr-only'>
                Toggle Theme
            </span>
        </Button>
  )
}
