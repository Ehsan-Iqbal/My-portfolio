import React from "react";

const ContactForm = () => {
  return (
    <section className="max-w-lg mx-auto mt-28 mb-12 p-6  rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold text-gray-800">Contact</h3>
      <h2 className="text-2xl md:text-3xl font-bold text-teal-700 mt-2">
        Get In Touch
      </h2>

      <form className="mt-6">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Name:
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Email:
          </label>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Message:
          </label>
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full text-white font-bold p-2 rounded-full bg-[#08242c] cursor-pointer hover:bg-teal-700"
        >
          CONTACT US
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
