import { motion } from "framer-motion";

const HomePage = () => {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.4,
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
    hidden: { opacity: 0, x: -100 },
    show: {
      opacity: 1,
      x: 100,
      transition: {
        ease: "easeInOut",
        duration: 1,
      },
    },
  };

  const headName = "TEST";

  return (
    <>
      <motion.div
        className="w-full mx-16 my-10"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <motion.div variants={container}>
          {headName.split("").map((letter: string) => (
            <motion.span
              className="font-bold text-6xl"
              variants={letterAnimation}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
        <motion.div className="font-bold text-4xl" variants={item}>
          test1
        </motion.div>
        <motion.div className="font-bold text-4xl" variants={item}>
          test2
        </motion.div>
        <motion.div className="font-bold text-4xl" variants={item}>
          test3
        </motion.div>
      </motion.div>

      <motion.div
        className="w-screen h-screen"
        variants={image}
        initial="hidden"
        animate="show"
      >
        <img
          src="./images/image-2.jpg"
          className="w-3/4 mx-auto transition-transform hover:scale-105"
          // layoutId='main-image-1'
        />
      </motion.div>
    </>
  );
};

export default HomePage;
