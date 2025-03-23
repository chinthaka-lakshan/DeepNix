import React from 'react';
import './Members.css';
import Navbar from '../../Components/Navbar'; // Ensure correct import path
import image from '../../Assets/person.png'; // Ensure correct path
import logoImage from '../../Components/Logo/Logo'; // Watermark image path
import Logo from '../../Components/Logo/Logo';

const teamMembers = [
  { id: 1, name: 'M.J.C.D. Lakshan', role: 'Web Developer', description: 'Experienced in full-stack web development.' },
  { id: 2, name: 'Tharusha Ishan', role: 'UI/UX Designer', description: 'Passionate about creating user-friendly designs.' },
  { id: 3, name: 'Jane Smith', role: 'Project Manager', description: 'Expert in Agile development and team leadership.' },
  { id: 4, name: 'Alice Brown', role: 'Frontend Developer', description: 'Loves building modern, responsive UI.' },
  { id: 5, name: 'Bob Johnson', role: 'Backend Developer', description: 'Focuses on APIs and database management.' },
  { id: 6, name: 'Charlie Davis', role: 'QA Engineer', description: 'Ensures software meets high-quality standards.' },
  { id: 7, name: 'Emily Wilson', role: 'Cyber Security', description: 'Specialized in protecting web applications.' },
  { id: 8, name: 'David Lee', role: 'DevOps Engineer', description: 'Optimizing deployment and infrastructure.' },
  { id: 9, name: 'Sophia Martinez', role: 'Mobile Developer', description: 'Builds high-performance mobile apps.' },
  { id: 10, name: 'Alice Brown', role: 'Frontend Developer', description: 'Loves building modern, responsive UI.' },
  { id: 11, name: 'Bob Johnson', role: 'Backend Developer', description: 'Focuses on APIs and database management.' },
  { id: 12, name: 'Charlie Davis', role: 'QA Engineer', description: 'Ensures software meets high-quality standards.' },
  { id: 13, name: 'Emily Wilson', role: 'Cyber Security', description: 'Specialized in protecting web applications.' },
  { id: 14, name: 'David Lee', role: 'DevOps Engineer', description: 'Optimizing deployment and infrastructure.' },
  { id: 15, name: 'Sophia Martinez', role: 'Mobile Developer', description: 'Builds high-performance mobile apps.' },
];

export default function Members() {
  return (
    <div className="members-container">
      {/* Navbar */}
      <Navbar />

      {/* Watermark Background */}
      <div className="watermark">
        <Logo/>
      </div>

      {/* Members Section */}
      <div className="members-grid">
        {teamMembers.map((member) => (
          <div key={member.id} className="member-card">
            <img src={image} alt={member.name} className="member-avatar" />
            <h3 className="member-name">{member.name}</h3>
            <p className="member-role"><strong>{member.role}</strong></p>
            <p className="member-description">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
