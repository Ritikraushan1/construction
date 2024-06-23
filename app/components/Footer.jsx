import React from 'react'
import { FaMailBulk } from 'react-icons/fa';
import { FaFacebookF, FaInstagram, FaLinkedin, FaSkype, FaTwitter, FaYoutube } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
function Footer() {
    return (
        <>
            <div className='bg-footer text-white w-screen'>
                <div className='flex flex-col items-center justify-center py-24'>
                    <h2 className='text-white text-2xl font-semibold uppercase'>Let's work together</h2>
                    <p className='hidden lg:flex text-center pt-7 opacity-80'>Let us know what you're looking for in an agency. We'll take a look and see<br /> if this could be the start of something beautiful.</p>
                    <p className='flex lg:hidden text-center pt-7 opacity-80 mx-10'>Let us know what you're looking for in an agency. We'll take a look and see if this could be the start of something beautiful.</p>
                    <button className=' border-[1px] text-xs border-white border-opacity-35 mt-10 px-10 py-3 rounded-sm uppercase'><a href="" className=' opacity-70'>Contact Us</a></button>
                </div>
            </div>
            <div className=" bg-gray-900 grid grid-cols-1 lg:grid-cols-4 px-20 py-10 w-screen">
                <div className=" lg:mr-10">
                    <h1 className=' text-xl font-bold'>About Us</h1>
                    <div className=" border-b-2 border-yellow-400 mr-[80%] pt-2"></div>
                    <p className=' text-lg leading-8 pt-8 text-white opacity-70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi alias nisi id amet aliquid accusantium aliquam asperiores commodi eaque, praesentium</p>
                    <div className=" flex flex-row pt-4 gap-3">
                        <a href="" className=' px-4 py-3 bg-black text-white rounded-md'><FaFacebookF /></a>
                        <a href="" className=' px-4 py-3 bg-black text-white rounded-md'><FaInstagram /></a>
                        <a href="" className=' px-4 py-3 bg-black text-white rounded-md'><FaLinkedin /></a>
                        <a href="" className=' px-4 py-3 bg-black text-white rounded-md'><FaYoutube /></a>
                        <a href="" className=' px-4 py-3 bg-black text-white rounded-md'><FaTwitter /></a>

                    </div>
                </div>
                <div className=" lg:ml-2 mr-10 pt-8 lg:pt-0">
                    <h1 className=' text-xl font-bold'>Quick Links</h1>
                    <div className=" border-b-2 border-yellow-400 mr-[80%] pt-2"></div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 pt-5 lg:pt-8 text-white opacity-70">
                        <div className=" flex flex-col gap-y-3">
                            <a href="">About Us</a>
                            <a href="">Our Services</a>
                            <a href="">Blog</a>
                            <a href="">Contact Us</a>
                        </div>
                        <div className="flex flex-col gap-y-3 pt-3 lg:pt-0">
                            <a href="">Testimonials</a>
                            <a href="">Careers</a>
                            <a href="">FAQ</a>
                        </div>
                    </div>
                </div>
                <div className=" lg:ml-2 lg:mr-10 pt-8 lg:pt-0">
                    <h1 className=' text-xl font-bold'>Head Office</h1>
                    <div className=" border-b-2 border-yellow-400 mr-[80%] pt-2"></div>
                    <div className=" pt-8 text-white opacity-70">
                        <p className=' leading-7'>125 Big Bella, Bangalore, India,<br /> 7637368</p>
                    </div>
                    <div className=" flex flex-col gap-y-2 pt-3 text-white opacity-70">
                        <a href="">Phone: 0123456789</a>
                        <a href="">Email: info@example.com</a>
                        <a href="">Office Timing: 9am to 5pm</a>
                    </div>
                </div>
                <div className=" lg:ml-2 lg:mr-10 pt-8 lg:pt-0">
                    <h1 className=' text-xl font-bold'>Newsletter</h1>
                    <div className=" border-b-2 border-yellow-400 mr-[80%] pt-2"></div>
                    <p className=' pt-8 text-white opacity-70'>Subscribe to our newsletter for<br /> latest updates:</p>
                    <div className=" flex flex-row mt-4 gap-2 bg-black items-center justify-between rounded-lg px-5 py-3 lg:mr-10">
                        <input type="email" placeholder='Email Address*' className=' bg-black outline-none text-yellow-400 rounded-md' />
                        <button className=''><IoMdMail size={20} color='yellow' /></button>
                    </div>
                </div>
            </div>
            <div className="w-screen bg-black flex flex-col items-center lg:flex-row justify-between px-20 pb-2">
                <p className=' text-center pt-4 text-white opacity-70'>© 2024 All Rights Reserved.</p>
                <div className=" flex flex-row gap-x-4 pt-4 text-white opacity-60">
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
