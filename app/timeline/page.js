import React from 'react';
import Navbar from '../../components/navbar.js';
import styles from '../../styles/Timeline.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
        <Navbar/>
        <main className={styles.main}>
        <div className={styles.boxWrapper}>
            <div className={styles.whiteBox}>
              <h2>Add our GCAL <a href="https://www.google.com/calendar" target="_blank">here</a></h2>
            </div>
            <div className={styles.greyBox}>
              <h2>Upcoming Events</h2>
                <div className={styles.whiteBoxMini}>
                  <p>This is the mini event 1 white box.</p>
                </div>

                <div className={styles.whiteBoxMini}>
                    <p>This is the mini event 2 white box.</p>
                </div>

                <div className={styles.whiteBoxMini}>
                    <p>This is the mini event 3 white box.</p>
                </div>
            </div>
          </div>
        </main>
    </div>
  );
}