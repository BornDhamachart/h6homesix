import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200 opacity-90">
      <div className="w-full flex flex-wrap items-center justify-between p-4">
        <Link to="/" className="flex items-center">
          <img
            src="./images/logo.png"
            className="h-16 mr-3"
            alt="Homesix logo"
          />
          <span className="text-center text-4xl font-semibold">homesix</span>
        </Link>
        <div className="flex md:order-2">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc1fPIBxC5Ui3hnFzH1DqGqVAwndtw-KHNl1BCYXM-c55XZyg/viewform"
            target="_blank"
          >
            <button
              type="button"
              className="text-white bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0"
            >
              Contact us
            </button>
          </a>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-2xl rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <MenuOutlined />
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            !isOpen && "hidden"
          }`}
        >
          <div className="flex flex-col p-4 md:p-0 mt-4 font-medium md:text-xl border border-gray-100 rounded-lg bg-gray-50 md:flex-row lg:space-x-24 md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            <Link
              to="/"
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
            >
              Home
            </Link>
            <Link
              to="/projects"
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
            >
              Projects
            </Link>
            <Link
              to="/about"
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
            >
              About
            </Link>
            <Link
              to="/services"
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
            >
              Services
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
