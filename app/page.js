import React from 'react';
import Navbar from '../components/navbar.js';
import '../styles/global.css'
import '../styles/Homepage.css'


export default function Home() {
  return (
    <div>
        <Navbar/>
        <main className='main-container'>
            <h1 className='title'>CS124Honors@Illinois</h1>
            <p className='subtitle'>Illinois' premier freshman honors class run by students, for students.</p>
        </main>
    </div>
  );
}