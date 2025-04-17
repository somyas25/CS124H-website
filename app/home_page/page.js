import styles from '../../styles/HomePage.module.css';

export default function Page() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.overlay}>
          <h1 className={styles.title}>CS124Honors@Illinois</h1>
          <p className={styles.subtitle}>
            Illinois' premier freshman honors class run by students, for students
          </p>
          <div className={styles.buttonGroup}>
            <button className={styles.heroButton}>SYLLABUS</button>
            <button className={styles.heroButton}>INFO-VIDEO</button>
            <button className={styles.heroButton}>LECTURES</button>
          </div>
        </div>
      </div>

      <div className={styles.scrollSection}>
        <h2 className={styles.sectionTitle}>Hall of Fame</h2>
        <div className={styles.cardRow}>
          {Array(5).fill(0).map((_, i) => (
            <div key={i} className={styles.card}></div>
          ))}
        </div>

        <h2 className={styles.sectionTitle}>Meet The Staff</h2>
        <div className={styles.cardRow}>
          {Array(6).fill(0).map((_, i) => (
            <div key={i} className={styles.card}></div>
          ))}
        </div>
      </div>
    </div>
  );
}