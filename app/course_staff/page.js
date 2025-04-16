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


export default function Home() {
  return (
    <div className="main-content">
        <Navbar/>
        <main>
            <h1 className='title'>Welcome to Course Staff Page</h1>
            <div className='staff-card-container'>
              {staffMembers.map((member) => (
                <div className='staff-card-box' key={member.id}>
                  <div className='staff-image-box'>
                    <img src={member.image} alt={member.name} />
                  </div>
                  <p className="staff-card-text">{member.name}</p>
                </div>
              ))}
            </div>
        </main>
    </div>
  );
}