import React, { useState } from "react";
import "../App.css";
import Header from '../components/Header';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      alert("Message Sent!");
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } else {
      alert("Please fill out all fields correctly.");
    }
  };

  return (
    <div className="contact-container">
       <Header />  {/* Add Header component at the top */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Contact Me</h2>
        <p>
        Thank you for visiting my page! If you have any questions, inquiries, or would like to connect, 
        please feel free to reach out. You can fill out the form below with your name, email, and message. 
        Looking forward to connecting!</p>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          pattern="^[a-zA-Z\s]+$"
          title="Name should only contain letters and spaces."
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          title="Enter a valid email address."
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          minLength="10"
          title="Message should be at least 10 characters long."
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
