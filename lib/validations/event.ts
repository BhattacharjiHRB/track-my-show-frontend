import * as z from "zod";


export const postEventValidation = z.object({
    
    imageUrl: z.string(),
    eventName: z.string(),
    organizerName: z.string(),
    genres: z.string(),
    location: z.string(),
    date: z.date().min(new Date()),
    time: z.string()

})