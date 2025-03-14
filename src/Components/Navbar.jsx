import { useState } from "react";
import { Menu, X } from "lucide-react";
import ContactForm from "../Components/UI/ContactForm";
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar({ onNavClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const menuItems = ["home", "about", "services", "skill", "work", "Contact"];

  const handleNavClick = (item) => {
    onNavClick(item);
    setIsOpen(false); // Close mobile menu on click
  };

  // WhatsApp Message Function
  const handleBuy = () => {
    const phoneNumber = "+923055970580"; // Replace with your WhatsApp number
    const message = encodeURIComponent(
      `Hello, I am interested in your services! Can you provide me with more details?`
    );
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
        <div className="max-w-[1175px] mx-auto px-6">
          <div className="flex justify-between items-center py-5">
            {/* Brand Name */}
            <div className="text-2xl font-bold text-teal-900">EhsanDev</div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-teal-900">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex space-x-8 text-teal-600 font-medium">
              {menuItems.map((item) => (
                <li key={item}>
                  <button onClick={() => onNavClick(item)} className="hover:text-teal-800 focus:text-black cursor-pointer">
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                </li>
              ))}
            </ul>

            {/* LET'S TALK Button */}
            <button
              className="hidden lg:block bg-gray-900 text-white font-semibold px-6 py-2.5 rounded-full hover:bg-teal-700 transition"
              onClick={() => setIsFormVisible(true)} // Open Contact Form
            >
              LET'S TALK
            </button>
          </div>
        </div>

        {/* Mobile Navigation (Collapsible) */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <ul className="flex flex-col items-center py-4 space-y-4 text-teal-600 font-medium">
              {menuItems.map((item) => (
                <li key={item}>
                  <button onClick={() => handleNavClick(item)} className="hover:text-teal-800">
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                </li>
              ))}
              {/* LET'S TALK Button in Mobile Menu */}
              <li>
                <button
                  className="bg-gray-900 text-white font-semibold px-6 py-2.5 rounded-full hover:bg-teal-700 transition"
                  onClick={() => setIsFormVisible(true)} // Open Contact Form
                >
                  LET'S TALK
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleBuy} // Redirect to WhatsApp
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
        >
          <FaWhatsapp size={28} />
        </button>
      </div>

      {/* Contact Form Popup (Same Page) */}
      {isFormVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
              onClick={() => setIsFormVisible(false)} // Close popup
            >
              <X size={24} />
            </button>
            <ContactForm />
          </div>
        </div>
      )}
    </>
  );
}
