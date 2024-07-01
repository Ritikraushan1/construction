"use client"
import React from 'react'
import blog from "../data/blog.json"
import { useRouter } from 'next/navigation';

const getFirst50Words = (text) => {
    return text.split(" ").slice(0, 30).join(" ") + (text.split(" ").length > 50 ? "..." : "");
}

export default function BlogPost() {
    const router = useRouter();

    const handleReadMore = (id) => {
        router.push(`/blogdetails${id}`);
    };
    return (
        <div className=' py-16 bg-white text-black font-dmsans'>
            <h1 className=' text-center text-4xl font-bold font-rufina text-black'>Our Recent Blogs</h1>
            <p className=' text-center font-dmsans mt-2'>Check out our blogs and equip yourself with the best knowledge of the construction world.</p>
            <div className=" mx-[10%] mt-12 flex flex-col gap-y-4">
                {blog.map((post, index) => (
                    <div className=" border-[1px] border-black rounded-md" key={index}>
                        <div className=" flex flex-row gap-x-4">

                            <div className="h-full w-[20%]">
                                <img src={post.featuredImage} className=' h-[170px]' />
                            </div>
                            <div className=" w-[70%] flex flex-col items-start justify-between mt-2 mb-2">
                                <p className=''><a href="" className=' bg-black text-yellow-400 text-sm px-3 py-1 rounded-full'>{post.author}
                                </a></p>
                                <h2 className=' text-2xl font-rufina'>{post.title}</h2>
                                <p>{getFirst50Words(post.headPara)}</p>
                                <p className=''><a href="" className=' bg-black text-yellow-400 text-sm px-3 py-1 rounded-full'>{post.date}
                                </a></p>
                            </div>
                            <div className=" flex items-center w-32 mr-2 w[10%]">
                                <button className=' px-3 py-2 bg-black text-yellow-400 cursor-pointer hover:bg-white hover:text-black hover:drop-shadow-2xl' onClick={() => handleReadMore(post.id)}>Read More...</button>
                            </div>
                        </div>
                    </div>
                )
                )}
            </div>
        </div>
    )
}
