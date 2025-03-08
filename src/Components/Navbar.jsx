import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center px-[40px] py-5">
          <div className="text-2xl font-bold text-teal-900 flex items-center">
            <span className="mr-1">EhsanDev</span>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-teal-900 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          <ul className="hidden lg:flex space-x-10 text-teal-600 font-medium">
            <li>
              <Link to="/" className="hover:text-teal-800 focus:text-black">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-teal-800 focus:text-black"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-teal-800 focus:text-black"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/skill"
                className="hover:text-teal-800 focus:text-black"
              >
                Skill
              </Link>
            </li>
            <li>
              <Link to="/work" className="hover:text-teal-800 focus:text-black">
                Work
              </Link>
            </li>
            <li>
              <Link
                to="/testimonial"
                className="hover:text-teal-800 focus:text-black"
              >
                Contact
              </Link>
            </li>
          </ul>

          <button className="hidden lg:block bg-gray-900 text-white font-semibold px-8 py-2.5 rounded-full hover:bg-teal-700 transition cursor-pointer">
            LETS TALK
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col items-center py-4 space-y-4 text-teal-600 font-medium">
            <li>
              <Link
                to="/"
                className="hover:text-teal-800"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-teal-800"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-teal-800"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/skill"
                className="hover:text-teal-800"
                onClick={() => setIsOpen(false)}
              >
                Skill
              </Link>
            </li>
            <li>
              <Link
                to="/work"
                className="hover:text-teal-800"
                onClick={() => setIsOpen(false)}
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className="hover:text-teal-800"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/testimonial"
                className="hover:text-teal-800"
                onClick={() => setIsOpen(false)}
              >
                Testimonial
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
