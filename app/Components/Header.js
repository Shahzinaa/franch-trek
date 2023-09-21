"use client"
import React from 'react'
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Logo from 'public/logo.png'

function Header () {
    const pathName = usePathname();
    console.log(pathName);


  return (
    <nav>
        {
           pathName !== "/Signup" ?
            <div className='py-6 flex items-center justify-between border-b-2 border-slate-200/20 '>
                <div className="logo w-40">
                    <Link href="/">
                        < Image src={Logo} alt='logo' />
                    </Link>
                </div>

                <div className="links flex gap-16">
                    <Link href='/Browse' className='ease-in-out duration-300 py-1 hover:text-purple-500  focus:text-purple-500'>Browse</Link>
                    <Link href='/Genre' className='ease-in-out duration-300 py-1 hover:text-purple-500 focus:text-purple-500'>Genre</Link>
                    <Link href='/Collection' className='ease-in-out duration-300 py-1 hover:text-purple-500 focus:text-purple-500'>Collections</Link>
                </div>

                <div className="user w-40 items-center justify-end flex gap-4">
                    <Link href='/Signup' className='border-2 w-10 flex items-center justify-center border-purple-500 py-2 rounded-lg hover:bg-purple-500 ease-in-out duration-300'>
                        <img src="/bell.svg" width={24} alt="bell-icon" />
                    </Link>
                    <Link href='/Profile' className='bg-purple-500 w-10 flex items-center justify-center py-2 rounded-lg hover:bg-purple-600 ease-in-out duration-300'>
                        <img src="/user.svg" width={27} alt="user-icon" />
                    </Link>
                </div>
            </div>
            :null
        }
    </nav>
  )
}

export default Header;
