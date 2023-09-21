"use client"
import React from 'react'
import { useState } from 'react';

function Hero() {
    const slides = [
        {
          url: '/hero-img.jpg',
        },
        {
          url: 'cmbyn.jpg',
        },
        {
          url: 'https://i0.wp.com/liftoff.network/wp-content/uploads/2019/01/Edited-CMBYN-Poster.jpg?fit=786%2C360&ssl=1',
        },
    
        {
          url: 'https://ntvb.tmsimg.com/assets/p10700229_b_h10_aa.jpg?w=960&h=540',
        },
        {
          url: 'https://www.indiewire.com/wp-content/uploads/2019/09/22Friends22-cast-.jpg?w=800',
        },
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };
    
      const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };
    
      const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
      };
  return (
    <main className='pb-10'>
        <div className='flex gap-6'>
            <div className='flex flex-row items-center justify-between gap-5 h-[500px] w-full relative group'>
                {/* Left Arrow */}
                <div className=' group-hover:block top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <button onClick={prevSlide} className='px-3.5 py-3'><img className='w-3' src="/chevron-left.svg" alt="" /></button>
                </div>
                <div
                    style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                    className='w-full h-full rounded-md bg-center bg-cover duration-50'
                ></div>
                {/* Right Arrow */}
                <div className=' group-hover:block top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <button onClick={nextSlide} className='px-3.5 py-3'><img className='w-3' src="/chevron.svg" alt="" /></button>
                </div>

                <div className='flex top-4 justify-center py-2'>
                    {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className='text-2xl cursor-pointer'
                    >

                    </div>
                    ))}
                </div>
            </div>
        </div>
    </main>
  )
}

export default Hero;
