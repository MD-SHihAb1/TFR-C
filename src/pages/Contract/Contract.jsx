import React, { useState } from "react";

const Contract = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.name) {
      errors.name = "Name is required";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.message) {
      errors.message = "Message is required";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // Submit form logic here (e.g., sending data to an API)
      console.log("Form submitted successfully", formData);
      alert("Thank you for reaching out! We will get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>

      <p className="text-center mb-8 text-lg text-gray-700">
        Have any questions or need assistance? We're here to help. Reach out to
        us and we will get back to you as soon as possible.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block text-lg font-medium">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter your name"
          />
          {formErrors.name && (
            <p className="text-red-500 text-sm">{formErrors.name}</p>
          )}
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block text-lg font-medium">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter your email"
          />
          {formErrors.email && (
            <p className="text-red-500 text-sm">{formErrors.email}</p>
          )}
        </div>

        {/* Message Input */}
        <div>
          <label htmlFor="message" className="block text-lg font-medium">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            rows="4"
            placeholder="Enter your message"
          />
          {formErrors.message && (
            <p className="text-red-500 text-sm">{formErrors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </div>
      </form>

      {/* Address Section */}
      <div className="mt-10 text-center">
        <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
        <p className="text-lg">Visit us at our store or reach out to us online:</p>
        <p className="text-lg mt-2">
          <strong>Store Address:</strong> 123 E-Commerce Street, Shop 4B, City
          Center, City, Country
        </p>
        <p className="text-lg mt-2">
          <strong>Phone:</strong> +1 234 567 890
        </p>
        <p className="text-lg mt-2">
          <strong>Email:</strong> support@yourstore.com
        </p>
      </div>
    </div>
  );
};

export default Contract;
