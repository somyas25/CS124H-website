import React from 'react';
import Navbar from '../../components/navbar.js';
import '../../styles/CourseStaff.css';

export default function Home() {
  return (
    <div className="main-content">
        <Navbar/>
        <main>
            <h1 className='title'>Welcome to Course Staff Page</h1>
            <div className='staff-card-container'>
              <div className='staff-card-box'>
                <div className='staff-image-box'></div>
                <p className="staff-card-text">Spongebob Squarepants</p>
              </div>
              <div className='staff-card-box'>
                <div className='staff-image-box'></div>
                <p className="staff-card-text">Spongebob Squarepants</p>
              </div>
              <div className='staff-card-box'>
                <div className='staff-image-box'></div>
                <p className="staff-card-text">Spongebob Squarepants</p>
              </div>
              <div className='staff-card-box'>
                <div className='staff-image-box'></div>
                <p className="staff-card-text">Spongebob Squarepants</p>
              </div>
            </div>
        </main>
    </div>
  );
}