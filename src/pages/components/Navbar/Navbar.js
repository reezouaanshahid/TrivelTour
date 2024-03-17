import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const dropdownRef1 = useRef(null);
  const dropdownRef2 = useRef(null);
  const dropdownRef3 = useRef(null);
  const dropdownRef4 = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !dropdownRef1.current?.contains(event.target) &&
        !dropdownRef2.current?.contains(event.target) &&
        !dropdownRef3.current?.contains(event.target) &&
        !dropdownRef4.current?.contains(event.target)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = (dropdownRef) => {
    setActiveDropdown(activeDropdown === dropdownRef ? null : dropdownRef);
  };

  return (
    <header className="body-font">
      <div className="container mx-auto flex flex-wrap p-10 flex-col md:flex-row items-center ">
        <div>
          <img src='https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg' alt="image" className='w-40 h-10'/>
        </div>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          {/* Dropdown 1 */}
          <div className="relative" ref={dropdownRef1}>
            <button onClick={() => toggleDropdown(dropdownRef1)} className="mr-5 hover:text-gray-900 text-xl">Discover</button>
            {activeDropdown === dropdownRef1 && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10" >
                <Link to="" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Travelers' Choice</Link>
                <Link to="" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Travel Stories</Link>
                <Link to="" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Travel Forums</Link>
              </div>
            )}
          </div>
          
          {/* Dropdown 2 */}
          <div className="relative" ref={dropdownRef2}>
            <button onClick={() => toggleDropdown(dropdownRef2)} className="mr-5 hover:text-gray-900 text-xl">Trip</button>
            {activeDropdown === dropdownRef2 && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                <Link to="" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Plan a trip</Link>
                <Link to="" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Hire a trip designer</Link>
              </div>
            )}
          </div>
          
          {/* Dropdown 3 */}
          <div className="relative" ref={dropdownRef3}>
            <button onClick={() => toggleDropdown(dropdownRef3)} className="mr-5 hover:text-gray-900 text-xl">Review</button>
            {activeDropdown === dropdownRef3 && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                <Link to="" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Write a review</Link>
                <Link to="" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Post photos</Link>
                <Link to="" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Add a place</Link>
              </div>
            )}
          </div>
          
          {/* Dropdown 4 */}
          <div className="relative" ref={dropdownRef4}>
            <button onClick={() => toggleDropdown(dropdownRef4)} className="mr-5 hover:text-gray-900 text-xl">More</button>
            {activeDropdown === dropdownRef4 && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                <Link to="" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Flights</Link>
                <Link to="" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Cruises</Link>
                <Link to="" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Rental Cars</Link>
              </div>
            )}
          </div>
        </nav>
        <button className="inline-flex items-center text-white bg-black full-rounded focus:outline-none rounded-3xl text-base mt-4 md:mt-0 p-4 px-7 hover:bg-gray-500">Signup</button>
      </div>
    </header>
  );
}
