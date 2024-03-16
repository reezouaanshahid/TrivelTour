import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaHeart } from 'react-icons/fa';


const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };
export default function Thirdcarosal() {
  return (
    <div className='bg-orange-100'>
        <div className='m-2'>
        <h2 className='font-bold text-2xl flex-wrap'>Top experiences on Tripadvisor</h2>
      <Slider className='m-20' {...settings}>
        <div className='p-2 relative '>
         <img className='rounded-2xl' style={{
            backgroundImage: `url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/f2/3e/78/caption.jpg?w=800&h=800&s=1')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '300px', // Adjust the height as needed
          }} />
           <button className="absolute top-3   right-3 m h-10 w-10 bg-white rounded-full "> {/* Add absolute positioning */}
          <FaHeart className='ml-2'  size={24} color="red" /> {/* Use the heart icon */}
        </button>
          <h1 className='font-bold'>Grand Circle Island and <br/>Haleiwa 9 Hour Tour</h1>
          <p className='font-bold'>from A$208 per adult</p>
        </div>
        <div className='p-2 relative'>
         <img className='rounded-2xl' style={{
            backgroundImage: `url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/74/63/32/caption.jpg?w=800&h=800&s=1')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '300px', // Adjust the height as needed
          }} />
           <button className="absolute top-3 hover:text-2xl right-3 m-2"> {/* Add absolute positioning */}
          <FaHeart size={24} color="red" /> {/* Use the heart icon */}
        </button>
          <h1 className='font-bold'>All Inclusive Ultimate Circle Island Day Tour with Lunch 
          and Waimea Waterfall</h1>
        </div>
        <div className='p-2 relative'>
         <img className='rounded-2xl' style={{
            backgroundImage: `url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/60/ce/b5/caption.jpg?w=800&h=800&s=1')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '300px', // Adjust the height as needed
          }} />
           <button className="absolute top-3 hover:text-2xl right-3 m-2"> {/* Add absolute positioning */}
          <FaHeart size={24} color="red" /> {/* Use the heart icon */}
        </button>
          <h1 className='font-bold'>Tour of North Shore & Waimea Waterfall</h1>
        </div>
        <div className='p-2 relative'>
         <img className='rounded-2xl' style={{
            backgroundImage: `url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/64/48/2c/caption.jpg?w=800&h=800&s=1')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '300px', // Adjust the height as needed
          }} />
          <button className="absolute top-3 hover:text-2xl right-3 m-2"> {/* Add absolute positioning */}
          <FaHeart size={24} color="red" /> {/* Use the heart icon */}
        </button>
          <h1 className='font-bold'>Oahu Circle Island - North Shore Snorkeling Tour (Dole & Temple)</h1>
        </div>
        <div className='p-2 relative'>
         <img className='rounded-2xl' style={{
            backgroundImage: `url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/61/d1/ea/caption.jpg?w=600&h=600&s=1')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '300px', // Adjust the height as needed
          }} />
           <button className="absolute top-3 hover:text-2xl right-3 m-2"> {/* Add absolute positioning */}
          <FaHeart size={24} color="red" /> {/* Use the heart icon */}
        </button>
          <h1 className='font-bold'>North Shore Circle Island Adventure Including Snorkeling with the Turtles</h1>
        </div>
       
        
        
      </Slider>
      </div>
    </div>
  )
}
