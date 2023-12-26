import * as z from "zod"

export const signUpValidation = z.object({

        name: z.string().min(3,'Minimum 3 characters').max(30,'Maximum 30 characters'),
        phone: z.string().min(11,'Minimum 11 Digits').max(11,'Maximum 11 Digits'),
        password: z.string().min(8, 'Minimum 8 characters').max(30, 'Maximum 20 characters'),
    });


export const loginValidation = z.object({
    phone: z.string().max(11,'Maximum 11 Digits').min(11,'Minimum 11 Digits'),
    password: z.string().min(8, 'Minimum 8 characters').max(30, 'Maximum 20 characters')
});

export const userValidation = z.object({
    imageUrl:z.string().url(),
    firstName:z.string().min(3,'Minimum 3 characters').max(30,'Maximum 30 characters'),
    lastName:z.string().min(3,'Minimum 3 characters').max(30,'Maximum 30 characters'),
    email:z.string().email(),
    address:z.string().min(3,'Minimum 3 characters').max(300,'Maximum 300 characters'),
    pAdress:z.string().min(3,'Minimum 3 characters').max(300,'Maximum 300 characters'),
    city:z.string().min(3,'Minimum 3 characters').max(30,'Maximum 30 characters'),
    postalCode:z.number().min(4,'Minimum 1000').max(4,'Maximum 9999'),
    division:z.string().min(3,'Minimum 3 characters').max(30,'Maximum 30 characters'),
    country:z.string().min(3,'Minimum 3 characters').max(30,'Maximum 30 characters'),

    
})


export const emailVerfication = z.object({
    email: z.string().email(),
    cEmail: z.string().email(),
    password: z.string().min(8, 'Minimum 8 characters').max(30, 'Maximum 20 characters'),
})

export const passwordReset = z.object({
    password: z.string().min(8, 'Minimum 8 characters').max(30, 'Maximum 20 characters'),
    newPassword: z.string().min(8, 'Minimum 8 characters').max(30, 'Maximum 20 characters'),
    confirmPassword: z.string().min(8, 'Minimum 8 characters').max(30, 'Maximum 20 characters'),

})

// Organizer form data validation
export const organizerValidation = z.object({
    name: z.string().min(3,'Minimum 3 characters').max(30,'Maximum 30 characters'),
    slug: z.string().min(3,'Minimum 3 characters').max(30,'Maximum 30 characters'),
    description: z.string().min(3,'Minimum 3 characters').max(30,'Maximum 30 characters'),
    about: z.string().min(3,'Minimum 3 characters').max(30,'Maximum 30 characters'),
    cover:z.string().url(),
    gallery:z.string().url(),
})