import Link from 'next/link'
import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { FaFacebookF, FaLinkedinIn, FaPhoneAlt, FaTwitter, FaUser } from 'react-icons/fa'
import { SlEnvolope } from 'react-icons/sl'

const page = () => {
  return (
    <div>
      <div className="max-w-5xl max-lg:max-w-3xl mx-auto bg-white my-6 font-[sans-serif]">
      <div className="text-center px-6">
        <h2 className="text-gray-800 text-3xl font-bold">Contact Us</h2>
        <p className="text-sm text-gray-500 mt-4">Have some big idea or brand to develop and need help?</p>
      </div>

      <div className="grid lg:grid-cols-3 items-start gap-4 p-2 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-lg mt-12">

        <div className="bg-[#011c2b] rounded-lg p-6 h-full max-lg:order-1">
          <h2 className="text-xl text-white">Contact Information</h2>
          <p className="text-sm text-gray-300 mt-4">Have some big idea or brand to develop and need help?</p>

          <ul className="mt-16 space-y-8">
            <li className="flex items-center">
            <SlEnvolope  className='text-white'/>

              <Link href="javascript:void(0)" className="text-sm text-gray-300 ml-4">
                info@example.com
              </Link>
            </li>
            <li className="flex items-center">
            <FaPhoneAlt className='text-white'/>


              <Link href="javascript:void(0)" className="text-sm text-gray-300 ml-4">
                +158 996 888
              </Link>
            </li>
            <li className="flex items-center">
            <CiLocationOn className='text-white'/>

              <Link href="javascript:void(0)" className="text-sm text-gray-300 ml-4">
                123 Street 256 House
              </Link>
            </li>
          </ul>

          <ul className="flex flex-wrap gap-4 mt-16">
            <li className="bg-gray-800 hover:bg-gray-900 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <Link href="javascript:void(0)">
                   <FaTwitter className='text-white'/>
              </Link>
            </li>
            <li className="bg-gray-800 hover:bg-gray-900 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <Link href="javascript:void(0)">
                       <FaLinkedinIn  className='text-white'/>
              </Link>
            </li>
            <li className="bg-gray-800 hover:bg-gray-900 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <Link href="javascript:void(0)">
                <FaFacebookF className='text-white' />
              </Link>
            </li>
          </ul>
        </div>

        <div className="p-4 lg:col-span-2">
          <form>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="relative flex items-center">
                <input type="text" placeholder="First Name"
                  className="px-2 py-3 bg-white w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 outline-none" />
                <FaUser />

              </div>

              <div className="relative flex items-center">
                <input type="text" placeholder="Last Name"
                  className="px-2 py-3 bg-white w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 outline-none" />
             <FaUser />

              </div>

              <div className="relative flex items-center">
                <input type="number" placeholder="Phone No."
                  className="px-2 py-3 bg-white  w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 outline-none" />
                           <FaPhoneAlt/>

              </div>

              <div className="relative flex items-center">
                <input type="email" placeholder="Email"
                  className="px-2 py-3 bg-white  w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 outline-none" />
                          <SlEnvolope />

              </div>

              <div className="relative flex items-center sm:col-span-2">
                <textarea placeholder="Write Message"
                  className="px-2 pt-3 bg-white  w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 outline-none"></textarea>
                            <SlEnvolope  />

              </div>

              <div className="col-span-full">
                <h6 className="text-sm text-gray-800">Select Subject</h6>
                <div className="flex max-lg:flex-col gap-6 mt-4">
                  <div className="flex items-center">
                    <input id="radio1" type="radio" name="value1" className="hidden peer" checked />
                    <label htmlFor="radio1"
                      className="relative p-0.5 flex items-center justify-center shrink-0 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer border-2 border-[#011c2b] rounded-full overflow-hidden">
                      <span className="border-[4px] border-[#011c2b] rounded-full w-full h-full"></span>
                    </label>
                    <p className="text-sm text-gray-500 ml-4">General Inquiry</p>
                  </div>

                  <div className="flex items-center">
                    <input id="radio2" type="radio" name="value1" className="hidden peer" />
                    <label htmlFor="radio2"
                      className="relative p-0.5 flex items-center justify-center shrink-0 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer border-2 border-[#011c2b] rounded-full overflow-hidden">
                      <span className="border-[4px] border-[#011c2b] rounded-full w-full h-full"></span>
                    </label>
                    <p className="text-sm text-gray-500 ml-4">Technical Support</p>
                  </div>

                  <div className="flex items-center">
                    <input id="radio3" type="radio" name="value1" className="hidden peer" />
                    <label htmlFor="radio3"
                      className="relative p-0.5 flex items-center justify-center shrink-0 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer border-2 border-[#011c2b] rounded-full overflow-hidden">
                      <span className="border-[4px] border-[#011c2b] rounded-full w-full h-full"></span>
                    </label>
                    <p className="text-sm text-gray-500 ml-4">Website Feedback</p>
                  </div>
                </div>
              </div>
            </div>

            <button type="button"
              className="mt-12 flex items-center justify-center text-sm lg:ml-auto max-lg:w-full rounded-lg px-4 py-3 tracking-wide text-white bg-blue-600 hover:bg-blue-700">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default page
