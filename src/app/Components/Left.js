import React from 'react'
import Image from 'next/image'
import LeftDown from './LeftDown'

const Left = () => {
    return (
        <div>
            <div className=' h-screen w-[21vw] bg-black justify-center items-center flex'>
                <div className='w-[20vw] h-full flex flex-col   bg-black'   >
                    <div className='Leftup overflow-hidden z-10 bg-[#121212]  h-[22vh] my-2 rounded-lg px-4 py-5  '>
                        <Image width="100" height="100" className='h-6 pl-1 cursor-pointer' src={`/Spotify_logo_with_text.svg`} alt='logo'></Image>
                        <div className='py-2'>
                            <div className='home flex py-3 cursor-pointer '>

                                <Image width="50" height="50" className='h-6' src={`/Home.svg`} alt='Home'></Image>
                                <span className='text-white pl-2 font-bold '>Home</span>
                            </div>
                            <div className=' search flex py-2 cursor-pointer'>

                                <Image width="50" height="50" className='h-5' src={`/search.svg`} alt='search'></Image>
                                <span className=' text-gray-300 hover:text-white font-bold pl-2 transition-colors ease-linear duration-300 '>Search</span>
                            </div>
                        </div>

                    </div>
                    <div className='Leftdown bg-[#121212] h-[80vh] mb-2 rounded-lg overflow-hidden'>
                        <LeftDown />
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Left
