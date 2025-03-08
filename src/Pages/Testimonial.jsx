import React from "react";
import ContactForm from "../Components/UI/ContactForm";
import Footer from "../Components/UI/Footer";

const Testimonial = () => {
  return (
    <div className="min-h-screen bg-gray-100">
     
      <section className="container mx-auto px-6 md:px-16 mt-12 bg-white">
        <ContactForm />
      </section>

      <Footer />
    </div>
  );
};

export default Testimonial;
