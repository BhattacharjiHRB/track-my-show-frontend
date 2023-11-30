import React from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select'

const FindByPlace = () => {
  return (
    <Select>
    <SelectTrigger className="w-[200px]">
      <SelectValue placeholder="Find by District" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>District</SelectLabel>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="grapes">Grapes</SelectItem>
        <SelectItem value="pineapple">Pineapple</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
  )
}

export default FindByPlace
