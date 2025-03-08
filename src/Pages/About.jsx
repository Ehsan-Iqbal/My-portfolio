import { useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import about from "../assets/images/ppppp.jpeg";

const statsData = [
  { value: "4+", label: "Years Experience" },
  { value: "150+", label: "Projects Done" },
  { value: "75+", label: "Happy Clients" },
  { value: "22+", label: "Get Awards" },
];

export default function About() {
  const [hobbies, setHobbies] = useState([
    "Football",
    "Cybersecurity",
    "Cooking",
    "Music",
    "Cricket",
    "Graphic Design",
    "Photography",
    "DevOps",
    "WP Optimization",
    "Blogging",
    "Coding",
    "Gaming",
    "UX Research",
    "Project Manage",
    "Writing",
    "Reading",
    "Swimming",
  ]);

  const [selectedHobby, setSelectedHobby] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hobbyInput, setHobbyInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  // Open modal for adding/editing
  const handleOpenModal = (index = null) => {
    setEditIndex(index);
    setHobbyInput(index !== null ? hobbies[index] : "");
    setIsModalOpen(true);
  };

  // Add or edit hobby
  const handleSaveHobby = () => {
    if (hobbyInput.trim()) {
      if (editIndex !== null) {
        const updatedHobbies = [...hobbies];
        updatedHobbies[editIndex] = hobbyInput;
        setHobbies(updatedHobbies);
      } else {
        setHobbies([...hobbies, hobbyInput]);
      }
    }
    setHobbyInput("");
    setEditIndex(null);
    setIsModalOpen(false);
  };

  // Delete hobby
  const handleDeleteHobby = (index) => {
    setHobbies(hobbies.filter((_, i) => i !== index));
  };

  return (
    <div>
      <section className="min-h-[80vh] py-12 flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-10 lg:px-28 mt-6 md:mt-12 bg-gradient-to-r">
        <div className="relative w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
          <div className="relative w-[280px] xs:w-[320px] sm:w-[400px] md:w-[350px] lg:w-[450px] xl:w-[500px] aspect-square flex items-center justify-center">
            <img
              src={about || "/placeholder.svg?height=600&width=600"}
              alt="Web Developer"
              className="w-[105%] h-[105%] object-cover rounded-full border-4 border-white shadow-lg"
            />
            <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 bg-white p-3 sm:p-4 md:p-5 lg:p-6 rounded-xl shadow-lg z-10">
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900">
                Web Designer
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-teal-600 font-bold">
                180+ Project Complete
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 max-w-lg">
          <h4 className="text-black text-xl sm:text-md font-bold ">About Me</h4>
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-teal-700 leading-tight">
            I Am A Passionate Web Designer
          </h1>
          <p className="mt-4 text-gray-700 text-sm sm:text-base md:text-lg">
          I specialize in building responsive and interactive web interfaces using HTML, CSS, Bootstrap, Tailwind CSS, and React.js. With a strong foundation in JavaScript ES6, I create modern and efficient web applications.


          </p>

          <h3 className="text-sm sm:text-base md:text-lg font-bold text-teal-700 transition duration-300 mt-4 md:mt-6">
            Smart Work
          </h3>
          <p className="text-sm sm:text-base text-gray-700 transition duration-300">
          I develop dynamic UI components using React.js, ensuring seamless user interactions and a smooth experience.
          </p>

          <h3 className="text-sm sm:text-base md:text-lg font-bold text-teal-700 mt-3 md:mt-4">
            Modern Work
          </h3>
          <p className="text-sm sm:text-base text-gray-700 transition duration-300">
          I focus on optimizing website performance, enhancing load speeds, and improving overall user experience through efficient coding practices.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white flex justify-center px-4 py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 w-full max-w-[1200px]">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-100 text-center p-4 sm:p-6 md:p-8 lg:p-10 rounded-md shadow-sm border border-gray-200 hover:bg-[#0b4a4d] group transition duration-300"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-white">
                {stat.value}
              </h2>
              <p className="text-sm sm:text-base md:text-lg font-bold text-teal-600 group-hover:text-white">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Hobbies Section */}
      <section className="flex flex-col items-center p-6 mt-16 mb-12">
        <h2 className="text-xl font-bold text-gray-800">Hobbies</h2>
        <h3 className="text-2xl font-bold text-teal-600 mt-2 mb-3 text-center">
          Things I Love To Do
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-6 w-full max-w-[1200px]">
          {hobbies.map((hobby, index) => (
            <button
              key={index}
              onClick={() => setSelectedHobby(hobby)}
              className={`relative flex items-center justify-between px-4 py-2.5 w-full bg-gray-100 border rounded-md border-gray-300 font-bold text-sm sm:text-base
              ${
                selectedHobby === hobby
                  ? "bg-gradient-to-r from-teal-800 to-teal-600 text-white"
                  : "hover:bg-teal-900 text-teal-600 hover:text-white"
              } group`}
            >
              {hobby}
              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenModal(index);
                  }}
                  className="text-white cursor-pointer"
                >
                  <MdEdit size={16} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteHobby(index);
                  }}
                  className="text-white cursor-pointer"
                >
                  <MdDelete size={16} />
                </button>
              </div>
            </button>
          ))}

          {/* Add New Hobby Button */}
          <button
            onClick={() => handleOpenModal()}
            className="flex items-center justify-center px-4 py-3.5 w-full bg-gray-200 hover:bg-teal-900 hover:text-white border border-gray-300 rounded-md text-gray-600 font-bold transition duration-300"
          >
            <AiOutlinePlus size={20} className="mr-1" />
            Add Hobby
          </button>
        </div>
      </section>

      {/* Hobby Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-lg font-bold mb-3">
              {editIndex !== null ? "Edit Hobby" : "Add New Hobby"}
            </h3>
            <input
              type="text"
              value={hobbyInput}
              onChange={(e) => setHobbyInput(e.target.value)}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-teal-600"
              placeholder="Enter hobby..."
            />
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded-md mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveHobby}
                className="px-4 py-2 bg-teal-600 text-white rounded-md"
              >
                {editIndex !== null ? "Update" : "Add"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
