import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-black h-48 flex justify-between items-center">
      <div className="text-4xl font-bold text-white p-12">
        H6 HOMESIX STUDIO
      </div>
      <div className="flex justify evenly text-white text-4xl gap-4 px-12">
        <a href="https://www.facebook.com/H6homesix" target="_blank">
          <AiOutlineFacebook />
        </a>
        <a
          href="https://instagram.com/h6.homesix?utm_medium=copy_link"
          target="_blank"
        >
          <AiOutlineInstagram />
        </a>
        <a
          href="https://www.youtube.com/channel/UCjbeLo_J4_2WcS_w_MwnOAQ"
          target="_blank"
        >
          <AiOutlineYoutube />
        </a>
      </div>
    </div>
  );
};

export default Footer;
