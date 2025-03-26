import React from "react";
import "./Members.css";
import Navbar from "../../Components/Navbar/Navbar"; // Ensure correct import path
import Logo from "../../Components/Logo/Logo";

// Import member images
import member1Image from "../../Assets/harith.jpeg";
import member2Image from "../../Assets/lakshan.jpeg";
import member3Image from "../../Assets/hasitha.jpeg";
import member4mage from "../../Assets/dewaka.jpeg";
import member5mage from "../../Assets/sheru.jpeg";
import member6mage from "../../Assets/tharushi.jpeg";
import member7mage from "../../Assets/tharusha.jpeg";
import member8mage from "../../Assets/rashen.jpeg";
import member9mage from "../../Assets/sachiya.jpeg";
import member10mage from "../../Assets/piyumal.jpeg";

const teamMembers = [
  {
    id: 1,
    name: "Harith D Rajapaksha",
    // role: "Software Engineer",
    // description: "Expert in web development and UI/UX design.",
    image: member1Image, // Unique image for this member
  },
  {
    id: 2,
    name: "M J C D Lakshan",
    // role: "Backend Developer",
    // description: "Specialist in backend development and databases.",
    image: member2Image, // Unique image for this member
  },
  {
    id: 3,
    name: "Hasitha Wijewardana",
    // role: "Backend Developer",
    // description: "Specialist in backend development and databases.",
    image: member3Image, // Unique image for this member
  },
  {
    id: 10,
    name: "Piyumal Wijesinghe",
    // role: "Backend Developer",
    // description: "Specialist in backend development and databases.",
    image: member10mage, // Unique image for this member
  },
  {
    id: 5,
    name: "Ayodya Senavirathne",
    // role: "Backend Developer",
    // description: "Specialist in backend development and databases.",
    image: member5mage, // Unique image for this member
  },
  {
    id: 4,
    name: "Dewaka Pasindu",
    // role: "Backend Developer",
    // description: "Specialist in backend development and databases.",
    image: member4mage, // Unique image for this member
  },
  {
    id: 6,
    name: "Tharushi Senavirathne",
    // role: "Backend Developer",
    // description: "Specialist in backend development and databases.",
    image: member6mage, // Unique image for this member
  },
  {
    id: 7,
    name: "Tharusha Ishan",
    // role: "Backend Developer",
    // description: "Specialist in backend development and databases.",
    image: member7mage, // Unique image for this member
  },
  {
    id: 8,
    name: "Sachintha Rashen",
    // role: "Backend Developer",
    // description: "Specialist in backend development and databases.",
    image: member8mage, // Unique image for this member
  },
  {
    id: 9,
    name: "Sachintha Jayaweera",
    // role: "Backend Developer",
    // description: "Specialist in backend development and databases.",
    image: member9mage, // Unique image for this member
  },
];

export default function Members() {
  return (
    <div className="members-container">
      {/* Navbar */}
      <Navbar />

      {/* Watermark Background */}
      <div className="watermark">
        <Logo />
      </div>

      {/* Members Section */}
      <div className="members-grid">
        {teamMembers.map((member) => (
          <div key={member.id} className="member-card">
            <img src={member.image} alt={member.name} className="member-avatar" />
            <h3 className="member-name">{member.name}</h3>
            <p className="member-role">
              <strong>{member.role}</strong>
            </p>
            <p className="member-description">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
