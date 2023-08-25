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

const JapandiHouse: React.FC = () => {
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
      <div className="mt-32 mx-16">
        <div className="font-bold text-6xl">JAPANDI House</div>
        <div className="text-3xl mt-2">Suksawat 30 | 35.7 SQ.W</div>
        <div className="mt-20 text-md">
          <div>
            บ้านเดี่ยว 2 ชั้น ทำการรีโนเวท ตกแต่งใหม่ ในสไตล์เจแปนดิ (JAPANDI)
            เป็นส่วนผสมระหว่าง มูจิ-สแกนดิเนเวียน
          </div>
          <div>
            เน้นความเรียบง่าย โปร่ง สบาย ใช้เฟอร์นิเจอร์สีเข้ม
            ของตกแต่งจะเน้นใช้สีดำ
          </div>
          <div>
            ประดับด้วยสวนหินรอบบ้าน เน้นการดูแลรักษาง่าย
            และเข้ากับสไตล์ญี่ปุ่นของบ้าน
          </div>
          <div className="mt-4">Designers : Yok Teeranitayatarn</div>
          <div>Construction : Private construction</div>
        </div>
      </div>
      <div className="md:px-16 px-4 mt-20">
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
        <span className="text-2xl md:ml-16 ml-4">- -</span>

        <span className="text-2xl ml-2">Select Projects</span>
      </motion.div>

      <motion.div
        className="mb-24"
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

export default JapandiHouse;
