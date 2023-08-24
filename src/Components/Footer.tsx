import {
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <div className="bg-black h-52 flex justify-between items-center">
      <div className="text-4xl font-bold text-white p-12">
        H6 HOMESIX STUDIO
      </div>
      <div>
        <div className="flex justify-center text-white text-4xl px-12 gap-8">
          <a href="https://www.facebook.com/H6homesix" target="_blank">
            <FacebookOutlined />
          </a>
          <a
            href="https://instagram.com/h6.homesix?utm_medium=copy_link"
            target="_blank"
          >
            <InstagramOutlined />
          </a>
          <a
            href="https://www.youtube.com/channel/UCjbeLo_J4_2WcS_w_MwnOAQ"
            target="_blank"
          >
            <YoutubeOutlined />
          </a>
        </div>
        <div className="flex justify-center items-center text-white text-xl px-12 mt-6 gap-2">
          <PhoneOutlined />
          <div>
            <div>+6681-642-3333 (YOK)</div>
            <div>+6685-115-1974 (SUN)</div>
          </div>
        </div>
        <div className="flex justify-center items-center text-white text-xl px-12 mt-6 gap-2">
          <MailOutlined />
          <div>h6homesix.studio@gmail.com</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
