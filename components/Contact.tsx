import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


const Contact = () => {
  return (

    <Card className="w-full md:w-4/5">
      <CardHeader className='mb-4'>
        <CardTitle className='font-black md:text-[50px] sm:text-[40px] xs:text-[30px] text-[20px] text-[#14213d]'>Contact Us</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name" className='text-[#14213d] font-medium mb-4'>Name</Label>
              <Input id="name" placeholder="Your Name" className='bg-gray-100 py-4 px-6 text-black rounded-lg outline-none border-none font-medium md:mr-2 mb-2' />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name" className='text-[#14213d] font-medium mb-4'>Email</Label>
              <Input id='email' placeholder="example@gmail.com" className='bg-gray-100 py-4 px-6 text-black rounded-lg outline-none border-none font-medium md:mr-2 mb-2' />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name" className='text-[#14213d] font-medium mb-4'>Your Message</Label>
              <textarea id="name" placeholder="Your Message..." className='bg-gray-100 py-4 px-6 w-full h-40 resize-none text-black rounded-lg outline-none border-none font-medium md:mr-2 mb-2' />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant='premium' className='md:text-lg p-4 md:p-6 rounded-full font-semibold'>Submit</Button>
      </CardFooter>
    </Card>


  )
}

export default Contact