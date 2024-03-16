import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);
  const [isDropdownOpen4, setIsDropdownOpen4] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleDropdown2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
  };
  const toggleDropdown3 = () => {
    setIsDropdownOpen3(!isDropdownOpen3);
  };
  const toggleDropdown4 = () => {
    setIsDropdownOpen4(!isDropdownOpen4);
  };

  return (
    <header className="body-font">
      <div className="container mx-auto flex flex-wrap p-10 flex-col md:flex-row items-center ">
        <div>
          <img src='https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg' alt="image" className='w-40 h-10'/>
        </div>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          {/* Dropdown 1 */}
          <div className="relative">
            <button onClick={toggleDropdown} className="mr-5 hover:text-gray-900 text-xl">Discover</button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                <Link to="/option1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 1 </Link>
                <Link to="/option2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 2</Link>
                <Link to="/option3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 3</Link>
              </div>
            )}
          </div>
          
          {/* Dropdown 2 */}
          <div className="relative">
            <button onClick={toggleDropdown2} className="mr-5 hover:text-gray-900 text-xl">Trip</button>
            {isDropdownOpen2 && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                <Link to="/option1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 144</Link>
                <Link to="/option2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 2</Link>
                <Link to="/option3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 3</Link>
              </div>
            )}
          </div>
          
          {/* Remaining links */}
          <div className="relative">
            <button onClick={toggleDropdown3} className="mr-5 hover:text-gray-900 text-xl">Review</button>
            {isDropdownOpen3 && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                <Link to="/option1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 144</Link>
                <Link to="/option2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 2</Link>
                <Link to="/option3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 3</Link>
              </div>
            )}
          </div>
          <div className="relative">
            <button onClick={toggleDropdown4} className="mr-5 hover:text-gray-900 text-xl">More</button>
            {isDropdownOpen4 && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                <Link to="/option1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 144</Link>
                <Link to="/option2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 2</Link>
                <Link to="/option3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 3</Link>
              </div>
            )}
          </div>
        </nav>
        <button className="inline-flex items-center text-white bg-black full-rounded focus:outline-none rounded-3xl text-base mt-4 md:mt-0 p-4 px-7 hover:bg-gray-500">Signup</button>
      </div>
    </header>
  );
}
