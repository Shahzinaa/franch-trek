"use client"
import Link from 'next/link';
import React from 'react';
import Hero from './Hero';
import { useState, useEffect } from 'react';


function MoviesList() {
  const [product, setProduct] = useState ([])
  useEffect(async () => {
    try {
      const response = await fetch("https://image.dummyjson.com");
      const data = await response;
      setProduct(data); 
    } 
    catch (error) {
      console.error('Error fetching data:', error);
    }
  }, []);


  return (

    <div className='pb-10 flex flex-col gap-8'>
      <Hero/>
      <div className='flex items-baseline justify-between text-3xl '> 
         <p className='border-l-4 border-purple-500 pl-2'>Featured </p>
         <Link href="/" className='group/view-all text-sm flex items-center gap-2 text-white/50 hover:text-white ease-in-out duration-300'>
            View all
            <svg width="6" height="14" viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className='stroke-white/50 group-hover/view-all:stroke-white ease-in-out duration-300' d="M2 2L11 10.5L2 19" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
         </Link>
      </div>
      {/* {
        product.map((item, index) => (
          <img key={index} src={item} alt={`Image ${index}`} />
        ))
      } */}
      
      <div className='flex flex-row gap-8'>
        <div className="bg-[url('/images/myfault.jpg')] bg-cover bg-center w-48 h-64 hover:w-96 ease-in-out duration-500"> 
                    <div className='group/overlay flex flex-col gap-10 items-center justify-between py-5 ease-in-out duration-300 text-white h-64 font-medium text-2xl hover:bg-black/75'>
                        <p className='hidden group-hover/overlay:block'> My Fault </p>
                        <div className='hidden group-hover/overlay:flex duration-300 ease-in-out flex-row gap-3'>
                            <button className='flex flex-row items-center justify-center gap-2 border border-white text-sm w-36 pt-2 pb-2.5 rounded-lg'><img src="/add.svg" alt="" /> Collection</button>
                            <button className='flex flex-row items-center justify-center gap-2 border border-white text-sm w-36 pt-2 pb-2.5 rounded-lg'><img src="/add.svg" alt="" /> Watchlist</button>
                        </div>
                    </div>
        </div>
        <div className="bg-[url('/images/myfault.jpg')] bg-cover bg-center w-48 h-64 hover:w-96 ease-in-out duration-500"></div>
        <div className="bg-[url('/images/myfault.jpg')] bg-cover bg-center w-48 h-64 hover:w-96 ease-in-out duration-500"></div>
        <div className="bg-[url('/images/myfault.jpg')] bg-cover bg-center w-48 h-64 hover:w-96 ease-in-out duration-500"></div>
        <div className="bg-[url('/images/myfault.jpg')] bg-cover bg-center w-48 h-64 hover:w-96 ease-in-out duration-500"></div>
        <div className="bg-[url('/images/myfault.jpg')] bg-cover bg-center w-48 h-64 hover:w-96 ease-in-out duration-500"></div>
      </div>

      <div className='flex items-baseline justify-between text-3xl '> 
         <p className='border-l-4 border-purple-500 pl-2'>Suggestions </p>
         <Link href="/" className='group/view-all text-sm flex items-center gap-2 text-white/50 hover:text-white ease-in-out duration-300'>
            View all
            <svg width="6" height="14" viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className='stroke-white/50 group-hover/view-all:stroke-white ease-in-out duration-300' d="M2 2L11 10.5L2 19" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
         </Link>
      </div>
      <div className='flex flex-row gap-8'>
        <div className="bg-[url('/images/myfault.jpg')] bg-cover bg-center w-48 h-64 hover:w-96 ease-in-out duration-500"> 
                    <div className='group/overlay flex flex-col gap-10 items-center justify-between py-5 ease-in-out duration-300 text-white h-64 font-medium text-2xl hover:bg-black/75'>
                        <p className='hidden group-hover/overlay:block'> My Fault </p>
                        <div className='hidden group-hover/overlay:flex duration-300 ease-in-out flex-row gap-3'>
                            <button className='flex flex-row items-center justify-center gap-2 border border-white text-sm w-36 pt-2 pb-2.5 rounded-lg'><img src="/add.svg" alt="" /> Collection</button>
                            <button className='flex flex-row items-center justify-center gap-2 border border-white text-sm w-36 pt-2 pb-2.5 rounded-lg'><img src="/add.svg" alt="" /> Watchlist</button>
                        </div>
                    </div>
        </div>
        <div className="bg-[url('/images/myfault.jpg')] bg-cover bg-center w-48 h-64 hover:w-96 ease-in-out duration-500"></div>
        <div className="bg-[url('/images/myfault.jpg')] bg-cover bg-center w-48 h-64 hover:w-96 ease-in-out duration-500"></div>
        <div className="bg-[url('/images/myfault.jpg')] bg-cover bg-center w-48 h-64 hover:w-96 ease-in-out duration-500"></div>
        <div className="bg-[url('/images/myfault.jpg')] bg-cover bg-center w-48 h-64 hover:w-96 ease-in-out duration-500"></div>
        <div className="bg-[url('/images/myfault.jpg')] bg-cover bg-center w-48 h-64 hover:w-96 ease-in-out duration-500"></div>
      </div>
    </div>
  )
}

export default MoviesList;
