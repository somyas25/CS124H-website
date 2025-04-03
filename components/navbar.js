import React from 'react';
import Link from 'next/link'; 
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
          <div className={styles["nav-items"]}>
          <Link href="/hall_of_fame">
              <button className={styles["nav-button"]}>Hall Of Fame</button>
            </Link>
            <Link href="/course_staff">
              <button className={styles["nav-button"]}>Course Staff</button>
            </Link>
            <Link href="/leaderboard">
              <button className={styles["nav-button"]}>Leaderboard</button>
            </Link>
            <Link href="/timeline">
              <button className={styles["nav-button"]}>Timeline</button>
            </Link>
            <Link href="/">
              <button className={styles["home-button"]}>Home</button>
            </Link>
          </div>
        </nav>
      );
};

export default Navbar;
