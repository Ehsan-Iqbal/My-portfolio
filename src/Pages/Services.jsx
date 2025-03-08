import {
  FaCode,
  FaShieldAlt,
  FaCamera,
  FaPaintBrush,
  FaMobileAlt,
  FaSearch,
  FaCubes,
  FaPencilRuler,
} from "react-icons/fa";

const services = [
  { icon: <FaCubes />, title: "Web Design" },
  { icon: <FaSearch />, title: "SEO Specialist" },
  { icon: <FaShieldAlt />, title: "Security Expert" },
  { icon: <FaCode />, title: "Web Development" },
  { icon: <FaPencilRuler />, title: "UI/UX Design" },
  { icon: <FaCamera />, title: "Photography" },
  { icon: <FaMobileAlt />, title: "IOS App Development" },
  { icon: <FaPaintBrush />, title: "Graphic Designer" },
];

function Services() {
  return (
    <section className="py-16 mt-20 bg-white">
      <div className="text-center">
        <h2 className="text-xl font-bold text-black">Services</h2>
        <h3 className="text-3xl font-bold text-teal-700 mt-2">
          What Do I Offer
        </h3>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        I specialize in modern, responsive frontend development using React.js, JavaScript, and Tailwind CSS to create high-performance web applications.
         
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 px-6 md:px-28">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#f1f8f8] p-8 border border-gray-300 rounded-md flex flex-col items-center text-center transition transform hover:scale-105"
          >
            <div className="bg-teal-700 text-white p-4 rounded-full text-3xl">
              {service.icon}
            </div>
            <h4 className="text-lg font-bold text-teal-700 mt-4">
              {service.title}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
