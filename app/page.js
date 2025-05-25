import React from "react";
import "../styles/global.css";
import "../styles/Homepage.css";
import dynamic from "next/dynamic";

import NavbarWrapper from "../components/navbarWrapper";

export default function Home() {
  return (
    <div>
      <NavbarWrapper />
      <main className="main-container">
        <h1 className="title">CS124Honors@Illinois</h1>
        <p className="subtitle">
          Illinois' premier freshman honors class run by students, for students.
        </p>
      </main>
    </div>
  );
}
