import React from 'react'

function About() {
    return (
        <div className=' bg-white py-12 h-[90%] '>
            <div className=" flex flex-col-1 lg:flex-row mx-[10%] gap-x-32">
                <div className=" flex flex-row gap-7">
                    <div className="">
                        <img src="/images/img1.jpg" alt="" className=" w-[250px] h-[450px] rounded-sm" />
                    </div>
                    <div className=" mt-[20%]">
                        <img src="/images/img1.jpg" alt="" className=" w-[250px] h-[450px] rounded-sm" />
                    </div>
                </div>
                <div className="mt-[7%]">
                    <div className="">
                        <div className="flex flex-row items-center">
                            <hr className='border-[1px] border-black w-10' />
                            <h2 className="relative inline-block text-md text-black px-7 z-10">Who We Are</h2>
                        </div>
                    </div>
                    <div className="flex flex-row items-center pt-3">
                        <hr className='border-[1px] border-white w-10' />
                        <h2 className=' text-black text-2xl px-7 font-semibold font-sans'>CONSTRUCTION<br /> EASE</h2>
                    </div>
                    <div className="flex flex-row items-center pt-7">
                        <hr className='border-[1px] border-white w-10' />
                        <h2 className=' text-black px-7 font-bold'>An award winning design and development<br /> team that is proud of our work.</h2>
                    </div>
                    <div className="flex flex-row items-center pt-7">
                        <hr className='border-[1px] border-white w-10' />
                        <h2 className=' text-black text-sm px-7 opacity-40'>We use an agile approach to test assumptions<br /> and connect with the needs of the audience.<br />early and often. Technology enables great<br />experiences. We like and use technologgy but<br /> we are not afraid to use it.</h2>
                    </div>
                    <div className="flex flex-row items-center pt-12">
                        <hr className='border-[1px] border-white w-10' />
                        <button className='bg-white text-black border-black border-[1px] border-opacity-25 ml-7 px-7 py-2 rounded-sm uppercase text-sm'>
                            <a href="#">Read More</a>
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default About