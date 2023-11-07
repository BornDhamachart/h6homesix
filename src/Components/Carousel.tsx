import Slider from "react-slick";
import { Link } from "react-router-dom";

interface Props {
  path: string;
  src : string;
  name : string;
}

const ImageLinkComponent: React.FC<Props> = ({ path, src, name }) => {
  return (
    <Link to={path}>
          <img
            src={src}
            className="h-24 md:h-48 lg:h-64 w-10/12 max-w-lg mx-auto transition duration-300 ease-out hover:scale-105"
          />
          <div className="group w-10/12 mx-auto font-bold mt-4 ">
           {name}
            <span className="block w-0 group-hover:w-full transition-all duration-300 h-0.5 bg-black"></span>
          </div>
        </Link>
  );
};

const Carousel : React.FC = () => {
  const settings = {
    className: "center",
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 3,
    swipeToSlide: true,
  };

  return (
    <div className="h-24 md:h-64 lg:h-64 w-full px-6 md:px-12">
      <Slider {...settings}>
      <ImageLinkComponent path = "/minjihouse" src= "./images/CoverImage/Minji-2.jpeg" name = "MIN-JI HOUSE"/>
      <ImageLinkComponent path = "/japandihouse" src= "./images/CoverImage/Japandi-5.jpeg" name = "JAPANDI HOUSE"/>
      <ImageLinkComponent path = "/minjihouse" src= "./images/CoverImage/Minji-3.jpeg" name = "MIN-JI HOUSE"/>
      <ImageLinkComponent path = "/japandihouse" src= "./images/CoverImage/Japandi-2.jpeg" name = "JAPANDI HOUSE"/>
      </Slider>
    </div>
  );
};

export default Carousel;
