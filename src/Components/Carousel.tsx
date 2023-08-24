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
        <Link to="/minjihouse" className="cursor-pointer">
          <img
            src="./images/CoverImage/Minji-2.jpeg"
            className="h-36 md:h-48 lg:h-64 w-10/12 max-w-lg mx-auto transition duration-300 ease-out hover:scale-105"
          />
          <div className="group w-10/12 mx-auto font-bold mt-4 ">
            MIN-JI HOUSE
            <span className="block w-0 group-hover:w-full transition-all duration-300 h-0.5 bg-black"></span>
          </div>
        </Link>
        <Link to="/japandihouse" className="cursor-pointer">
          <img
            src="./images/CoverImage/Japandi-5.jpeg"
            className="h-36 md:h-48 lg:h-64 w-10/12 max-w-lg mx-auto transition duration-300 ease-out hover:scale-105"
          />
          <div className="group w-10/12 mx-auto font-bold mt-4 ">
            JAPANDI HOUSE
            <span className="block w-0 group-hover:w-full transition-all duration-300 h-0.5 bg-black"></span>
          </div>
        </Link>
        <Link to="/minjihouse" className="cursor-pointer">
          <img
            src="./images/CoverImage/Minji-3.jpeg"
            className="h-36 md:h-48 lg:h-64 w-10/12 max-w-lg mx-auto transition duration-300 ease-out hover:scale-105"
          />
          <div className="group w-10/12 mx-auto font-bold mt-4 ">
            MIN-JI HOUSE
            <span className="block w-0 group-hover:w-full transition-all duration-300 h-0.5 bg-black"></span>
          </div>
        </Link>
        <Link to="/japandihouse" className="cursor-pointer">
          <img
            src="./images/CoverImage/Japandi-2.jpeg"
            className="h-36 md:h-48 lg:h-64 w-10/12 max-w-lg mx-auto transition duration-300 ease-out hover:scale-105"
          />
          <div className="group w-10/12 mx-auto font-bold mt-4 ">
            JAPANDI HOUSE
            <span className="block w-0 group-hover:w-full transition-all duration-300 h-0.5 bg-black"></span>
          </div>
        </Link>
      </Slider>
    </div>
  );
};

export default Carousel;
