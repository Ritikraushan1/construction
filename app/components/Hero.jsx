"use client"
import React, { useState } from 'react'
import { GoArrowUpRight } from "react-icons/go";


function Hero() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <div className=' relative bg-hero h-screen'>
            <div className=' w-full h-screen bg-black bg-opacity-60 z-0'>
                <div className="absolute pt-[35%] text-black z-40">
                    <p className=' text-5xl ml-20 font-semibold text-white leading-16'>APARTMENT <span className=' ml-20 text-yellow-400'>RENOVATIONS</span><br />IN MANCHESTER AND LEVERPOOL</p>
                </div>
                <div className="grid grid-rows-5 h-full z-50">
                    {/* 1st column */}
                    <div className="grid grid-cols-7">
                        <div className=" border-[1px] border-white border-opacity-30">
                            <h1 className="text-white text-2xl font-bold"></h1>
                        </div>
                        <div className="border-[1px] border-white border-opacity-30">
                            <h1 className="text-white text-2xl font-bold"></h1>
                        </div>
                        <div className="border-[1px] border-white  border-opacity-30">
                            <h1 className="text-white text-2xl font-bold"></h1>
                        </div>
                        <div className="border-[1px] border-white border-opacity-30">
                            <h1 className="text-white text-2xl font-bold"></h1>
                        </div>
                        <div className="border-[1px] border-white border-opacity-30">
                            <h1 className="text-white text-2xl font-bold"></h1>
                        </div>
                        <div className="border-[1px] border-white border-opacity-30">
                            <h1 className="text-white text-2xl font-bold"></h1>
                        </div>
                        <div className="border-[1px] border-white border-opacity-30">
                            <h1 className="text-white text-2xl font-bold"></h1>
                        </div>
                    </div>
                    {/* 2nd column */}
                    <div className="grid grid-cols-7 z-50">
                        <div className=" border-[1px] border-white border-opacity-30">
                            <h1 className="text-white text-2xl font-bold"></h1>
                        </div>
                        <div className="border-[1px] border-white border-opacity-30 flex items-center justify-center">
                            <h1 className="text-white text-xs text-center font-bold opacity-60">Repair<br /> and construction<br /> company</h1>
                        </div>
                        <div className="border-[1px] border-white border-opacity-30">
                            <h1 className="text-white text-2xl font-bold"></h1>
                        </div>
                        <div className="border-[1px] border-white border-opacity-30">
                            <div className=' px-5 py-5 flex flex-col items-start justify-between h-full hover:bg-[#000000] hover:bg-opacity-100'>
                                <p className=' text-xs text-yellow-300'>/01</p>
                                <p className=' text-xs opacity-50'>Feel your idea and<br /> make a design product.</p>
                            </div>
                        </div>
                        <div className="border-[1px] border-white border-opacity-30">
                            <h1 className="text-white text-2xl font-bold"></h1>
                        </div>
                        <div className="border-[1px] border-white border-opacity-30">
                            <h1 className="text-white text-2xl font-bold"></h1>
                        </div>
                        <div className="border-[1px] border-white border-opacity-30">
                            <h1 className="text-white text-2xl font-bold"></h1>
                        </div>
                    </div>
                    {/* 3rd column */}
                    <div className="grid grid-cols-7">
                        <div className=" border-[1px] border-white border-opacity-30">
                            <h1 className="text-white text-2xl font-bold"></h1>
                        </div>
                        <div className="border-[1px] border-white border-opacity-30">
                            <h1 className="text-white text-2xl font-bold"></h1>
                        </div>
                        <div className="border-[1px] border-white border-opacity-30">
                            <h1 className="text-white text-2xl font-bold"></h1>
                        </div>
                        <div className="border-[1px] border-white border-opacity-30">
                            <h1 className="text-white text-2xl font-bold"></h1>
                        </div>
                        <div className="border-[1px] border-white border-opacity-30">
                            <h1 className="text-white text-2xl font-bold"></h1>
                        </div>
                        <div className="border-[1px] border-white border-opacity-30">
                            <h1 className="text-white text-2xl font-bold"></h1>
                        </div>
                        <div className="border-[1px] border-white border-opacity-30 hover:bg-[#000000] hover:bg-opacity-100">
                            <div className=' px-5 py-5 flex flex-col items-start justify-between h-full '>
                                <p className=' text-xs text-yellow-300'>/02</p>
                                <p className=' text-xs opacity-50'>We make repairs with<br /> a 5 year warranty and <br />post warranty service.</p>
                            </div>
                        </div>
                    </div>
                    {/* 4th column */}
                    <div className="grid grid-cols-7">
                        <div className=" border-[1px] border-white border-opacity-30">
                            <h1 className="text-white text-2xl font-bold"></h1>
                        </div>
                        <div className="border-[1px] border-white border-opacity-30">
                            <h1 className="text-white text-2xl font-bold"></h1>
                        </div>
                        <div className="border-[1px] border-white border-opacity-30">
                            <h1 className="text-white text-2xl font-bold"></h1>
                        </div>
                        <div className="border-[1px] border-white border-opacity-30">
                            <h1 className="text-white text-2xl font-bold"></h1>
                        </div>
                        <div className="border-[1px] border-white border-opacity-30 hover:bg-[#000000] hover:bg-opacity-100">
                            <div className=' px-5 py-5 flex flex-col items-start justify-between h-full'>
                                <p className=' text-xs text-yellow-300'>/03</p>
                                <p className=' text-xs opacity-50'>We will select and<br /> purchase materials.</p>
                            </div>
                        </div>
                        <div className="border-[1px] border-white border-opacity-30">
                            <h1 className="text-white text-2xl font-bold"></h1>
                        </div>
                        <div className="border-[1px] border-white border-opacity-30">
                            <h1 className="text-white text-2xl font-bold"></h1>
                        </div>
                    </div>
                    {/* 5th column */}
                    <div className="grid grid-cols-7">
                        <div className=" border-[1px] border-white border-opacity-30">
                            <h1 className="text-white text-2xl font-bold"></h1>
                        </div>
                        <div className="border-[1px] border-white border-opacity-30 hover:bg-[#000000] hover:bg-opacity-100">
                            <div className='text-yellow-300 mr-2 flex flex-col py-5 px-3 items-end '><GoArrowUpRight /></div>
                            <h1 className="text-white text-xs font-bold items-center flex flex-col py-5 h-full">
                                <p>Calculate Repair Cost</p>
                            </h1>
                        </div>
                        <div className="border-[1px] border-white border-opacity-30">
                            <h1 className="text-white text-2xl font-bold"></h1>
                        </div>
                        <div className="border-[1px] border-white border-opacity-30">
                            <h1 className="text-white text-2xl font-bold"></h1>
                        </div>
                        <div className="border-[1px] border-white border-opacity-30">
                            <h1 className="text-white text-2xl font-bold"></h1>
                        </div>
                        <div className="border-[1px] border-white border-opacity-30">
                            <h1 className="text-white text-2xl font-bold"></h1>
                        </div>
                        <div className="border-[1px] border-white border-opacity-30">
                            <h1 className="text-white text-2xl font-bold"></h1>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero
