import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import CarouselComponent from "../../Components/Carousel";
import { Carousel } from "antd";
import { ForwardOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const HomePage = () => {
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: false });
  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: false });
  const mainControls1 = useAnimation();
  const mainControls2 = useAnimation();

  useEffect(() => {
    if (isInView1) {
      mainControls1.start("show");
      console.log("Inview1");
    }
  }, [isInView1]);

  useEffect(() => {
    if (isInView2) {
      mainControls2.start("show");
      console.log("Inview2");
    }
  }, [isInView2]);

  const container = {
    show: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 1.6,
      },
    },
  };

  const letterAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 1,
      },
    },
  };

  const image = {
    hidden: { opacity: 0, x: 200 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeInOut",
        duration: 1.5,
      },
    },
  };

  const textUp = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: 1,
      },
    },
  };

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

  const headName = "H6 Homesix studio";

  return (
    <>
      <motion.div
        className="ml-16 mt-16"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <motion.div variants={container}>
          {headName.split("").map((letter: string, idx: number) => (
            <motion.span
              className="text-2xl"
              variants={letterAnimation}
              key={idx}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
        <div className="mt-12">
          <motion.div className="text-7xl py-4" variants={item}>
            รีโนเวทบ้านใหม่
          </motion.div>
          <motion.div className="text-7xl py-4 ml-20" variants={item}>
            งบไม่บานปลาย
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="flex gap-8 ml-16 mt-8 mb-8"
        initial="hidden"
        animate="show"
        variants={item}
      >
        <Link to="/projects">
          <div className="group text-xl cursor-pointer">
            Projects
            <span className="block group-hover:w-0 w-[72px] transition-all duration-300 h-0.5 bg-black"></span>
          </div>
        </Link>
        <Link to="/services">
          <div className="group text-xl cursor-pointer">
            Services
            <span className="block group-hover:w-0 w-[72px] transition-all duration-300 h-0.5 bg-black"></span>
          </div>
        </Link>
      </motion.div>

      <motion.div
        className="w-full flex md:justify-end px-6"
        variants={image}
        initial="hidden"
        animate="show"
      >
        <div className="w-4/5">
          <Carousel effect="fade" autoplay={true} dots={false}>
            <img
              src="./images/CoverImage/Minji-2.jpeg"
              className="lg:w-4/5 lg:h-[750px] h-[400px] w-full transition duration-300 ease-out hover:scale-105"
            />
            <img
              src="./images/CoverImage/Minji-3.jpeg"
              className="lg:w-4/5 lg:h-[750px] h-[400px] w-full transition duration-300 ease-out hover:scale-105"
            />
            <img
              src="./images/CoverImage/Minji-6.jpeg"
              className="lg:w-4/5 lg:h-[750px] h-[400px] w-full transition duration-300 ease-out hover:scale-105"
            />
            <img
              src="./images/CoverImage/Japandi-2.jpeg"
              className="lg:w-4/5 lg:h-[750px] h-[400px] w-full transition duration-300 ease-out hover:scale-105"
            />
            <img
              src="./images/CoverImage/Japandi-4.jpeg"
              className="lg:w-4/5 lg:h-[750px] h-[400px] w-full transition duration-300 ease-out hover:scale-105"
            />
            <img
              src="./images/CoverImage/Japandi-5.jpeg"
              className="lg:w-4/5 lg:h-[750px] h-[400px] w-full transition duration-300 ease-out hover:scale-105"
            />
          </Carousel>
        </div>
      </motion.div>

      <motion.div
        className="w-full flex lg:justify-end p-6 mt-8"
        animate={mainControls1}
        variants={textUp}
        ref={ref1}
        initial="hidden"
      >
        <div className="lg:w-4/5">
          <div className="mb-4">
            <div className="text-4xl py-2">
              เราอยากให้ทุกคนมีบ้านที่สวยและน่าอยู่
            </div>
            <div className="text-4xl py-2">ในงบประมาณที่จับต้องได้</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="w-full flex justify-center mb-6"
        animate={mainControls1}
        variants={textUp}
        ref={ref1}
        initial="hidden"
      >
        <a
          className="block w-2/3 text-center bg-gray-200 rounded-xl mt-6 py-2 text-xl cursor-pointer hover:scale-105 transition duration-300"
          href="https://docs.google.com/forms/d/e/1FAIpQLSc1fPIBxC5Ui3hnFzH1DqGqVAwndtw-KHNl1BCYXM-c55XZyg/viewform"
          target="_blank"
        >
          สนใจรีโนเวทบ้าน
        </a>
      </motion.div>

      <motion.div
        className="w-full flex justify-center my-12 gap-10 items-center"
        animate={mainControls1}
        variants={textUp}
        ref={ref1}
        initial="hidden"
      >
        <img src="./images/before.jpeg" className="w-1/3" />
        <div className="text-4xl text-gray-300">
          <ForwardOutlined />
        </div>
        <img src="./images/after.jpeg" className="w-1/3" />
      </motion.div>

      <motion.div
        className="mt-16 mb-6"
        animate={mainControls2}
        variants={textLeft}
        ref={ref2}
        initial="hidden"
      >
        <span className="text-2xl ml-16">- -</span>
        <span className="text-2xl ml-2">Select Projects</span>
      </motion.div>

      <motion.div
        className="mb-16"
        animate={mainControls2}
        variants={textLeft}
        ref={ref2}
        initial="hidden"
      >
        <CarouselComponent />
      </motion.div>
    </>
  );
};

export default HomePage;
