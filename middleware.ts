import exp from "constants";
import { NextRequest, NextResponse } from "next/server";




export default function middleware(req: NextRequest, res: NextResponse){

    const path = req.nextUrl.pathname

    const isPublicPath = path ==='/' || path === '/signup' || path === '/login'

    const token = req.cookies.get('token')?.value || ""

    if (isPublicPath && token){
        return NextResponse.redirect('/')
    }

    if (!isPublicPath && !token){
        return NextResponse.redirect('/login')
    }
}

export const config = {
    matcher : ['/' , '/login' , '/signup']
}