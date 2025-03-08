import { useState } from "react";
import { MdDelete } from "react-icons/md";
import react1 from "../assets/Images/react1.jpeg";
import react2 from "../assets/Images/react2.jpeg";
import react3 from "../assets/Images/react3.png";
import react4 from "../assets/Images/react4.jpeg";
import react5 from "../assets/Images/react5.png";
import react6 from "../assets/Images/react6.jpeg";

const Work = () => {
  const [portfolioImages, setPortfolioImages] = useState([
    react1,
    react2,
    react3,
    react4,
    react5,
    react6, 
  ]);

  const [isGridHovered, setIsGridHovered] = useState(false);

  // Image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPortfolioImages((prevImages) => {
        const updatedImages = [...prevImages];
        const react6Index = updatedImages.indexOf(react6);
        updatedImages.splice(react6Index, 0, imageUrl); 
        return updatedImages;
      });
    }
  };

  // Image delete
  const handleDeleteImage = (indexToDelete) => {
    setPortfolioImages((prevImages) =>
      prevImages.filter((_, index) => index !== indexToDelete)
    );
  };

  return (
    <section className="mt-12 px-6 md:px-16 py-16 bg-gray-50 text-center">
      <h3 className="text-xl font-bold text-black">Portfolio</h3>
      <h2 className="text-2xl md:text-4xl font-bold text-teal-700 mt-2">
        We Offer Great Affordable Premium Prices
      </h2>
      <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm md:text-base">
      Showcasing expertise in React.js with clean, responsive designs & high-performance web applications.
      </p>

      <div
        className="grid grid-cols-3 gap-6 mt-12 px-12"
        onMouseEnter={() => setIsGridHovered(true)}
        onMouseLeave={() => setIsGridHovered(false)}
      >
        {portfolioImages.map((image, index) => (
          <div key={index} className="relative group">
            {isGridHovered && image !== react6 && (
              <button
                onClick={() => handleDeleteImage(index)}
                className="absolute top-2 right-2 bg-red-600 cursor-pointer text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
              >
                <MdDelete size={20} />
              </button>
            )}

            {image === react6 ? (
              <label className="cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
                <img
                  src={image}
                  alt="Upload New Image"
                  className="w-full h-60 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                />
              </label>
            ) : (
              <img
                src={image}
                alt={`Portfolio ${index + 1}`}
                className="w-full h-60 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
