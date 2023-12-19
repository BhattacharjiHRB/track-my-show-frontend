import React, { useState } from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select'
import { fetchApi } from '@/app/api/axios'


interface districtType{
  id: string;
  name: string;
}

const FindByPlace = async() => {
  const [district, setDistrict] = useState<districtType[]>([])
  try {
    const result = await fetchApi().get('district')
    const data = result.data
    console.log(data)
    setDistrict(data)
  } catch (error) {
    console.log(error)
  }

  return (
    <Select>
    <SelectTrigger className="w-[200px]">
      <SelectValue placeholder="Find by District" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>District</SelectLabel>
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
