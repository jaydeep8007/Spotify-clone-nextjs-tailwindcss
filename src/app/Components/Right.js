import React from 'react'
import RightMain from './RightMain'

const Right = () => {
    return (
        <div>
            <div className='h-screen w-[79vw] bg-green-300 '>
                <div className='w-full h-full flex flex-col   bg-black'   >
                    <div className=' bg-[#161616]  h-[100vh] my-2 rounded-lg '>
                        <div className='rightUpNavbar'>
                            <div className='nav fixed w-[79vw] rounded-t-lg z-10  flex justify-between items-center h-16  px-3  bg-[#121212]'>

                                <span className='space-x-3 px-2' >
                                    <button className='bg-black h-8 w-8 rounded-full  hover:scale-110 '><svg className='h-4 pl-2 items-center justify-center flex' xmlns="http://www.w3.org/2000/svg" fill="rgb(100%, 100%, 100%)" data-encore-id="icon" role="img" aria-hidden="true" class="Svg-sc-ytk21e-0 kgVuXA IYDlXmBmmUKHveMzIPCF" viewBox="0 0 16 16"><path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z"></path></svg></button>
                                    <button className='bg-black h-8 w-8 rounded-full  hover:scale-110'><svg className='h-4 pl-2 items-center justify-center flex' xmlns="http://www.w3.org/2000/svg" fill="rgb(100%, 100%, 100%)" data-encore-id="icon" role="img" aria-hidden="true" class="Svg-sc-ytk21e-0 kgVuXA IYDlXmBmmUKHveMzIPCF" viewBox="0 0 16 16"><path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z"></path></svg></button>
                                </span>
                                <span className='font-bold '>
                                    <button className='transition ease-linear duration-200  h-10 w-24 text-gray-300 hover:text-white rounded-3xl hover:scale-105 '>Sign Up</button>
                                    <button className='transition ease-linear duration-200  bg-white h-10 w-24 text-gray-800 hover:text-black rounded-3xl hover:scale-105 '>Log In</button>
                                </span>


                            </div>
                        </div>

                        <RightMain />

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Right
