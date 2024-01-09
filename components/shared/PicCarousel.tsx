'use client'
import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const PicCarousel = () => {

    const carouselControl = {
        dots: false,
        infinite: true,
        speed: 2500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,    
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    }

  return (
    <div className='w-3/4 max-md:w-full m-auto'>
    <div className="mt-20">
    <Slider {...carouselControl}>
        <div className="bg-gray-700 w-20 h-20 md:w-36 md:h-36 sm:w-48 sm:h-48 rounded-xl text-center">TMS</div>
        <div className="bg-gray-700 w-20 h-20 md:w-36 md:h-36 sm:w-48 sm:h-48 rounded-xl text-center">TMS</div>
        <div className="bg-gray-700 w-20 h-20 md:w-36 md:h-36 sm:w-48 sm:h-48 rounded-xl text-center">TMS</div>
        <div className="bg-gray-700 w-20 h-20 md:w-36 md:h-36 sm:w-48 sm:h-48 rounded-xl text-center">TMS</div>
        <div className="bg-gray-700 w-20 h-20 md:w-36 md:h-36 sm:w-48 sm:h-48 rounded-xl text-center">TMS</div>
        <div className="bg-gray-700 w-20 h-20 md:w-36 md:h-36 sm:w-48 sm:h-48 rounded-xl text-center">TMS</div>
        <div className="bg-gray-700 w-20 h-20 md:w-36 md:h-36 sm:w-48 sm:h-48 rounded-xl text-center">TMS</div>
        <div className="bg-gray-700 w-20 h-20 md:w-36 md:h-36 sm:w-48 sm:h-48 rounded-xl text-center">TMS</div>
        <div className="bg-gray-700 w-20 h-20 md:w-36 md:h-36 sm:w-48 sm:h-48 rounded-xl text-center">TMS</div>
        <div className="bg-gray-700 w-20 h-20 md:w-36 md:h-36 sm:w-48 sm:h-48 rounded-xl text-center">TMS</div>
    </Slider>
    </div>

  </div>
  )
}

export default PicCarousel
