import React from 'react'
import Image from 'next/image'
import LeftDownMiddle from './LeftDownMiddle'
import LeftDownBottom from './LeftDownBottom'

const LeftDown = () => {
    return (
        <div>
            <div className='nav  w-[20vw] z-10  rounded-t-lg bg-[#121212] flex justify-between items-center h-14  px-3 overflow-hidden'>
                <div className='flex cursor-pointer pl-4 text-gray-300 hover:text-white transition-colors ease-linear duration-300'>
                    <Image className='' height="25" width="25" src={`/Library.svg`} alt='library'></Image>
                    <span className=' pl-5 font-bold  '> Your Library</span>
                </div>

                <span className='text-white text-2xl cursor-pointer'>+</span>
            </div>
            <div>
                <LeftDownMiddle />

            </div>
            <div>

                <LeftDownBottom />
            </div>
        </div>
    )
}

export default LeftDown
