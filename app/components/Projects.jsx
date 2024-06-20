import Image from 'next/image'
import React from 'react'

export default function Projects() {
    return (
        <div className=' py-12'>
            <div className=" flex text-white">
                <div className=" bg-custom3 w-[33%] h-[80vh]">
                    <div className=" ml-10 text-yellow-300 text-lg font-serif mt-[115%] uppercase">
                        Arch Building<br /> Projects
                    </div>
                </div>
                <div className=" bg-custom1 w-[33%] h-[80vh]">
                    <div className=" ml-10 text-yellow-300 text-lg font-serif mt-[115%] uppercase">
                        Furniture Design<br /> Projects
                    </div>
                </div>
                <div className=" bg-custom2 w-[33%] h-[80vh]">
                    <div className=" ml-10 text-yellow-300 text-lg font-serif mt-[115%] uppercase">
                        Our Interior<br /> Projects
                    </div>
                </div>
            </div>
        </div>
    )
}
