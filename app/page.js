import React from 'react';
import Navbar from '../components/navbar.js';

export default function Home() {
  return (
    <div>
        <Navbar/>
        <main>
            <h1>Welcome to My Next.js Website</h1>
            <p>This is the home page.</p>
        </main>
    </div>
  );
}