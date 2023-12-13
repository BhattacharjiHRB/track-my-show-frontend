import * as z from "zod";


export const postEventValidation = z.object({
    
    imageUrl: z.string().url(),
    cover: z.string().url(),
    eventName: z.string(),
    organizerName: z.string(),
    genres: z.string(),
    location: z.string(),
    date: z.date().min(new Date()),
    time: z.string(),
    about: z.string().min(5).max(500),    
    story: z.string().min(5).max(500),
    
})

