"use client"
import React, { useState } from 'react'
import { AiOutlineMenuFold } from "react-icons/ai";
function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }
    return (
        <div className=' absolute top-0 left-0 w-screen flex justify-between px-5 py-5 z-50'>
            <div className=' absolute px-5'>
                <div className=" fixed flex flex-row justify-between items-center w-screen px-12">
                    <p className=' text-black text-2xl font-bold'>Construction Ease</p>
                    <div className="">
                        <button className=' flex flex-row items-center gap-3 text-yellow-500 opacity-70 mr-10' onClick={toggleMenu}>
                            <p>Menu</p>
                            <div><AiOutlineMenuFold size={20} /></div>
                        </button>
                    </div>
                </div>
                {menuOpen && (<div className=' w-screen absolute top-0 -left-10 pt-20'>
                    <button
                        className='absolute top-5 right-5 text-white text-2xl'
                        onClick={toggleMenu}
                    >
                        &times; {/* Close button */}
                    </button>
                    <nav className="flex flex-col items-end space-y-1 mr-5">
                        <a href="/" className="text-2xl text-white opacity-60 hover:opacity-95">Home</a>
                        <a href="#" className="text-2xl text-white opacity-60 hover:opacity-95">Services</a>
                        <a href="#" className="text-2xl text-white opacity-60 hover:opacity-95">Projects</a>
                        <a href="#" className="text-2xl text-white opacity-60 hover:opacity-95">Interior Design</a>
                        <a href="#" className="text-2xl text-white opacity-60 hover:opacity-95">Price</a>
                        <a href="#" className="text-2xl text-white opacity-60 hover:opacity-95">About Us</a>
                        <a href="#" className="text-2xl text-white opacity-60 hover:opacity-95">Contact Us</a>
                    </nav>
                </div>
                )}

            </div>

        </div>
    )
}

export default Header
