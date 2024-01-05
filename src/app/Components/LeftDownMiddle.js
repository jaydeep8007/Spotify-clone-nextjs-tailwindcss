import React from 'react'

const LeftDownMiddle = () => {
    return (
        <div>
            <div className='bg-[#121212] h-[30vh]  overflow-y-scroll  w-[20vw] space-y-6 '>
                <div className='bg-[#1f1f1f]  mx-2 rounded-lg'>
                    <div className='bg-[#242424] text-white  rounded-lg py-3 px-5  '>
                        <h2 className='font-bold pb-2'>Creat Yoyr First playlist</h2>
                        <h3 className='text-sm'>Its easy , We will help you</h3>
                        <button className='hover:scale-105 bg-white text-sm font-semibold text-black px-3 py-1 rounded-2xl mt-5
                        '>Creat playlist</button>
                    </div>


                </div>

                <div className='bg-[#1f1f1f]  mx-2 rounded-lg'>
                    <div className='bg-[#242424] text-white  rounded-lg py-3 px-5  '>
                        <h2 className='font-bold pb-2'>Let us find some podcasts to follow</h2>
                        <h3 className='text-sm '>We will keep you updated on new episodes</h3>
                        <button className=' hover:scale-105 bg-white text-sm font-semibold text-black px-3 py-1 rounded-2xl mt-5
                        '>Browse products</button>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default LeftDownMiddle
