// import React from 'react'
import React, { useState } from 'react';
import Step1 from './Whereto';
import Hotels from './Hotels';
import Thingstodo from './Thingstodo';
import Restaurants from './Restaurants';
import VacationRentals from './Vacation Rentals';

export default function Topbutton() {
  const [steps,setStep]=useState(1)
  const [searchValue, setSearchValue] = useState('');
  const [placeholderText, setPlaceholderText] = useState('Places to go, things to do, hotels...');


  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle search submission here
    console.log('Search submitted:', searchValue);
  };
  
  const handleHotelClick = () => {
    setPlaceholderText('Places to go, things to do, hotels...'); // Update placeholder text
    setSearchValue(''); // Clear search input value
    setStep(1);
  };
  const handleHotelClick2 = () => {
    setPlaceholderText('Search for hotels...'); // Update placeholder text
    setSearchValue(''); // Clear search input value
    setStep(2);
  };
  const handleHotelClick3 = () => {
    setPlaceholderText('Attraction, activity or destination'); // Update placeholder text
    setSearchValue(''); // Clear search input value
    setStep(3);
  };
  const handleHotelClick4 = () => {
    setPlaceholderText('Resturant or destination'); // Update placeholder text
    setSearchValue(''); // Clear search input value
    setStep(4);
  };
  const handleHotelClick5 = () => {
    setPlaceholderText('destination'); // Update placeholder text
    setSearchValue(''); // Clear search input value
    setStep(5);
  };

  return (
    <div className='text-center '>
      {steps==1&&(
  <Step1/>
)}
{steps==2&&(
  <Hotels/>
)}
{steps==3&&(
  <Thingstodo/>
)}
{steps==4&&(
  <Restaurants/>
)}
{steps==5&&(
  <VacationRentals/>
)}
        
        <div className='flex justify-center mt-4 mb-4 flex-wrap'>
  <button
    onClick={handleHotelClick}
    className={`sm:px-6 py-3 w-full sm:w-auto justify-center tracking-wider rounded-t sm:rounded-l
    sm:border-b-2 title-font font-medium inline-flex items-center leading-none ${steps === 1 ? 'bg-gray-100 border-indigo-500 text-indigo-500' : ''}`}>
    See All
  </button>
  <button onClick={handleHotelClick2}
    className={`sm:px-6 py-3 w-full sm:w-auto justify-center sm:justify-start
    border-b-2 title-font font-medium inline-flex items-center leading-none ${steps === 2 ? 'bg-gray-100 border-indigo-500 text-indigo-500' : ''} sm:rounded-l sm:rounded-r-none`}>
    Hotels
  </button>
  <button onClick={handleHotelClick3}
    className={`sm:px-6 py-3 w-full sm:w-auto justify-center sm:justify-start
    border-b-2 title-font font-medium inline-flex items-center leading-none ${steps === 3 ? 'bg-gray-100 border-indigo-500 text-indigo-500' : ''} sm:rounded-l sm:rounded-r-none`}>
    Things to do
  </button>
  <button onClick={handleHotelClick4}
    className={`sm:px-6 py-3 w-full sm:w-auto justify-center sm:justify-start
    border-b-2 title-font font-medium inline-flex items-center leading-none ${steps === 4 ? 'bg-gray-100 border-indigo-500 text-indigo-500' : ''} sm:rounded-l sm:rounded-r-none`}>
    Things to do
  </button>
  <button onClick={handleHotelClick5}
    className={`sm:px-6 py-3 w-full sm:w-auto justify-center sm:justify-start
    border-b-2 title-font font-medium inline-flex items-center leading-none ${steps === 5 ? 'bg-gray-100 border-indigo-500 text-indigo-500' : ''} sm:rounded-l sm:rounded-r-none`}>
    Vacation Rentals
  </button>
</div>

        <div className="flex justify-center">
  <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center border-2 rounded-2xl py-2 shadow-2xl mt-2 w-full max-w-lg">
    <button
      type="submit"
      formAction="/Search"
      className="p-2 rounded-l md:rounded-l-none md:rounded-tl-2xl"
      title="Search"
      aria-label="Search"
      tabIndex="-1"
    >
      <svg viewBox="0 0 24 24" width="24px" height="24px" className="fill-current text-black">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.74 3.75a5.99 5.99 0 100 11.98 5.99 5.99 0 000-11.98zM2.25 9.74a7.49 7.49 0 1113.3 4.728l5.44 5.442-1.06 1.06-5.44-5.439A7.49 7.49 0 012.25 9.74z"
        ></path>
      </svg>
    </button>
    <input 
      type="search"
      className="py-2 px-4 md:px-6 rounded-r md:rounded-r-none md:rounded-bl-2xl w-full md:w-auto "
      placeholder={placeholderText} // Placeholder text is dynamic
      title="Search"
      value={searchValue}
      onChange={handleChange}
    />
    <button type="submit" className="px-4 py-2 md:px-6 md:py-4 rounded-full bg-green-300 mt-2 md:mt-0 md:ml-auto">
      Search
    </button>
  </form>
</div>


    </div>
  )
}
