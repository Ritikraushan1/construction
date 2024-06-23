import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <>
            <div className='bg-footer text-white w-screen'>
                <div className='flex flex-col items-center justify-center py-24'>
                    <h2 className='text-white text-2xl font-semibold uppercase'>Let's work together</h2>
                    <p className=' text-center pt-7 opacity-80'>Let us know what you're looking for in an agency. We'll take a look and see<br /> if this could be the start of something beautiful.</p>
                    <button className=' border-[1px] text-xs border-white border-opacity-35 mt-10 px-10 py-3 rounded-sm uppercase'><a href="" className=' opacity-70'>Contact Us</a></button>
                </div>
            </div>
            <div className="">

            </div>
        </>
    )
}

export default Footer
