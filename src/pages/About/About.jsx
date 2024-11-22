import React from "react";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">About Us</h1>
        <p className="text-lg text-gray-600">
          Welcome to our store! We are dedicated to providing top-quality
          products and exceptional service to our customers.
        </p>
      </div>

      {/* Mission Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-16">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img
            src="https://graphicsfamily.com/wp-content/uploads/edd/2022/11/Simple-E-commerce-Banner-Design-scaled.jpg"
            alt="Mission Image"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 pl-0 md:pl-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600 mb-4">
            Our mission is simple: to offer the best products with the best
            service. We are committed to ensuring that every customer enjoys a
            seamless shopping experience, from browsing to checkout.
          </p>
          <p className="text-lg text-gray-600">
            Whether you're looking for the latest fashion trends, home
            appliances, or gifts, we have something for everyone!
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <div className="bg-blue-500 text-white p-6 rounded-full mb-4">
              <i className="fas fa-heart fa-3x"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Customer Satisfaction</h3>
            <p className="text-lg text-gray-600">
              We believe in putting customers first, providing them with top-notch
              service and making sure they are happy with their purchases.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-green-500 text-white p-6 rounded-full mb-4">
              <i className="fas fa-truck fa-3x"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast Delivery</h3>
            <p className="text-lg text-gray-600">
              We understand the importance of quick delivery, which is why we work
              tirelessly to get your orders to you as soon as possible.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-yellow-500 text-white p-6 rounded-full mb-4">
              <i className="fas fa-sync fa-3x"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Easy Returns</h3>
            <p className="text-lg text-gray-600">
              If you're not satisfied with your purchase, we make the return process
              simple and hassle-free. Your satisfaction is our priority.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <img
              src="data:image/jpeg;base64,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"
              alt="Team Member"
              className="rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">John Doe</h3>
            <p className="text-lg text-gray-600">Founder & CEO</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU5H4jCmhH0BOHclWDTve-sPALU046j182Mg&s"
              alt="Team Member"
              className="rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Jane Smith</h3>
            <p className="text-lg text-gray-600">Marketing Manager</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6xAqy_L2HwwIE_rx1VNbr2wBeVUrl07bwqg&s"
              alt="Team Member"
              className="rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Alex Johnson</h3>
            <p className="text-lg text-gray-600">Customer Support Lead</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Get In Touch</h2>
        <p className="text-lg text-gray-600 mb-4">
          Have any questions or need support? Feel free to contact us anytime!
        </p>
        <p className="text-lg text-blue-500">
          Email: <a href="mailto:support@store.com">support@store.com</a>
        </p>
        <p className="text-lg text-blue-500">
          Phone: <a href="tel:+1234567890">+1 234 567 890</a>
        </p>
      </div>
    </div>
  );
};

export default About;
