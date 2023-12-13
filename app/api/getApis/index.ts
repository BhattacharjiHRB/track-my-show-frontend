import { fetchApi } from "../axios"




export async function getOrganizer(slug:string) {
    try {

        const response = await fetchApi().get(`organizer/${slug}`)
        console.log(response.data.data)
    } catch (error:any) {
      console.log(error.response.data)
      
    }
} 

export async function getOrganizersEvent() {
    console.log("getevent")
    try {
        
        const response = await fetchApi().get(`event-by-organization`,)
        console.log(response.data.data)
    } catch (error:any) {
        console.log(error)
        console.log(error.response.status)
        
    }
}