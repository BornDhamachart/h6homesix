import { motion } from "framer-motion";

const AboutPage: React.FC = () => {
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
  return (
    <>
      <motion.div variants={textUp} initial="hidden" animate="show">
        <div className="w-full text-center mt-16 px-8">
          <div className="text-4xl font-bold mb-4">H6 Homesix Studio</div>
          <div>กลุ่มเพื่อน ตั้งแต่สมัยประถม-มัธยม ที่มีอุดมคติเดียวกัน คือ</div>
          <div className="font-bold">
            “อยากให้ทุกคนมีบ้านที่สวยและน่าอยู่ ในงบประมาณที่ลูกค้าจับต้องได้”
          </div>
          <div className="mt-2">
            จึงเกิดเป็นสตูดิโอรวมตัวของเหล่านักออกแบบ
            ที่มีความถนัดในด้านการออกแบบสถาปัตยกรรม ทั้งด้าน Interior และ
            Landscape
          </div>
        </div>
        <div className="w-full text-center mt-16 font-bold text-3xl">
          Our Team
        </div>
        <div className="mb-16 mt-6 flex justify-center">
          <img src="./images/team.jpeg" className="" />
        </div>
      </motion.div>
    </>
  );
};

export default AboutPage;
