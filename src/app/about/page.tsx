import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const page = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 md:items-center gap-6 md:h-[400px] font-[sans-serif] max-w-4xl mx-auto relative px-4 md:mt-4 md:before:absolute md:before:right-0 md:before:w-[300px] md:before:rounded-md md:before:h-full md:before:bg-orange-100">
      <div className="flex items-center">
        <img src="https://readymadeui.com/profile_3.webp" className="object-contain h-[150px] max-sm:h-32 rounded-md" />
        <div className="ml-6">
          <div>
            <h4 className="text-base font-semibold text-gray-800">Alishba</h4>
            <p className="text-xs text-gray-500 mt-0.5">Alishbah.ali666@gmail.com</p>
          </div>

          <div className="space-x-3 mt-6">
            <Link href='javascript:void(0)'
              className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600">
             <FaFacebookF className='text-white' />

            </Link>
            <Link href='javascript:void(0)'
              className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4] active:bg-[#03a9f4]">
           <FaTwitter className='text-white'/>

            </Link>
            <Link href='javascript:void(0)'
              className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#0077b5] hover:bg-[#0055b5] active:bg-[#0077b5]">
              <FaLinkedinIn  className='text-white'/>

            </Link>
          </div>
        </div>
      </div>

      <div className="relative">
        <h2 className="text-gray-800 text-2xl font-semibold">Prompt Delivery and Enjoyable Dining Experience.</h2>
        <p className="mt-6 text-sm text-gray-500">The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.</p>
      </div>
    </div>
    </div>
  )
}

export default page
