import { fetchApi } from "@/app/api/axios";





export default async function getEvent(){

    const result = await fetchApi().get('event')
    const data = result.data.data

    return data
} 

console.log(getEvent)