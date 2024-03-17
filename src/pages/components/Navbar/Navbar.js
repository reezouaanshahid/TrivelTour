import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);
  const [isDropdownOpen4, setIsDropdownOpen4] = useState(false);

  const dropdownRef = useRef(null);
  const dropdownRef2 = useRef(null);
  const dropdownRef3 = useRef(null);
  const dropdownRef4 = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        dropdownRef2.current &&
        !dropdownRef2.current.contains(event.target) &&
        dropdownRef3.current &&
        !dropdownRef3.current.contains(event.target) &&
        dropdownRef4.current &&
        !dropdownRef4.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
        setIsDropdownOpen2(false);
        setIsDropdownOpen3(false);
        setIsDropdownOpen4(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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

  // Event handler to close dropdowns when hovering over other components
  const handleHover = () => {
    setIsDropdownOpen(false);
    setIsDropdownOpen2(false);
    setIsDropdownOpen3(false);
    setIsDropdownOpen4(false);
  };

  return (
    <header className="body-font">
      <div className="container mx-auto flex flex-wrap p-10 flex-col md:flex-row items-center ">
        <div>
          <img src='https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg' alt="image" className='w-40 h-10'/>
        </div>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          {/* Dropdown 1 */}
          <div className="relative" ref={dropdownRef} onMouseEnter={toggleDropdown} onMouseLeave={handleHover}>
            <button className="mr-5 hover:text-gray-900 text-xl">Discover</button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                <Link to="" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Travelers' Choice</Link>
                <Link to="" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Travel Stories</Link>
                <Link to="" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Travel Forums</Link>
              </div>
            )}
          </div>
          
          {/* Dropdown 2 */}
          <div className="relative" ref={dropdownRef2} onMouseEnter={toggleDropdown2} onMouseLeave={handleHover}>
            <button className="mr-5 hover:text-gray-900 text-xl">Trip</button>
            {isDropdownOpen2 && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                <Link to="" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Plan a trip</Link>
                <Link to="" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Hire a trip designer</Link>
              </div>
            )}
          </div>
          
          {/* Dropdown 3 */}
          <div className="relative" ref={dropdownRef3} onMouseEnter={toggleDropdown3} onMouseLeave={handleHover}>
            <button className="mr-5 hover:text-gray-900 text-xl">Review</button>
            {isDropdownOpen3 && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                <Link to="" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Write a review</Link>
                <Link to="" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Post photos</Link>
                <Link to="" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Add a place</Link>
              </div>
            )}
          </div>
          
          {/* Dropdown 4 */}
          <div className="relative" ref={dropdownRef4} onMouseEnter={toggleDropdown4} onMouseLeave={handleHover}>
            <button className="mr-5 hover:text-gray-900 text-xl">More</button>
            {isDropdownOpen4 && (
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
