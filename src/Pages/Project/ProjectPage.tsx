import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectPage = () => {
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

  return (
    <>
      <motion.div
        className="mt-16"
        animate="show"
        variants={textLeft}
        initial="hidden"
      >
        <span className="text-2xl ml-16">- -</span>
        <span className="text-2xl ml-2">Select Projects</span>
      </motion.div>

      <div className="grid grid-cols-3 gap-4 mb-16 mt-6">
        <Link to="/minjihouse" className="cursor-pointer">
          <img
            src="./images/CoverImage/Minji-2.jpeg"
            className="h-64 w-10/12 mx-auto transition duration-300 ease-out hover:scale-105"
          />
          <div className="group w-10/12 mx-auto font-bold mt-4 ">
            MIN-JI HOUSE
            <span className="block w-0 group-hover:w-full transition-all duration-300 h-0.5 bg-black"></span>
          </div>
        </Link>
        <Link to="/japandihouse" className="cursor-pointer">
          <img
            src="./images/CoverImage/Japandi-5.jpeg"
            className="h-64 w-10/12 mx-auto transition duration-300 ease-out hover:scale-105"
          />
          <div className="group w-10/12 mx-auto font-bold mt-4 ">
            JAPANDI HOUSE
            <span className="block w-0 group-hover:w-full transition-all duration-300 h-0.5 bg-black"></span>
          </div>
        </Link>
      </div>
      <div className="w-full h-32"></div>
    </>
  );
};

export default ProjectPage;
