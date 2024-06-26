import React from 'react'
import { FaMailBulk } from 'react-icons/fa';
import { FaFacebookF, FaInstagram, FaLinkedin, FaSkype, FaTwitter, FaYoutube } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
function Footer() {
    return (
        <>
            <div className='bg-footer text-white w-screen font-dmsans'>
                <div className='flex flex-col items-center justify-center py-24 z-50 bg-black bg-opacity-60'>
                    <h2 className='text-yellow-400 text-2xl font-semibold uppercase font-rufina'>Let's work together</h2>
                    <p className='hidden lg:flex text-center pt-7 opacity-80 text-sm'>Let us know what you're looking for in an agency. We'll take a look and see<br /> if this could be the start of something beautiful.</p>
                    <p className='flex lg:hidden text-center pt-7 opacity-80 mx-10 text-sm'>Let us know what you're looking for in an agency. We'll take a look and see if this could be the start of something beautiful.</p>
                    <button className=' border-[1px] text-xs border-white border-opacity-35 mt-10 px-10 py-3 rounded-sm uppercase bg-black text-yellow-400 hover:bg-transparent hover:drop-shadow-lg'><a href="" className=' opacity-70'>Contact Us</a></button>
                </div>
            </div>
            <div className=" bg-black grid grid-cols-1 lg:grid-cols-4 px-20 py-16 w-screen">
                <div className=" lg:mr-10">
                    <h1 className=' text-xl font-bold text-white font-rufina'>About Us</h1>
                    <div className=" border-b-2 border-yellow-400 mr-[80%] pt-2"></div>
                    <p className=' leading-8 pt-8 text-white opacity-70 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi alias nisi id amet aliquid accusantium aliquam</p>
                    <div className=" flex flex-row pt-4 gap-5">
                        <a href="" className=' text-white rounded-md'><FaFacebookF /></a>
                        <a href="" className=' text-white rounded-md'><FaInstagram /></a>
                        <a href="" className='  text-white rounded-md'><FaLinkedin /></a>
                        <a href="" className='  text-white rounded-md'><FaYoutube /></a>
                        <a href="" className='  text-white rounded-md'><FaTwitter /></a>

                    </div>
                </div>
                <div className=" lg:ml-2 mr-10 pt-8 lg:pt-0">
                    <h1 className=' text-xl font-bold text-white font-rufina'>Quick Links</h1>
                    <div className=" border-b-2 border-yellow-400 mr-[80%] pt-2"></div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 pt-5 lg:pt-8 text-white opacity-70 text-sm">
                        <div className=" flex flex-col gap-y-3">
                            <a href="" className=' hover:text-yellow-400'>About Us</a>
                            <a href="" className=' hover:text-yellow-400'>Our Services</a>
                            <a href="" className=' hover:text-yellow-400'>Blog</a>
                            <a href="" className=' hover:text-yellow-400'>Contact Us</a>
                        </div>
                        <div className="flex flex-col gap-y-3 pt-3 lg:pt-0">
                            <a href="" className=' hover:text-yellow-400'>Testimonials</a>
                            <a href="" className=' hover:text-yellow-400'>Careers</a>
                            <a href="" className=' hover:text-yellow-400'>FAQ</a>
                        </div>
                    </div>
                </div>
                <div className=" lg:ml-2 lg:mr-10 pt-8 lg:pt-0">
                    <h1 className=' text-xl font-bold text-white font-rufina'>Head Office</h1>
                    <div className=" border-b-2 border-yellow-400 mr-[80%] pt-2"></div>
                    <div className=" pt-8 text-white opacity-70">
                        <p className=' leading-7 text-sm'>125 Big Bella, Bangalore, India,<br /> 7637368</p>
                    </div>
                    <div className=" flex flex-col gap-y-2 pt-3 text-white opacity-70">
                        <a href="" className=' text-sm'>Phone: 0123456789</a>
                        <a href="" className=' text-sm'>Email: info@example.com</a>
                        <a href="" className=' text-sm'>Office Timing: 9am to 5pm</a>
                    </div>
                </div>
                <div className=" lg:ml-2 lg:mr-10 pt-8 lg:pt-0">
                    <h1 className=' text-xl font-bold text-white font-rufina'>Newsletter</h1>
                    <div className=" border-b-2 border-yellow-400 mr-[80%] pt-2"></div>
                    <p className=' pt-8 text-white opacity-70 text-sm'>Subscribe to our newsletter for<br /> latest updates:</p>

                    <div className=" flex flex-row mt-4 gap-2 bg-white items-center justify-between rounded-lg px-3 py-2">
                        <input type="email" placeholder='Email Address*' className='  outline-none text-black rounded-md w-32' />
                        <button className=''><IoMdMail size={20} className=' text-yellow-600' /></button>
                    </div>
                </div>
            </div>
            <div className="w-screen bg-[#facc15] flex flex-col items-center lg:flex-row justify-between px-20 pb-2">
                <p className=' text-center text-sm pt-4 text-black'>© 2024 All Rights Reserved.</p>
                <div className=" flex flex-row gap-x-4 pt-4 text-black">
                    <a href=""><FaFacebookF /></a>
                    <a href=""><FaInstagram /></a>
                    <a href=""><FaTwitter /></a>
                    <a href=""><FaLinkedin /></a>
                    <a href=""><FaSkype /></a>
                    <a href=""><FaYoutube /></a>
                </div>
            </div>
        </>
    )
}

export default Footer 
