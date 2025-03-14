import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ContactForm from "../Components/UI/ContactForm";
import Footer from "../Components/UI/Footer";
import { X } from "lucide-react";

const Contact = () => {
  const location = useLocation();
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Open form automatically if navigated from Navbar with "openForm: true"
  useEffect(() => {
    if (location.state?.openForm) {
      setIsFormVisible(true);
    }
  }, [location.state]);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow pt-20 relative">
        {/* Contact Form Popup */}
        {isFormVisible && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
              <button
                className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
                onClick={() => setIsFormVisible(false)}
              >
                <X size={24} />
              </button>
              <ContactForm />
            </div>
          </div>
        )}

        {/* Page Content */}
        <section className="container mx-auto px-6 md:px-16 mt-12 bg-white flex-grow">
          {/* Your Page Content Here */}
        </section>
      </div>

      {/* Footer */}
      <div className={`${isFormVisible ? "mt-10" : "mt-auto"}`}>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
