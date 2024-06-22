"use client"
import React, { useState } from 'react'

const steps = [
    {
        id: 1,
        title: 'Raise a Request',
        description: 'Raise a house construction service or request or call us at +91 89898XXXX. Our Team will get in touch with you to understand your requirement in detail.',
        image: "/images/howitworks1.png",
    },
    {
        id: 2,
        title: 'Meet Our Expert',
        description: 'Expert will guide you in selecting the right package for house construction and solve any queries that you may have.',
        image: "/images/howitworks2.png",
    },
    {
        id: 3,
        title: 'Book With Us',
        description: 'Good to go! You pay 2% of the estimated project cost s the booking amount to start the house construction.',
        image: "/images/howitworks3.png",
    },
    {
        id: 4,
        title: 'Receive Designs',
        description: 'Our Architects will provide exhaustive drawings nd designs of your home construction till you are completely satisfied.',
        image: "/images/howitworks4.png",
    },
    {
        id: 5,
        title: 'Track & Transact',
        description: 'To ensure absolute trust, Construction Ease provides an escrow model where you transfer the amount for stage of the project. You can track the project through customer application.',
        image: "/images/howitworks5.png",
    },
    {
        id: 6,
        title: 'Settle In',
        description: "The last and final stage. We make sure you are well settled in your newly built home. Our journey together doesn't end here. We provide 10 years of warranty.",
        image: "/images/howitworks6.png",
    }
]

export default function Howitwork() {
    const [activeStep, setActiveStep] = useState(1);

    const handleStepClick = (stepId) => {
        setActiveStep(stepId);
    };

    return (
        <div className=' bg-slate-100 flex flex-col items-center justify-center text-center h-screen w-screen'>
            <div className="">
                <h1 className=' text-4xl font-bold text-black font-rufina'>How it Works</h1>
                <p className=' text-black text-xl leading-7 pt-3 font-dmsans'>Our house construction steps are simple and easy to understand:<br />Plan - Build - Track - Settle In.</p>
            </div>
            <div className="flex justify-center items-center pt-5 space-x-4 mb-8">
                {steps.map((step, index) => (
                    <div key={step.id} className="flex flex-col items-center">
                        <div className="flex flex-col items-center">
                            <button
                                className={`w-10 h-10 rounded-full border-2 ${activeStep >= step.id ? 'bg-black text-white' : 'border-black text-black'}`}
                                onClick={() => handleStepClick(step.id)}
                            >
                                {step.id}
                            </button>
                            <p className={`text-sm mt-3 ${activeStep >= step.id ? 'text-black' : 'text-gray-500'}`}>{step.title}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className=" flex flex-col items-center w-[85%]">
                <img src={steps[activeStep - 1].image} alt={steps[activeStep - 1].title} className="mx-auto mb-4" />
                <div className="flex flex-col items-start border-2 border-black px-5 py-3 text-black mx-60 bg-white">
                    <div className=" flex flex-row items-center gap-2">
                        <p className=' text-xl font-bold'>0{steps[activeStep - 1].id}</p>
                        <h2 className="text-xl font-bold">{steps[activeStep - 1].title}</h2>
                    </div>
                    <div className=" ml-6 text-left">
                        <p className="text-lg">{steps[activeStep - 1].description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
