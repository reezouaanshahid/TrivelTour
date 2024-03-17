import React from 'react'
import { LuMapPin } from "react-icons/lu";


export default function Bannertwo() {
  return (
    <div className='bg-orange-100 flex flex-col md:flex-row'>
  <div className='m-4 md:m-16'>
    <img className="h-20 md:h-auto" src="https://static.tacdn.com/img2/travelers_choice/2023/TC_badge_yellow.svg" alt=""/>
    <h2 className='font-black text-2xl md:text-4xl font-bold'>Travelers' Choice Awards<br/> Best of the Best</h2>
    <p className='text-xl md:text-4xl text-purple-900 font-thin'>Get a personalized itinerary just for <br/> you, guided by traveler tips and <br/> reviews.</p>
    <button className='rounded-full mt-4 border px-6 py-2 bg-black text-white flex items-center'>
      <span className='mr-2'><LuMapPin/></span>
      Start trip with Al
    </button>
  </div>
  <div 
    style={{
      backgroundImage: `url('https://static.tacdn.com/img2/brand/feed/tc_cards_2024.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      height: 'auto', // Adjust the height as needed
    }}
    className='md:w-1/2'
  >
  </div>
</div>


  )
}
