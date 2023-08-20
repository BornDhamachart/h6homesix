import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const HomePage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("show");
    }
  }, [isInView]);

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

  const gallery = {
    hidden: { opacity: 0, x: -200 },
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
    hidden: { opacity: 0, y: 75 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: 1.5,
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
          {headName.split("").map((letter: string) => (
            <motion.span className="text-2xl" variants={letterAnimation}>
              {letter}
            </motion.span>
          ))}
        </motion.div>
        <div className="mt-12">
          <motion.div className="text-6xl py-4" variants={item}>
            อยากให้ทุกคนมีบ้านที่สวยและน่าอยู่
          </motion.div>
          <motion.div className="text-6xl py-4" variants={item}>
            ในงบประมาณที่จับต้องได้
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="flex gap-4 ml-16 mt-8 mb-8"
        initial="hidden"
        animate="show"
        variants={item}
      >
        <div className="text-lg py-4 underline">ผลงาน</div>
        <div className="text-lg py-4 underline">บริการ</div>
      </motion.div>

      <motion.div
        className="w-full flex md:justify-end px-6"
        variants={image}
        initial="hidden"
        animate="show"
      >
        <img
          src="./images/2-2-1024x768.jpeg"
          className="lg:w-4/5 lg:h-[750px] h-[400px] w-full"
          // layoutId='main-image-1'
        />
      </motion.div>

      <motion.div
        className="w-full flex lg:justify-end p-6 mt-8"
        variants={textUp}
        initial="hidden"
        animate={mainControls}
        ref={ref}
      >
        <div className="lg:w-4/5">
          <div className="text-4xl py-2">ค่าบริการออกแบบ</div>
          <div>
            <span className="text-xl py-2 mr-2">
              ออกแบบภายใน INTERIOR DESIGN
            </span>
            <span className="text-xl py-2 text-amber-400">
              500 บาทต่อตารางเมตร
            </span>
          </div>
          <div className="text-xl py-2">
            <span className="text-xl py-2 mr-2">
              ออกแบบภายนอก LANDSCAPE DESIGN
            </span>
            <span className="text-xl py-2 text-green-800">
              200 บาทต่อตารางเมตร
            </span>
          </div>
        </div>
      </motion.div>

      <div className="w-full flex justify-center mb-6">
        <motion.button
          className="w-2/3 text-center bg-gray-200 rounded-xl mt-6 py-2 text-xl"
          initial="hidden"
          animate={mainControls}
          variants={textUp}
          ref={ref}
        >
          สนใจรีโนเวทบ้าน
        </motion.button>
      </div>

      <div className="bg-gray-100 h-96 my-10"></div>

      <div className="bg-black h-48"></div>
    </>
  );
};

export default HomePage;
