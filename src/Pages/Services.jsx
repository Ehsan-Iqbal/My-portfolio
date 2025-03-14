import { useState } from "react";
import {
  FaCode,
  FaCamera,
  FaPaintBrush,
  FaCubes,
  FaPencilRuler,
  FaPlus,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

const Services = () => {
  // State to store the list of services
  const [services, setServices] = useState([
    { icon: <FaCubes />, title: "Web Design" },
    { icon: <FaCode />, title: "Web Development" },
    { icon: <FaPencilRuler />, title: "UI/UX Design" },
    { icon: <FaPaintBrush />, title: "Graphic Design" },
  ]);

  // State to control the modal visibility (open/close)
  const [isModalOpen, setIsModalOpen] = useState(false);

  // store the input value for adding or editing a service
  const [newService, setNewService] = useState("");

  const [editIndex, setEditIndex] = useState(null);

  // Function to open the modal for adding or editing a service
  const handleOpenModal = (index = null) => {
    setEditIndex(index); 
    setNewService(index !== null ? services[index].title : ""); 
    setIsModalOpen(true); 
  };

  // Function to close the modal and reset input fields
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setNewService("");
    setEditIndex(null);
  };

  // Function to add a new service or update an existing one
  const handleSaveService = () => {
    if (newService.trim()) {
      if (editIndex !== null) {
        // If in edit mode, update the existing service
        const updatedServices = [...services];
        updatedServices[editIndex].title = newService;
        setServices(updatedServices);
      } else {
        // If in add mode, create a new service with a default icon
        setServices([...services, { icon: <FaCubes />, title: newService }]);
      }
    }
    handleCloseModal(); 
  };

  // Function to delete a service from the list
  const handleDeleteService = (index) => {
    setServices(services.filter((_, i) => i !== index)); 
  };

  return (
    <section className="py-16 mt-24 bg-white">
      <div className="text-center">
        <h2 className="text-xl font-bold text-black">Services</h2>
        <h3 className="text-3xl font-bold text-teal-700 mt-2">What Do I Offer</h3>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          I specialize in modern, responsive frontend development using React.js, JavaScript, and Tailwind CSS to create high-performance web applications.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 px-6 md:px-28">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative shadow bg-[#f1f8f8] p-8 border border-gray-300 rounded-md flex flex-col items-center text-center transition transform hover:scale-105 group"
          >
            <div className="bg-teal-700 text-white p-4 rounded-full text-3xl">
              {service.icon}
            </div>
            <h4 className="text-lg font-bold text-teal-700 mt-4">
              {service.title}
            </h4>

            {/* Edit & Delete Icons on Hover */}
            <div className="absolute top-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button onClick={() => handleOpenModal(index)} className="text-blue-600 p-1 rounded-full shadow  cursor-pointer">
                <FaEdit size={16} />
              </button>
              <button onClick={() => handleDeleteService(index)} className="text-red-600 p-1 rounded-full shadow  cursor-pointer">
                <FaTrash size={16} />
              </button>
            </div>
          </div>
        ))}
       
      </div>

      {/* Modal for Adding/Editing Service */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
            <h2 className="text-lg font-bold text-gray-700 mb-4">
              {editIndex !== null ? "Edit Service" : "Add Service"}
            </h2>
            <input
              type="text"
              value={newService}
              onChange={(e) => setNewService(e.target.value)}
              placeholder="Enter service name"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <div className="flex justify-between mt-4">
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveService}
                className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700"
              >
                {editIndex !== null ? "Update" : "Add"}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
