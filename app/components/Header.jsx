"use client"
import React, { useState } from 'react'
import { AiOutlineMenuFold } from "react-icons/ai";
function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    // const toggleMenu = () => {
    //     setMenuOpen(!menuOpen);
    // }
    const toggleMenu = () => {
        setMenuOpen(prevMenuOpen => {
            const newMenuOpen = !prevMenuOpen;
            if (newMenuOpen) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            return newMenuOpen;
        });
    }
    return (
        <div className=' absolute top-0 left-0 w-screen flex justify-between px-5 py-5 z-50 font-dmsans'>
            <div className=' absolute px-0 lg:px-5'>
                <div className=" fixed flex flex-row justify-between items-center w-screen px-0 lg:px-12">
                    <a href="/">
                        <p className=' text-yellow-400 text-xl lg:text-2xl font-bold font-rufina'>Construction Ease</p>
                    </a>
                    <div className="">
                        {!menuOpen ? <button className=' flex flex-row font-bold items-center gap-3 text-yellow-400 mr-10' onClick={toggleMenu}>
                            <p className='font-rufina'>Menu</p>
                            <div><AiOutlineMenuFold size={20} /></div>
                        </button> : <button
                            className='flex flex-row items-center gap-3 text-yellow-400 mr-10'
                            onClick={toggleMenu}
                        >
                            &times; {/* Close button */}
                        </button>}
                    </div>
                </div>
                {menuOpen && (<div className=' w-screen absolute mt-8 top-0 -left-10'>

                    <nav className="flex flex-col items-end space-y-1 mr-5">
                        <a href="/" className="text-2xl text-white opacity-60 hover:opacity-95">Home</a>
                        <a href="/services" className="text-2xl text-white opacity-60 hover:opacity-95">Services</a>
                        <a href="/projects" className="text-2xl text-white opacity-60 hover:opacity-95">Projects</a>
                        <a href="/calculator" className="text-2xl text-white opacity-60 hover:opacity-95">Calculator</a>
                        <a href="/packages" className="text-2xl text-white opacity-60 hover:opacity-95">Packages</a>
                        <a href="/blogs" className="text-2xl text-white opacity-60 hover:opacity-95">Blogs</a>
                        <a href="/about" className="text-2xl text-white opacity-60 hover:opacity-95">About Us</a>
                        <a href="/contact" className="text-2xl text-white opacity-60 hover:opacity-95">Contact Us</a>
                    </nav>
                </div>
                )}

            </div>

        </div>
    )
}

export default Header