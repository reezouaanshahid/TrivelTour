import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
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
    <div className='m-32'>
      <h2 className='font-bold text-2xl'>2024’s award-winning shores</h2>
      <p>Travelers’ Choice Awards Best of the Best Beaches</p>
      <Slider {...settings}>
        <div className='p-2'>
          
         <img className='' style={{
            backgroundImage: `url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/79/01/88/caption.jpg?w=800&h=-1&s=1')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '300px', // Adjust the height as needed
          }} />
          
        </div>
        <div className='p-2'>
         <img style={{
            backgroundImage: `url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/79/01/c6/caption.jpg?w=800&h=-1&s=1')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '300px', // Adjust the height as needed
          }} />
          
        </div>
        <div className='p-2'>
         <img style={{
            backgroundImage: `url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/79/01/fd/caption.jpg?w=800&h=-1&s=1')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '300px', // Adjust the height as needed
          }} />
          
        </div>
        <div className='p-2'>
         <img style={{
            backgroundImage: `url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/79/02/1d/caption.jpg?w=800&h=-1&s=1')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '300px', // Adjust the height as needed
          }} />
          
        </div>
        <div className='p-2'>
         <img style={{
            backgroundImage: `url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/79/02/38/caption.jpg?w=600&h=-1&s=1')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '300px', // Adjust the height as needed
          }} />
          
        </div>
        
        
      </Slider>
    </div>
  );
}

export default Carousel;
