import React from 'react'

export default function Video() {
    return (
        <div className='w-screen h-full py-10 lg:py-0 lg:h-screen bg-slate-500 flex items-center justify-center'>
            <div className='w-full max-w-[80%] h-[80%] aspect-w-16 aspect-h-9'>
                <video
                    className='w-full h-full rounded-3xl'
                    controls={false}
                    autoPlay={true}
                    loop={true}
                    muted={true}
                >
                    <source src="/videos/videoplayback.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    )
}
