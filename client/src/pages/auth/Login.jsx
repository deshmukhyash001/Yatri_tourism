import React, { useState } from 'react';
import './Auth.css';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Login =()=> {
    const [index, setIndex] = useState(0);
    const images = ["Auth_slider.jpg", "Auth_slider1.jpg"];

    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <>
            <div className='container h-screen flex'>
                {/* Left Section */}
                <div className="secion1 items-center flex gap-10 flex-col py-10 w-1/2 h-screen">
                    <h3 className='yatri_titl text-center font-light text-4xl'>
                        <span className='hover:text-emerald-600 transition-colors duration-300'>Yatri</span> 
                        <span className='hover:text-blue-600 transition-colors duration-300'> Tourism</span>
                    </h3>
                    <div className='flex gap-2 -mt-6 mb-6'>
                        <button className='current py-2 px-16 rounded-md border-[0.5px] bg-white border-zinc-700 text-black hover:bg-gray-200 transition-all duration-300'>
                            Sign Up
                        </button>
                        <button className='current py-2 px-16 rounded-md border-[0.5px] bg-black border-zinc-700 text-white hover:bg-gray-900 transition-all duration-300'>
                            Log In
                        </button>
                    </div>
                    <h2 className='-ml-2 text-4xl hover:scale-105 transition-transform duration-300'>Begin Your Adventure.</h2>
                    <div className='inputs -ml-12 flex w-1/2 flex-col gap-2'>
                        <label htmlFor="name" className='ml-4 bg-white -mb-5 z-10 w-fit'>Name</label>
                        <input name='name' type="text" className='rounded-md p-2 outline-0 border-t-emerald-700 border-[0.5px] border-pink-600 py-3 w-full focus:ring-2 focus:ring-emerald-500 transition-all' />
                        <label htmlFor="Phone" className='ml-4 bg-white -mb-5 z-10 w-fit'>Phone</label>
                        <input type="tel" maxLength={10} className='rounded-md p-2 outline-0 border-[0.5px] border-pink-600 py-3 w-full focus:ring-2 focus:ring-emerald-500 transition-all' />
                        <label htmlFor="OTP" className='ml-4 bg-white -mb-5 z-10 w-fit'>OTP</label>
                        <input type="text" maxLength={6} minLength={6} className='rounded-md p-2 outline-0 border-pink-600 border-[0.5px] border-b-emerald-700 py-3 w-full focus:ring-2 focus:ring-emerald-500 transition-all' />
                        <button type='submit' className='rounded-md bg-black text-amber-50 mt-10 p-2 outline-0 border-black border-2 py-3 w-full hover:bg-gray-900 transition-all duration-300'>
                            Let's Start
                        </button>
                    </div>
                </div>

                {/* Right Section */}
                <div className="secion2 relative pl-10 flex items-center w-1/2 h-screen">
                    <img className='z-10 w-[600px] h-[650px]' src="frame.png" alt="" />

                    {/* Image Slider */}
                    <div className="mb absolute flex w-[600px] h-[650px] rounded-[70px] overflow-hidden">
                        <div className='flex transition-transform duration-500 ease-in-out' style={{ transform: `translateX(-${index * 600}px)` }}>
                            {images.map((src, i) => (
                                <img key={i} src={src} className='w-[600px] h-[650px] flex-shrink-0' alt="" />
                            ))}
                        </div>
                    </div>

                    {/* Text Overlay */}
                    <p className='frame_card1 font-bold absolute bg-white p-2 rounded-3xl text-xl w-44 text-black right-36 bottom-20 hover:scale-105 transition-transform duration-300'>
                        <span className='text-emerald-900'>Explore The World,</span>
                        <span className='text-sky-900'> Beyond Boundaries!</span>
                    </p>

                    {/* Slider Controls */}
                    <div className='absolute flex gap-2 left-36 bottom-20'>
                        <button className='text-center p-2 bg-white rounded-full hover:scale-110 hover:bg-gray-300 transition-all duration-300' onClick={handlePrev}>
                            <FaArrowLeft />
                        </button>
                        <button className='text-center p-2 bg-white rounded-full hover:scale-110 hover:bg-gray-300 transition-all duration-300' onClick={handleNext}>
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
