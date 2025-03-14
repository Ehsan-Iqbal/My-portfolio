import React from "react";

const ContactForm = () => {
  return (
    <section className="max-w-md mx-auto p-4 rounded-lg shadow-lg bg-white">
      <h1 className="font-bold text-3xl">Contact</h1>
      <h2 className="text-2xl font-bold text-teal-700 mb-4">Get In Touch</h2>
      <form>
        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-semibold">Name:</label>
          <input type="text" className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-teal-500" placeholder="Your Name" />
        </div>

        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-semibold">Message:</label>
          <textarea className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-teal-500" placeholder="Your Message" rows="2"></textarea>
        </div>

        <button type="submit" className="w-full bg-teal-700 text-white p-2 rounded-full hover:bg-teal-600">CONTACT US</button>
      </form>
    </section>
  );
};

export default ContactForm;
