import React from 'react'
import { LuMapPin } from "react-icons/lu";


export default function Banner() {
  return (
    <div className='flex m-20 bg-blue-200'>
        
        <div 
      style={{
        backgroundImage: `url('https://www.tripadvisor.com/img2/trips/home-gai-entry-dv.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '80vh', 
        margin:''
      }}
    >
        
        <div className='m-32'>
        <p className='text-xl font-thin'>product</p>
        <h2 className='text-6xl font-bold text-purple-950'>Build a trip <br/> in minutes</h2>
        <p className='text-4xl font-thin'>Get a personalized itinerary just for <br/> you, guided by traveler tips and <br/> reviews.</p>
      <button className='rounded-full border px-4 py-2 bg-purple-900  hover:bg-purple-950 text-white flex'><span className='mt-1'><LuMapPin/></span>Start trip with Al</button>
        </div>
    </div>
    </div>
  )
}
