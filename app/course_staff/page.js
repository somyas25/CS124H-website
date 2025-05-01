'use client';

import React, { useState } from 'react';
import Navbar from '../../components/navbar.js';
import '../../styles/CourseStaff.css';
import spongebobImg from '../../public/spongebob.jpg';

const staffMembers = [
  {
    id: 1,
    name: "Spongebob Squarepants",
    role: "Senior Developer",
    image: "/images/spongebob.jpg",
    bio: "He's a SPONGE."
  },
  {
    id: 2,
    name: "Patrick Star",
    role: "UX Designer",
    image: "/images/patrick.jpg",
    bio: "He's the star of the team!"
  },
  {
    id: 3,
    name: "Squidward Tentacles",
    role: "Product Manager",
    image: "/images/squidward.jpg",
    bio: "Nothing can escape his grasp."
  },
  {
    id: 4,
    name: "Eugene Krabs",
    role: "Backend Engineer",
    image: "/images/krabs.jpg",
    bio: "Don't anger him, else he will pinch you!"
  }
];

export default function CourseStaff() {
  const [selectedMember, setSelectedMember] = useState(null);

  const openModal = (member) => setSelectedMember(member);
  const closeModal = () => setSelectedMember(null);

const staffMembers = [
  {
    id: 1,
    name: "Spongebob Squarepants",
    role: "Senior Developer",
    image: "/images/spongebob.jpg",
    year: "Senior",
    major: "CS+Marine",
    semesters: "4",
    bio: "He's a SPONGE."
  },
  {
    id: 2,
    name: "Patrick Star",
    role: "UX Designer",
    image: "/images/patrick.jpg",
    year: "Sophomore",
    major: "Information Sciences",
    semesters: "2",
    bio: "He's the star of the team!"
  },
  {
    id: 3,
    name: "Squidward Tentacles",
    role: "Product Manager",
    image: "/images/squidward.jpg",
    year: "Junior",
    major: "Business",
    semesters: "3",
    bio: "Nothing can escape his grasp."
  },
  {
    id: 4,
    name: "Eugene Krabs",
    role: "Backend Engineer",
    image: "/images/krabs.jpg",
    year: "Junior",
    major: "CS+Statistics",
    semesters: "2",
    bio: "Don't anger him, else he will pinch you!"
  },
  {
    id: 5,
    name: "Sandy Cheeks",
    role: "UX Designer",
    image: "/images/sandy.jpg",
    year: "Junior",
    major: "CS+Philosophy",
    semesters: "2",
    bio: "Flowers!"
  }
];

export default function Home() {
  const [selectedMember, setSelectedMember] = useState(null);

  const openModal = (member) => setSelectedMember(member);
  const closeModal = () => setSelectedMember(null);
  
  return (
    <div className="main-content">
        <Navbar/>
        <main>
            <h1 className={`title ${selectedMember ? 'opacity-20' : 'opacity-100'}`}>Our Staff</h1>
            <div className={`staff-card-container ${selectedMember ? 'opacity-20' : 'opacity-100'}`}>
              {staffMembers.map((member) => (
                <div className='staff-card-box' key={member.id} onClick={() => openModal(member.id)}>
                  <div className='staff-image-box'>
                    <img src={member.image} alt={member.name} />
                  </div>
                  <p className="staff-card-text">{member.name}</p>
                </div>
              ))}
            </div>

            {selectedMember && (
              <div className="popup" onClick={closeModal}>
                <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                  <span className="close" onClick={closeModal}>&times;</span>
                  {staffMembers
                    .filter((member) => member.id === selectedMember)
                    .map((member) => (
                      <React.Fragment key={member.id}>
                        <div className="image-popup">
                          <img src={member.image} alt={member.name} />
                        </div>
                        <div className="text-content">
                          <h2>{member.name}</h2>
                          <p className="role">{member.role}</p>

                          <div className="label">Year:</div>
                          <div>{member.year || 'N/A'}</div>

                          <div className="label">Major:</div>
                          <div>{member.major || 'N/A'}</div>

                          <div className="label">Semesters as PM:</div>
                          <div>{member.semesters || 'N/A'}</div>

                          <div className="bio">{member.bio}</div>
                        </div>
                      </React.Fragment>
                    ))}
                </div>
              </div>
            )}
        </main>
    </div>
  );
}