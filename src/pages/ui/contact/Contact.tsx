import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-lg">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Contact Information Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Contact Information</h2>
          <div className="flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            <div>
              <p className="text-lg text-gray-700">
                123 Tech Street, Tech City, Techland
              </p>
              <p className="text-lg text-gray-700">info@techgadgets.com</p>
              <p className="text-lg text-gray-700">+1 (123) 456-7890</p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Send Us a Message</h2>
          <form className="grid grid-cols-1 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-semibold text-gray-800"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-lg font-semibold text-gray-800"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Your Message"
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>

        {/* Map Section */}
        <section>
          <h2 className="text-3xl font-semibold mb-4">Our Location</h2>
          <div className="bg-white rounded-md shadow-md overflow-hidden">
            {/* Replace with your map embed code or component */}
            <iframe
              title="TechGadgets Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.622110927425!2d-73.98280108459603!3d40.74881767932763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAwJzA3LjYiTiA3M8KwNDQnMjQuMiJX!5e0!3m2!1sen!2sus!4v1626302951040!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
