import React from "react";
import { motion } from "framer-motion";

interface Props {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const Loader: React.FC<Props> = ({ setLoading }) => {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 200 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: 1.6,
      },
    },
    exit: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      },
    },
  };

  const itemMain = {
    hidden: { opacity: 0, y: 200 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: 1.6,
      },
    },
    exit: {
        opacity: 1,
        y: 100,
        transition: {
          ease: "easeInOut",
          duration: 0.8,
        },
      },
  };

  return (
      <motion.div
        className="relative w-screen h-screen"
        initial="hidden"
        animate="show"
        exit="exit"
        variants={container}
        onAnimationComplete={() => setLoading(false)}
      >
        <motion.div
          className="absolute w-[200px] left-1 bottom-1"
          variants={item}
        >
          <img src="./images/image-1.jpg" className="w-full" />
        </motion.div>

        <motion.div
          className="absolute h-screen w-screen flex items-center justify-center left-0 top-0 border border-gray-300"
          variants={itemMain}
          layoutId="main-image-1"
        >
          <motion.img src="./images/image-2.jpg" className="w-[400px]" />
        </motion.div>

        <motion.div
          className="absolute w-[200px] right-1 top-1"
          variants={item}
        >
          <img src="./images/image-3.jpg" className="w-full" />
        </motion.div>

        <motion.div
          className="absolute max-w-[400px] w-2/5 right-1.5 bottom-1"
          variants={item}
        >
          <img src="./images/image-4.jpg" className="w-full" />
        </motion.div>

        <motion.div className="absolute w-[280px] left-1 top-1" variants={item}>
          <img src="./images/image-5.jpg" className="w-full" />
        </motion.div>
      </motion.div>
  );
};

export default Loader;
