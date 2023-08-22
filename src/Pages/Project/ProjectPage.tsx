import React from "react";
import { Carousel } from "antd";
import CarouselComponent from "../../Components/Carousel";

const ProjectPage = () => {
  return (
    <>
      <div className="font-bold text-6xl mt-16 ml-16">Minji House</div>
      <div className="text-3xl mt-2 ml-16">Suksawat | 24.62 SQ.M</div>
      <div className="text-md mt-2 ml-16">teststetttttttttttttttt</div>
      <div className="text-md mt-2 ml-16">teststetttttttttttttttt</div>
      <div className="text-md mt-2 ml-16">teststetttttttttttttttt</div>
      <div className="text-md mt-2 ml-16">teststetttttttttttttttt</div>
      <div className="text-md mt-2 ml-16">teststetttttttttttttttt</div>

      <div className="w-full px-16">
        <Carousel>
          <img
            src="./images/2-2-1024x768.jpeg"
            className="lg:w-4/5 lg:h-[750px] h-[400px] w-full"
          />
          <img
            src="./images/2-2-1024x768.jpeg"
            className="lg:w-4/5 lg:h-[750px] h-[400px] w-full"
          />
          <img
            src="./images/2-2-1024x768.jpeg"
            className="lg:w-4/5 lg:h-[750px] h-[400px] w-full"
          />
        </Carousel>
      </div>
      <div className="font-bold text-3xl mt-12 mb-6 ml-16">Other projects</div>
      <div className="mb-16">
        <CarouselComponent />
      </div>
    </>
  );
};

export default ProjectPage;
