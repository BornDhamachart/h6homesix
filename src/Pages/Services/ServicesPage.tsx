import { Collapse } from "antd";
import type { CollapseProps } from "antd";
import { Timeline } from "antd";
import { motion } from "framer-motion";

const ServicesPage: React.FC = () => {
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "อยากเริ่มต้นรีโนเวทบ้านต้องทำอย่างไร",
      children: (
        <Timeline
          className="pt-10"
          items={[
            {
              children:
                "ลูกค้า ส่งข้อมูลเบื้องต้นเพื่อให้ทางทีม H6 ประเมินค่าบริการออกแบบและค่าก่อสร้างให้เบื้องต้นได้ที่ปุ่ม “Contact us” ด้านบน",
              color: "gray",
            },
            {
              children:
                "ทีม H6 ติดต่อกลับเพื่อคุยรายละเอียด และนัดวันเข้าสำรวจ",
              color: "gray",
            },
            {
              children:
                "ทีม H6 เข้าสำรวจหน้างานจริง เพื่อประเมินจุดต่างๆ พร้อมวัดระยะที่สำคัญ",
              color: "gray",
            },
            {
              children: "ทีม H6 เสนอราคา และนัดวันทำสัญญากับลูกค้า",
              color: "gray",
            },
            {
              children:
                "ทีม H6 เริ่มกระบวนการออกแบบหลังจากทำสัญญากับลูกค้าเรียบร้อย",
              color: "gray",
            },
          ]}
        />
      ),
    },
    {
      key: "2",
      label: "ระยะเวลาในการออกแบบ และก่อสร้าง นานแค่ไหน",
      children: (
        <p>
          ระยะเวลา จะขึ้นอยู่กับความซับซ้อนของแต่ละงาน โดยทั่วไป
          กระบวนการออกแบบจะใช้เวลา 1-2 เดือน โดยประมาณ
          และกระบวนการก่อสร้างจะใช้เวลา 3-5 เดือน โดยประมาณ
        </p>
      ),
    },
    {
      key: "3",
      label: "กระบวนการทำงานมีอะไรบ้าง",
      children: (
        <>
          <p className="font-bold mt-6">กระบวนการออกแบบ – ก่อสร้างแล้วเสร็จ</p>
          <Timeline
            className="pt-10"
            items={[
              {
                children: "สำรวจพื้นที่",
                color: "gray",
              },
              {
                children: "ทำการออกแบบ",
                color: "gray",
              },
              {
                children: "ทำแบบรายละเอียดประกอบการก่อสร้าง",
                color: "gray",
              },
              {
                children: "เริ่มกระบวนการก่อสร้าง",
                color: "gray",
              },
              {
                children: "ติดตามการก่อสร้าง",
                color: "gray",
              },
              {
                children: "จัดซื้อเฟอร์นิเจอร์-ของตกแต่ง",
                color: "gray",
              },
            ]}
          />
        </>
      ),
    },
  ];

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
        <div className="mt-16 md:ml-16 ml-8">
          <div className="text-4xl mb-2">ค่าบริการออกแบบ</div>
          <div>
            <span className="text-lg md:text-xl py-2 mr-2">
              ออกแบบภายใน INTERIOR DESIGN
            </span>
            <span className="text-lg md:text-xl py-2 text-amber-400 block md:inline">
              500 บาทต่อตารางเมตร
            </span>
          </div>
          <div className="text-xl py-2">
            <span className="text-lg md:text-xl py-2 mr-2">
              ออกแบบภายนอก LANDSCAPE DESIGN
            </span>
            <span className="text-lg md:text-xl py-2 text-green-800 block md:inline">
              200 บาทต่อตารางเมตร
            </span>
          </div>
        </div>

        <div className="ml-8 md:ml-16 mt-8 my-16 md:w-1/2 w-4/5 pb-28">
          <div className="text-4xl mb-6">FAQs</div>
          <Collapse items={items} defaultActiveKey={["1"]} />
        </div>
      </motion.div>
    </>
  );
};

export default ServicesPage;
