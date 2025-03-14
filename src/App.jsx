import { useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Skill from "./Pages/Skill";
import Work from "./Pages/Work";
import Contact from "./Pages/Contact";
import ContactForm from "./Components/UI/ContactForm";
// import { FaWhatsapp } from "react-icons/fa";
// import { X } from "lucide-react";
import "./index.css";

export default function App() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Function for smooth scrolling
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar onNavClick={scrollToSection} />

      {/* Main Content */}
      <div className="flex-grow">
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="services"><Services /></section>
        <section id="skill"><Skill /></section>
        <section id="work"><Work /></section>
        <section id="Contact"><Contact /></section>
      </div>

      {/* WhatsApp Floating Button */}
      {/* <div className="fixed bottom-20 right-6 z-50">
        <button
          onClick={() => setIsFormVisible(!isFormVisible)}
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
        >
          {isFormVisible ? <X size={24} /> : <FaWhatsapp size={24} />}
        </button>
      </div> */}

      {/* Contact Form Popup */}
      {isFormVisible && (
        <div className="fixed bottom-12 right-20 w-[50%] max-w-sm bg-white p-4 shadow-2xl rounded-lg transition-transform duration-300">
          <ContactForm />
        </div>
      )}

    </div>
  );
}
