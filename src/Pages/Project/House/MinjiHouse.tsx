import React, { useRef, useEffect } from "react";
import { Carousel } from "antd";
import { CarouselRef } from "antd/lib/carousel";
import CarouselComponent from "../../../Components/Carousel";
import { RightCircleOutlined, LeftCircleOutlined } from "@ant-design/icons";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  src: string;
}

const ImageComponent: React.FC<Props> = ({ src }) => {
  return (
    <div className="flex justify-center">
      <img
        src={src}
        className="lg:w-[1024px] lg:h-[768px] md:h-[400px] h-[300px] w-full"
      />
    </div>
  );
};

const MinjiHouse = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  const carouselRef = useRef<CarouselRef>(null);

  const handleNext = () => carouselRef.current?.next();

  const handlePrev = () => carouselRef.current?.prev();

  const textLeft = {
    hidden: { opacity: 0, x: -50 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
      },
    },
  };

  useEffect(() => {
    if (isInView) {
      mainControls.start("show");
    }
  }, [isInView]);

  let numbersArray = [];

  for (var i = 1; i <= 19; i++) {
    numbersArray.push(i);
  }

  console.log("numbersArray", numbersArray);

  return (
    <>
      <div className="font-bold text-6xl md:mt-32 mt-16 ml-16">
        MIN-JI House
      </div>
      <div className="text-3xl mt-2 ml-16">Suksawat 26 | 32.5 SQ.W</div>
      <div className="mt-20 text-md ml-16">
        <div className="">
          บ้านทาวน์โฮม 2 ชั้น ถูกทำการรีโนเวท ปรับปรุงใหม่ในสไตล์ มินิมอล-มูจิ
        </div>
        <div className="">
          เน้นโทนสี เรียบง่าย สบายตา และเพิ่มความชุ่มชื้นให้กับบ้าน
        </div>
        <div className="">
          ด้วยสวน Sky Light ข้างบ้าน และสวนหินสไตล์ Zen หน้าบ้าน
        </div>
        <div className="mt-4">Designers : Yok Teeranitayatarn</div>
        <div className="">Construction : H75</div>
      </div>

      <div className="md:px-16 px-4 mt-20">
        <Carousel ref={carouselRef} draggable dots={false}>
          {numbersArray.map((r: number, i: number) => (
            <ImageComponent
              key={i}
              src={`./images/MinjiHouse/Minji-${r}.jpeg`}
            />
          ))}
        </Carousel>
      </div>
      <div className="flex justify-center text-2xl text-gray-300 gap-6">
        <button className=" hover:text-gray-400" onClick={handlePrev}>
          <LeftCircleOutlined />
        </button>
        <button className=" hover:text-gray-400" onClick={handleNext}>
          <RightCircleOutlined />
        </button>
      </div>
      <motion.div
        className="mt-16 mb-6"
        animate={mainControls}
        variants={textLeft}
        ref={ref}
        initial="hidden"
      >
        <span className="text-2xl md:ml-16 ml-4">- -</span>
        <span className="text-2xl ml-2">Select Projects</span>
      </motion.div>

      <motion.div
        className="md:mb-16"
        animate={mainControls}
        variants={textLeft}
        ref={ref}
        initial="hidden"
      >
        <CarouselComponent />
      </motion.div>
    </>
  );
};

export default MinjiHouse;
