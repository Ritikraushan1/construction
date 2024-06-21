"use client"
import React, { useState } from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { AiOutlineMenuFold } from "react-icons/ai";

function Hero() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <div className=' relative bg-hero h-screen'>
            <div className=' absolute px-5 py-7'>
                <div className="flex flex-row justify-between items-center w-screen px-12">
                    <p className=' text-black text-2xl font-bold'>Construction Ease</p>
                    <div className="">
                        <button className=' flex flex-row items-center gap-3 text-black opacity-70 mr-10' onClick={toggleMenu}>
                            <p>Menu</p>
                            <div><AiOutlineMenuFold size={20} /></div>
                        </button>
                    </div>
                </div>
                {menuOpen && (<div className=' absolute top-0 left-0 ml-[85%] pt-20'>
                    <button
                        className='absolute top-5 right-5 text-black text-2xl'
                        onClick={toggleMenu}
                    >
                        &times; {/* Close button */}
                    </button>
                    <nav className="flex flex-col items-end space-y-1">
                        <a href="#" className="text-2xl text-white opacity-60 hover:opacity-95">Home</a>
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
            <div className="absolute pt-[35%] text-black">
                <p className=' text-5xl ml-20 font-semibold text-white leading-16'>APARTMENT <span className=' ml-20 text-yellow-400'>RENOVATIONS</span><br />IN MANCHESTER AND LEVERPOOL</p>
            </div>
            <div className="grid grid-rows-5 h-full">
                {/* 1st column */}
                <div className="grid grid-cols-7">
                    <div className=" border-[1px] border-yellow-300 border-opacity-30">
                        <h1 className="text-white text-2xl font-bold"></h1>
                    </div>
                    <div className="border-[1px] border-yellow-300 border-opacity-30">
                        <h1 className="text-white text-2xl font-bold"></h1>
                    </div>
                    <div className="border-[1px] border-yellow-300  border-opacity-30">
                        <h1 className="text-white text-2xl font-bold"></h1>
                    </div>
                    <div className="border-[1px] border-yellow-300 border-opacity-30">
                        <h1 className="text-white text-2xl font-bold"></h1>
                    </div>
                    <div className="border-[1px] border-yellow-300 border-opacity-30">
                        <h1 className="text-white text-2xl font-bold"></h1>
                    </div>
                    <div className="border-[1px] border-yellow-300 border-opacity-30">
                        <h1 className="text-white text-2xl font-bold"></h1>
                    </div>
                    <div className="border-[1px] border-yellow-300 border-opacity-30">
                        <h1 className="text-white text-2xl font-bold"></h1>
                    </div>
                </div>
                {/* 2nd column */}
                <div className="grid grid-cols-7">
                    <div className=" border-[1px] border-yellow-300 border-opacity-30">
                        <h1 className="text-white text-2xl font-bold"></h1>
                    </div>
                    <div className="border-[1px] border-yellow-300 border-opacity-30 flex items-center justify-center">
                        <h1 className="text-white text-xs text-center font-bold opacity-60">Repair<br /> and construction<br /> company</h1>
                    </div>
                    <div className="border-[1px] border-yellow-300 border-opacity-30">
                        <h1 className="text-white text-2xl font-bold"></h1>
                    </div>
                    <div className="border-[1px] border-yellow-300 border-opacity-30 bg-black">
                        <div className=' px-5 py-5 flex flex-col items-start justify-between h-full'>
                            <p className=' text-xs text-yellow-300'>/01</p>
                            <p className=' text-xs opacity-50'>Feel your idea and<br /> make a design product.</p>
                        </div>
                    </div>
                    <div className="border-[1px] border-yellow-300 border-opacity-30">
                        <h1 className="text-white text-2xl font-bold"></h1>
                    </div>
                    <div className="border-[1px] border-yellow-300 border-opacity-30">
                        <h1 className="text-white text-2xl font-bold"></h1>
                    </div>
                    <div className="border-[1px] border-yellow-300 border-opacity-30">
                        <h1 className="text-white text-2xl font-bold"></h1>
                    </div>
                </div>
                {/* 3rd column */}
                <div className="grid grid-cols-7">
                    <div className=" border-[1px] border-yellow-300 border-opacity-30">
                        <h1 className="text-white text-2xl font-bold"></h1>
                    </div>
                    <div className="border-[1px] border-yellow-300 border-opacity-30">
                        <h1 className="text-white text-2xl font-bold"></h1>
                    </div>
                    <div className="border-[1px] border-yellow-300 border-opacity-30">
                        <h1 className="text-white text-2xl font-bold"></h1>
                    </div>
                    <div className="border-[1px] border-yellow-300 border-opacity-30">
                        <h1 className="text-white text-2xl font-bold"></h1>
                    </div>
                    <div className="border-[1px] border-yellow-300 border-opacity-30">
                        <h1 className="text-white text-2xl font-bold"></h1>
                    </div>
                    <div className="border-[1px] border-yellow-300 border-opacity-30">
                        <h1 className="text-white text-2xl font-bold"></h1>
                    </div>
                    <div className="border-[1px] border-yellow-300 border-opacity-30 bg-black">
                        <div className=' px-5 py-5 flex flex-col items-start justify-between h-full'>
                            <p className=' text-xs text-yellow-300'>/02</p>
                            <p className=' text-xs opacity-50'>We make repairs with<br /> a 5 year warranty and <br />post warranty service.</p>
                        </div>
                    </div>
                </div>
                {/* 4th column */}
                <div className="grid grid-cols-7">
                    <div className=" border-[1px] border-yellow-300 border-opacity-30">
                        <h1 className="text-white text-2xl font-bold"></h1>
                    </div>
                    <div className="border-[1px] border-yellow-300 border-opacity-30">
                        <h1 className="text-white text-2xl font-bold"></h1>
                    </div>
                    <div className="border-[1px] border-yellow-300 border-opacity-30">
                        <h1 className="text-white text-2xl font-bold"></h1>
                    </div>
                    <div className="border-[1px] border-yellow-300 border-opacity-30">
                        <h1 className="text-white text-2xl font-bold"></h1>
                    </div>
                    <div className="border-[1px] border-yellow-300 border-opacity-30 bg-black">
                        <div className=' px-5 py-5 flex flex-col items-start justify-between h-full'>
                            <p className=' text-xs text-yellow-300'>/03</p>
                            <p className=' text-xs opacity-50'>We will select and<br /> purchase materials.</p>
                        </div>
                    </div>
                    <div className="border-[1px] border-yellow-300 border-opacity-30">
                        <h1 className="text-white text-2xl font-bold"></h1>
                    </div>
                    <div className="border-[1px] border-yellow-300 border-opacity-30">
                        <h1 className="text-white text-2xl font-bold"></h1>
                    </div>
                </div>
                {/* 5th column */}
                <div className="grid grid-cols-7">
                    <div className=" border-[1px] border-yellow-300 border-opacity-30">
                        <h1 className="text-white text-2xl font-bold"></h1>
                    </div>
                    <div className="border-[1px] border-yellow-300 border-opacity-30 bg-black">
                        <div className='text-yellow-300 mr-2 flex flex-col py-5 px-3 items-end'><GoArrowUpRight /></div>
                        <h1 className="text-white text-xs font-bold items-center flex flex-col py-5 h-full">
                            <p>Calculate Repair Cost</p>
                        </h1>
                    </div>
                    <div className="border-[1px] border-yellow-300 border-opacity-30">
                        <h1 className="text-white text-2xl font-bold"></h1>
                    </div>
                    <div className="border-[1px] border-yellow-300 border-opacity-30">
                        <h1 className="text-white text-2xl font-bold"></h1>
                    </div>
                    <div className="border-[1px] border-yellow-300 border-opacity-30">
                        <h1 className="text-white text-2xl font-bold"></h1>
                    </div>
                    <div className="border-[1px] border-yellow-300 border-opacity-30">
                        <h1 className="text-white text-2xl font-bold"></h1>
                    </div>
                    <div className="border-[1px] border-yellow-300 border-opacity-30">
                        <h1 className="text-white text-2xl font-bold"></h1>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Hero
