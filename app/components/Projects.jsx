import Image from 'next/image'
import React from 'react'

export default function Projects() {
    return (
        <div className='w-screen h-screen'>
            <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 bg-black opacity-60 z-50 text-white grid-flow-col-dense">
                <div className="relative h-full sm:w-full">
                    <div className=" ">
                        <img src="/images/img4.jpg" alt="project1" className=' w-full h-screen object-cover ' />
                    </div>
                    <div className="absolute bottom-10 left-10">
                        <p className=' text-xl font-bold uppercase font-rufina'>Arch Building <br /> Projects</p>
                    </div>
                </div>
                <div className="relative h-full sm:w-full">
                    <div className="">
                        <img src="/images/img2.jpg" alt="project1" className='w-full h-screen object-cover' />
                    </div>
                    <div className="absolute bottom-10 left-10">
                        <p className=' text-xl font-bold uppercase font-rufina'>Furniture Design <br /> Projects</p>
                    </div>
                </div>
                <div className="relative h-full">
                    <div className="">
                        <img src="/images/img3.jpg" alt="project1" className='w-full h-screen  object-cover' />
                    </div>
                    <div className="absolute bottom-10 left-10">
                        <p className=' text-xl font-bold uppercase font-rufina'>Our Interior <br /> Projects</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
