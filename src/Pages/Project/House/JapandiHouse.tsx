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
  return <img src={src} className="lg:h-[750px] h-[400px] w-full" />;
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

  for (var i = 1; i <= 18; i++) {
    numbersArray.push(i);
  }

  console.log("numbersArray", numbersArray);

  return (
    <>
      <div className="font-bold text-6xl mt-32 ml-16">JAPANDI House</div>
      <div className="text-3xl mt-2 ml-16">Suksawat 30 | 35.7 SQ.W</div>
      <div className="mt-20 text-md ml-16">
        <div className="">
          บ้านเดี่ยว 2 ชั้น ทำการรีโนเวท ตกแต่งใหม่ ในสไตล์เจแปนดิ (JAPANDI)
          เป็นส่วนผสมระหว่าง มูจิ-สแกนดิเนเวียน
        </div>
        <div className="">
          เน้นความเรียบง่าย โปร่ง สบาย ใช้เฟอร์นิเจอร์สีเข้ม
          ของตกแต่งจะเน้นใช้สีดำ
        </div>
        <div className="">
          ประดับด้วยสวนหินรอบบ้าน เน้นการดูแลรักษาง่าย
          และเข้ากับสไตล์ญี่ปุ่นของบ้าน
        </div>
        <div className="mt-4">Designers : Yok Teeranitayatarn</div>
        <div className="">Construction : Private construction</div>
      </div>

      <div className="px-16 mt-20">
        <Carousel ref={carouselRef} draggable dots={false}>
          {numbersArray.map((r: number, i: number) => (
            <ImageComponent
              key={i}
              src={`./images/JapandiHouse/Japandi-${r}.jpeg`}
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
        <span className="text-2xl ml-16">- -</span>
        <span className="text-2xl ml-2">Select Projects</span>
      </motion.div>

      <motion.div
        className="mb-16"
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
