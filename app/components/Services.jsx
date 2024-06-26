import React from 'react'
import { SlDiamond } from "react-icons/sl";
import { IoColorFillOutline } from "react-icons/io5";
import { GiRockingChair } from "react-icons/gi";
import { FaHeadset } from "react-icons/fa";

const services = [
    {
        icon: <SlDiamond />,
        title: 'Architecture',
        description: 'Architecture has to do with planning and designing form, space and ambience to reflect functional.',
    },
    {
        icon: <IoColorFillOutline />,
        title: 'Interior Design',
        description: 'Is the process of shaping the experience of interior space, through the manipulation of spatial volume.',
    },
    {
        icon: <GiRockingChair />,
        title: 'Furniture Design',
        description: 'Furniture refers to movable objects intended to support various human activities such as seating.',
    },
    {
        icon: <FaHeadset />,
        title: 'Consulting',
        description: 'Consultant: someone who is employed externally to the client, either by a consulting firm or some other agency.',
    },
];


export default function Services() {
    return (
        <div className='bg-black w-screen h-max lg:h-screen flex items-center justify-center pt-10 lg:pt-0 md:pt-5 pb-10 lg:pb-0 font-dmsans'>
            <div className=' bg-black  ml-[10%] mr-[10%]'>
                <div className="flex flex-row items-center">
                    <hr className='border-[1px] border-yellow-400 w-10' />
                    <h2 className="relative inline-block text-xl font-semibold text-yellow-400 px-3 bg-black z-10">What We Do</h2>
                </div>
                <div className=" ml-12 pt-8"><p className=' text-3xl font-semibold uppercase text-white font-rufina'>Provide The Best<br /> Services</p></div>
                <div className=" pt-16 grid grid-cols-1 lg:grid-cols-4 gap-y-10 gap-[75px]">
                    {services.map((service, index) => (
                        <div key={index} className="flex flex-col flex-col-1 lg:flex-col-4 gap-y-3 border-2 px-5 rounded-sm pt-16 py-10 border-white border-opacity-10">
                            <p className='text-2xl text-white'>{service.icon}</p>
                            <p className='text-md uppercase text-white'>{service.title}</p>
                            <p className='text-md text-white text-opacity-40 text-sm' >{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
