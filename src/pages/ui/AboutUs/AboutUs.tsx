import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold mb-4">
            Welcome to TechGadgets
          </h1>
          <p className="text-lg">
            Discover innovative technology solutions that enhance your everyday
            life.
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Our Story Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
          <p className="text-lg text-gray-700">
            TechGadgets began in a small garage with a vision to revolutionize
            how people interact with technology. What started as a passion
            project among friends has grown into a trusted brand known for
            innovation and reliability.
          </p>
        </section>

        {/* Our Mission and Values Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">
            Our Mission and Values
          </h2>
          <p className="text-lg text-gray-700">
            At TechGadgets, our mission is to empower individuals through
            technology that simplifies and enriches their lives. We uphold
            values of integrity, creativity, and customer-centricity in
            everything we do.
          </p>
        </section>

        {/* Meet the Team Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Team Member Card Example */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">John Doe</h3>
              <p className="text-gray-700 mb-4">Co-Founder & CEO</p>
              <p className="text-gray-600">
                John is passionate about technology and leads our team with
                vision and dedication.
              </p>
            </div>

            {/* Add more team members here */}
          </div>
        </section>

        {/* Customer Commitment Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Customer Commitment</h2>
          <p className="text-lg text-gray-700">
            At TechGadgets, our customers are at the heart of everything we do.
            We strive to exceed your expectations with every interaction,
            offering responsive support and hassle-free returns to ensure your
            satisfaction.
          </p>
        </section>

        {/* Contact Us Section */}
        <section>
          <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
          <div className="flex items-center space-x-4">
            <p className="text-lg text-gray-700">
              Have questions or feedback? Reach out to us:
            </p>
            <a
              href="mailto:info@techgadgets.com"
              className="text-blue-500 hover:underline"
            >
              info@techgadgets.com
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
