import React, { useState } from "react";
import "./Contact_us.css";
import Navbar from "../../Components/Navbar";
import Logo from "../../Components/Logo/Logo";
import { Facebook, YouTube, WhatsApp } from "@mui/icons-material";
import TikTokIcon from "@mui/icons-material/MusicNote"; // TikTok alternative icon

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  // ✅ Fix: Update formData when input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", phone: "", email: "", message: "" }); // Reset form after submission
      } else {
        alert("Error: " + data.error);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="watermark1">
        <Logo />
      </div>
      <div className="contact-container">
        <div className="contact-box">
          <h2>
            Contact <span className="highlight">Us</span>
          </h2>
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
              required
            ></textarea>
            <div className="sub">
              <button type="submit">Submit</button>
            </div>
          </form>

          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook />
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
              <TikTokIcon />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <YouTube />
            </a>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
              <WhatsApp />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
