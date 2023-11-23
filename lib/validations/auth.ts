import * as z from "zod"

export const signUpValidation = z.object({

        name: z.string().min(3,'Minimum 3 characters').max(30,'Maximum 30 characters'),
        phone: z.string().max(11,'Maximum 11 Digits').min(11,'Minimum 11 Digits'),
        password: z.string().min(8, 'Minimum 8 characters').max(30, 'Maximum 20 characters'),
    });


export const loginValidation = z.object({
    phone: z.string().max(11,'Maximum 11 Digits').min(11,'Minimum 11 Digits'),
    password: z.string().min(8, 'Minimum 8 characters').max(30, 'Maximum 20 characters')
});