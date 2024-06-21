import Image from 'next/image'
import React from 'react'

export default function Projects() {
    return (
        <div className=''>
            <div className=" flex text-white flex-col-1 lg:flex-col-3">
                <div className=" bg-custom3 w-[33%] h-[80vh] bg-blend-overlay">
                    <div className=" absolute ml-10 text-white mt-[38%] text-lg font-serif uppercase">
                        Arch Building<br /> Projects
                    </div>
                </div>
                <div className=" bg-custom1 w-[33%] h-[80vh] bg-blend-overlay">
                    <div className=" absolute ml-10 text-white mt-[38%] text-lg font-serif uppercase">
                        Furniture Design<br /> Projects
                    </div>
                </div>
                <div className=" bg-custom2 w-[33%] h-[80vh] bg-blend-overlay">
                    <div className=" absolute ml-10 text-white mt-[38%] text-lg font-serif uppercase">
                        Our Interior<br /> Projects
                    </div>
                </div>
            </div>
        </div>
    )
}
