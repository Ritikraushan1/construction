"use client"
import React, { useEffect, useState } from 'react'

export default function BlogDetail() {

    return (
        <>
            <div className=" bg-white text-black font-dmsans py-[20%] lg:py-[10%] px-[5%] md:px-[10%]">
                <div className=" border-b-2 border-b-black border-opacity-10">
                    <button className=' bg-black text-yellow-400 px-4 py-2 rounded-full'>
                        <p className=' text-sm'>Categories</p>
                    </button>
                    <h1 className=' text-2xl lg:text-4xl pt-3 font-bold font-rufina'>How the calculator of construction ease works?</h1>
                </div>
                <div className="flex flex-row justify-between text-lg font-semibold mx-0 lg:mx-20">
                    <p>Author</p>
                    <p>Date</p>
                </div>
                <div className="w-full lg:w-[60%] mx-auto pt-5">
                    <img src="/images/blog1.jpg" alt="" className=' rounded-xl' />
                </div>
                <div className=" flex flex-col pt-5 mx-0 lg:mx-20 gap-y-4">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi atque consectetur at debitis, cupiditate, sit, ipsum vel blanditiis corrupti quo hic officiis magni repudiandae. Totam sit a soluta consectetur voluptas. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo minima reiciendis officiis beatae delectus incidunt quis labore placeat animi illum. Id, impedit? Eveniet iure cum et pariatur. Ipsam, quidem neque.</p>
                    <h1 className=' text-2xl font-bold font-rufina '>Major Components Of Construction</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, provident necessitatibus! Sequi officiis dolores cupiditate eligendi amet molestiae laborum facere minus neque, possimus assumenda. At cum iste illum iusto perspiciatis?
                        Maiores blanditiis architecto eveniet dolores, harum commodi aliquam iste est repudiandae quisquam necessitatibus optio quas in quidem. Doloremque, autem dolorem exercitationem quis provident, commodi atque dolor illum, alias quia officiis!
                        Quae corporis aperiam inventore vel. Sapiente iste error pariatur odit fugiat, harum culpa consectetur, est voluptatem maiores, aut ex. Pariatur odio iste, odit unde dolores saepe provident fugit? Repellendus, ad.
                        Explicabo exercitationem eum error corporis consectetur provident blanditiis. Ex, alias quas. Ratione sit eum molestiae quidem nam facilis. Minus alias iste nulla nihil modi ex eius tenetur numquam repellat. Optio!
                        Impedit optio dolorem fugiat illo odit sunt deserunt suscipit modi aut explicabo quos corporis velit, harum natus ullam quisquam veniam, vero laborum. Animi dolor accusantium delectus exercitationem tempora fugit rem.
                    </p>
                    <h1 className=' text-2xl font-bold font-rufina '>Major Components Of Construction</h1>
                    <ul>
                        {[...Array(8)].map((_, index) => (
                            <React.Fragment key={index}>
                                <li>{index + 1} First</li>

                            </React.Fragment>
                        ))}
                    </ul>
                    <h1 className=' text-2xl font-bold font-rufina '>Major Components Of Construction</h1>
                </div>
            </div>
        </>
    )
}
