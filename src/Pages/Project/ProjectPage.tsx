import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface Props {
  path: string;
  src: string;
  name: string;
}

const ImageProjectComponent: React.FC<Props> = ({ path, src, name }) => {
  return (
    <Link to={path}>
      <img
        src={src}
        className="h-64 w-10/12 max-w-lg mx-auto transition duration-300 ease-out hover:scale-105"
      />
      <div className="group w-10/12 mx-auto font-bold mt-4 ">
        {name}
        <span className="block w-0 group-hover:w-full transition-all duration-300 h-0.5 bg-black"></span>
      </div>
    </Link>
  );
};

const ProjectPage: React.FC = () => {
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
        <span className="text-2xl ml-8 md:ml-16">- -</span>
        <span className="text-2xl ml-2">Select Projects</span>
      </motion.div>

      <div className="grid md:grid-cols-3 grid-cols-1 md:gap-4 mb-16 mt-6">
        <ImageProjectComponent
          path="minjihouse"
          src="./images/CoverImage/Minji-2.jpeg"
          name="MIN-JI HOUSE"
        />
        <ImageProjectComponent
          path="japandihouse"
          src="./images/CoverImage/Japandi-5.jpeg"
          name="JAPANDI HOUSE"
        />
      </div>
      <div className="w-full h-32"></div>
    </>
  );
};

export default ProjectPage;
