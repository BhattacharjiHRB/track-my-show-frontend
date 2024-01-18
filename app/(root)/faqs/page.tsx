import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

export default function page() {
  return (
    <div className='flex flex-col min-h-screen items-center justify-center'>
        
        <div className='flex flex-col items-start justify-start'>

        <h1 className='text-6xl border-b border-orange-500'>FAQs</h1>

        <div className='flex flex-col items-start justify-center mt-10'>
            <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger className='w-[600px]' >How long does my login last on Track My Show?</AccordionTrigger>
                <AccordionContent className='w-[600px]' >
                Your login session on Track My Show expires after 1 hour of inactivity. If you are experiencing any issues with your account, please log back in to start a new session.
                </AccordionContent>
            </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger className='w-[600px]' >Why are bookings closed for my account?</AccordionTrigger>
                <AccordionContent className='w-[600px]' >
                If you have a pending booking on your account, you will not be able to make any new bookings until your current one is confirmed or canceled. Once your current booking is resolved, you will be able to make new bookings again..
                </AccordionContent>
            </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger className='w-[600px]' >What is the maximum number of seats I can book in a single booking?</AccordionTrigger>
                <AccordionContent className='w-[600px]' >
                You can add up to 10 seats per booking on Track My Show. If you need to book more than 10 seats, you will need to make multiple bookings or contact customer support for assistance.
                </AccordionContent>
            </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger className='w-[600px]' > Having any trouble booking tickets?</AccordionTrigger>
                <AccordionContent className='w-[600px]' >
                If you encounter an issue while booking tickets where it indicates that you have a pending booking even though you don't have any, please try logging out and then logging back in with your credentials. If the problem still lasts, please contact support.
                </AccordionContent>
            </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger className='w-[600px]' > Can I get a refund if I am unable to attend an event?</AccordionTrigger>
                <AccordionContent className='w-[600px]' >
                You can request a full refund if you return your ticket at least 72 hours before the show. However, tickets purchased within 1 or 2 days of the event are non-refundable. In this case, if you find yourself unable to attend, please notify the Track My Show team to explore possible arrangements.
                </AccordionContent>
            </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger className='w-[600px]' >How do I receive my purchased tickets?</AccordionTrigger>
                <AccordionContent className='w-[600px]' >
                Printed tickets can be collected at the designated ticket counter at the venue, and you will receive information about the counter location. For events with e-tickets, no physical tickets will be provided; instead, you need to print the e-ticket and present it at the venue.
                </AccordionContent>
            </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger className='w-[600px]' >How can I transfer my tickets to someone else?</AccordionTrigger>
                <AccordionContent className='w-[600px]' >
                Simply provide us with the name and contact number of the person to whom you want to transfer the tickets. They can then collect the tickets from the designated ticket counter
                </AccordionContent>
            </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger className='w-[600px]' > Are there group discounts available for large parties or organizations?</AccordionTrigger>
                <AccordionContent className='w-[600px]' >
                Yes! For group discounts or inquiries from organizations, please get in touch with us at info@trackmyshow.com or call us at +8801707900133
                </AccordionContent>
            </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger className='w-[600px]' >What is the process for event cancellations or rescheduling?</AccordionTrigger>
                <AccordionContent className='w-[600px]' >
                If you are an event organizer, please contact us immediately in the event of a cancellation or rescheduling.
                </AccordionContent>
            </AccordionItem>
            </Accordion>
        </div>
        </div>

      
    </div>
  )
}
