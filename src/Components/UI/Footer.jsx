import React from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-[#0D2D2D] text-white pt-12">
      <div className="container mx-auto px-6 md:px-20 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-start border border-teal-900 p-6">
            <h2 className="text-4xl font-bold text-teal-400">EhsanDev</h2>
            <p className="mt-3 text-gray-300 max-w-xs">
              I've been working as a web developer for past eight months, and
              experience in multiple frameworks.
            </p>
          </div>

          <div className="px-8">
            <h3 className="text-2xl font-bold text-teal-40">Contact Details</h3>
            <p className="mt-3 flex items-center py-1.5">📞 03055970580</p>
            <p className="mt-1 flex items-center py-1.5">
              ✉️
              <a
                href="mailto:ehsaniqbal7071@gmail.com"
                className="text-white hover:underline ml-1"
              >
                ehsaniqbal7071@gmail.com
              </a>
            </p>
            <p className="mt-1 flex items-center py-1.5">📍 Lahore, Punjab</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-teal-400">Newsletter</h3>
            <div className="flex mt-3 bg-[#1c3a3b] rounded-full overflow-hidden">
              <input
                type="email"
                placeholder="Enter Email Address:"
                className="w-full px-4 py-3 bg-transparent text-gray-300 outline-none"
              />
              <button className="bg-teal-600 px-4 py-2 flex items-center justify-center">
                <IoIosSend className="text-white" size={20} />
              </button>
            </div>

            <div className="flex space-x-4 mt-6">
              <FaFacebook className="cursor-pointer text-gray-400 hover:text-teal-400 border border-gray-400 rounded-full p-1 w-8 h-8" />
              <a
                href="https://www.linkedin.com/in/ehsan-iqbal-549b112b7"
                target="_blank"
              >
                <FaLinkedin className="cursor-pointer text-gray-400 hover:text-teal-400 border border-gray-400 rounded-full p-1 w-8 h-8" />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
              >
                <FaGithub className="cursor-pointer text-gray-400 hover:text-teal-400 border border-gray-400 rounded-full p-1 w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#489c9c] mt-10 py-4 text-center text-black text-md">
      © 2024 - 2025 <span className="font-semibold hover:underline cursor-pointer">Ehsan Iqbal</span> Expert in React.js & modern web development.
      </div>
    </footer>
  );
};

export default Footer;
