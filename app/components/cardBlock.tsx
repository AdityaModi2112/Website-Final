'use client';
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const cardData = [
  { title: 'Card 1', description: 'Description of Card 1' },
  { title: 'Card 2', description: 'Description of Card 2' },
  { title: 'Card 3', description: 'Description of Card 3' },
  { title: 'Card 4', description: 'Description of Card 1' },
  { title: 'Card 5', description: 'Description of Card 2' },
  { title: 'Card 6', description: 'Description of Card 3' },
];

const CardCarousel = () => {
  const [activeSlide, setActiveSlide] = React.useState(0);
const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 3, // Default to showing 3 slides
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  arrows: false,
  centerMode: true,
  beforeChange: (current: number, next: number) => setActiveSlide(next),
  responsive: [
    {
      breakpoint: 768, // Width less than 768px
      settings: {
        slidesToShow: 1, // Show only 1 slide
      },
    },
    // You can add more breakpoints here if needed
  ],
};

  return (
<Slider className="p-[2rem]" {...settings}>
  {cardData.map((card, index) => (
  <div key={index} className={`shadow-md rounded-lg overflow-hidden bg-[#FEEAD8] blog-card ${index === activeSlide ? 'card-focused' : 'card-blurred'}`}>
    <div style={{ display: 'flex', width: '100%' }}>
      <Image src="/blockDog.png" width={100} height={150} alt={card.title} className="w-1/2" />
      <div className="p-5 text-center flex flex-col justify-between w-1/2">
        <h2 className="text-lg md:text-2xl font-bold text-gray-800">{card.title}</h2>
        <p className="text-sm md:text-lg text-gray-600">{card.description}</p>
        <button className="bg-blue-500 text-white font-bold md:py-2 md:px-4 py-1 px-2 md:text-lg text-sm mt-6 md:mt-0 rounded hover:bg-blue-700 transition duration-300 ease-in-out">Read More</button>
      </div>
    </div>
  </div>
))}
</Slider>
  );
};

export default CardCarousel;
