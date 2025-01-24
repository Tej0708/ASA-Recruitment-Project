import React from 'react';
import Slider from 'react-slick';
import AthleteCard from './AthleteCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Carousel({ athletes }) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel-container">
  <Slider {...settings}>
    {athletes.map((athlete) => (
      <div key={athlete.id}>
        <AthleteCard athlete={athlete} />
      </div>
    ))}
  </Slider>
</div>

  );
}

export default Carousel;
