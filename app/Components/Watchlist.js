import Link from 'next/link';
import React from 'react'

const Watchlist = () => {
  return (
    <div>
      <div>
        <Link href="/Profile/Watchlist" className='w-full flex flex-row items-center border-b border-white/50'>
            <div className=" w-24 px-6 py-4 whitespace-no-wrap">
                <div className='w-10'>
                    <img className='rounded-md' src="/images/myfault.jpg" alt="" />
                </div>
            </div>
            <div className="w-5/6 px-6 py-4 whitespace-no-wrap ">
                To Be Watched
            </div>
            <div className="w-24 py-4 whitespace-no-wrap flex items-end justify-end">
                <p className='text-sm'>7</p>
            </div>
        </Link>
      </div>
    </div>
  )
}

export default Watchlist;
