import * as z from "zod"

export const signUpValidation = z.object({

        name: z.string().min(3).max(30),
        phone: z.string().max(11),
        password: z.string().min(8).max(20)
    });


export const loginValidation = z.object({
    email: z.string().email(),
    password: z.string().min(8).max(30)
});