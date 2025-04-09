import React from 'react';
import Navbar from '../../components/navbar.js';
import '../../styles/CourseStaff.css';

export default function Home() {
  return (
    <div className="main-content">
        <Navbar/>
        <main>
            <h1>Welcome to Course Staff Page</h1>
            <p>This is a dummy page.</p>
            <p>This is a dummy page.</p>

        </main>
    </div>
  );
}