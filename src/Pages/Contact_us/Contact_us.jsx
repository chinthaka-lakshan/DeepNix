import React, { useState } from "react";
import "./Contact_us.css";
import Navbar from "../../Components/Navbar/Navbar";
import Logo from "../../Components/Logo/Logo";
import { Facebook, YouTube, WhatsApp } from "@mui/icons-material";
import TikTokIcon from "@mui/icons-material/MusicNote"; // TikTok does not have an official MUI icon, using MusicNote as an alternative

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      alert("Please fill in the required fields: Name and Email.");
      return;
    }

    console.log("Form Submitted:", formData);
    alert("Your message has been sent!");

    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <Navbar />
      <div className="watermark1">
        <Logo />
      </div>
      <div className="contact-container">
        <div className="contact-box">
          <h2>Contact <span className="highlight">Us</span></h2>
          <p>Get in touch with us! Fill out the form, and we'll reach out to you soon.</p>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="input-row">
              <input 
                type="text" 
                name="name" 
                placeholder="Enter Your Name" 
                value={formData.name} 
                onChange={handleChange} 
                required
              />
              <input 
                type="tel" 
                name="phone" 
                placeholder="Phone Number" 
                value={formData.phone} 
                onChange={handleChange} 
              />
            </div>

            <input 
              type="email" 
              name="email" 
              placeholder="E-mail" 
              value={formData.email} 
              onChange={handleChange} 
              required
            />

            <textarea 
              name="message" 
              placeholder="Message..." 
              value={formData.message} 
              onChange={handleChange}
            ></textarea>
            <div className="sub">
              <button type="submit">Submit</button>
            </div>
          </form>

          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><Facebook /></a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer"><TikTokIcon /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><YouTube /></a>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer"><WhatsApp /></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
