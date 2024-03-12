import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className=" body-font">
  <div className="container mx-auto flex flex-wrap p-10 flex-col md:flex-row items-center">
  <div>
            
     <img src='https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg' alt="image" className='w-40 h-10'/>
     </div>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link to='./Discover' className="mr-5 hover:text-gray-900 text-xl">Discover</Link>
      <Link to='./Di' className="mr-5 hover:text-gray-900 text-xl">Trips</Link>
      <Link to='./Review.tsx' className="mr-5 hover:text-gray-900 text-xl">Review</Link>
      <Link to='./More.tsx' className="mr-5 hover:text-gray-900 text-xl">More</Link>
      
    </nav>
    <button className="inline-flex items-center text-white bg-black full-rounded  focus:outline-none rounded-3xl  text-base mt-4 md:mt-0 p-4"> signup
      
    </button>
  </div>
</header>
  )
}
