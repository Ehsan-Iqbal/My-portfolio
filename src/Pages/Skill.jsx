import { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import skill from "../assets/images/christopher-gower-m_HRfLhgABo-unsplash.jpg";
import { defaultSkills } from "../Components/utills/const"; 

const Skills = () => {
  const [skills, setSkills] = useState(defaultSkills); 

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");
  const [currentSkill, setCurrentSkill] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleOpenModal = (mode, skill = "", index = null) => {
    setIsModalOpen(true);
    setModalMode(mode);
    setCurrentSkill(skill);
    setEditIndex(index);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentSkill("");
    setEditIndex(null);
  };

  const handleAddSkill = () => {
    if (currentSkill.trim() !== "") {
      setSkills([...skills, currentSkill.trim()]);
      handleCloseModal();
    }
  };

  const handleEditSkill = () => {
    if (currentSkill.trim() !== "" && editIndex !== null) {
      setSkills((prevSkills) =>
        prevSkills.map((skill, index) =>
          index === editIndex ? currentSkill.trim() : skill
        )
      );
      handleCloseModal();
    }
  };

  const handleDeleteSkill = (indexToDelete) => {
    setSkills((prevSkills) =>
      prevSkills.filter((_, index) => index !== indexToDelete)
    );
  };

  return (
    <section className="flex flex-wrap items-center justify-center md:justify-between px-6 md:px-28 py-10 mt-20 bg-gray-50">
      {/* Skills Section */}
      <div className="w-full md:w-5/12 space-y-4 text-center md:text-left">
        <h3 className="text-xl font-bold text-gray-700 mb-0">My Skills</h3>
        <h2 className="text-xl md:text-3xl font-bold text-teal-700">
          I Am Expert In
        </h2>
        <p className="text-gray-600 tracking-wide">
          I specialize in React.js, JavaScript, and Tailwind CSS, building
          responsive and interactive web applications.
        </p>

        {/* Skills List */}
        <div className="flex flex-wrap gap-[29px] gap-y-5 mt-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative flex items-center justify-center 
                w-20 h-20 sm:w-24 sm:h-24 
                bg-gradient-to-b from-teal-700 to-teal-900 text-white text-lg font-semibold rounded-full 
                shadow-lg border-8 border-gray-300 hover:border-gray-400 group"
            >
              {skill}
              {/* Edit & Delete Buttons on Hover */}
              <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  className="bg-yellow-500 text-white p-1 rounded-full cursor-pointer"
                  onClick={() => handleOpenModal("edit", skill, index)}
                >
                  <MdEdit size={14} />
                </button>
                <button
                  className="bg-red-600 text-white p-1 rounded-full cursor-pointer"
                  onClick={() => handleDeleteSkill(index)}
                >
                  <MdDelete size={14} />
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-7/12 flex justify-end mt-8 md:mt-0 px-4">
        <div className="relative w-full h-auto max-w-full md:max-w-[35vw] max-h-[100vh] rounded-lg overflow-hidden">
          <img
            src={skill}
            alt="Profile"
            className="w-[550px] h-[470px] object-cover rounded-full p-4"
          />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
            <h2 className="text-lg font-bold text-gray-700 mb-4">
              {modalMode === "add" ? "Add Skill" : "Edit Skill"}
            </h2>
            <input
              type="text"
              value={currentSkill}
              onChange={(e) => setCurrentSkill(e.target.value)}
              placeholder="Enter skill"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <div className="flex justify-between mt-4">
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
              >
                Cancel
              </button>
              {modalMode === "add" ? (
                <button
                  onClick={handleAddSkill}
                  className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700"
                >
                  Add
                </button>
              ) : (
                <button
                  onClick={handleEditSkill}
                  className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                >
                  Update
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Skills;
