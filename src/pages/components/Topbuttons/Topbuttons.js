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

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle search submission here
    console.log('Search submitted:', searchValue);
  };
  
  return (
    <div className='text-center '>
        
        <div className='flex justify-center mt-4'>
        <button
         onClick={()=>{
          setStep(1)
        }}
        className={`sm:px-6 py-3 w-1/2 sm:w-auto justify-center  tracking-wider rounded-t
        sm:justify-start border-b-2 title-font font-medium 
         inline-flex items-center leading-none ${steps==1?'bg-gray-100 border-indigo-500 text-indigo-500'  :''}`}>
          See All
        </button>
        <a onClick={()=>{
          setStep(2)
        }} 
        
        className={`sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start
         border-b-2 title-font font-medium inline-flex items-center 
         leading-none ${steps==2?'bg-gray-100 border-indigo-500 text-indigo-500 '  :''}tracking-wider`}>
          Hotels
        </a>
        <button onClick={()=>{
          setStep(3)
        }} 
        
        className={`sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start
         border-b-2 title-font font-medium inline-flex items-center 
         leading-none ${steps==3?'bg-gray-100 border-indigo-500 text-indigo-500 '  :''}tracking-wider`}>
          Things to do
        </button>
            
            
        <button onClick={()=>{
          setStep(4)
        }} 
        
        className={`sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start
         border-b-2 title-font font-medium inline-flex items-center 
         leading-none ${steps==4?'bg-gray-100 border-indigo-500 text-indigo-500 '  :''}tracking-wider`}>
          Restaurants
        </button>

       
        <button onClick={()=>{
          setStep(5)
        }} 
        
        className={`sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start
         border-b-2 title-font font-medium inline-flex items-center 
         leading-none ${steps==5?'bg-gray-100 border-indigo-500 text-indigo-500 '  :''}tracking-wider`}>
          Vacation Rentals
        </button>
        </div>
        <div className="flex justify-center ">
      <form onSubmit={handleSubmit} className="flex items-center border-2 rounded-2xl py-2 shadow-2xl mt-2">
        <button
          type="submit"
          formAction="/Search"
          className="  p-2 rounded-l"
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
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="none"
          spellCheck="false"
          required
          name="q"
          className=" px-40 py-4 rounded-r "
          placeholder="Places to go, things to do, hotels..."
          title="Search"
          aria-label="Search"
          aria-controls="typeahead_results"
          aria-autocomplete="list"
          value={searchValue}
          onChange={handleChange}
        />
        <button type="submit" className=" px-8 py-4 rounded-full bg-green-300 ">
          Search
        </button>
      </form>
    </div>
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
    </div>
  )
}
