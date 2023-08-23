import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";


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
        <Link to="/minjihouse"  className="cursor-pointer">
          <img
            src="./images/2-2-1024x7681.jpeg"
            className="h-64 w-10/12 mx-auto transition duration-300 ease-out hover:scale-105"
          />
          <div className="w-10/12 mx-auto font-bold mt-1">MIN-JI HOUSE</div>
        </Link>
        <Link to="/minjihouse"  className="cursor-pointer">
          <img
            src="./images/2-2-1024x7681.jpeg"
            className="h-64 w-10/12 mx-auto transition duration-300 ease-out hover:scale-105"
          />
          <div className="w-10/12 mx-auto font-bold mt-1">HOUSE EKKAMAI</div>
        </Link>
        <Link to="/minjihouse"  className="cursor-pointer">
          <img
            src="./images/2-2-1024x7681.jpeg"
            className="h-64 w-10/12 mx-auto transition duration-300 ease-out hover:scale-105"
          />
          <div className="w-10/12 mx-auto font-bold mt-1">HOUSE EKKAMAI</div>
        </Link>
        <Link to="/minjihouse"  className="cursor-pointer">
          <img
            src="./images/2-2-1024x7681.jpeg"
            className="h-64 w-10/12 mx-auto transition duration-300 ease-out hover:scale-105"
          />
          <div className="w-10/12 mx-auto font-bold mt-1">HOUSE EKKAMAI</div>
        </Link>

      </Slider>
    </div>
  );
};

export default Carousel;
