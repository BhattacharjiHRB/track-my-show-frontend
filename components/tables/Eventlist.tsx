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
  

interface eventType {
  
  id: string; 
  name: string;
  organizer_id: string;
  location_id: string;
  start_date: string;
  end_date: string;
}

  export default function EventList() {

    const [showList, setShowList] = useState<eventType[]>([])

    const getShowList = async() => {
        try {
            const res = await fetchApi().get('getShowList')
            setShowList(res.data.data)
            console.log(res.data.data)
        } catch (error:any) {
            console.log(`ShowList: ${error.message} `)
        }
    }
  
    useEffect(()=>{
        getShowList()

    },[])

    return (
      <Table className="w-[900px]">
        <TableCaption>A list of your recent Users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Organizer</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Location</TableHead>
            
          </TableRow>
        </TableHeader>
        <TableBody>
          {showList.map((show) => (
            <TableRow key={show.id}>
              <TableCell className="font-medium " >{show.name}</TableCell>
              <TableCell>{show.organizer_id}</TableCell>
              <TableCell>{show.location_id}</TableCell>
              <TableCell>{show.start_date}</TableCell>
              <TableCell>{show.end_date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={5}>Total user</TableCell>
            <TableCell className="text-right"> {showList.length} </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    )
  }
  