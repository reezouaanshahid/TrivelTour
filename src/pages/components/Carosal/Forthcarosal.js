import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaHeart } from 'react-icons/fa'; // Import the heart icon from react-icons library

const Forthcarosal = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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

  return (
    
    <div className='m-32 '>
      <h2 className='font-bold text-2xl'>Top destinations for your next vacation</h2>
      <Slider {...settings}>
        <div className='p-2 relative rounded'>
         <img style={{
            backgroundImage: `url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/cf/f9/eb/caption.jpg?w=600&h=600&s=1&cx=941&cy=299&chk=v1_18cfa51ea9b832b15689')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            
            height: '300px', // Adjust the height as needed
          }} />
           <button className="absolute top-3 hover:text-2xl right-3 m-2 hover:text-red-400"> {/* Add absolute positioning */}
          <FaHeart  size={24} color="red" /> {/* Use the heart icon */}
        </button>
          <h1 className='font-bold text-xl'>    Yellowstone National Park, WY</h1>
          
        </div>
        <div className='p-2 relative'>
         <img alt='image here' style={{
            backgroundImage: `url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/c2/7b/93/caption.jpg?w=600&h=600&s=1')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '300px', // Adjust the height as needed
          }} />
           <button className="absolute top-3 hover:text-2xl right-3 m-2"> {/* Add absolute positioning */}
          <FaHeart size={24} color="red" /> {/* Use the heart icon */}
        </button>
          <h1 className='font-bold text-xl'>Punta Cana, Dominican Republic</h1>
        </div>
        <div className='p-2 relative'>
         <img style={{
            backgroundImage: `url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/c7/b4/0e/caption.jpg?w=600&h=600&s=1&cx=3478&cy=2156&chk=v1_5a57c6b331ccbdf916fd')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '300px', // Adjust the height as needed
          }} />
           <button className="absolute top-3 hover:text-2xl right-3 m-2"> {/* Add absolute positioning */}
          <FaHeart size={24} color="red" /> {/* Use the heart icon */}
        </button>
          <h1 className='font-bold text-xl'>Orlando, FL</h1>
        </div>
        <div className='p-2 relative'>
         <img style={{
            backgroundImage: `url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/64/48/2c/caption.jpg?w=800&h=800&s=1')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '300px', // Adjust the height as needed
          }} />
          <button className="absolute top-3 hover:text-2xl right-3 m-2"> 
          <FaHeart size={24} color="red" /> 
        </button>
          <h1 className='font-bold'>Oahu Circle Island - North Shore Snorkeling Tour (Dole & Temple)</h1>
        </div>
        <div className='p-2 relative'>
         <img style={{
            backgroundImage: `url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/61/d1/ea/caption.jpg?w=600&h=600&s=1')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '300px', // Adjust the height as needed
          }} />
           <button className="absolute top-3 hover:text-2xl right-3 m-2"> 
          <FaHeart size={24} color="red" /> 
        </button>
          <h1 className='font-bold'>North Shore Circle Island Adventure Including Snorkeling with the Turtles</h1>
        </div>
       
        
        
      </Slider>
    </div>
    
  );
}

export default Forthcarosal;
