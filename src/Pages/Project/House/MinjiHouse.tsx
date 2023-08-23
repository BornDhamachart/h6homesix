import React, { useRef } from "react";
import { Carousel } from "antd";
import { CarouselRef } from "antd/lib/carousel";
import CarouselComponent from "../../../Components/Carousel";
import { RightCircleOutlined, LeftCircleOutlined } from "@ant-design/icons";
import { motion, useInView, useAnimation } from "framer-motion";


interface Props {
  src: string;
}

const ImageComponent: React.FC<Props> = ({src}) => {
  return (<img src={src} className="lg:h-[750px] h-[400px] w-full"/>)
}

const MinjiHouse = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  const carouselRef = useRef<CarouselRef>(null);

  const handleNext = () => carouselRef.current?.next();

  const handlePrev = () => carouselRef.current?.prev();

  const textUp = {
    hidden: { opacity: 0, y: 25 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: 1.5,
      },
    },
  };

  return (
    <>
      <div className="font-bold text-6xl mt-16 ml-16">Minji House</div>
      <div className="text-3xl mt-2 ml-16">Suksawat | 24.62 SQ.M</div>
      <div className="text-md mt-2 ml-16">teststetttttttttttttttt</div>
      <div className="text-md mt-2 ml-16">teststetttttttttttttttt</div>
      <div className="text-md mt-2 ml-16">teststetttttttttttttttt</div>
      <div className="text-md mt-2 ml-16">teststetttttttttttttttt</div>
      <div className="text-md mt-2 ml-16">teststetttttttttttttttt</div>

      <div className="px-6 mt-12">
        <Carousel ref={carouselRef} draggable dots={false}>
          <ImageComponent src="./images/2-2-1024x7681.jpeg"/>
          <ImageComponent src="./images/2-2-1024x7681.jpeg"/>
          <ImageComponent src="./images/2-2-1024x7681.jpeg"/>
          <ImageComponent src="./images/2-2-1024x7681.jpeg"/>
        </Carousel>
      </div>
      <div className="flex justify-center text-2xl text-gray-300 gap-6">
        <button
        className=" hover:text-gray-400"
          onClick={handlePrev}
        >
         <LeftCircleOutlined />
        </button>
        <button
        className=" hover:text-gray-400"
          onClick={handleNext}
        >
          <RightCircleOutlined />
        </button>
      </div>
      <div className="font-bold text-3xl mt-12 mb-6 ml-16">Other projects</div>
      <motion.div
        className="mb-16"
        animate={mainControls}
        variants={textUp}
        ref={ref}
        initial="hidden"
      >
        <CarouselComponent />
      </motion.div>
    </>
  );
};

export default MinjiHouse;
