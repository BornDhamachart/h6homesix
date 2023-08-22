import React, { Component } from "react";
import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    className: "center",
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 3,
    swipeToSlide: true,
  };

  return (
    <div className="h-64">
      <Slider {...settings}>
        <div className="cursor-pointer">
          <img
            src="./images/2-2-1024x768.jpeg"
            className="h-64 w-10/12 mx-auto transition duration-300 ease-out hover:scale-105"
          />
          <div className="w-10/12 mx-auto font-bold mt-1">HOUSE EKKAMAI</div>
        </div>
        <div className="cursor-pointer">
          <img
            src="./images/2-2-1024x768.jpeg"
            className="h-64 w-10/12 mx-auto transition duration-300 ease-out hover:scale-105"
          />
          <div className="w-10/12 mx-auto font-bold mt-1">HOUSE EKKAMAI</div>
        </div>
        <div className="cursor-pointer">
          <img
            src="./images/2-2-1024x768.jpeg"
            className="h-64 w-10/12 mx-auto transition duration-300 ease-out hover:scale-105"
          />
          <div className="w-10/12 mx-auto font-bold mt-1">HOUSE EKKAMAI</div>
        </div>
        <div className="cursor-pointer">
          <img
            src="./images/2-2-1024x768.jpeg"
            className="h-64 w-10/12 mx-auto transition duration-300 ease-out hover:scale-105"
          />
          <div className="w-10/12 mx-auto font-bold mt-1">HOUSE EKKAMAI</div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
