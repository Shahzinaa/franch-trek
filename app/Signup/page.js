import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Logo from 'public/logo.png'



const page = () => {

  return (
    <div>
      <div className='py-8 flex flex-col gap-20'>
        <div className="logo w-40">
            <Link href="/">
                < Image src={Logo} alt='logo' />
            </Link>
        </div>

        <div className='content flex flex-col items-center justify-center'>
          <div className='flex flex-col gap-2 text-center'>
            <h1 className='text-4xl'>Sign up</h1>
            <p className='text-md'>To make your own collection.</p>
          </div>

          <div className="w-1/3 mt-10 py-6 flex flex-col gap-14">
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-white font-thin text-sm mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 bg-neutral-700  rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder=""
                />
              </div>

              <div className="mb-10">
                <label htmlFor="password" className="block text-white font-thin text-sm mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-3 py-2 bg-neutral-700  rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder=""
                />
              </div>

              <div className="flex justify-between gap-7 items-center">
                <button
                  type="submit"
                  className="w-1/2 bg-transparent border border-purple-500 hover:bg-purple-500 ease-in-out duration-300 text-white py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                >
                  Signup
                </button>

                <button
                  type="submit"
                  className="w-1/2 bg-purple-500  ease-in-out duration-300 text-white py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                >
                  Login
                </button>
              </div>
            </form>
            <div className='text-center '>
              <Link href="/" className='font-thin ease-in-out duration-300 hover:font-normal'>Continue without Signin</Link>
            </div>
          </div>

        </div>
      </div>
      

    {/* Right section */}

      {/* <div className='h-screen overflow-hidden'>
        <div className='absolute overflow-hidden'>
         < Image className='h-screen filter blur-sm' src={SignupImg} alt='logo' />
        </div>
        <div className='relative z-50 flex flex-col items-center justify-between h-screen p-32'>
          <div>
            <p className='w-96 text-2xl text-center'>
              Empower your movie enthusiasm – collect watched gems and dream of upcoming adventures.
            </p>
          </div>
          <div className='text-center flex flex-col items-center justify-center gap-4'>
            <div>
              <p className='text-5xl'>EXPLORE</p>
              <p className='text-xl'>WITHOUT SIGNING IN</p>
            </div>
            <Link href="/" className='bg-purple-500 w-10 flex items-center justify-center py-4 px-4 rounded-lg hover:bg-purple-600 ease-in-out duration-300'>
               <img src="/chevron.svg"  alt="sign" />
            </Link>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default page;
