import React from 'react'
import Image from 'next/image'

const Card = () => {
    return (
        <div className='flex flex-wrap gap-6 cursor-pointer '>
            <div className=' flex flex-col justify-center items-center gap-2 h-72 w-52 bg-[#121212] hover:bg-[#242424] rounded-lg transition ease-linear duration-200'>
                <div className='mx-5 shadow-md shadow-black bg-green-500 rounded-lg overflow-hidden'>

                    <img className='shadow-xl  ' src="https://i.scdn.co/image/ab67706f00000002bdeb1c317ac2dd10f2397e4c" alt='img'></img>
                </div>
                <h2 className='text-white px-5 text-sm font-bold'>Jazz in THe background</h2>
                <p className='text-gray-300 text-sm px-5'>Soft instrumental Jazz for all your activities. </p>
            </div>

        </div>
    )
}

export default Card
{/* <img aria-hidden="false" draggable="false" loading="lazy" src="https://i.scdn.co/image/ab67706f00000002bdeb1c317ac2dd10f2397e4c" data-testid="card-image" alt="" class="mMx2LUixlnN_Fu45JpFB SKJSok3LfyedjZjujmFt Yn2Ei5QZn19gria6LjZj"> */ }
