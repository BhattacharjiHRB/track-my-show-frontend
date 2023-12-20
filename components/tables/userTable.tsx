
'use client'
import { fetchApi } from "@/app/api/axios"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { useEffect, useState } from "react"
  

interface userType {
    id:string;
    name:string;
    phone:string;
    email:string;
}

  export default function UserTable() {
    const [userList, setUserList] = useState<userType[]>([])

    const getUserList = async() => {
        try {
            const res = await fetchApi().get('user')
            setUserList(res.data.data)
            console.log(res.data.data)
        } catch (error:any) {
            console.log(error.message)
        }
    }
  
    useEffect(()=>{
        getUserList()

    },[])

    return (
      <Table className="w-[900px]">
        <TableCaption>A list of your recent Users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px]">Name</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Email</TableHead>
            
          </TableRow>
        </TableHeader>
        <TableBody>
          {userList.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>{user.email}</TableCell>
      
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={5}>Total user</TableCell>
            <TableCell className=" text-right font-bold"> {userList.length} </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    )
  }
  