"use client"
import Collection from '../Components/Collection'
import Watchlist from '../Components/Watchlist'
import React from 'react'
import { useState } from 'react'

function page() {
    const [activeComponent, setActiveComponent] = useState('collection');
    const [indicatorPosition, setIndicatorPosition] = useState(0);

    const updateIndicatorPosition = (position) => {
    setIndicatorPosition(position);
    };


  return (
    <div>
      <div className='relative w-full h-80 flex items-center justify-center mb-8'>
        <div className='bg-black absolute w-full h-40 top-0'></div>
        <div className='z-10 mt-16 flex flex-col items-center justify-items-start gap-4'>
            <div className='bg-white rounded-full w-28 h-28 z-10'>
            </div>
            <div className='flex flex-col items-center'>
                <p className='text-lg'>Shahzina A</p>
                <p className='text-sm text-white/30'>@shahzinaxx</p>
            </div>
        </div>
      </div>

      <div>
        <div className='relative flex flex-row border-b border-white/30'>
            <div className='absolute top-16 bg-purple-500 h-0.5 transition-transform duration-300 ease-in-out' style={{ width: '50%', transform: `translateX(${indicatorPosition}%)` }}></div>
            <button onClick={() => {
              setActiveComponent('collection');
              updateIndicatorPosition(0);
            }}
             className='w-1/2 flex items-center justify-center p-5'> Collection </button>
            <button onClick={() => {
              setActiveComponent('watchlist');
              updateIndicatorPosition(100);
            }}
             className='w-1/2 flex items-center justify-center p-5'> Watchlist </button>
        </div>

        {activeComponent === 'collection' && <Collection />}
        {activeComponent === 'watchlist' && <Watchlist />}
      </div>

    </div>
  )
}

export default page;
