
import Contact from '@/components/Contact'
import React from 'react'

const Contactpage = () => {
  return (
    <div className='relative p-6 z-0 grid grid-cols-1 md:grid-cols-2 gap-5 md:mx-auto mx-3 justify-center items-center'>
      <div className='text-white'>
        Contact us
      </div>
    <Contact />
   
  </div>
  )
}

export default Contactpage