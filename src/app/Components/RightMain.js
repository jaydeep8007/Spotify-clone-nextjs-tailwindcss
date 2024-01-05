import React from 'react'
import Card from './Card'

const RightMain = () => {
    return (
        <div className='px-5 max-h-[90vh]  overflow-y-scroll '>
            <div className='flex justify-between px-4  cursor-pointer'>
                <span className='text-white text-xl pt-20  hover:underline font-bold'>SpotifyPlaylist</span>
                <span className='text-white pt-20  hover:underline'>Show all</span>
            </div>
            <div className='px-4 py-4 flex flex-wrap gap-4'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />


            </div>
        </div>
    )
}

export default RightMain
