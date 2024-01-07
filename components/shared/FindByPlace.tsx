'use client'
import React, { useState } from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select'
import { fetchApi } from '@/app/api/axios'
import { MapPin } from 'lucide-react';


interface districtType{
  id: string;
  name: string;
}

const FindByPlace = () => {
  const [district, setDistrict] = useState<districtType[]>([])
  
  const showDistrict = async() =>{
    try {
      const result = await fetchApi().get('district')
      const data = result.data.data
      console.log(data)
      setDistrict(data)
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <Select>
    <SelectTrigger className="w-[200px]">
      <SelectValue placeholder="Find by District" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel className='flex gap-2'>District <span> <MapPin className='h-5 w-5' /> </span> </SelectLabel>
        {district.map((dis) =>(
            <SelectItem value={dis.name} key={dis.id} >{dis.name}</SelectItem>
        ))}
        {/* <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="grapes">Grapes</SelectItem>
        <SelectItem value="pineapple">Pineapple</SelectItem> */}
      </SelectGroup>
    </SelectContent>
  </Select>
  )
}

export default FindByPlace
