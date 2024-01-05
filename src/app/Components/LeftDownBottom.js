import React from 'react'

const LeftDownBottom = () => {
    return (
        <div className='z-10'>
            <div className=' w-[20vw] z-10  bg-[#121212]  h-[36vh] rounded-b-lg py-5   '>
                <span className='space-y-3'>
                    <ul></ul>
                    <ul className='flex  space-x-8   gap-2 scale-75 '>
                        <li className='text-sm text-white cursor-pointer'>Legal</li>
                        <li className='text-sm text-white cursor-pointer'>Privacy Center</li>
                        <li className='text-sm text-white cursor-pointer'>Privacy Policy</li>
                    </ul>
                    <ul className='flex  space-x-8  gap-2 scale-75'>
                        <li className='text-sm text-white cursor-pointer'>Cookies</li>
                        <li className='text-sm text-white cursor-pointer'>About Ads</li>
                        <li className='text-sm text-white cursor-pointer'>Accessibility</li>
                    </ul>
                    <li className='flex text-sm text-white  space-x-8 space-y-3 gap-2 scale-75 cursor-pointer'>Cookies</li>

                    <button className='hover:scale-105 ml-8  bg-black border-gray-200 border text-sm font-semibold text-white px-5 py-1 rounded-3xl mt-5
                        '>English</button>


                </span>
            </div>
        </div>
    )
}

export default LeftDownBottom
// bg-[#121212]